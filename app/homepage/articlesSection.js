import ArticleSectionBg from "@/public/illustrations/articles_section_bg";
import ArticlesSectionIllustration from "@/public/illustrations/articles_section_illustration";
import Link from "next/link";
export default function ArticlesSection() {
  return (
    <div className="relative h-full bg-[#264653] -mt-0.5">
      <ArticleSectionBg className="h-auto w-full" />
      <div className="top-0 flex h-auto w-full flex-col items-center md:absolute md:bottom-0 md:top-auto md:flex-row">
        <ArticlesSectionIllustration className="w-9/12 md:left-0 md:top-1/4 md:h-3/4 md:w-auto" />
        <div className="mb-5 flex w-full flex-col items-center bg-[#264653] md:right-0 md:mr-8 md:w-1/2 md:items-end md:bg-transparent">
          <p className="mt-10 p-4 text-center text-3xl font-extrabold text-[#fefae0] sm:text-lg md:p-0 md:text-right md:text-xl lg:text-2xl xl:text-3xl">
            Expand your horizons with the wealth of knowledge we share
          </p>
          <Link href="#">
            <button
              type="button"
              className="mt-4 rounded-full bg-red-400 px-5 py-2 text-center text-lg font-bold text-[#fefae0] hover:bg-[#fefae0] hover:text-[#264653] active:bg-[#fefae0] active:text-[#264653]"
            >
              Articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
