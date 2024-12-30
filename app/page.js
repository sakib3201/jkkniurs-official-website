import HeroSection from "./homepage/hero";
import ArticlesSection from "./homepage/articlesSection";
import EventsSection from "./homepage/eventsSection";
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
        <EventsSection />
      </section>
    </div>
  );
}
