import Link from "next/link";
import type { Build } from "@/types";

const difficultyLabel: Record<Build["difficulty"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

const difficultyColor: Record<Build["difficulty"], string> = {
  beginner: "text-green-400 bg-green-900/30",
  intermediate: "text-blue-400 bg-blue-900/30",
  advanced: "text-orange-400 bg-orange-900/30",
  expert: "text-red-400 bg-red-900/30",
};

const ascendancyColors: Record<string, string> = {
  Slayer: "text-red-400",
  Berserker: "text-red-500",
  Chieftain: "text-orange-400",
  Deadeye: "text-green-400",
  Raider: "text-emerald-400",
  Pathfinder: "text-teal-400",
  Elementalist: "text-purple-400",
  Necromancer: "text-blue-300",
  Occultist: "text-violet-400",
  Inquisitor: "text-yellow-300",
  Hierophant: "text-amber-400",
  Guardian: "text-sky-300",
  Assassin: "text-slate-300",
  Saboteur: "text-cyan-400",
  Trickster: "text-pink-400",
  Juggernaut: "text-stone-300",
  Gladiator: "text-rose-400",
  Champion: "text-amber-300",
  Ascendant: "text-white",
};

interface BuildCardProps {
  build: Build;
}

export default function BuildCard({ build }: BuildCardProps) {
  const ascColor = ascendancyColors[build.ascendancy] ?? "text-poe-gold";
  return (
    <Link href={`/builds/${build.id}`} className="block">
      <div className="poe-card rounded-lg p-5 hover:scale-[1.01] transition-transform cursor-pointer hover:border-poe-gold/40 border border-transparent">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="font-bold text-base text-stone-100 leading-tight">{build.name}</h3>
          <p className={`text-sm font-semibold ${ascColor}`}>
            {build.ascendancy}{" "}
            <span className="text-stone-500 font-normal text-xs">({build.characterClass})</span>
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <span
            className={`text-[10px] px-2 py-0.5 rounded font-semibold uppercase ${difficultyColor[build.difficulty]}`}
          >
            {difficultyLabel[build.difficulty]}
          </span>
          <p className="text-stone-500 text-xs mt-1">v{build.patchVersion}</p>
        </div>
      </div>

      {/* Main skill + playstyle */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs px-2 py-0.5 rounded bg-poe-gold/10 text-poe-gold font-medium">
          ⚡ {build.mainSkill}
        </span>
        <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
          {build.playstyle}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-stone-400 leading-relaxed mb-3 line-clamp-3">
        {build.description}
      </p>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <p className="text-[10px] text-green-500 font-semibold uppercase mb-1">Strengths</p>
          <ul className="space-y-0.5">
            {build.strengths.slice(0, 2).map((s, i) => (
              <li key={i} className="text-[11px] text-stone-400 leading-tight">
                <span className="text-green-500 mr-1">+</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] text-red-400 font-semibold uppercase mb-1">Weaknesses</p>
          <ul className="space-y-0.5">
            {build.weaknesses.slice(0, 2).map((w, i) => (
              <li key={i} className="text-[11px] text-stone-400 leading-tight">
                <span className="text-red-400 mr-1">−</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-poe-border">
        <div className="flex gap-1">
          {build.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-500">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs text-stone-500">
          <span title="Popularity">🔥</span>
          <span>{build.popularity}%</span>
          <span className="ml-1 text-stone-600">· {build.source}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}
