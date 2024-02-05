import HeroSection from "./components/HeroSection"
import FeaturesGrid from "./components/FeaturesGrid"
import MoreInformation from "./components/MoreInformation"
import DynamicBackground from "./DynamicBackground"

export default function Home() {
  return (
    <main className="bg-[#002812]">
      <DynamicBackground />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesGrid />
        <MoreInformation />
      </div>
    </main>
  )
}
