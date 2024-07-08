import ArticleSectionBg from "@/public/illustrations/articles_section_bg";
import ArticlesSectionIllustration from "@/public/illustrations/articles_section_illustration";
import Link from "next/link";
export default function ArticlesSection() {
  return (
    <div className="relative h-auto w-full">
      <div className="flex items-end">
        <ArticleSectionBg className="h-auto w-full" />
        <div className="absolute bottom-0 flex h-auto w-full items-center">
          <ArticlesSectionIllustration className="left-0 top-1/4 h-3/4" />
          <div className="mr-8 flex w-1/2 flex-col items-end">
            <p className="text-right text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-[#fefae0]">
              Expand your horizons with the wealth of knowledge we share
            </p>
            <Link href="#">
              <button
                type="button"
                className="mt-4 rounded-full bg-red-400 px-5 py-2 text-center text-lg font-bold text-[#fefae0] hover:bg-[#fefae0] hover:text-[#264653]"
              >
                Articles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
