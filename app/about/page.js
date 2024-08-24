import ArticleSectionBg from "@/public/illustrations/articles_section_bg";
import ArticlesSectionIllustration from "@/public/illustrations/articles_section_illustration";
export default function About() {
  return (
    <div className="bg-gray-700 h-screen w-full flex items-center">
      <ArticlesSectionIllustration className="left-0 top-1/4 h-3/4" />
      <p className="right-4 w-1/2 text-right text-4xl font-extrabold text-[#29250a]">
        Expand your horizons with the wealth of knowledge we share
      </p>
    </div>
  );
}
