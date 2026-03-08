import type { PassiveTree, PassiveTreeRegion, PassiveNode } from "@/types";

// ─── Marauder Region ────────────────────────────────────────────────────────

const marauderKeystones: PassiveNode[] = [
  {
    id: "resolute-technique",
    name: "Resolute Technique",
    type: "keystone",
    stats: ["Never miss.", "Cannot deal critical strikes."],
  },
  {
    id: "iron-reflexes",
    name: "Iron Reflexes",
    type: "keystone",
    stats: [
      "Converts all Evasion Rating to Armour.",
      "Dexterity provides no bonus to Evasion.",
    ],
  },
  {
    id: "unwavering-stance",
    name: "Unwavering Stance",
    type: "keystone",
    stats: ["Cannot be Stunned.", "Cannot Evade enemy Attacks."],
  },
  {
    id: "juggernaut",
    name: "Juggernaut",
    type: "ascendancy",
    stats: ["You cannot be slowed to below base speed."],
    classRestriction: "Marauder",
  },
];

const marauderNotables: PassiveNode[] = [
  {
    id: "constitution",
    name: "Constitution",
    type: "notable",
    stats: ["+40 to maximum Life"],
  },
  {
    id: "vitality-void",
    name: "Vitality Void",
    type: "notable",
    stats: ["Life Leech effects are not removed at Full Life"],
  },
  {
    id: "blood-siphon",
    name: "Blood Siphon",
    type: "notable",
    stats: ["1% of Life Regenerated per second for each Endurance Charge"],
  },
  {
    id: "golems-blood",
    name: "Golem's Blood",
    type: "notable",
    stats: ["+5% to maximum Life", "1.5% of Life Regenerated per second"],
  },
  {
    id: "iron-will",
    name: "Iron Will",
    type: "notable",
    stats: ["Strength's Damage Bonus applies to Spell Damage as well"],
  },
  {
    id: "versatility-marauder",
    name: "Versatility",
    type: "notable",
    stats: ["+20 to Strength and Dexterity"],
  },
  {
    id: "stonewall",
    name: "Stonewall",
    type: "notable",
    stats: ["+30% to Stun Threshold", "50% reduced Stun Duration"],
  },
  {
    id: "bloodless",
    name: "Bloodless",
    type: "notable",
    stats: ["Bleeding cannot kill you"],
  },
];

const marauderRegion: PassiveTreeRegion = {
  id: "marauder",
  name: "Marauder Region",
  primaryClass: "Marauder",
  description:
    "The Marauder region focuses on raw Strength, melee combat, and maximum Life. Nodes here grant life regeneration, stun avoidance, and powerful keystones that alter combat fundamentals.",
  keystones: marauderKeystones,
  notables: marauderNotables,
  smallPassives: [
    "+10 to Strength",
    "4% increased maximum Life",
    "3% increased Armour",
    "10% increased Melee Physical Damage",
    "6% increased Physical Damage with Two Handed Weapons",
    "+20 to maximum Life",
    "2% of Life Regenerated per second",
  ],
};

// ─── Ranger Region ───────────────────────────────────────────────────────────

const rangerKeystones: PassiveNode[] = [
  {
    id: "acrobatics",
    name: "Acrobatics",
    type: "keystone",
    stats: [
      "30% Dodge Attack Hits.",
      "50% less Armour and Energy Shield.",
      "Cannot Block.",
    ],
  },
  {
    id: "phase-acrobatics",
    name: "Phase Acrobatics",
    type: "keystone",
    stats: ["30% Dodge Spell Hits."],
  },
  {
    id: "arrow-dancing",
    name: "Arrow Dancing",
    type: "keystone",
    stats: [
      "40% more chance to Dodge Projectile Attack Hits.",
      "20% less chance to Dodge Melee Attack Hits.",
    ],
  },
  {
    id: "point-blank",
    name: "Point Blank",
    type: "keystone",
    stats: [
      "Projectile Attacks deal up to 50% more Damage to targets at the start of their movement, and deal up to -50% less at the end.",
    ],
  },
];

