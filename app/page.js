import HeroSection from "./homepage/hero";
import Footer from "./footer/footer";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center bg-indigo-300 p-10">Home Page</div>
    </div>
  );
}
