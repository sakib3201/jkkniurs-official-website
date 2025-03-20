import { articles } from "@/lib/dummy-articles";
import Link from "next/link";
import { CalendarIcon, ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

// Generate metadata for each article
export async function generateMetadata({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} - JKKNIU Research Society`,
    description: article.excerpt,
  };
}

// Process markdown to HTML
async function markdownToHtml(content) {
  const normalizedContent = content
    .split("\n")
    .map((line) => line.trimStart())
    .join("\n")
    .trim();

  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(normalizedContent);

  const html = result
    .toString()
    .replace(/<h1>/g, '<h1 class="text-4xl font-bold mt-12 mb-6">')
    .replace(/<h2>/g, '<h2 class="text-3xl font-bold mt-10 mb-5">')
    .replace(/<h3>/g, '<h3 class="text-2xl font-bold mt-8 mb-4">')
    .replace(/<p>/g, '<p class="mb-6">');

  return html;
}

export default async function ArticlePage({ params }) {
  const article = articles.find((article) => article.slug === params.slug);

  // Handle case when article is not found
  if (!article) {
    notFound();
  }

  // Process the markdown content
  const contentHtml = await markdownToHtml(article.content);

  // Parse the date string into a Date object
  const date = new Date(article.date);

  // Get author initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <article className="container mx-auto px-4 py-10 md:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link href="/articles">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

        {/* Article header */}
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-5 text-sm">
            {article.category}
          </Badge>
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <div className="text-muted-foreground flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{getInitials(article.author)}</AvatarFallback>
              </Avatar>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={article.date}>
                {format(date, "MMMM d, yyyy")}
              </time>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-xl">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-auto max-h-[500px] w-full object-cover"
          />
        </div>

        {/* Article content */}
        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-base prose-p:leading-relaxed prose-p:text-justify dark:prose-invert max-w-none text-justify">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        {/* Article footer */}
        <div className="mt-16 border-t pt-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback>{getInitials(article.author)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">Written by {article.author}</p>
              <p className="text-muted-foreground">
                JKKNIU Research Society Member
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
