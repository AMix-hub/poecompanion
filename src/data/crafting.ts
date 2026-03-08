import type { CraftableBase, Affix, CraftingOrb } from "@/types";

export const craftingOrbs: {
  name: CraftingOrb;
  description: string;
  shortDescription: string;
  color: string;
}[] = [
  {
    name: "Orb of Transmutation",
    description: "Upgrades a Normal item to Magic, adding 1–2 modifiers.",
    shortDescription: "Normal → Magic",
    color: "blue",
  },
  {
    name: "Orb of Alteration",
    description: "Reforges a Magic item with new random modifiers.",
    shortDescription: "Reroll Magic",
    color: "blue",
  },
  {
    name: "Orb of Augmentation",
    description: "Adds a modifier to a Magic item that has only one modifier.",
    shortDescription: "Add mod (Magic)",
    color: "blue",
  },
  {
    name: "Orb of Regal",
    description: "Upgrades a Magic item to Rare, adding one additional modifier.",
    shortDescription: "Magic → Rare",
    color: "yellow",
  },
  {
    name: "Orb of Alchemy",
    description: "Upgrades a Normal item to Rare with 4–6 modifiers.",
    shortDescription: "Normal → Rare",
    color: "yellow",
  },
  {
    name: "Chaos Orb",
    description: "Reforges a Rare item with new random modifiers.",
    shortDescription: "Reroll Rare",
    color: "yellow",
  },
  {
    name: "Exalted Orb",
    description: "Adds a modifier to a Rare item that has fewer than 6 modifiers.",
    shortDescription: "Add mod (Rare)",
    color: "yellow",
  },
  {
    name: "Orb of Annulment",
    description: "Removes a random modifier from a Magic or Rare item.",
    shortDescription: "Remove 1 mod",
    color: "red",
  },
  {
    name: "Orb of Scouring",
    description: "Removes all modifiers from a Magic or Rare item (returns to Normal).",
    shortDescription: "→ Normal",
    color: "gray",
  },
  {
    name: "Blessed Orb",
    description: "Randomises the numeric values of an item's implicit modifiers.",
    shortDescription: "Reroll implicit",
    color: "gray",
  },
];

// Affix pools by item category
const weaponPrefixes: Affix[] = [
  { id: "p_phys1", type: "prefix", name: "Cruel", tier: 1, stat: "40–60% increased Physical Damage", tags: ["weapon", "physical"] },
  { id: "p_phys2", type: "prefix", name: "Tyrannical", tier: 2, stat: "75–90% increased Physical Damage", tags: ["weapon", "physical"] },
  { id: "p_phys3", type: "prefix", name: "Merciless", tier: 3, stat: "100–120% increased Physical Damage", tags: ["weapon", "physical"] },
  { id: "p_ele1", type: "prefix", name: "Flaming", tier: 1, stat: "Adds 10–20 Fire Damage", tags: ["weapon", "fire"] },
  { id: "p_ele2", type: "prefix", name: "Shocking", tier: 1, stat: "Adds 5–50 Lightning Damage", tags: ["weapon", "lightning"] },
  { id: "p_ele3", type: "prefix", name: "Frigid", tier: 1, stat: "Adds 15–25 Cold Damage", tags: ["weapon", "cold"] },
  { id: "p_spd1", type: "prefix", name: "Frenetic", tier: 1, stat: "25% increased Attack Speed", tags: ["weapon", "speed"] },
  { id: "p_life1", type: "prefix", name: "Vicious", tier: 1, stat: "2% of Physical Attack Damage Leeched as Life", tags: ["weapon", "leech"] },
];

