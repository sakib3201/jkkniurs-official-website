import EventSectionBg from "@/public/illustrations/events_section_bg";
import EventSectionIllustration from "@/public/illustrations/events_section_illustration";
import Link from "next/link";
export default function ArticlesSection() {
  return (
    <div className="relative -mt-0.5 h-auto bg-[#FF735C]">
      <div className="">
        <EventSectionBg className="h-auto w-full" />
        <div className="flex h-full w-full flex-col items-center md:bottom-0 md:top-auto md:flex-row">
          <EventSectionIllustration className="w-9/12 md:absolute md:right-0 md:top-1/4 md:h-3/4 md:w-auto" />
          <div className="mb-5 flex flex-col items-center md:absolute md:bottom-0 md:ml-8 md:w-1/3 md:items-start lg:mb-14">
            <p className="mt-16 p-4 text-center text-3xl font-extrabold text-[#264653] sm:text-lg md:p-0 md:text-left md:text-xl lg:text-2xl xl:text-3xl">
              Engage with brilliance <br />
              Join our events and be a part of the change
            </p>
            <Link href="#">
              <button
                type="button"
                className="mt-4 rounded-full bg-[#fefae0] px-5 py-2 text-center text-lg font-bold text-[#264653] hover:bg-[#264653] hover:text-[#fefae0]"
              >
                Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
