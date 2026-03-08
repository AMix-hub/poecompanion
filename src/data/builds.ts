import type { Build } from "@/types";

export const builds: Build[] = [
  {
    id: "cyclone-slayer",
    name: "Cyclone Slayer",
    characterClass: "Duelist",
    ascendancy: "Slayer",
    league: "Current",
    difficulty: "beginner",
    playstyle: "Melee / Spin-to-win",
    mainSkill: "Cyclone",
    strengths: [
      "Excellent map clear speed",
      "Immune to bleeding and explode",
      "Good league-starter — works with low investment",
      "Very tanky with leech",
    ],
    weaknesses: [
      "Weak against certain reflect maps",
      "Positioning matters — must keep moving",
      "Single-target can lag behind other builds",
    ],
    author: "Community",
    source: "maxroll.gg",
    popularity: 95,
    patchVersion: "3.25",
    description:
      "The classic spin-to-win Cyclone build. The Slayer's powerful life leech and Overwhelm makes this the go-to starter for new and veteran players alike. Clears maps effortlessly while staying alive through constant leech.",
    keyItems: ["Starforge", "Abyssus", "Loreweave", "Two-Stone Ring", "Kaom's Heart"],
    tags: ["melee", "physical", "beginner-friendly", "leech", "clear-speed"],
  },
  {
    id: "fireball-elementalist",
    name: "Fireball Ignite Elementalist",
    characterClass: "Witch",
    ascendancy: "Elementalist",
    league: "Current",
    difficulty: "beginner",
    playstyle: "Caster / Ignite DoT",
    mainSkill: "Fireball",
    strengths: [
      "Budget-friendly — scales well with common currency",
      "Satisfying ignite explosions clear entire screens",
      "Good single-target DPS via stacked ignites",
      "Great for beginners learning caster mechanics",
    ],
    weaknesses: [
      "Soft — relies on fast kills to survive",
      "Cannot do no-leech or reflect maps early",
      "Damage is DoT — no burst",
    ],
    author: "Grimro",
    source: "maxroll.gg",
    popularity: 88,
    patchVersion: "3.25",
    description:
      "Stack ignites and watch enemies burn to ash. The Elementalist's elemental golems boost your DPS while the Shaper of Flames ascendancy ensures your ignites are unmatched. A satisfying and accessible build for fire lovers.",
    keyItems: [
      "The Consuming Dark",
      "Emberwake",
      "Cinderswallow Urn",
      "Carcass Jack",
      "Flame Golem",
    ],
    tags: ["caster", "fire", "ignite", "dot", "beginner-friendly"],
  },
  {
    id: "lightning-arrow-deadeye",
    name: "Lightning Arrow Deadeye",
    characterClass: "Ranger",
    ascendancy: "Deadeye",
    league: "Current",
    difficulty: "beginner",
    playstyle: "Bow / Projectile Attack",
    mainSkill: "Lightning Arrow",
    strengths: [
      "Best-in-slot map clear among bow builds",
      "Tailwind provides massive action speed bonus",
      "Very smooth levelling with bows",
      "Strong endgame scalability",
    ],
    weaknesses: [
      "Squishy without proper investment",
      "Requires good bow to shine",
      "Bosses can be tricky without additional single-target setup",
    ],
    author: "Subtractem",
    source: "poe.ninja",
    popularity: 92,
    patchVersion: "3.25",
    description:
      "Chain lightning through entire screens with Lightning Arrow and the Deadeye's Ricochet. Combined with Tailwind and gale force, this build blasts through maps at incredible speed. One of the top-tier league-starters.",
    keyItems: [
      "Rare Bow",
      "Quiver (High Attack Speed)",
      "Hyrri's Ire",
      "Drillneck",
      "Bottled Faith",
    ],
    tags: ["bow", "lightning", "attack", "clear-speed", "beginner-friendly"],
  },
  {
    id: "raise-specter-necromancer",
    name: "Raise Spectre Necromancer",
    characterClass: "Witch",
    ascendancy: "Necromancer",
    league: "Current",
    difficulty: "intermediate",
    playstyle: "Minion / Summoner",
    mainSkill: "Raise Spectre",
    strengths: [
      "Hands-off playstyle — minions do the work",
      "Incredible single-target with correct spectres",
      "Can do all map mods",
      "Excellent for content that requires avoiding one-shots",
    ],
    weaknesses: [
      "Slower clear compared to direct-damage builds",
      "Spectre choice heavily impacts performance",
      "Can feel passive — not exciting for action-oriented players",
    ],
    author: "Kay",
    source: "poe.ninja",
    popularity: 79,
    patchVersion: "3.25",
    description:
      "Raise powerful monsters as your undying army. The Necromancer's bonuses to minions make your spectres near-unstoppable with the right choices. Popular spectres include Syndicate Operatives and Raging Spirits as supplementary minions.",
    keyItems: [
      "Geofri's Sanctuary",
      "Victario's Charity",
      "United in Dream",
      "Anima Stone",
      "Mistress of Sacrifice",
    ],
    tags: ["minion", "summoner", "spectre", "intelligence", "endgame"],
  },
  {
    id: "poison-pathfinder",
    name: "Poisonous Concoction Pathfinder",
    characterClass: "Ranger",
    ascendancy: "Pathfinder",
    league: "Current",
    difficulty: "beginner",
    playstyle: "Poison / Flask-based",
    mainSkill: "Poisonous Concoction",
    strengths: [
      "Zero-cost league starter — no weapon required",
      "Very tanky with flask defences",
      "Scales well into endgame",
      "Excellent flask uptime with Pathfinder",
    ],
    weaknesses: [
      "DoT build — feels slow against high-life targets early",
      "Flask piano — requires careful management",
      "Limited by hand-thrown flask mechanic",
    ],
    author: "GhazzyTV",
    source: "maxroll.gg",
    popularity: 85,
    patchVersion: "3.25",
    description:
      "Use flasks as weapons! Poisonous Concoction throws a life flask at enemies, coating them in deadly poison. The Pathfinder ascendancy provides near-permanent flask uptime and massive nature damage bonuses. Perfect for a fresh league start.",
    keyItems: [
      "Dying Sun",
      "Atziri's Promise",
      "Jade Flask",
      "Quartz Flask",
      "Bubbling Life Flask",
    ],
    tags: ["poison", "flask", "chaos", "dexterity", "zero-cost"],
  },
  {
    id: "ice-nova-hierophant",
    name: "Ice Nova Frostbolt Hierophant",
    characterClass: "Templar",
    ascendancy: "Hierophant",
    league: "Current",
    difficulty: "intermediate",
    playstyle: "Caster / Totem or Self-cast",
    mainSkill: "Ice Nova",
    strengths: [
      "Phenomenal AoE clear",
      "Strong freeze potential",
      "Can be played as self-cast or totems",
      "Excellent boss damage with proper setup",
    ],
    weaknesses: [
      "Positioning is critical",
      "Can feel clunky without the Frostbolt interaction",
      "Requires understanding of the Frostbolt combo",
    ],
    author: "Enki",
    source: "poe.ninja",
    popularity: 72,
    patchVersion: "3.25",
    description:
      "Cast Frostbolt then explode it with Ice Nova for massive AoE coverage. The Hierophant's totems can automate this combo, or you can self-cast for higher damage. One of the most satisfying visual spectacles in the game.",
    keyItems: [
      "Pledge of Hands",
      "Hrimsorrow",
      "Eye of Malice",
      "The Vertex",
      "Carcass Jack",
    ],
    tags: ["caster", "cold", "aoe", "freeze", "intermediate"],
  },
  {
    id: "vd-spellslinger-occultist",
    name: "Volatile Dead Spellslinger Occultist",
    characterClass: "Witch",
    ascendancy: "Occultist",
    league: "Current",
    difficulty: "advanced",
    playstyle: "Trigger / Chaos/Fire hybrid",
    mainSkill: "Volatile Dead",
    strengths: [
      "Screen-filling explosions",
      "Great clear speed",
      "Strong passive defences via Occultist",
      "Satisfying visual spectacle",
    ],
    weaknesses: [
      "Complex setup with Spellslinger",
      "Requires specific items to function optimally",
      "Mana-hungry build",
    ],
    author: "Pohx",
    source: "poe.ninja",
    popularity: 65,
    patchVersion: "3.25",
    description:
      "Trigger Volatile Dead via Spellslinger to fill screens with rolling balls of fire that seek enemies. Combined with Corpse Pact and the Occultist's dark power, this build creates chaotic destruction that is as fun to play as it is to watch.",
    keyItems: [
      "Inpulsa's Broken Heart",
      "Inspired Learning",
      "Rare Wand",
      "Allelopathy",
      "Uniques TBD",
    ],
    tags: ["trigger", "fire", "chaos", "aoe", "advanced"],
  },
  {
    id: "blade-vortex-assassin",
    name: "Blade Vortex Assassin",
    characterClass: "Shadow",
    ascendancy: "Assassin",
    league: "Current",
    difficulty: "intermediate",
    playstyle: "Caster / Physical or Elemental",
    mainSkill: "Blade Vortex",
    strengths: [
      "Excellent DPS with high blade count",
      "Smooth levelling with daggers",
      "Good boss damage via critical strikes",
      "Can be built physical or elemental",
    ],
    weaknesses: [
      "Melee range on a squishy character",
      "Depends on flask uptime",
      "Positioning against bosses is risky",
    ],
    author: "Mathil",
    source: "poe.ninja",
    popularity: 71,
    patchVersion: "3.25",
    description:
      "Summon spinning blades around yourself that shred everything in their path. The Assassin excels at critical strikes, pushing Blade Vortex's DPS into the millions. One of the most powerful spell-based melee builds available.",
    keyItems: ["Rare Claw/Dagger", "Rare Chest", "Arakaali's Fang", "Asenath's Mark", "Void Battery"],
    tags: ["spell", "physical", "melee", "critical", "assassin"],
  },
  {
    id: "arc-saboteur",
    name: "Arc Mines Saboteur",
    characterClass: "Shadow",
    ascendancy: "Saboteur",
    league: "Current",
    difficulty: "beginner",
    playstyle: "Mine / Trap — Lightning",
    mainSkill: "Arc",
    strengths: [
      "Very powerful league starter",
      "Great for all content including deep delve",
      "Mines provide safety from off-screen placement",
      "Excellent clear and single-target",
    ],
    weaknesses: [
      "Mine playstyle feels passive to some players",
      "Requires practice to optimise detonation timing",
      "Can feel slow in dense maps",
    ],
    author: "Ziz",
    source: "poe.ninja",
    popularity: 81,
    patchVersion: "3.25",
    description:
      "Lay mines that trigger Arc — a chaining lightning spell — devastating entire packs from safety. The Saboteur's bomb specialist passive tree maximises mine throw speed and detonation damage. A top-tier starter for players who prefer tactical placement.",
    keyItems: [
      "Tremor Rod",
      "Mind of the Council",
      "Shaped Hubris Circlet",
      "Rare Gloves",
      "Enduring Mana Flask",
    ],
    tags: ["mine", "lightning", "trap", "dexterity", "beginner-friendly"],
  },
  {
    id: "earthshatter-berserker",
    name: "Earthshatter Berserker",
    characterClass: "Marauder",
    ascendancy: "Berserker",
    league: "Current",
    difficulty: "intermediate",
    playstyle: "Melee / Physical Slams",
    mainSkill: "Earthshatter",
    strengths: [
      "Massive burst damage against bosses",
      "Satisfying slam playstyle",
      "Strong with two-handed weapons",
      "Berserker Rage provides damage multipliers",
    ],
    weaknesses: [
      "Low life recovery compared to Slayer",
      "Rage stacks can be difficult to manage",
      "Map clear is slower than spin builds",
    ],
    author: "Zizaran",
    source: "poe.ninja",
    popularity: 66,
    patchVersion: "3.25",
    description:
      "Smash the earth with mighty two-handed weapons, creating spikes that explode for devastating area damage. The Berserker's Rage mechanics push damage multipliers to absurd levels, making this one of the highest burst-DPS melee builds.",
    keyItems: [
      "Starforge",
      "Asenath's Mark",
      "Brutus' Lead Sprinkler",
      "Kaom's Heart",
      "Stygian Vise",
    ],
    tags: ["melee", "physical", "slam", "strength", "boss-killer"],
  },
];

export function getPopularBuilds(limit = 5): Build[] {
  return [...builds].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
}

export function getBuildsByDifficulty(difficulty: Build["difficulty"]): Build[] {
  return builds.filter((b) => b.difficulty === difficulty);
}

export function filterBuilds(
  builds: Build[],
  {
    difficulty,
    ascendancy,
    search,
    tag,
  }: {
    difficulty?: Build["difficulty"];
    ascendancy?: string;
    search?: string;
    tag?: string;
  }
): Build[] {
  return builds.filter((b) => {
    if (difficulty && b.difficulty !== difficulty) return false;
    if (ascendancy && b.ascendancy !== ascendancy) return false;
    if (tag && !b.tags.includes(tag)) return false;
    if (search) {
      const q = search.toLowerCase();
      if (
        !b.name.toLowerCase().includes(q) &&
        !b.mainSkill.toLowerCase().includes(q) &&
        !b.characterClass.toLowerCase().includes(q) &&
        !b.ascendancy.toLowerCase().includes(q) &&
        !b.tags.some((t) => t.includes(q))
      )
        return false;
    }
    return true;
  });
}
