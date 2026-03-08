"use client";

import { useState, useMemo } from "react";
import { builds } from "@/data/builds";
import BuildCard from "@/components/BuildCard";
import type { Build } from "@/types";

type Difficulty = Build["difficulty"] | "all";

const difficultyOptions: { value: Difficulty; label: string }[] = [
  { value: "all", label: "All Difficulties" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
];

const ascendancies = [
  "All",
  "Slayer",
  "Berserker",
  "Chieftain",
  "Deadeye",
  "Raider",
  "Pathfinder",
  "Elementalist",
  "Necromancer",
  "Occultist",
  "Inquisitor",
  "Hierophant",
  "Guardian",
  "Assassin",
  "Saboteur",
  "Trickster",
];

export default function BuildsPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [ascendancy, setAscendancy] = useState("All");
  const [sortBy, setSortBy] = useState<"popularity" | "name">("popularity");

  const filtered = useMemo(() => {
    let result = builds.filter((b) => {
      if (difficulty !== "all" && b.difficulty !== difficulty) return false;
      if (ascendancy !== "All" && b.ascendancy !== ascendancy) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          b.name.toLowerCase().includes(q) ||
          b.mainSkill.toLowerCase().includes(q) ||
          b.characterClass.toLowerCase().includes(q) ||
          b.ascendancy.toLowerCase().includes(q) ||
          b.tags.some((t) => t.includes(q))
        );
      }
      return true;
    });

    if (sortBy === "popularity") {
      result = [...result].sort((a, b) => b.popularity - a.popularity);
    } else {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [search, difficulty, ascendancy, sortBy]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">🛡 Pro Builds</h1>
        <p className="text-stone-400 max-w-2xl">
          Curated builds from top players and community guides including maxroll.gg and
          poe.ninja. Filter by difficulty, ascendancy, or search by skill name.
        </p>
      </div>

      {/* Source badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["maxroll.gg", "poe.ninja", "Community"].map((src) => (
          <span
            key={src}
            className="text-xs px-3 py-1 rounded-full border border-poe-border text-stone-400"
          >
            📌 {src}
          </span>
        ))}
      </div>

      {/* Filters */}
      <div className="poe-card rounded-lg p-4 mb-6 space-y-4">
        {/* Search */}
        <div>
          <label htmlFor="build-search" className="sr-only">
            Search builds
          </label>
          <input
            id="build-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, skill, class, or tag…"
            className="w-full bg-stone-900 border border-poe-border rounded px-4 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-poe-gold transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Difficulty */}
          <div className="flex flex-wrap gap-2">
            {difficultyOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDifficulty(opt.value)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  difficulty === opt.value
                    ? "bg-poe-gold text-poe-dark"
                    : "bg-stone-800 text-stone-400 hover:text-poe-gold"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-stone-500">Sort:</span>
            {(["popularity", "name"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  sortBy === s
                    ? "bg-poe-gold text-poe-dark"
                    : "bg-stone-800 text-stone-400 hover:text-poe-gold"
                }`}
              >
                {s === "popularity" ? "🔥 Popular" : "A–Z"}
              </button>
            ))}
          </div>
        </div>

        {/* Ascendancy filter */}
        <div className="flex flex-wrap gap-2">
          {ascendancies.map((asc) => (
            <button
              key={asc}
              onClick={() => setAscendancy(asc)}
              className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                ascendancy === asc
                  ? "bg-poe-gold text-poe-dark"
                  : "bg-stone-800 text-stone-500 hover:text-stone-200"
              }`}
            >
              {asc}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm text-stone-500 mb-4">
        Showing {filtered.length} of {builds.length} builds
      </p>

      {/* Build grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-stone-600">
          <p className="text-2xl mb-2">🔍</p>
          <p>No builds found matching your filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setDifficulty("all");
              setAscendancy("All");
            }}
            className="mt-3 text-poe-gold hover:underline text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      )}
    </div>
  );
}
