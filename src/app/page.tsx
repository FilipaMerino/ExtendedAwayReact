import FeaturesSection from "./components/features/Features";
import HeroSection from "./pages/homepage/Hero/HeroSection";
import MissionStatement from "./pages/homepage/Mission/MissionStatement";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MissionStatement />
      <FeaturesSection />
    </div>
  );
}