const rangerNotables: PassiveNode[] = [
  {
    id: "heartseeker",
    name: "Heartseeker",
    type: "notable",
    stats: [
      "20% increased Critical Strike Chance",
      "+20% Critical Strike Multiplier",
    ],
  },
  {
    id: "quartz-infusion",
    name: "Quartz Infusion",
    type: "notable",
    stats: ["20% chance to gain Phasing for 4 seconds on Kill"],
  },
  {
    id: "coordination",
    name: "Coordination",
    type: "notable",
    stats: ["+10 to Dexterity and Intelligence"],
  },
  {
    id: "viper-strike",
    name: "Viper Strike",
    type: "notable",
    stats: ["Poisons you inflict deal Damage 20% faster"],
  },
  {
    id: "rapid-assault",
    name: "Rapid Assault",
    type: "notable",
    stats: ["20% increased Attack Speed", "10% increased Movement Speed"],
  },
  {
    id: "revenge-of-the-hunted",
    name: "Revenge of the Hunted",
    type: "notable",
    stats: ["4% reduced Damage taken if you have Evaded Recently"],
  },
  {
    id: "the-scion-bow-range",
    name: "Longshot",
    type: "notable",
    stats: [
      "Projectiles from Attacks have 10% increased Attack Speed",
      "10% increased Projectile Damage",
    ],
  },
  {
    id: "steady-aim",
    name: "Steady Aim",
    type: "notable",
    stats: [
      "20% increased Physical Damage with Bows",
      "10% increased Attack Speed with Bows",
    ],
  },
];

const rangerRegion: PassiveTreeRegion = {
  id: "ranger",
  name: "Ranger Region",
  primaryClass: "Ranger",
  description:
    "The Ranger region specialises in Dexterity, Evasion, and bow combat. Nodes provide dodge mechanics, movement speed, critical strikes, and projectile damage bonuses.",
  keystones: rangerKeystones,
  notables: rangerNotables,
  smallPassives: [
    "+10 to Dexterity",
    "4% increased Evasion Rating",
    "10% increased Projectile Damage",
    "3% increased Attack Speed",
    "10% increased Damage with Bows",
    "+20 to Evasion Rating",
    "6% increased Movement Speed",
  ],
};

// ─── Witch Region ────────────────────────────────────────────────────────────

const witchKeystones: PassiveNode[] = [
  {
    id: "mind-over-matter",
    name: "Mind Over Matter",
    type: "keystone",
    stats: ["40% of Damage is taken from Mana before Life."],
  },
  {
    id: "chaos-inoculation",
    name: "Chaos Inoculation",
    type: "keystone",
    stats: ["Maximum Life becomes 1.", "Immune to Chaos Damage."],
  },
  {
    id: "eldritch-battery",
    name: "Eldritch Battery",
    type: "keystone",
    stats: [
      "Spend Energy Shield before Mana for Skill Costs.",
      "Energy Shield does not Recharge.",
    ],
  },
  {
    id: "the-agnostic",
    name: "The Agnostic",
    type: "keystone",
    stats: [
      "Maximum Energy Shield becomes 0.",
      "Excess Energy Shield recovery applies to Life.",
    ],
  },
];

const witchNotables: PassiveNode[] = [
  {
    id: "vile-bastion",
    name: "Vile Bastion",
    type: "notable",
    stats: [
      "+50 to maximum Energy Shield",
      "Regenerate 1% of Energy Shield per second",
    ],
  },
  {
    id: "static-electricity",
    name: "Static Electricity",
    type: "notable",
    stats: ["30% increased Lightning Damage"],
  },
  {
    id: "deep-thoughts",
    name: "Deep Thoughts",
    type: "notable",
    stats: ["+30 to maximum Mana", "10% increased Mana Regeneration Rate"],
  },
  {
    id: "arcane-focus",
    name: "Arcane Focus",
    type: "notable",
    stats: ["20% increased Spell Damage", "10% increased Cast Speed"],
  },
  {
    id: "sovereignty",
    name: "Sovereignty",
    type: "notable",
    stats: ["Auras you Cast have 8% increased Effect"],
  },
  {
    id: "light-eater",
    name: "Light Eater",
    type: "notable",
    stats: [
      "10% increased Damage",
      "1% Life Regenerated per second while you have Energy Shield",
    ],
  },
  {
    id: "arcane-swiftness",
    name: "Arcane Swiftness",
    type: "notable",
    stats: ["16% increased Cast Speed", "8% increased Movement Speed"],
  },
  {
    id: "charisma",
    name: "Charisma",
    type: "notable",
    stats: ["4% reduced Mana Reserved", "+20 to maximum Mana"],
  },
];

