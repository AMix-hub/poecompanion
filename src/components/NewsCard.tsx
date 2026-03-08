import type { NewsArticle } from "@/types";

const categoryLabel: Record<NewsArticle["category"], string> = {
  "patch-notes": "Patch Notes",
  "league-announcement": "League",
  event: "Event",
  community: "Community",
  development: "Development",
};

const categoryColor: Record<NewsArticle["category"], string> = {
  "patch-notes": "text-orange-400 bg-orange-900/30",
  "league-announcement": "text-purple-400 bg-purple-900/30",
  event: "text-yellow-400 bg-yellow-900/30",
  community: "text-green-400 bg-green-900/30",
  development: "text-blue-400 bg-blue-900/30",
};

interface NewsCardProps {
  article: NewsArticle;
  compact?: boolean;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsCard({ article, compact = false }: NewsCardProps) {
  return (
    <article className="poe-card rounded-lg overflow-hidden hover:scale-[1.01] transition-transform">
      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-wide ${categoryColor[article.category]}`}
          >
            {categoryLabel[article.category]}
          </span>
          <time className="text-xs text-stone-500">{formatDate(article.date)}</time>
        </div>

        {/* Title */}
        <h3 className="font-bold text-stone-100 leading-snug mb-2 text-base">
          {article.title}
        </h3>

        {/* Summary */}
        {!compact && (
          <p className="text-sm text-stone-400 leading-relaxed line-clamp-3 mb-3">
            {article.summary}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {article.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export { formatDate };
