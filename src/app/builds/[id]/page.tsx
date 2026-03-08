import { builds } from "@/data/builds";
import { getBuildDetailById } from "@/data/buildDetails";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { GearTierLabel, PassivePriority } from "@/types";

export function generateStaticParams() {
  return builds.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const build = builds.find((b) => b.id === id);
  return {
    title: build ? `${build.name} – PoE Companion` : "Build – PoE Companion",
    description: build?.description ?? "Path of Exile build guide",
  };
}

const difficultyColor: Record<string, string> = {
  beginner: "text-green-400 bg-green-900/30",
  intermediate: "text-blue-400 bg-blue-900/30",
  advanced: "text-orange-400 bg-orange-900/30",
  expert: "text-red-400 bg-red-900/30",
};

const tierColor: Record<GearTierLabel, string> = {
  leveling: "text-stone-300 bg-stone-800",
  budget: "text-green-400 bg-green-900/30",
  mid: "text-blue-400 bg-blue-900/30",
  endgame: "text-poe-gold bg-poe-gold/10",
};

const priorityColor: Record<PassivePriority, string> = {
  core: "text-red-400 bg-red-900/30",
  important: "text-blue-400 bg-blue-900/30",
  optional: "text-stone-400 bg-stone-800",
};

const slotLabel: Record<string, string> = {
  weapon: "Weapon",
  offhand: "Off-hand",
  helm: "Helm",
  chest: "Chest",
  gloves: "Gloves",
  boots: "Boots",
  belt: "Belt",
  ring1: "Ring 1",
  ring2: "Ring 2",
  amulet: "Amulet",
  flask1: "Flask 1",
  flask2: "Flask 2",
  flask3: "Flask 3",
  flask4: "Flask 4",
  flask5: "Flask 5",
};

