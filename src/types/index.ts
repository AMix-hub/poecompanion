export type ItemRarity = "normal" | "magic" | "rare" | "unique";
export type ItemCategory =
  | "weapon"
  | "armour"
  | "accessory"
  | "gem"
  | "flask"
  | "currency"
  | "map";

export interface Item {
  id: string;
  name: string;
  baseName: string;
  type: string;
  category: ItemCategory;
  rarity: ItemRarity;
  levelRequirement: number;
  stats: string[];
  description?: string;
  flavourText?: string;
  tags: string[];
  dropSources?: string[];
}

export type BuildDifficulty = "beginner" | "intermediate" | "advanced" | "expert";

export interface Build {
  id: string;
  name: string;
  characterClass: string;
  ascendancy: string;
  league: string;
  difficulty: BuildDifficulty;
  playstyle: string;
  mainSkill: string;
  strengths: string[];
  weaknesses: string[];
  author: string;
  source: string;
  popularity: number;
  patchVersion: string;
  description: string;
  keyItems: string[];
  tags: string[];
}

export type NewsCategory =
  | "patch-notes"
  | "league-announcement"
  | "event"
  | "community"
  | "development";

export interface NewsArticle {
  id: string;
  title: string;
  category: NewsCategory;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  imageAlt?: string;
}

export interface ActZone {
  name: string;
  levelRange: [number, number];
  objectives: string[];
  waypoint: boolean;
  notableEnemies?: string[];
}

export interface Act {
  id: number;
  name: string;
  levelRange: [number, number];
  town: string;
  zones: ActZone[];
  bossName: string;
  bossLocation: string;
  skillsToGet: string[];
  tips: string[];
  passiveNotes?: string;
}

export type CraftingOrb =
  | "Orb of Transmutation"
  | "Orb of Alteration"
  | "Orb of Augmentation"
  | "Orb of Regal"
  | "Orb of Alchemy"
  | "Chaos Orb"
  | "Exalted Orb"
  | "Orb of Annulment"
  | "Orb of Scouring"
  | "Blessed Orb";

export interface Affix {
  id: string;
  type: "prefix" | "suffix";
  name: string;
  tier: number;
  stat: string;
  tags: string[];
}

export interface CraftableBase {
  id: string;
  name: string;
  type: string;
  category: ItemCategory;
  levelRequirement: number;
  implicitStat?: string;
  affixPool: Affix[];
}

export interface CraftedItem {
  base: CraftableBase;
  rarity: ItemRarity;
  name: string;
  prefixes: Affix[];
  suffixes: Affix[];
  craftedMod?: Affix;
}