const witchRegion: PassiveTreeRegion = {
  id: "witch",
  name: "Witch Region",
  primaryClass: "Witch",
  description:
    "The Witch region is devoted to Intelligence, Energy Shield, and Spell Damage. It contains powerful spell amplification nodes alongside keystones that redefine how life, mana, and energy shield interact.",
  keystones: witchKeystones,
  notables: witchNotables,
  smallPassives: [
    "+10 to Intelligence",
    "4% increased maximum Energy Shield",
    "10% increased Spell Damage",
    "4% increased Cast Speed",
    "+20 to maximum Mana",
    "3% increased Energy Shield Recharge Rate",
    "8% increased Elemental Damage",
  ],
};

// ─── Duelist Region ──────────────────────────────────────────────────────────

const duelistKeystones: PassiveNode[] = [
  {
    id: "vaal-pact",
    name: "Vaal Pact",
    type: "keystone",
    stats: [
      "Life Leech is instant.",
      "Life Regeneration has no effect.",
    ],
  },
  {
    id: "bloodless",
    name: "Bloodless",
    type: "keystone",
    stats: ["Bleeding cannot kill you."],
  },
  {
    id: "crimson-dance",
    name: "Crimson Dance",
    type: "keystone",
    stats: ["You can inflict Bleeding on an enemy up to 8 times."],
  },
  {
    id: "duelist-resolute-technique",
    name: "Resolute Technique",
    type: "keystone",
    stats: ["Never miss.", "Cannot deal critical strikes."],
  },
];

const duelistNotables: PassiveNode[] = [
  {
    id: "cleaving",
    name: "Cleaving",
    type: "notable",
    stats: [
      "20% increased Physical Damage with Axes",
      "10% increased Attack Speed with Axes",
    ],
  },
  {
    id: "splitting-strikes",
    name: "Splitting Strikes",
    type: "notable",
    stats: [
      "20% increased Area of Effect of Area Skills",
      "10% increased Physical Damage",
    ],
  },
  {
    id: "blade-of-cunning",
    name: "Blade of Cunning",
    type: "notable",
    stats: ["+15% to Critical Strike Multiplier with Swords"],
  },
  {
    id: "reaving",
    name: "Reaving",
    type: "notable",
    stats: [
      "20% increased Attack Speed",
      "10% reduced Area of Effect",
    ],
  },
  {
    id: "twin-terrors",
    name: "Twin Terrors",
    type: "notable",
    stats: [
      "10% increased Attack Speed",
      "+1 to maximum Frenzy Charges",
    ],
  },
  {
    id: "ambidexterity",
    name: "Ambidexterity",
    type: "notable",
    stats: ["15% increased Physical Damage with One Handed Weapons"],
  },
  {
    id: "fencing",
    name: "Fencing",
    type: "notable",
    stats: [
      "20% increased Physical Damage with Swords",
      "5% increased Attack Speed",
    ],
  },
  {
    id: "blade-master",
    name: "Blade Master",
    type: "notable",
    stats: [
      "20% increased Physical Damage with Swords",
      "10% increased Critical Strike Chance with One Handed Weapons",
    ],
  },
];

const duelistRegion: PassiveTreeRegion = {
  id: "duelist",
  name: "Duelist Region",
  primaryClass: "Duelist",
  description:
    "The Duelist region blends Strength and Dexterity for physical, attack-focused builds. Nodes reward bleeding, leech, and weapon mastery for both one-handed and area-attack styles.",
  keystones: duelistKeystones,
  notables: duelistNotables,
  smallPassives: [
    "+10 to Strength and Dexterity",
    "5% increased Physical Damage",
    "3% increased Attack Speed",
    "10% increased Damage with Swords",
    "4% increased Melee Critical Strike Chance",
    "3% increased Bleed Damage",
    "10% increased Leech Rate",
  ],
};