const weaponSuffixes: Affix[] = [
  { id: "s_acc1", type: "suffix", name: "of Accuracy", tier: 1, stat: "+150 to Accuracy Rating", tags: ["weapon", "accuracy"] },
  { id: "s_crit1", type: "suffix", name: "of Chances", tier: 1, stat: "25% increased Critical Strike Chance", tags: ["weapon", "critical"] },
  { id: "s_crit2", type: "suffix", name: "of Destruction", tier: 2, stat: "40% increased Critical Strike Chance", tags: ["weapon", "critical"] },
  { id: "s_str1", type: "suffix", name: "of the Bear", tier: 1, stat: "+30 to Strength", tags: ["weapon", "strength"] },
  { id: "s_dex1", type: "suffix", name: "of the Fox", tier: 1, stat: "+30 to Dexterity", tags: ["weapon", "dexterity"] },
  { id: "s_int1", type: "suffix", name: "of the Sage", tier: 1, stat: "+30 to Intelligence", tags: ["weapon", "intelligence"] },
  { id: "s_res1", type: "suffix", name: "of Flames", tier: 1, stat: "+20% to Fire Resistance", tags: ["weapon", "resistance", "fire"] },
  { id: "s_spd2", type: "suffix", name: "of Celebration", tier: 1, stat: "10% increased Movement Speed while Phasing", tags: ["weapon", "speed"] },
];

const armourPrefixes: Affix[] = [
  { id: "a_life1", type: "prefix", name: "Athlete's", tier: 1, stat: "+50 to maximum Life", tags: ["armour", "life"] },
  { id: "a_life2", type: "prefix", name: "Stalwart", tier: 2, stat: "+80 to maximum Life", tags: ["armour", "life"] },
  { id: "a_life3", type: "prefix", name: "Vigorous", tier: 3, stat: "+110 to maximum Life", tags: ["armour", "life"] },
  { id: "a_es1", type: "prefix", name: "Resonant", tier: 1, stat: "+50 to maximum Energy Shield", tags: ["armour", "energy-shield"] },
  { id: "a_es2", type: "prefix", name: "Glowing", tier: 2, stat: "+80 to maximum Energy Shield", tags: ["armour", "energy-shield"] },
  { id: "a_ar1", type: "prefix", name: "Fortified", tier: 1, stat: "80% increased Armour", tags: ["armour", "armour"] },
  { id: "a_ev1", type: "prefix", name: "Evasive", tier: 1, stat: "80% increased Evasion Rating", tags: ["armour", "evasion"] },
  { id: "a_regen1", type: "prefix", name: "Recuperating", tier: 1, stat: "1.2% of Life Regenerated per second", tags: ["armour", "regen"] },
];

const armourSuffixes: Affix[] = [
  { id: "as_fr1", type: "suffix", name: "of the Furnace", tier: 1, stat: "+25% to Fire Resistance", tags: ["armour", "resistance", "fire"] },
  { id: "as_cr1", type: "suffix", name: "of the Glacier", tier: 1, stat: "+25% to Cold Resistance", tags: ["armour", "resistance", "cold"] },
  { id: "as_lr1", type: "suffix", name: "of the Storm", tier: 1, stat: "+25% to Lightning Resistance", tags: ["armour", "resistance", "lightning"] },
  { id: "as_chr1", type: "suffix", name: "of the Order", tier: 1, stat: "+20% to Chaos Resistance", tags: ["armour", "resistance", "chaos"] },
  { id: "as_str1", type: "suffix", name: "of the Gorilla", tier: 1, stat: "+40 to Strength", tags: ["armour", "strength"] },
  { id: "as_dex1", type: "suffix", name: "of the Lynx", tier: 1, stat: "+40 to Dexterity", tags: ["armour", "dexterity"] },
  { id: "as_int1", type: "suffix", name: "of the Owl", tier: 1, stat: "+40 to Intelligence", tags: ["armour", "intelligence"] },
  { id: "as_allres1", type: "suffix", name: "of Shielding", tier: 1, stat: "+10% to all Elemental Resistances", tags: ["armour", "resistance", "all"] },
];

