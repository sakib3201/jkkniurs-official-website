"use client";

import { useState } from "react";
import { articles } from "@/lib/dummy-articles";
import { ArticleCard } from "@/components/ui/article-card";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // Filter articles based on selected category
  const filteredArticles =
    activeCategory === "All Categories"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div className="mb-12 flex flex-col items-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Research Articles
        </h1>
        <p className="text-muted-foreground max-w-2xl text-xl">
          Explore the latest research, insights and scholarly work from JKKNIU
          Research Society members
        </p>
      </div>

      {/* Filters with click functionality */}
      <div className="mb-10 flex justify-center">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            "All Categories",
            "Technology",
            "Environment",
            "Economics",
            "Psychology",
            "Neuroscience",
          ].map((category) => (
            <button
              key={category}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } px-4 py-1 text-sm font-medium transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className="col-span-3 text-center text-lg text-gray-500">
            No articles found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
