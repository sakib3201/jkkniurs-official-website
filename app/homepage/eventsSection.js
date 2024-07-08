import EventSectionBg from "@/public/illustrations/events_section_bg";
import EventSectionIllustration from "@/public/illustrations/events_section_illustration";
import Link from "next/link";
export default function ArticlesSection() {
  return (
    <div className="relative -mt-0.5 h-auto w-full">
      <EventSectionBg className="h-auto w-full" />
      <EventSectionIllustration className="absolute bottom-0 right-0 top-1/4 h-3/4" />
      <div className="ml-8 absolute bottom-0 left-0 w-1/2 lg:mb-14">
        <p className="text-base bottom-0 font-extrabold text-[#264653] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Engage with brilliance <br />
          Join our events and be a part of the change
        </p>
        <Link href="#">
          <button
            type="button"
            className="mt-4 rounded-full bg-[#fefae0]  px-5 py-2 text-center text-lg font-bold text-[#264653] hover:bg-[#264653] hover:text-[#fefae0]"
          >
            Event
          </button>
        </Link>
      </div>
    </div>
  );
}
