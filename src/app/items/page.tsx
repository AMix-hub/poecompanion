"use client";

import { useState, useMemo } from "react";
import { items } from "@/data/items";
import ItemCard from "@/components/ItemCard";
import type { Item } from "@/types";

type Category = Item["category"] | "all";
type Rarity = Item["rarity"] | "all";

const categoryOptions: { value: Category; label: string; icon: string }[] = [
  { value: "all", label: "All", icon: "✦" },
  { value: "weapon", label: "Weapons", icon: "⚔" },
  { value: "armour", label: "Armour", icon: "🛡" },
  { value: "accessory", label: "Accessories", icon: "💍" },
  { value: "gem", label: "Gems", icon: "💎" },
  { value: "flask", label: "Flasks", icon: "⚗" },
  { value: "currency", label: "Currency", icon: "💰" },
];

const rarityOptions: { value: Rarity; label: string }[] = [
  { value: "all", label: "All Rarities" },
  { value: "normal", label: "Normal" },
  { value: "magic", label: "Magic" },
  { value: "rare", label: "Rare" },
  { value: "unique", label: "Unique" },
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [rarity, setRarity] = useState<Rarity>("all");

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (rarity !== "all" && item.rarity !== rarity) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.baseName.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q) ||
          item.tags.some((t) => t.includes(q))
        );
      }
      return true;
    });
  }, [search, category, rarity]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">⚔ Items Database</h1>
        <p className="text-stone-400">
          Browse {items.length} items — weapons, armour, accessories, gems, flasks, and currency.
          Filter and search to find what you need.
        </p>
      </div>

      {/* Filters */}
      <div className="poe-card rounded-lg p-4 mb-6 space-y-4">
        {/* Search */}
        <div>
          <label htmlFor="item-search" className="sr-only">
            Search items
          </label>
          <input
            id="item-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, type, or tag…"
            className="w-full bg-stone-900 border border-poe-border rounded px-4 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-poe-gold transition-colors"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setCategory(opt.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                category === opt.value
                  ? "bg-poe-gold text-poe-dark"
                  : "bg-stone-800 text-stone-400 hover:text-poe-gold hover:bg-stone-700"
              }`}
            >
              <span>{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>

        {/* Rarity filter */}
        <div className="flex flex-wrap gap-2">
          {rarityOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setRarity(opt.value)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                rarity === opt.value
                  ? "bg-poe-gold text-poe-dark"
                  : "bg-stone-800 text-stone-400 hover:text-poe-gold hover:bg-stone-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm text-stone-500 mb-4">
        Showing {filtered.length} of {items.length} items
        {search && (
          <>
            {" "}
            for <span className="text-poe-gold">&ldquo;{search}&rdquo;</span>
          </>
        )}
      </p>

      {/* Item grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-stone-600">
          <p className="text-2xl mb-2">🔍</p>
          <p>No items found matching your filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setRarity("all");
            }}
            className="mt-3 text-poe-gold hover:underline text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
