import HeroSection from "./homepage/hero";
import ArticlesSection from "./homepage/articlesSection";
import EventsSection from "./homepage/eventsSection";
import Wave from "@/public/illustrations/waves";
export default function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <ArticlesSection />
      </section>
      <section>
        {/* <EventsSection /> */}
      </section>
      {/* <Wave className={"-mt-0.5 -mb-0.5"} /> */}
    </div>
  );
}
