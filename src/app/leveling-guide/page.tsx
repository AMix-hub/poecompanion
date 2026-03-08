import { acts } from "@/data/leveling";

export const metadata = {
  title: "Leveling Guide – PoE Companion",
  description: "Complete Path of Exile leveling guide for all 10 acts with tips, skills, and boss strategies.",
};

export default function LevelingGuidePage() {
  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">📖 Leveling Guide</h1>
        <p className="text-stone-400 max-w-2xl">
          Complete act-by-act walkthrough for Path of Exile. Covers all 10 acts, key zones,
          bosses, skill gems to collect, and expert leveling tips.
        </p>
      </div>

      {/* Quick tips banner */}
      <div className="poe-card rounded-lg p-4 mb-8 border border-poe-gold/30">
        <h2 className="text-sm font-bold text-poe-gold mb-2">⚡ General Leveling Tips</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {[
            "Always stay within 3 levels of zone monsters for maximum XP.",
            "Cap resistances (75%) before each new act.",
            "Prioritise getting a movement skill early (Dash, Flame Dash, Leap Slam).",
            "Don't worry about perfect gear — damage and life are what matters.",
            "Complete all Labs for Ascendancy points as soon as available.",
            "Use a Quicksilver Flask — it makes leveling significantly faster.",
          ].map((tip, i) => (
            <li key={i} className="text-xs text-stone-300 flex gap-1.5">
              <span className="text-poe-gold mt-0.5 flex-shrink-0">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Acts */}
      <div className="space-y-6">
        {acts.map((act) => (
          <section
            key={act.id}
            className="poe-card rounded-lg overflow-hidden"
          >
            {/* Act header */}
            <div className="bg-gradient-to-r from-poe-card to-stone-900 p-5 border-b border-poe-border">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-poe-gold">{act.name}</h2>
                  <p className="text-stone-500 text-sm mt-0.5">
                    Town:{" "}
                    <span className="text-stone-300">{act.town}</span>
                    <span className="mx-2 text-stone-700">·</span>
                    Levels:{" "}
                    <span className="text-stone-300">
                      {act.levelRange[0]}–{act.levelRange[1]}
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-500">Final Boss</p>
                  <p className="text-sm font-semibold text-red-400">{act.bossName}</p>
                  <p className="text-xs text-stone-600">{act.bossLocation}</p>
                </div>
              </div>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Zones */}
              <div className="lg:col-span-2">
                <h3 className="text-sm font-bold text-stone-300 mb-3 uppercase tracking-wide">
                  Key Zones
                </h3>
                <div className="space-y-2">
                  {act.zones.map((zone) => (
                    <div
                      key={zone.name}
                      className="flex items-start gap-3 p-3 rounded bg-black/20 border border-poe-border/50"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-stone-200">{zone.name}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-500">
                            Lvl {zone.levelRange[0]}–{zone.levelRange[1]}
                          </span>
                          {zone.waypoint && (
                            <span
                              className="text-[10px] px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-400"
                              title="Has Waypoint"
                            >
                              WP
                            </span>
                          )}
                        </div>
                        <ul className="mt-1 space-y-0.5">
                          {zone.objectives.map((obj, i) => (
                            <li key={i} className="text-xs text-stone-500">
                              <span className="text-poe-gold mr-1">›</span>
                              {obj}
                            </li>
                          ))}
                        </ul>
                        {zone.notableEnemies && zone.notableEnemies.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {zone.notableEnemies.map((e) => (
                              <span
                                key={e}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/40 text-red-400"
                              >
                                ☠ {e}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills + Tips */}
              <div className="space-y-4">
                {/* Skill gems */}
                {act.skillsToGet.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-stone-300 mb-2 uppercase tracking-wide">
                      💎 Skills to Grab
                    </h3>
                    <ul className="space-y-1">
                      {act.skillsToGet.map((skill, i) => (
                        <li key={i} className="text-xs text-stone-400 flex gap-1.5">
                          <span className="text-blue-400 flex-shrink-0">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips */}
                <div>
                  <h3 className="text-sm font-bold text-stone-300 mb-2 uppercase tracking-wide">
                    💡 Tips
                  </h3>
                  <ul className="space-y-2">
                    {act.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="text-xs text-stone-400 leading-relaxed flex gap-1.5 p-2 rounded bg-black/20 border border-poe-border/30"
                      >
                        <span className="text-poe-gold flex-shrink-0 mt-0.5">!</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Passive notes */}
                {act.passiveNotes && (
                  <div className="p-3 rounded bg-poe-gold/5 border border-poe-gold/20">
                    <h3 className="text-xs font-bold text-poe-gold mb-1 uppercase tracking-wide">
                      Passive Tree
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {act.passiveNotes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
