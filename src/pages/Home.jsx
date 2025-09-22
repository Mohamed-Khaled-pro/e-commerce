import CategorySec from "../components/CategorySec";
import Contact from "./Contact";
import HeroSec from "../components/HeroSec";
import RecommendedSection from "../components/RecommendedSection";
import AreaSec from "../components/AreaSec";

export default function Home() {
  return (
    <div className="bg-orange-50">

    <HeroSec />
    <RecommendedSection />
    <CategorySec />
    <AreaSec />
    <Contact />
    </div>
  )
}