// ─── Templar Region ──────────────────────────────────────────────────────────

const templarKeystones: PassiveNode[] = [
  {
    id: "elemental-overload",
    name: "Elemental Overload",
    type: "keystone",
    stats: [
      "40% more Elemental Damage if you've Crit in the past 8 seconds.",
      "No Critical Strike Multiplier.",
      "No Damage Bonus from being Blinded.",
    ],
  },
  {
    id: "avatar-of-fire",
    name: "Avatar of Fire",
    type: "keystone",
    stats: [
      "50% of Physical, Cold and Lightning Damage Converted to Fire Damage.",
      "Can only deal Fire Damage.",
    ],
  },
  {
    id: "ancestral-bond",
    name: "Ancestral Bond",
    type: "keystone",
    stats: [
      "Can have 1 additional Totem summoned at a time.",
      "You can't deal Damage with your Skills yourself.",
    ],
  },
  {
    id: "divine-shield",
    name: "Divine Shield",
    type: "keystone",
    stats: ["1% of Armour is Regenerated as Energy Shield per second."],
  },
];

const templarNotables: PassiveNode[] = [
  {
    id: "totem-mastery",
    name: "Totem Mastery",
    type: "notable",
    stats: ["Totems have 25% more Life", "20% increased Totem Damage"],
  },
  {
    id: "holy-dominion",
    name: "Holy Dominion",
    type: "notable",
    stats: ["30% increased Elemental Damage", "10% increased Cast Speed"],
  },
  {
    id: "purity-of-flesh",
    name: "Purity of Flesh",
    type: "notable",
    stats: ["+30 to maximum Life", "10% increased Strength"],
  },
  {
    id: "inquisitors-mark",
    name: "Inquisitor's Mark",
    type: "notable",
    stats: ["25% increased Critical Strike Chance against Hexed Enemies"],
  },
  {
    id: "amplify",
    name: "Amplify",
    type: "notable",
    stats: ["15% increased Area of Effect of Area Skills"],
  },
  {
    id: "templars-authority",
    name: "Templar's Authority",
    type: "notable",
    stats: ["Auras you Cast have 10% increased Effect"],
  },
  {
    id: "divine-wrath",
    name: "Divine Wrath",
    type: "notable",
    stats: [
      "30% increased Fire Damage",
      "15% increased Elemental Damage with Staves",
    ],
  },
  {
    id: "sacred-fire",
    name: "Sacred Fire",
    type: "notable",
    stats: [
      "20% increased Fire Damage",
      "Regenerate 1% of Life per second if you have been Hit Recently",
    ],
  },
];

const templarRegion: PassiveTreeRegion = {
  id: "templar",
  name: "Templar Region",
  primaryClass: "Templar",
  description:
    "The Templar region merges Strength and Intelligence for spell-based and totem builds. Nodes amplify elemental damage, aura effectiveness, and totem capabilities alongside strong defensive options.",
  keystones: templarKeystones,
  notables: templarNotables,
  smallPassives: [
    "+10 to Strength and Intelligence",
    "8% increased Elemental Damage",
    "4% increased Cast Speed",
    "3% increased maximum Energy Shield",
    "5% increased Totem Damage",
    "+15 to maximum Life and Energy Shield",
    "10% increased Fire Damage",
  ],
};

// ─── Shadow Region ───────────────────────────────────────────────────────────

const shadowKeystones: PassiveNode[] = [
  {
    id: "ghost-reaver",
    name: "Ghost Reaver",
    type: "keystone",
    stats: [
      "Leech Energy Shield instead of Life.",
      "Maximum total Energy Shield Recovery per second from Leech is doubled.",
    ],
  },
  {
    id: "opportunistic",
    name: "Opportunistic",
    type: "keystone",
    stats: [
      "Lucky Critical Strike Chance while you are Shocked or Ignited.",
    ],
  },
  {
    id: "deadly-infusion",
    name: "Deadly Infusion",
    type: "keystone",
    stats: [
      "Poison you inflict deals 10% increased Damage per Frenzy Charge.",
    ],
  },
  {
    id: "perfect-agony",
    name: "Perfect Agony",
    type: "keystone",
    stats: [
      "Modifiers to Critical Strike Multiplier also apply to Damage over Time Multiplier for Ailments from Critical Strikes at 30% of their value.",
    ],
  },
];