const accessoryPrefixes: Affix[] = [
  { id: "acc_life1", type: "prefix", name: "Healthy", tier: 1, stat: "+50 to maximum Life", tags: ["accessory", "life"] },
  { id: "acc_life2", type: "prefix", name: "Hale", tier: 2, stat: "+80 to maximum Life", tags: ["accessory", "life"] },
  { id: "acc_mana1", type: "prefix", name: "Serene", tier: 1, stat: "+50 to maximum Mana", tags: ["accessory", "mana"] },
  { id: "acc_mana2", type: "prefix", name: "Tranquil", tier: 2, stat: "+80 to maximum Mana", tags: ["accessory", "mana"] },
  { id: "acc_dmg1", type: "prefix", name: "Aggressive", tier: 1, stat: "Adds 5–12 Physical Damage to Attacks", tags: ["accessory", "physical"] },
  { id: "acc_ele1", type: "prefix", name: "Scorched", tier: 1, stat: "Adds 5–10 Fire Damage to Attacks", tags: ["accessory", "fire"] },
];

const accessorySuffixes: Affix[] = [
  { id: "accs_str1", type: "suffix", name: "of the Titan", tier: 1, stat: "+50 to Strength", tags: ["accessory", "strength"] },
  { id: "accs_dex1", type: "suffix", name: "of the Ranger", tier: 1, stat: "+50 to Dexterity", tags: ["accessory", "dexterity"] },
  { id: "accs_int1", type: "suffix", name: "of the Scholar", tier: 1, stat: "+50 to Intelligence", tags: ["accessory", "intelligence"] },
  { id: "accs_fr1", type: "suffix", name: "of Firewalking", tier: 1, stat: "+35% to Fire Resistance", tags: ["accessory", "resistance", "fire"] },
  { id: "accs_cr1", type: "suffix", name: "of the Tundra", tier: 1, stat: "+35% to Cold Resistance", tags: ["accessory", "resistance", "cold"] },
  { id: "accs_lr1", type: "suffix", name: "of Thunder", tier: 1, stat: "+35% to Lightning Resistance", tags: ["accessory", "resistance", "lightning"] },
  { id: "accs_regen1", type: "suffix", name: "of Regeneration", tier: 1, stat: "0.6% of Life Regenerated per second", tags: ["accessory", "regen"] },
  { id: "accs_leech1", type: "suffix", name: "of Leeching", tier: 1, stat: "1% of Damage Leeched as Life", tags: ["accessory", "leech"] },
];

