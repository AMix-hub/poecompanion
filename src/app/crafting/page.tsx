"use client";

import { useState, useCallback } from "react";
import { craftableBases, craftingOrbs, craftingBenchMods } from "@/data/crafting";
import type { CraftedItem, CraftableBase, Affix, CraftingOrb } from "@/types";

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomAffixes(pool: Affix[], type: "prefix" | "suffix", count: number): Affix[] {
  const eligible = pool.filter((a) => a.type === type);
  const shuffled = [...eligible].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function generateMagicName(prefixes: Affix[], suffixes: Affix[], base: string): string {
  const prefix = prefixes[0]?.name ?? "";
  const suffix = suffixes[0]?.name ?? "";
  if (prefix && suffix) return `${prefix} ${base} ${suffix}`;
  if (prefix) return `${prefix} ${base}`;
  if (suffix) return `${base} ${suffix}`;
  return base;
}

const rarityBorder: Record<string, string> = {
  normal: "border-stone-500",
  magic: "border-blue-500",
  rare: "border-yellow-500",
};

const rarityHeader: Record<string, string> = {
  normal: "bg-stone-800 text-stone-300",
  magic: "bg-blue-900/60 text-blue-300",
  rare: "bg-yellow-900/60 text-yellow-300",
};

export default function CraftingPage() {
  const [selectedBase, setSelectedBase] = useState<CraftableBase>(craftableBases[0]);
  const [craftedItem, setCraftedItem] = useState<CraftedItem>({
    base: craftableBases[0],
    rarity: "normal",
    name: craftableBases[0].name,
    prefixes: [],
    suffixes: [],
  });
  const [log, setLog] = useState<string[]>([]);
  const [activeBenchMod, setActiveBenchMod] = useState<Affix | null>(null);

  const addLog = useCallback(
    (msg: string) => setLog((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev.slice(0, 19)]),
    []
  );

  const selectBase = (base: CraftableBase) => {
    setSelectedBase(base);
    setCraftedItem({
      base,
      rarity: "normal",
      name: base.name,
      prefixes: [],
      suffixes: [],
      craftedMod: undefined,
    });
    setActiveBenchMod(null);
    addLog(`Selected base: ${base.name}`);
  };

  const applyOrb = (orb: CraftingOrb) => {
    const pool = selectedBase.affixPool;

    setCraftedItem((prev) => {
      let next = { ...prev };

      switch (orb) {
        case "Orb of Scouring":
          next = { ...next, rarity: "normal", prefixes: [], suffixes: [], name: prev.base.name, craftedMod: undefined };
          addLog("Orb of Scouring: item returned to Normal.");
          break;

        case "Orb of Transmutation":
          if (prev.rarity !== "normal") {
            addLog("Cannot use Orb of Transmutation on non-Normal item.");
            return prev;
          }
          {
            const pCount = Math.random() > 0.5 ? 1 : 1;
            const sCount = Math.random() > 0.5 ? 1 : 0;
            const newP = randomAffixes(pool, "prefix", pCount);
            const newS = randomAffixes(pool, "suffix", sCount);
            next = { ...next, rarity: "magic", prefixes: newP, suffixes: newS, name: generateMagicName(newP, newS, prev.base.name) };
            addLog(`Orb of Transmutation: Normal → Magic (${newP.length + newS.length} mods).`);
          }
          break;

        case "Orb of Alteration":
          if (prev.rarity !== "magic") {
            addLog("Cannot use Orb of Alteration on non-Magic item.");
            return prev;
          }
          {
            const newP = randomAffixes(pool, "prefix", 1);
            const newS = Math.random() > 0.4 ? randomAffixes(pool, "suffix", 1) : [];
            next = { ...next, prefixes: newP, suffixes: newS, name: generateMagicName(newP, newS, prev.base.name), craftedMod: undefined };
            addLog(`Orb of Alteration: Magic mods rerolled.`);
          }
          break;

        case "Orb of Augmentation":
          if (prev.rarity !== "magic") {
            addLog("Cannot use Orb of Augmentation on non-Magic item.");
            return prev;
          }
          if (prev.prefixes.length + prev.suffixes.length >= 2) {
            addLog("Orb of Augmentation: item already has 2 mods.");
            return prev;
          }
          {
            const hasPfx = prev.prefixes.length > 0;
            const hasSfx = prev.suffixes.length > 0;
            if (!hasPfx) {
              const [newMod] = randomAffixes(pool, "prefix", 1);
              next = { ...next, prefixes: newMod ? [newMod] : prev.prefixes };
            } else if (!hasSfx) {
              const [newMod] = randomAffixes(pool, "suffix", 1);
              next = { ...next, suffixes: newMod ? [newMod] : prev.suffixes };
            }
            addLog("Orb of Augmentation: added one modifier.");
          }
          break;

        case "Orb of Regal":
          if (prev.rarity !== "magic") {
            addLog("Cannot use Orb of Regal on non-Magic item.");
            return prev;
          }
          {
            const [extraMod] = randomAffixes(pool, Math.random() > 0.5 ? "prefix" : "suffix", 1);
            const newName = `${prev.base.name} (Rare)`;
            if (extraMod?.type === "prefix") {
              next = { ...next, rarity: "rare", prefixes: [...prev.prefixes, extraMod].slice(0, 3), name: newName };
            } else if (extraMod) {
              next = { ...next, rarity: "rare", suffixes: [...prev.suffixes, extraMod].slice(0, 3), name: newName };
            } else {
              next = { ...next, rarity: "rare", name: newName };
            }
            addLog("Orb of Regal: Magic → Rare. Added one modifier.");
          }
          break;

        case "Orb of Alchemy":
          if (prev.rarity !== "normal") {
            addLog("Cannot use Orb of Alchemy on non-Normal item.");
            return prev;
          }
          {
            const pfxCount = 1 + Math.floor(Math.random() * 3); // 1–3
            const sfxCount = 1 + Math.floor(Math.random() * 3); // 1–3
            const newP = randomAffixes(pool, "prefix", pfxCount);
            const newS = randomAffixes(pool, "suffix", sfxCount);
            next = { ...next, rarity: "rare", prefixes: newP, suffixes: newS, name: `${prev.base.name} (Rare)` };
            addLog(`Orb of Alchemy: Normal → Rare (${newP.length + newS.length} mods).`);
          }
          break;

        case "Chaos Orb":
          if (prev.rarity !== "rare") {
            addLog("Cannot use Chaos Orb on non-Rare item.");
            return prev;
          }
          {
            const pfxCount = 1 + Math.floor(Math.random() * 3);
            const sfxCount = 1 + Math.floor(Math.random() * 3);
            const newP = randomAffixes(pool, "prefix", pfxCount);
            const newS = randomAffixes(pool, "suffix", sfxCount);
            next = { ...next, prefixes: newP, suffixes: newS, craftedMod: undefined };
            addLog(`Chaos Orb: Rare rerolled (${newP.length + newS.length} new mods).`);
          }
          break;

        case "Exalted Orb":
          if (prev.rarity !== "rare") {
            addLog("Cannot use Exalted Orb on non-Rare item.");
            return prev;
          }
          if (prev.prefixes.length + prev.suffixes.length >= 6) {
            addLog("Exalted Orb: item is already full (6 mods).");
            return prev;
          }
          {
            const canAddPfx = prev.prefixes.length < 3;
            const canAddSfx = prev.suffixes.length < 3;
            const addType =
              canAddPfx && canAddSfx
                ? Math.random() > 0.5 ? "prefix" : "suffix"
                : canAddPfx ? "prefix" : "suffix";
            const [newMod] = randomAffixes(pool, addType, 1);
            if (newMod) {
              if (addType === "prefix") {
                next = { ...next, prefixes: [...prev.prefixes, newMod] };
              } else {
                next = { ...next, suffixes: [...prev.suffixes, newMod] };
              }
              addLog(`Exalted Orb: added ${newMod.stat}`);
            }
          }
          break;

        case "Orb of Annulment":
          if (prev.rarity === "normal") {
            addLog("Cannot annul a Normal item.");
            return prev;
          }
          {
            const allMods = [...prev.prefixes, ...prev.suffixes];
            if (allMods.length === 0) {
              addLog("Orb of Annulment: no mods to remove.");
              return prev;
            }
            const removed = pickRandom(allMods);
            const newPfx = prev.prefixes.filter((m) => m.id !== removed.id);
            const newSfx = prev.suffixes.filter((m) => m.id !== removed.id);
            next = { ...next, prefixes: newPfx, suffixes: newSfx };
            addLog(`Orb of Annulment: removed "${removed.stat}"`);
          }
          break;

        case "Blessed Orb":
          addLog("Blessed Orb: implicit modifier rerolled (no change in simulator).");
          break;
      }

      return next;
    });
  };

  const applyBenchMod = (mod: Affix) => {
    if (craftedItem.rarity === "normal") {
      addLog("Cannot add bench crafted mods to a Normal item.");
      return;
    }
    if (craftedItem.craftedMod) {
      addLog("Remove the current crafted mod first.");
      return;
    }
    const maxMods = 6;
    if (craftedItem.prefixes.length + craftedItem.suffixes.length >= maxMods) {
      addLog("Item is full (6 mods). Cannot add bench mod.");
      return;
    }
    setCraftedItem((prev) => ({ ...prev, craftedMod: mod }));
    setActiveBenchMod(mod);
    addLog(`Bench crafted: ${mod.stat}`);
  };

  const removeBenchMod = () => {
    setCraftedItem((prev) => ({ ...prev, craftedMod: undefined }));
    setActiveBenchMod(null);
    addLog("Removed bench crafted modifier.");
  };

  const totalMods =
    craftedItem.prefixes.length + craftedItem.suffixes.length + (craftedItem.craftedMod ? 1 : 0);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">🔨 Crafting Simulator</h1>
        <p className="text-stone-400">
          Experiment with Path of Exile&apos;s crafting system. Select a base item and apply
          currency orbs to see how modifiers are added, rerolled, and removed.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: base selector + orbs */}
        <div className="xl:col-span-1 space-y-4">
          {/* Base selector */}
          <div className="poe-card rounded-lg p-4">
            <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-3">
              1. Choose Base Item
            </h2>
            <div className="space-y-1">
              {craftableBases.map((base) => (
                <button
                  key={base.id}
                  onClick={() => selectBase(base)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    selectedBase.id === base.id
                      ? "bg-poe-gold/10 text-poe-gold border border-poe-gold/30"
                      : "text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-transparent"
                  }`}
                >
                  <span className="font-medium">{base.name}</span>
                  <span className="ml-2 text-xs text-stone-600">{base.type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Currency orbs */}
          <div className="poe-card rounded-lg p-4">
            <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-3">
              2. Apply Currency
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {craftingOrbs.map((orb) => (
                <button
                  key={orb.name}
                  onClick={() => applyOrb(orb.name)}
                  title={orb.description}
                  className={`p-2 rounded border text-xs font-medium transition-colors text-left ${
                    orb.color === "blue"
                      ? "border-blue-800 text-blue-300 hover:border-blue-500 hover:bg-blue-900/20"
                      : orb.color === "yellow"
                      ? "border-yellow-800 text-yellow-300 hover:border-yellow-500 hover:bg-yellow-900/20"
                      : orb.color === "red"
                      ? "border-red-800 text-red-300 hover:border-red-500 hover:bg-red-900/20"
                      : "border-stone-700 text-stone-400 hover:border-stone-500 hover:bg-stone-800"
                  } bg-black/20`}
                >
                  <div className="font-semibold leading-tight">{orb.name}</div>
                  <div className="text-[10px] text-stone-500 mt-0.5 leading-tight">
                    {orb.shortDescription}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Crafting bench */}
          <div className="poe-card rounded-lg p-4">
            <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-1">
              3. Crafting Bench
            </h2>
            <p className="text-xs text-stone-600 mb-3">
              Add one guaranteed modifier (replaces any existing crafted mod).
            </p>
            {craftedItem.craftedMod && (
              <div className="mb-3 p-2 rounded bg-poe-gold/10 border border-poe-gold/30 flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] text-poe-gold font-semibold uppercase">Active Crafted Mod</p>
                  <p className="text-xs text-stone-300 mt-0.5">{craftedItem.craftedMod.stat}</p>
                </div>
                <button
                  onClick={removeBenchMod}
                  className="text-[10px] text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            )}
            <div className="space-y-1">
              {craftingBenchMods.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => applyBenchMod(mod)}
                  className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors border ${
                    activeBenchMod?.id === mod.id
                      ? "border-poe-gold/40 bg-poe-gold/10 text-poe-gold"
                      : "border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                  }`}
                >
                  <span className="text-stone-500 mr-1">{mod.type === "prefix" ? "P" : "S"}</span>
                  {mod.stat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: item display + log */}
        <div className="xl:col-span-2 space-y-4">
          {/* Item display */}
          <div
            className={`poe-card rounded-lg overflow-hidden border-2 ${rarityBorder[craftedItem.rarity]}`}
          >
            {/* Item header */}
            <div className={`px-5 py-3 ${rarityHeader[craftedItem.rarity]} text-center`}>
              <h2 className="font-bold text-base">{craftedItem.name}</h2>
              <p className="text-xs opacity-70 capitalize">
                {craftedItem.rarity} · {craftedItem.base.type}
              </p>
            </div>

            <div className="p-5 space-y-4">
              {/* Implicit */}
              {craftedItem.base.implicitStat && (
                <div className="text-center border-b border-poe-border pb-4">
                  <p className="text-sm text-stone-300">{craftedItem.base.implicitStat}</p>
                  <p className="text-[10px] text-stone-600 mt-0.5">Implicit</p>
                </div>
              )}

              {/* Mods */}
              {craftedItem.prefixes.length === 0 &&
              craftedItem.suffixes.length === 0 &&
              !craftedItem.craftedMod ? (
                <p className="text-center text-stone-600 text-sm py-4">
                  No modifiers. Apply an orb to begin crafting.
                </p>
              ) : (
                <div className="space-y-3">
                  {/* Prefixes */}
                  {craftedItem.prefixes.length > 0 && (
                    <div>
                      <p className="text-[10px] text-stone-600 uppercase tracking-widest mb-1">
                        Prefixes ({craftedItem.prefixes.length}/3)
                      </p>
                      {craftedItem.prefixes.map((mod) => (
                        <p key={mod.id} className="text-sm text-stone-200 py-0.5">
                          {mod.stat}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Suffixes */}
                  {craftedItem.suffixes.length > 0 && (
                    <div>
                      <p className="text-[10px] text-stone-600 uppercase tracking-widest mb-1">
                        Suffixes ({craftedItem.suffixes.length}/3)
                      </p>
                      {craftedItem.suffixes.map((mod) => (
                        <p key={mod.id} className="text-sm text-stone-200 py-0.5">
                          {mod.stat}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Crafted mod */}
                  {craftedItem.craftedMod && (
                    <div className="border-t border-poe-border pt-3">
                      <p className="text-[10px] text-poe-gold uppercase tracking-widest mb-1">
                        Crafted
                      </p>
                      <p className="text-sm text-poe-gold">{craftedItem.craftedMod.stat}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Mod counter */}
              <div className="flex gap-1 justify-center pt-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-1.5 rounded-full ${
                      i < totalMods ? "bg-poe-gold" : "bg-stone-700"
                    }`}
                  />
                ))}
                <span className="text-xs text-stone-500 ml-1">{totalMods}/6 mods</span>
              </div>
            </div>
          </div>

          {/* Crafting log */}
          <div className="poe-card rounded-lg p-4">
            <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-3">
              Crafting Log
            </h2>
            {log.length === 0 ? (
              <p className="text-xs text-stone-600">No actions yet.</p>
            ) : (
              <ul className="space-y-1 max-h-48 overflow-y-auto">
                {log.map((entry, i) => (
                  <li
                    key={i}
                    className={`text-xs font-mono ${
                      i === 0 ? "text-stone-300" : "text-stone-600"
                    }`}
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Crafting tips */}
          <div className="poe-card rounded-lg p-4">
            <h2 className="text-sm font-bold text-stone-300 uppercase tracking-wide mb-3">
              💡 Crafting Tips
            </h2>
            <ul className="space-y-1.5">
              {[
                "Start with Orb of Alchemy on a high item-level base for fast Rare items.",
                "Use Chaos Orbs to reroll Rare items when targeting specific mod combinations.",
                "Exalted Orbs are best used on near-perfect items that are missing one mod.",
                "Use the Crafting Bench to guarantee one 'crafted' mod at the end.",
                "Orb of Annulment removes a random mod — use carefully on expensive items.",
                "Alt-Regal craft: spam Orb of Alteration on Magic items for the desired mods, then Regal.",
              ].map((tip, i) => (
                <li key={i} className="text-xs text-stone-400 flex gap-1.5">
                  <span className="text-poe-gold flex-shrink-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
