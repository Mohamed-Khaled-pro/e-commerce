import Contact from "../components/Contact";
import HeroSec from "../components/HeroSec";
import RecommendedSection from "../components/RecomendedSection";

export default function Home() {
  return (
    <div className="bg-orange-50">

    <HeroSec />
    <RecommendedSection />
    <Contact />
    </div>
  )
}