const shadowNotables: PassiveNode[] = [
  {
    id: "ambush",
    name: "Ambush",
    type: "notable",
    stats: [
      "40% increased Critical Strike Chance against Enemies that are on Full Life",
    ],
  },
  {
    id: "noxious-strike",
    name: "Noxious Strike",
    type: "notable",
    stats: ["Poisons you inflict deal Damage 20% faster"],
  },
  {
    id: "toxic-strikes",
    name: "Toxic Strikes",
    type: "notable",
    stats: ["10% chance to Poison on Hit"],
  },
  {
    id: "dirty-techniques",
    name: "Dirty Techniques",
    type: "notable",
    stats: [
      "Attacks have 50% chance to inflict Bleeding when Poisoning an Enemy",
    ],
  },
  {
    id: "precise-technique",
    name: "Precise Technique",
    type: "notable",
    stats: [
      "20% more Attack Damage if your Accuracy Rating is higher than your Maximum Life",
    ],
  },
  {
    id: "shadow-revenge",
    name: "Revenge of the Hunted",
    type: "notable",
    stats: ["4% reduced Damage taken if you have Evaded Recently"],
  },
  {
    id: "nightstalker",
    name: "Nightstalker",
    type: "notable",
    stats: [
      "20% increased Damage while you have Elusive",
      "25% increased Effect of Elusive",
    ],
  },
  {
    id: "patient-reaper",
    name: "Patient Reaper",
    type: "notable",
    stats: [
      "2% of Life Regenerated per second if you have Killed Recently",
      "2% of Mana Regenerated per second if you have Killed Recently",
    ],
  },
];

const shadowRegion: PassiveTreeRegion = {
  id: "shadow",
  name: "Shadow Region",
  primaryClass: "Shadow",
  description:
    "The Shadow region combines Dexterity and Intelligence for critical strike, poison, and trap builds. Nodes enhance critical hit frequency and damage, poison application, and elusive mechanics.",
  keystones: shadowKeystones,
  notables: shadowNotables,
  smallPassives: [
    "+10 to Dexterity and Intelligence",
    "10% increased Critical Strike Chance",
    "+10% to Critical Strike Multiplier",
    "5% chance to Poison on Hit",
    "4% increased Attack and Cast Speed",
    "10% increased Damage over Time",
    "3% increased Movement Speed",
  ],
};

// ─── Scion Region ────────────────────────────────────────────────────────────

const scionKeystones: PassiveNode[] = [
  {
    id: "mortal-conviction",
    name: "Mortal Conviction",
    type: "keystone",
    stats: [
      "Can only have one Non-Banner Aura on you from your Skills.",
      "That Aura has 50% increased Effect.",
    ],
  },
  {
    id: "corruption-keystone",
    name: "Corruption",
    type: "keystone",
    stats: [
      "30% less Maximum Life per Corrupted item.",
      "30% less Maximum Energy Shield per Corrupted item.",
    ],
  },
];

const scionNotables: PassiveNode[] = [
  {
    id: "heart-of-the-warrior",
    name: "Heart of the Warrior",
    type: "notable",
    stats: ["+12% to maximum Life"],
  },
  {
    id: "diamond-skin",
    name: "Diamond Skin",
    type: "notable",
    stats: ["+15% to all Elemental Resistances"],
  },
  {
    id: "resourcefulness",
    name: "Resourcefulness",
    type: "notable",
    stats: ["+20 to Intelligence", "+20 to Dexterity"],
  },
  {
    id: "practical-application",
    name: "Practical Application",
    type: "notable",
    stats: ["+10 to all Attributes"],
  },
  {
    id: "nullification",
    name: "Nullification",
    type: "notable",
    stats: [
      "+10% to all Elemental Resistances",
      "8% reduced Elemental Damage Taken",
    ],
  },
  {
    id: "force-shaper",
    name: "Force Shaper",
    type: "notable",
    stats: [
      "10% increased Strength",
      "10% increased Dexterity",
      "10% increased Intelligence",
    ],
  },
];