export default async function BuildDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detail = getBuildDetailById(id);
  const build = builds.find((b) => b.id === id);

  if (!build) notFound();

  const hasDetail = detail != null;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        href="/builds"
        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-poe-gold mb-6 transition-colors"
      >
        ← Back to Builds
      </Link>

      {/* Hero Header */}
      <div className="poe-card rounded-lg p-6 mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-poe-gold mb-1">{build.name}</h1>
            <p className="text-stone-400 text-sm mb-2">
              {build.ascendancy}{" "}
              <span className="text-stone-600">({build.characterClass})</span>
              <span className="mx-2 text-stone-700">·</span>
              {build.playstyle}
            </p>
            <div className="flex flex-wrap gap-2">
              <span
                className={`text-xs px-2 py-0.5 rounded font-semibold uppercase ${difficultyColor[build.difficulty] ?? ""}`}
              >
                {build.difficulty}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-poe-gold/10 text-poe-gold font-medium">
                ⚡ {build.mainSkill}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                v{build.patchVersion}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-500">
                🔥 {build.popularity}% · {build.source}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-stone-300 leading-relaxed">{build.description}</p>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-xs text-green-500 font-semibold uppercase mb-2">Strengths</p>
            <ul className="space-y-1">
              {build.strengths.map((s, i) => (
                <li key={i} className="text-sm text-stone-400 flex gap-1.5">
                  <span className="text-green-500">+</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-red-400 font-semibold uppercase mb-2">Weaknesses</p>
            <ul className="space-y-1">
              {build.weaknesses.map((w, i) => (
                <li key={i} className="text-sm text-stone-400 flex gap-1.5">
                  <span className="text-red-400">−</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {!hasDetail && (
        <div className="poe-card rounded-lg p-8 text-center text-stone-500">
          <p className="text-xl mb-2">📋</p>
          <p>Detailed guide coming soon for this build.</p>
        </div>
      )}

      {hasDetail && (
        <>
          {/* Power-leveling tips */}
          <section className="poe-card rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-poe-gold mb-4">⚡ Power Leveling Tips</h2>
            <ul className="space-y-2">
              {detail.powerLevelingTips.map((tip, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-stone-300 leading-relaxed p-2 rounded bg-black/20 border border-poe-border/30"
                >
                  <span className="text-poe-gold flex-shrink-0 mt-0.5 font-bold">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* Leveling Progression */}
          <section className="poe-card rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-poe-gold mb-4">📈 Level-by-Level Progression</h2>
            <div className="space-y-3">
              {detail.levelingNotes.map((note) => (
                <div
                  key={note.level}
                  className="border border-poe-border rounded-lg p-4 bg-black/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-poe-gold/20 text-poe-gold min-w-[3.5rem] text-center">
                      Lvl {note.level}
                    </span>
                    <p className="text-sm text-stone-200 font-medium">{note.note}</p>
                  </div>
                  {note.newSkills && note.newSkills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2 ml-[3.8rem]">
                      <span className="text-xs text-stone-500 mr-1">New skills:</span>
                      {note.newSkills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-1.5 py-0.5 rounded bg-blue-900/30 text-blue-300"
                        >
                          💎 {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {note.passivePriority && (
                    <p className="text-xs text-stone-500 mt-2 ml-[3.8rem]">
                      <span className="text-poe-gold font-semibold">Tree:</span>{" "}
                      {note.passivePriority}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skill Links */}
          <section className="poe-card rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-poe-gold mb-4">💎 Skill Gem Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.skillLinks.map((link) => (
                <div
                  key={link.name}
                  className="border border-poe-border rounded-lg p-4 bg-black/20"
                >
                  <h3 className="text-sm font-bold text-stone-200 mb-3">{link.name}</h3>
                  <div className="flex flex-col gap-1.5">
                    {link.gems.map((gem) => (
                      <div key={gem.name} className="flex items-center gap-2">
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${
                            gem.type === "active"
                              ? "bg-red-900/30 text-red-300"
                              : "bg-stone-800 text-stone-400"
                          }`}
                        >
                          {gem.type === "active" ? "ACT" : "SUP"}
                        </span>
                        <span
                          className={`text-xs ${
                            gem.essential ? "text-stone-200 font-medium" : "text-stone-500"
                          }`}
                        >
                          {gem.name}
                        </span>
                        {gem.essential && (
                          <span className="text-[10px] text-poe-gold ml-auto">★</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Passive Tree Clusters */}
          <section className="poe-card rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-poe-gold mb-1">🌳 Passive Tree Clusters</h2>
            <p className="text-xs text-stone-500 mb-4">
              Key passive tree regions in priority order. Core nodes should be taken first.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.passiveClusters.map((cluster) => (
                <div
                  key={cluster.name}
                  className="border border-poe-border rounded-lg p-4 bg-black/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-stone-200">{cluster.name}</h3>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase ${priorityColor[cluster.priority]}`}
                    >
                      {cluster.priority}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {cluster.nodes.map((node) => (
                      <span
                        key={node}
                        className="text-[11px] px-1.5 py-0.5 rounded bg-poe-gold/10 text-poe-gold"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                  {cluster.notes && (
                    <p className="text-xs text-stone-500 leading-relaxed">{cluster.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Gear Progression */}
          <section className="poe-card rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-poe-gold mb-1">🛡 Gear Progression</h2>
            <p className="text-xs text-stone-500 mb-4">
              Item recommendations from fresh league-start through pinnacle endgame content.
            </p>
            <div className="space-y-6">
              {detail.gearProgression.map((tier) => (
                <div key={tier.tier}>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-semibold uppercase ${tierColor[tier.tier]}`}
                    >
                      {tier.label}
                    </span>
                    <span className="text-xs text-stone-500">~{tier.estimatedCost}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tier.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 p-3 rounded border border-poe-border/50 bg-black/20"
                      >
                        <span className="text-[10px] text-stone-600 flex-shrink-0 mt-0.5 w-14 text-right">
                          {slotLabel[item.slot] ?? item.slot}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-stone-200 font-medium leading-snug">
                            {item.name}
                          </p>
                          {item.notes && (
                            <p className="text-[11px] text-stone-500 mt-0.5">{item.notes}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {build.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
