import CategorySec from "../components/CategorySec";
import Contact from "./Contact";
import HeroSec from "../components/HeroSec";
import RecommendedSection from "../components/RecommendedSection";
import AreaSec from "../components/AreaSec";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import HowToCook from "../components/HowToCook";
import Info from "../components/Info";
export default function Home() {
  const location = useLocation();

  return (
    <div className="bg-orange-50">
      <HeroSec />
      <RecommendedSection />
      <CategorySec key={`category-${location.pathname}`} />
      <AreaSec key={`area-${location.pathname}`} />
      <HowToCook />
      <Contact />
      <Info />
      <Footer />
    </div>
  );
}