const scionRegion: PassiveTreeRegion = {
  id: "scion",
  name: "Scion Region",
  primaryClass: "Scion",
  description:
    "The Scion starts at the centre of the passive tree with access to all class regions. Her nodes provide balanced attribute bonuses and hybrid synergies, making her the most versatile class.",
  keystones: scionKeystones,
  notables: scionNotables,
  smallPassives: [
    "+5 to all Attributes",
    "4% increased Damage",
    "+10% to all Elemental Resistances",
    "3% increased Attack and Cast Speed",
    "+20 to maximum Life",
    "+20 to maximum Mana",
    "5% increased Skill Effect Duration",
  ],
};

// ─── Life Wheel (Shared Center) ───────────────────────────────────────────────

const lifeWheelKeystones: PassiveNode[] = [
  {
    id: "vaal-pact-shared",
    name: "Vaal Pact",
    type: "keystone",
    stats: [
      "Life Leech is instant.",
      "Life Regeneration has no effect.",
    ],
  },
  {
    id: "life-mastery",
    name: "Life Mastery",
    type: "mastery",
    stats: ["Skills Cost no Mana while at full Life"],
  },
];

const lifeWheelNotables: PassiveNode[] = [
  {
    id: "scion-life-wheel",
    name: "Scion Life Wheel",
    type: "notable",
    stats: ["+12% to maximum Life"],
  },
  {
    id: "thick-skin",
    name: "Thick Skin",
    type: "notable",
    stats: ["+6% to maximum Life"],
  },
  {
    id: "flask-of-the-gods",
    name: "Flask of the Gods",
    type: "notable",
    stats: [
      "Flask Duration is 25% longer",
      "Flasks applied to you have 25% increased effect",
    ],
  },
  {
    id: "sanctity",
    name: "Sanctity",
    type: "notable",
    stats: ["+10% to maximum Life", "1% of Life Regenerated per second"],
  },
  {
    id: "written-in-blood",
    name: "Written in Blood",
    type: "notable",
    stats: [
      "+30 to maximum Life",
      "6% increased maximum Life",
    ],
  },
];

const lifeWheelRegion: PassiveTreeRegion = {
  id: "life-wheel",
  name: "Life Wheel",
  primaryClass: "Shared",
  description:
    "A universal cluster near the centre of the tree offering maximum Life bonuses accessible to any class. Flask effectiveness and life regeneration nodes make it a common detour for many builds.",
  keystones: lifeWheelKeystones,
  notables: lifeWheelNotables,
  smallPassives: [
    "+10 to maximum Life",
    "4% increased maximum Life",
    "1% of Life Regenerated per second",
    "20% increased Flask Recovery Rate",
    "+5% to maximum Life",
    "6% increased Life Recovery from Flasks",
  ],
};

// ─── Spell Damage Cluster (Shared Top) ───────────────────────────────────────

const spellClusterKeystones: PassiveNode[] = [
  {
    id: "ancestral-knowledge",
    name: "Ancestral Knowledge",
    type: "keystone",
    stats: [
      "+30 to maximum Mana",
      "Intelligence affects Spell Damage at 200% of its value.",
    ],
  },
];

const spellClusterNotables: PassiveNode[] = [
  {
    id: "arcane-surge",
    name: "Arcane Surge",
    type: "notable",
    stats: ["20% increased Spell Damage while you have Arcane Surge"],
  },
  {
    id: "prodigal-perfection",
    name: "Prodigal Perfection",
    type: "notable",
    stats: ["10% increased Elemental Damage", "5% increased Cast Speed"],
  },
  {
    id: "influence",
    name: "Influence",
    type: "notable",
    stats: [
      "20% increased Effect of Non-Damaging Ailments on Enemies",
      "10% increased Spell Damage",
    ],
  },
  {
    id: "mental-acuity",
    name: "Mental Acuity",
    type: "notable",
    stats: [
      "10% increased Cast Speed",
      "20% increased Mana Regeneration Rate",
    ],
  },
];

