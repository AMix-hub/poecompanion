import type { Item } from "@/types";

const rarityLabel: Record<Item["rarity"], string> = {
  normal: "Normal",
  magic: "Magic",
  rare: "Rare",
  unique: "Unique",
};

const rarityClass: Record<Item["rarity"], string> = {
  normal: "rarity-normal",
  magic: "rarity-magic",
  rare: "rarity-rare",
  unique: "rarity-unique",
};

const rarityBorder: Record<Item["rarity"], string> = {
  normal: "border-stone-500",
  magic: "border-blue-500",
  rare: "border-yellow-500",
  unique: "border-orange-600",
};

const categoryIcon: Record<Item["category"], string> = {
  weapon: "⚔",
  armour: "🛡",
  accessory: "💍",
  gem: "💎",
  flask: "⚗",
  currency: "💰",
  map: "🗺",
};

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div
      className={`poe-card rounded-lg p-4 border ${rarityBorder[item.rarity]} hover:scale-[1.01] transition-transform`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className={`font-bold text-base leading-tight ${rarityClass[item.rarity]}`}>
            {item.name}
          </h3>
          <p className="text-stone-500 text-xs mt-0.5">{item.baseName}</p>
        </div>
        <span
          className="text-2xl flex-shrink-0"
          aria-label={item.category}
          title={item.type}
        >
          {categoryIcon[item.category]}
        </span>
      </div>

      {/* Type & rarity badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide ${rarityClass[item.rarity]} bg-black/30`}
        >
          {rarityLabel[item.rarity]}
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded text-stone-400 bg-black/30 uppercase tracking-wide">
          {item.type}
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded text-stone-500 bg-black/30">
          ilvl req: {item.levelRequirement}
        </span>
      </div>

      {/* Stats */}
      <ul className="space-y-1 mb-3">
        {item.stats.map((stat, i) => (
          <li key={i} className="text-xs text-stone-300 leading-snug">
            <span className="text-poe-gold mr-1">•</span>
            {stat}
          </li>
        ))}
      </ul>

      {/* Description */}
      {item.description && (
        <p className="text-xs text-stone-400 mb-2 leading-relaxed">{item.description}</p>
      )}

      {/* Flavour text */}
      {item.flavourText && (
        <p className="text-xs text-orange-400/70 italic border-t border-poe-border pt-2">
          &ldquo;{item.flavourText}&rdquo;
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-3">
        {item.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
