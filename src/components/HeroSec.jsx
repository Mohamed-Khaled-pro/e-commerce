import { searchByLetter, searchMeals } from "../services/mealServices";
import { useState, useEffect, useMemo, memo } from "react";
import { useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Slider from "./Slider";

const ResultItem = memo(({ meal, onSelect }) => (
  <li
    key={meal.idMeal}
    className="px-4 py-2 cursor-pointer hover:bg-gray-900/40 text-white font-bold tracking-wider transition-colors duration-300"
    onClick={() => onSelect(meal)}
  >
    {meal.strMeal}
  </li>
));

export default function HeroSec() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const images = useMemo(() => [
    { id: 1, src: "/assets/mealimg.webp" },
    { id: 2, src: "/assets/mealimg2.webp" },
    { id: 3, src: "/assets/mealimg3.webp" },
    { id: 4, src: "/assets/mealimg4.webp" },
    { id: 5, src: "/assets/mealimg5.webp" },
    { id: 6, src: "/assets/mealimg6.webp" },
    { id: 7, src: "/assets/mealimg7.webp" },
    { id: 8, src: "/assets/mealimg8.webp" },
  ], []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const fetchMeals = async () => {
      try {
        let data;
        if (query.trim().length === 1) {
          const res = await searchByLetter(query.trim());
          data = res.meals;
        } else {
          const res = await searchMeals(query.trim());
          data = res.meals;
        }
        setResults(data || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    const delayDebounce = setTimeout(fetchMeals, 400);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelectMeal = (meal) => {
    setShowResults(false);
    setQuery("");
    navigate(`/meal/${meal.idMeal}`);
  };

  const resultsList = useMemo(() => (
    <ul className="absolute z-10 w-full bg-orange-700 shadow-sm rounded-lg mt-2 max-h-60 overflow-y-auto text-left p-3 scrollbar-hide transition-all">
      {results.map((meal) => (
        <ResultItem key={meal.idMeal} meal={meal} onSelect={handleSelectMeal} />
      ))}
    </ul>
  ), [results]);

  return (
    <div className="Hero relative w-full flex flex-col justify-center lg:justify-start items-center">
      <motion.div
        className="max-w-6xl text-center space-y-4 lg:space-y-3 text-white mt-30 md:mt-28"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl mt-4 font-bold leading-tight">
          Discover Delicious Recipes
        </h1>

        <p className="text-md px-2 md:text-xl text-gray-200 italic">
          Find step-by-step recipes, cooking tips, and food inspiration from around the world.
        </p>

        <div className="relative w-full max-w-lg mx-auto p-2 md:p-0">
          <div className="flex items-center bg-black/40 rounded-full shadow-lg py-3 px-2">
            <Search className="text-white ml-2" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              className="flex-1 bg-transparent placeholder:italic outline-none px-3 text-white placeholder-gray-100 text-md md:text-lg"
            />
          </div>

          {showResults && results.length > 0 && resultsList}
        </div>

        <div className="flex gap-4 my-4 lg:my-1 justify-center pt-2">
          <a className="btn btn-primary text-sm md:text-md" href="#categories">
            Explore Categories
          </a>
          <a className="btn btn-secondary text-sm md:text-md" href="#recommended">
            Popular Recipes
          </a>
        </div>
      </motion.div>

      <div className="w-full mt-10 md:mt-12 px-2 overflow-hidden">
        <Slider images={images} />
      </div>
    </div>
  );
}
