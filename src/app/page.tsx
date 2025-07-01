import FeaturesSection from "./components/Features";
import HeroSection from "./components/sections/HeroSection";
import MissionStatement from "./components/sections/MissionStatement";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MissionStatement />
      <FeaturesSection />
    </div>
  );
}
