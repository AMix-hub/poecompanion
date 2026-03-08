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
      <div className="poe-card rounded-lg p-4 mb-6 border border-poe-gold/30">
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

      {/* Power Leveling Section */}
      <div className="poe-card rounded-lg p-5 mb-8 border border-blue-900/40">
        <h2 className="text-base font-bold text-blue-300 mb-3">🚀 Power Leveling — Fastest Route to Maps</h2>
        <p className="text-xs text-stone-400 mb-4">
          Follow these strategies to reach maps in 6–8 hours on a new league-start, or under 4 hours with experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              heading: "Pre-Game Setup",
              tips: [
                "Pre-plan your first 20 passive points before the league starts.",
                "Know your vendor recipes: three same-color-linked items → chromatic orb; 6-linked item → 7 jeweller's orbs.",
                "Bookmark the vendor recipes wiki page — it saves time during acts.",
                "Pick a build with a self-found starter skill (e.g., Spark, Caustic Arrow, Glacial Cascade).",
              ],
            },
            {
              heading: "Acts 1–5: Rush Strategy",
              tips: [
                "Do NOT clear every zone — only complete mandatory objectives and move on.",
                "Skip optional quests unless they reward a skill gem you need.",
                "Weapon swap: always upgrade your main damage weapon every 8–10 levels.",
                "Get a Quicksilver Flask the moment it drops or is sold by Tarkleigh (Act 1).",
              ],
            },
            {
              heading: "Acts 6–10: Resistance Priority",
              tips: [
                "All resistances are cut by 60% after Act 5 — you MUST re-cap them.",
                "Target vendor-rolled gear with high resistances to cover the penalty quickly.",
                "Don't linger: enemies in Acts 6–10 mirror Acts 1–5 but deal far more damage.",
                "Complete optional quests only if they give passive skill points.",
              ],
            },
            {
              heading: "Labyrinth Timing",
              tips: [
                "Normal Lab: complete as soon as you hit level 33 (clears Act 3 Merciless).",
                "Cruel Lab: complete around level 55 (after Act 7).",
                "Merciless Lab: complete around level 68 (after Act 10).",
                "Uber Lab: complete at level 75+ once you have strong enough gear.",
              ],
            },
            {
              heading: "Skill Gem Progression",
              tips: [
                "Upgrade support gems as soon as better ones become available (e.g., swap Lesser Multiple Projectiles → Greater at level 38).",
                "Keep gem levels high — a level 20 main skill gem is a 20% more damage multiplier.",
                "Buy gems from vendors early: they sell ALL gems at Act 2 onwards.",
                "Consider a Tabula Rasa chest (50–100c) for a free 6-link while leveling.",
              ],
            },
            {
              heading: "Vendor Recipes for Free Upgrades",
              tips: [
                "Any rare item + Orb of Alteration → vendor for 1–4 Orbs of Alteration.",
                "20% quality flask → upgrades with 5 Glassblower's Baubles.",
                "Rustic Sash + Blacksmith's Whetstone → higher-rolled Rustic Sash (physical builds).",
                "Full rare item set (all slots) → 1–2 Chaos Orbs (level 60–74 unidentified).",
              ],
            },
          ].map((section) => (
            <div key={section.heading} className="p-3 rounded bg-black/20 border border-poe-border/40">
              <h3 className="text-xs font-bold text-stone-300 uppercase mb-2">{section.heading}</h3>
              <ul className="space-y-1">
                {section.tips.map((tip, i) => (
                  <li key={i} className="text-xs text-stone-400 flex gap-1.5 leading-relaxed">
                    <span className="text-blue-400 flex-shrink-0 mt-0.5">›</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Time targets */}
        <div className="mt-4 p-3 rounded bg-poe-gold/5 border border-poe-gold/20">
          <h3 className="text-xs font-bold text-poe-gold mb-2 uppercase">Target Timings</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { milestone: "Act 1 done", target: "~30 min" },
              { milestone: "Act 5 done", target: "~2–3 hrs" },
              { milestone: "Act 10 done", target: "~5–6 hrs" },
              { milestone: "First map", target: "~6–8 hrs" },
            ].map((t) => (
              <div key={t.milestone} className="text-center">
                <p className="text-poe-gold font-bold text-sm">{t.target}</p>
                <p className="text-stone-500 text-[11px]">{t.milestone}</p>
              </div>
            ))}
          </div>
        </div>
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