const spellClusterRegion: PassiveTreeRegion = {
  id: "spell-damage-cluster",
  name: "Spell Damage Cluster",
  primaryClass: "Shared",
  description:
    "A shared cluster in the upper area of the tree available to intelligence-based classes. Focuses on amplifying spell damage, cast speed, and mana efficiency.",
  keystones: spellClusterKeystones,
  notables: spellClusterNotables,
  smallPassives: [
    "10% increased Spell Damage",
    "+20 to maximum Mana",
    "4% increased Cast Speed",
    "8% increased Elemental Damage",
    "+10 to Intelligence",
    "3% increased Mana Regeneration Rate",
  ],
};

// ─── Attack Cluster (Shared Bottom) ──────────────────────────────────────────

const attackClusterKeystones: PassiveNode[] = [
  {
    id: "perfect-agony-shared",
    name: "Perfect Agony",
    type: "keystone",
    stats: [
      "Modifiers to Critical Strike Multiplier also apply to Damage over Time Multiplier for Ailments from Critical Strikes at 30% of their value.",
    ],
  },
];

const attackClusterNotables: PassiveNode[] = [
  {
    id: "fury-bolts",
    name: "Fury Bolts",
    type: "notable",
    stats: ["15% increased Attack Speed with Bows"],
  },
  {
    id: "overwhelming-force",
    name: "Overwhelming Force",
    type: "notable",
    stats: ["5% more Physical Damage"],
  },
  {
    id: "heavy-draw",
    name: "Heavy Draw",
    type: "notable",
    stats: [
      "20% increased Physical Damage with Bows",
      "8% increased Attack Speed with Bows",
    ],
  },
  {
    id: "iron-grip",
    name: "Iron Grip",
    type: "notable",
    stats: [
      "Strength's Damage Bonus applies to Projectile Attack Damage as well",
    ],
  },
];

const attackClusterRegion: PassiveTreeRegion = {
  id: "attack-cluster",
  name: "Attack Cluster",
  primaryClass: "Shared",
  description:
    "A shared cluster in the lower area of the tree accessible to physical and bow attack builds. Provides physical damage, attack speed, and ranged combat enhancements.",
  keystones: attackClusterKeystones,
  notables: attackClusterNotables,
  smallPassives: [
    "5% increased Physical Damage",
    "3% increased Attack Speed",
    "10% increased Damage with Bows",
    "+10 to Dexterity",
    "4% increased Projectile Damage",
    "3% increased Accuracy Rating",
  ],
};

// ─── Passive Tree Root Export ─────────────────────────────────────────────────

export const passiveTree: PassiveTree = {
  version: "3.25",
  regions: [
    marauderRegion,
    rangerRegion,
    witchRegion,
    duelistRegion,
    templarRegion,
    shadowRegion,
    scionRegion,
    lifeWheelRegion,
    spellClusterRegion,
    attackClusterRegion,
  ],
};

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getAllKeystones(): PassiveNode[] {
  return passiveTree.regions.flatMap((region) => region.keystones);
}

export function getAllNotables(): PassiveNode[] {
  return passiveTree.regions.flatMap((region) => region.notables);
}

export function getRegionByClass(className: string): PassiveTreeRegion | undefined {
  const normalised = className.toLowerCase();
  return passiveTree.regions.find(
    (region) => region.primaryClass.toLowerCase() === normalised
  );
}

export function searchPassives(query: string): PassiveNode[] {
  const q = query.toLowerCase();
  const allNodes: PassiveNode[] = passiveTree.regions.flatMap((region) => [
    ...region.keystones,
    ...region.notables,
  ]);
  return allNodes.filter(
    (node) =>
      node.name.toLowerCase().includes(q) ||
      node.stats.some((stat) => stat.toLowerCase().includes(q)) ||
      (node.description?.toLowerCase().includes(q) ?? false)
  );
}
