"use client";

import { useState, useMemo } from "react";
import { newsArticles } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import type { NewsArticle } from "@/types";

type Category = NewsArticle["category"] | "all";

const categoryOptions: { value: Category; label: string; icon: string }[] = [
  { value: "all", label: "All", icon: "📰" },
  { value: "patch-notes", label: "Patch Notes", icon: "📋" },
  { value: "league-announcement", label: "League", icon: "🌍" },
  { value: "event", label: "Events", icon: "🎉" },
  { value: "community", label: "Community", icon: "👥" },
  { value: "development", label: "Development", icon: "⚙" },
];

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return [...newsArticles]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter((a) => {
        if (category !== "all" && a.category !== category) return false;
        if (search) {
          const q = search.toLowerCase();
          return a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q);
        }
        return true;
      });
  }, [category, search]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">📰 News</h1>
        <p className="text-stone-400 max-w-2xl">
          Latest Path of Exile news — patch notes, league announcements, events, community
          highlights, and development updates.
        </p>
      </div>

      {/* Filters */}
      <div className="poe-card rounded-lg p-4 mb-6 space-y-4">
        <div>
          <label htmlFor="news-search" className="sr-only">
            Search news
          </label>
          <input
            id="news-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news…"
            className="w-full bg-stone-900 border border-poe-border rounded px-4 py-2 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-poe-gold transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setCategory(opt.value)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                category === opt.value
                  ? "bg-poe-gold text-poe-dark"
                  : "bg-stone-800 text-stone-400 hover:text-poe-gold"
              }`}
            >
              <span>{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-stone-500 mb-4">
        Showing {filtered.length} of {newsArticles.length} articles
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-stone-600">
          <p className="text-2xl mb-2">🔍</p>
          <p>No articles found.</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
            }}
            className="mt-3 text-poe-gold hover:underline text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((article) => (
            <div key={article.id}>
              <button
                className="w-full text-left"
                onClick={() =>
                  setExpandedId((prev) => (prev === article.id ? null : article.id))
                }
                aria-expanded={expandedId === article.id}
              >
                <NewsCard article={article} />
              </button>

              {/* Expanded full content */}
              {expandedId === article.id && (
                <div className="poe-card rounded-b-lg border-t-0 border border-poe-gold/20 p-6 -mt-2">
                  <div className="prose prose-sm prose-invert max-w-none">
                    {article.content.split("\n\n").map((paragraph, i) => {
                      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                        return (
                          <h3 key={i} className="text-poe-gold font-bold text-base mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, "")}
                          </h3>
                        );
                      }
                      // Handle bold inline
                      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                      return (
                        <p key={i} className="text-stone-300 text-sm leading-relaxed mb-3">
                          {parts.map((part, j) =>
                            part.startsWith("**") ? (
                              <strong key={j} className="text-poe-gold font-semibold">
                                {part.replace(/\*\*/g, "")}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="mt-4 text-xs text-stone-500 hover:text-poe-gold transition-colors"
                  >
                    ↑ Collapse
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
