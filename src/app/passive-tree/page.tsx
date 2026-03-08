"use client";

import { useState, useMemo } from "react";
import {
  passiveTree,
  getAllKeystones,
  getAllNotables,
  getRegionByClass,
  searchPassives,
} from "@/data/passiveTree";
import type { PassiveNode, PassiveTreeRegion } from "@/types";

type ViewMode = "by-class" | "keystones" | "notables" | "search";

const classColors: Record<string, string> = {
  Marauder: "text-red-400 border-red-800 bg-red-900/20",
  Ranger: "text-green-400 border-green-800 bg-green-900/20",
  Witch: "text-purple-400 border-purple-800 bg-purple-900/20",
  Duelist: "text-yellow-400 border-yellow-800 bg-yellow-900/20",
  Templar: "text-blue-300 border-blue-800 bg-blue-900/20",
  Shadow: "text-slate-300 border-slate-700 bg-slate-900/20",
  Scion: "text-poe-gold border-yellow-700 bg-yellow-900/10",
};

const nodeTypeColor: Record<string, string> = {
  keystone: "text-orange-300 bg-orange-900/30 border-orange-800",
  notable: "text-blue-300 bg-blue-900/30 border-blue-800",
  small: "text-stone-400 bg-stone-800/50 border-stone-700",
  mastery: "text-purple-300 bg-purple-900/30 border-purple-800",
  ascendancy: "text-poe-gold bg-poe-gold/10 border-yellow-700",
};

function NodeCard({ node }: { node: PassiveNode }) {
  return (
    <div
      className={`rounded-lg border p-3 ${nodeTypeColor[node.type] ?? "text-stone-300 bg-stone-800 border-stone-700"}`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <span className="text-xs font-bold leading-snug">{node.name}</span>
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-semibold flex-shrink-0 ${nodeTypeColor[node.type] ?? ""}`}
        >
          {node.type}
        </span>
      </div>
      <ul className="space-y-0.5">
        {node.stats.map((stat, i) => (
          <li key={i} className="text-[11px] text-stone-300 leading-snug">
            {stat}
          </li>
        ))}
      </ul>
      {node.description && (
        <p className="text-[11px] text-stone-500 mt-1 leading-snug italic">{node.description}</p>
      )}
    </div>
  );
}

function RegionSection({ region }: { region: PassiveTreeRegion }) {
  const [expanded, setExpanded] = useState(false);
  const colorClass = classColors[region.primaryClass] ?? "text-stone-300 border-stone-700 bg-stone-800/30";

  return (
    <div className={`rounded-lg border p-4 ${colorClass}`}>
      <button
        className="w-full text-left"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base">{region.name}</h3>
            <p className="text-xs text-stone-400 mt-0.5">{region.description}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
            <span className="text-[10px] text-stone-500">
              {region.keystones.length} keystones · {region.notables.length} notables
            </span>
            <span className="text-stone-500">{expanded ? "▲" : "▼"}</span>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="mt-4 space-y-4">
          {region.keystones.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-orange-400 uppercase mb-2">
                🔶 Keystones
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {region.keystones.map((node) => (
                  <NodeCard key={node.id} node={node} />
                ))}
              </div>
            </div>
          )}

          {region.notables.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-blue-400 uppercase mb-2">
                🔷 Notable Passives
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {region.notables.map((node) => (
                  <NodeCard key={node.id} node={node} />
                ))}
              </div>
            </div>
          )}

          {region.smallPassives.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-stone-500 uppercase mb-2">
                Small Passives
              </p>
              <div className="flex flex-wrap gap-2">
                {region.smallPassives.map((stat, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-1 rounded bg-stone-800 text-stone-400 border border-stone-700"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const classes = [
  "Marauder",
  "Ranger",
  "Witch",
  "Duelist",
  "Templar",
  "Shadow",
  "Scion",
];

export default function PassiveTreePage() {
  const [viewMode, setViewMode] = useState<ViewMode>("by-class");
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const keystones = useMemo(() => getAllKeystones(), []);
  const notables = useMemo(() => getAllNotables(), []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchPassives(searchQuery.trim());
  }, [searchQuery]);

  const filteredRegions = useMemo(() => {
    if (selectedClass === "All") return passiveTree.regions;
    return passiveTree.regions.filter(
      (r) =>
        r.primaryClass === selectedClass ||
        r.id === "life-wheel" ||
        r.id === "spell-damage-cluster" ||
        r.id === "attack-cluster"
    );
  }, [selectedClass]);

  const totalNodes =
    passiveTree.regions.reduce(
      (acc, r) => acc + r.keystones.length + r.notables.length + r.smallPassives.length,
      0
    );

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">🌳 Passive Skill Tree</h1>
        <p className="text-stone-400 max-w-2xl">
          Browse {totalNodes}+ passive nodes across all class regions. Explore keystones,
          notable passives, and stat bonuses by class or search for specific effects.
        </p>
        <p className="text-xs text-stone-600 mt-1">
          Tree version: {passiveTree.version}
        </p>
      </div>

      {/* View mode tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(
          [
            { mode: "by-class" as ViewMode, label: "🗺 By Class", desc: "Browse by starting region" },
            { mode: "keystones" as ViewMode, label: "🔶 Keystones", desc: `${keystones.length} game-changers` },
            { mode: "notables" as ViewMode, label: "🔷 Notables", desc: `${notables.length} named nodes` },
            { mode: "search" as ViewMode, label: "🔍 Search", desc: "Find by name or stat" },
          ] as const
        ).map(({ mode, label }) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              viewMode === mode
                ? "bg-poe-gold text-poe-dark"
                : "bg-stone-800 text-stone-400 hover:text-poe-gold"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* BY CLASS view */}
      {viewMode === "by-class" && (
        <div>
          {/* Class filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["All", ...classes].map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                  selectedClass === cls
                    ? "bg-poe-gold text-poe-dark"
                    : "bg-stone-800 text-stone-400 hover:text-stone-200"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredRegions.map((region) => (
              <RegionSection key={region.id} region={region} />
            ))}
          </div>
        </div>
      )}

      {/* KEYSTONES view */}
      {viewMode === "keystones" && (
        <div>
          <p className="text-sm text-stone-500 mb-4">
            Keystones are powerful nodes that fundamentally change how your character works.
            They provide significant advantages in exchange for meaningful drawbacks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {keystones.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        </div>
      )}

      {/* NOTABLES view */}
      {viewMode === "notables" && (
        <div>
          <p className="text-sm text-stone-500 mb-4">
            Notable passives are named nodes that provide stronger bonuses than small passives.
            They are the primary targets when planning your passive tree path.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {notables.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        </div>
      )}

      {/* SEARCH view */}
      {viewMode === "search" && (
        <div>
          <div className="mb-4">
            <label htmlFor="passive-search" className="sr-only">
              Search passive nodes
            </label>
            <input
              id="passive-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by node name or stat (e.g. 'life', 'crit', 'mana')…"
              className="w-full bg-stone-900 border border-poe-border rounded px-4 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-poe-gold transition-colors"
              autoFocus
            />
          </div>

          {searchQuery.trim() === "" ? (
            <p className="text-sm text-stone-600 text-center py-12">
              Start typing to search passive nodes…
            </p>
          ) : searchResults.length === 0 ? (
            <p className="text-sm text-stone-600 text-center py-12">
              No passive nodes found for &ldquo;{searchQuery}&rdquo;
            </p>
          ) : (
            <div>
              <p className="text-xs text-stone-500 mb-3">
                {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {searchResults.map((node) => (
                  <NodeCard key={node.id} node={node} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
