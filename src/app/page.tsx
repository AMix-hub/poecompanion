import Link from "next/link";
import { getLatestNews } from "@/data/news";
import { getPopularBuilds } from "@/data/builds";
import NewsCard from "@/components/NewsCard";

const features = [
  {
    href: "/leveling-guide",
    icon: "📖",
    title: "Leveling Guide",
    description:
      "Act-by-act leveling guide covering all 10 acts, bosses, skill gems, and pro tips to reach maps fast.",
    color: "border-green-700 hover:border-green-500",
    badge: "Acts 1–10",
  },
  {
    href: "/items",
    icon: "⚔",
    title: "Items Database",
    description:
      "Browse weapons, armour, accessories, gems, flasks and currency. Filter by rarity, category, and search by name.",
    color: "border-blue-700 hover:border-blue-500",
    badge: "All items",
  },
  {
    href: "/crafting",
    icon: "🔨",
    title: "Crafting Simulator",
    description:
      "Simulate crafting with all major currency orbs. Pick a base, apply orbs, and experiment with the affix system.",
    color: "border-orange-700 hover:border-orange-500",
    badge: "Interactive",
  },
  {
    href: "/builds",
    icon: "🛡",
    title: "Pro Builds",
    description:
      "Curated builds from top players and community guides. Filter by class, difficulty, and playstyle.",
    color: "border-purple-700 hover:border-purple-500",
    badge: "10+ builds",
  },
  {
    href: "/news",
    icon: "📰",
    title: "News",
    description:
      "Patch notes, league announcements, events, and community highlights — all in one place.",
    color: "border-yellow-700 hover:border-yellow-500",
    badge: "Latest updates",
  },
];

const classes = [
  { name: "Marauder", icon: "⚔", color: "text-red-400" },
  { name: "Ranger", icon: "🏹", color: "text-green-400" },
  { name: "Witch", icon: "🔮", color: "text-purple-400" },
  { name: "Duelist", icon: "⚡", color: "text-yellow-400" },
  { name: "Templar", icon: "✝", color: "text-blue-300" },
  { name: "Shadow", icon: "🗡", color: "text-slate-300" },
  { name: "Scion", icon: "👑", color: "text-poe-gold" },
];

export default function HomePage() {
  const latestNews = getLatestNews(3);
  const popularBuilds = getPopularBuilds(3);

  return (
    <div>
      {/* Hero */}
      <section className="text-center py-14 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-poe-gold/10 text-poe-gold text-xs font-semibold mb-4 border border-poe-gold/20">
          ⚡ Your Path of Exile Companion
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-stone-100 mb-4 leading-tight">
          Master Path of Exile
        </h1>
        <p className="text-stone-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Everything you need: leveling guides, items database, crafting simulator, pro builds
          sourced from top players, and the latest news — all in one place.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/leveling-guide"
            className="px-6 py-3 rounded bg-poe-gold text-poe-dark font-bold text-sm hover:bg-poe-gold-light transition-colors"
          >
            Start Leveling Guide →
          </Link>
          <Link
            href="/builds"
            className="px-6 py-3 rounded border border-poe-border text-stone-300 font-medium text-sm hover:border-poe-gold hover:text-poe-gold transition-colors"
          >
            Browse Builds
          </Link>
        </div>
      </section>

      <div className="poe-divider mb-10" />

      {/* Feature cards */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-poe-gold mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className={`poe-card rounded-lg p-6 border transition-all ${f.color} group`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-stone-100 group-hover:text-poe-gold transition-colors">
                    {f.title}
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-400 font-medium">
                    {f.badge}
                  </span>
                </div>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">{f.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Classes overview */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-poe-gold mb-6">Character Classes</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {classes.map((cls) => (
            <Link
              key={cls.name}
              href={`/builds?class=${cls.name}`}
              className="poe-card rounded-lg p-4 text-center hover:border-poe-gold transition-colors group"
            >
              <div className="text-2xl mb-1">{cls.icon}</div>
              <p className={`text-xs font-semibold ${cls.color} group-hover:opacity-100`}>
                {cls.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Builds */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-poe-gold">🔥 Popular Builds</h2>
          <Link href="/builds" className="text-sm text-stone-400 hover:text-poe-gold transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularBuilds.map((build) => (
            <Link
              key={build.id}
              href="/builds"
              className="poe-card rounded-lg p-4 hover:border-poe-gold transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-stone-100 text-sm">{build.name}</h3>
                <span className="text-xs text-stone-500 bg-stone-800 px-1.5 py-0.5 rounded flex-shrink-0">
                  🔥 {build.popularity}%
                </span>
              </div>
              <p className="text-xs text-poe-gold font-medium mb-1">{build.ascendancy}</p>
              <p className="text-xs text-stone-400 line-clamp-2">{build.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {build.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-500">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-poe-gold">📰 Latest News</h2>
          <Link href="/news" className="text-sm text-stone-400 hover:text-poe-gold transition-colors">
            All news →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