export const craftableBases: CraftableBase[] = [
  {
    id: "vaal-axe",
    name: "Vaal Axe",
    type: "Two Hand Axe",
    category: "weapon",
    levelRequirement: 64,
    implicitStat: "20% increased Elemental Damage with Attacks",
    affixPool: [...weaponPrefixes, ...weaponSuffixes],
  },
  {
    id: "reaver-sword",
    name: "Reaver Sword",
    type: "One Hand Sword",
    category: "weapon",
    levelRequirement: 62,
    implicitStat: "25% reduced Enemy Stun Threshold",
    affixPool: [...weaponPrefixes, ...weaponSuffixes],
  },
  {
    id: "imbued-wand",
    name: "Imbued Wand",
    type: "Wand",
    category: "weapon",
    levelRequirement: 59,
    implicitStat: "24% increased Spell Damage",
    affixPool: [
      { id: "p_spell1", type: "prefix", name: "Arcane", tier: 1, stat: "35% increased Spell Damage", tags: ["weapon", "spell"] },
      { id: "p_spell2", type: "prefix", name: "Mystical", tier: 2, stat: "55% increased Spell Damage", tags: ["weapon", "spell"] },
      { id: "p_cspd1", type: "prefix", name: "Hasty", tier: 1, stat: "12% increased Cast Speed", tags: ["weapon", "cast-speed"] },
      ...weaponSuffixes,
    ],
  },
  {
    id: "glorious-plate",
    name: "Glorious Plate",
    type: "Body Armour",
    category: "armour",
    levelRequirement: 68,
    implicitStat: "3% reduced Movement Speed",
    affixPool: [...armourPrefixes, ...armourSuffixes],
  },
  {
    id: "hubris-circlet",
    name: "Hubris Circlet",
    type: "Helmet",
    category: "armour",
    levelRequirement: 69,
    implicitStat: "Energy Shield (base 150)",
    affixPool: [
      ...armourPrefixes,
      ...armourSuffixes,
      { id: "h_sockgem1", type: "prefix", name: "Socketed", tier: 1, stat: "Socketed Gems are Supported by Level 16 Spell Echo", tags: ["helmet", "gem"] },
    ],
  },
  {
    id: "slink-gloves",
    name: "Slink Gloves",
    type: "Gloves",
    category: "armour",
    levelRequirement: 64,
    implicitStat: "Evasion Rating (base 360)",
    affixPool: [...armourPrefixes, ...armourSuffixes],
  },
  {
    id: "jade-amulet",
    name: "Jade Amulet",
    type: "Amulet",
    category: "accessory",
    levelRequirement: 52,
    implicitStat: "+20 to Dexterity",
    affixPool: [...accessoryPrefixes, ...accessorySuffixes],
  },
  {
    id: "two-stone-ring",
    name: "Two-Stone Ring",
    type: "Ring",
    category: "accessory",
    levelRequirement: 20,
    implicitStat: "+12–16% to Fire and Cold/Lightning Resistances",
    affixPool: [...accessoryPrefixes, ...accessorySuffixes],
  },
  {
    id: "stygian-vise",
    name: "Stygian Vise",
    type: "Belt",
    category: "accessory",
    levelRequirement: 60,
    implicitStat: "Has 1 Abyssal Socket",
    affixPool: [
      { id: "blt_life1", type: "prefix", name: "Athlete's", tier: 1, stat: "+60 to maximum Life", tags: ["belt", "life"] },
      { id: "blt_life2", type: "prefix", name: "Stalwart", tier: 2, stat: "+100 to maximum Life", tags: ["belt", "life"] },
      { id: "blt_fr1", type: "suffix", name: "of the Volcano", tier: 1, stat: "+40% to Fire Resistance", tags: ["belt", "resistance", "fire"] },
      { id: "blt_cr1", type: "suffix", name: "of the Ice", tier: 1, stat: "+40% to Cold Resistance", tags: ["belt", "resistance", "cold"] },
      { id: "blt_lr1", type: "suffix", name: "of the Tempest", tier: 1, stat: "+40% to Lightning Resistance", tags: ["belt", "resistance", "lightning"] },
      { id: "blt_flask1", type: "suffix", name: "of Dousing", tier: 1, stat: "30% increased Flask Life Recovery rate", tags: ["belt", "flask"] },
    ],
  },
];

export const craftingBenchMods: Affix[] = [
  { id: "bench_life", type: "prefix", name: "Crafted Life", tier: 0, stat: "+50 to maximum Life", tags: ["bench", "life"] },
  { id: "bench_res_fire", type: "suffix", name: "Crafted Fire Res", tier: 0, stat: "+30% to Fire Resistance", tags: ["bench", "resistance", "fire"] },
  { id: "bench_res_cold", type: "suffix", name: "Crafted Cold Res", tier: 0, stat: "+30% to Cold Resistance", tags: ["bench", "resistance", "cold"] },
  { id: "bench_res_lightning", type: "suffix", name: "Crafted Lightning Res", tier: 0, stat: "+30% to Lightning Resistance", tags: ["bench", "resistance", "lightning"] },
  { id: "bench_movement", type: "suffix", name: "Crafted Move Speed", tier: 0, stat: "10% increased Movement Speed", tags: ["bench", "movement"] },
  { id: "bench_crit_multi", type: "suffix", name: "Crafted Crit Multi", tier: 0, stat: "+25% to Critical Strike Multiplier", tags: ["bench", "critical"] },
  { id: "bench_mana", type: "prefix", name: "Crafted Mana", tier: 0, stat: "+50 to maximum Mana", tags: ["bench", "mana"] },
  { id: "bench_spell_dmg", type: "prefix", name: "Crafted Spell Damage", tier: 0, stat: "20% increased Spell Damage", tags: ["bench", "spell"] },
];
