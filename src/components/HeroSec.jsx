import { searchByLetter, searchMeals } from "../services/mealServices";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Slider from "./Slider";

export default function HeroSec() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const images = [
    { id: 1, src: "/assets/mealimg.jpg" },
    { id: 2, src: "/assets/mealimg2.jpg" },
    { id: 3, src: "/assets/mealimg3.jpg" },
    { id: 4, src: "/assets/mealimg4.jpg" },
    { id: 5, src: "/assets/mealimg5.jpg" },
    { id: 6, src: "/assets/mealimg6.jpg" },
    { id: 7, src: "/assets/mealimg7.jpg" },
    { id: 8, src: "/assets/mealimg8.jpg" },
  ];

  useEffect(() => {
    const fetchMeals = async () => {
      if (query.trim().length === 0) {
        setResults([]);
        return;
      }

  try {
  let data;
  if (query.trim().length === 1) {
    const res = await searchByLetter(query.trim());
    console.log("By letter:", res.data);
    data = res.meals;
  } else {
    const res = await searchMeals(query.trim());
    console.log("By name:", res.data);
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

  return (
    <div className={`Hero relative w-full flex flex-col justify-content-center lg:justify-content-start items-center  `}>
      <motion.div
        className="max-w-6xl text-center space-y-4 lg:space-y-3  text-white mt-30 md:mt-28"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl mt-4  font-bold leading-tight">
          Discover Delicious Recipes
        </h1>

        <p className="text-md px-2 md:text-xl text-gray-200 italic">
          Find step-by-step recipes, cooking tips, and food inspiration from
          around the world.
        </p>

        <div className="relative w-full max-w-lg mx-auto p-2 md:p-0">
          <div className="flex items-center bg-black/45 backdrop-blur-md rounded-full shadow-lg py-3 px-2">
            <Search className="text-white ml-2" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              className="flex-1 bg-transparent placeholder:italic outline-none px-3  text-white placeholder-gray-100 text-md md:text-lg"
            />
          </div>

          {showResults && results.length > 0 && (
<ul className="absolute z-10 w-full bg-orange-700 shadow-sm rounded-lg mt-2 max-h-60 overflow-y-auto text-left p-3 scrollbar-hide transition-all">
              {results.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-900/40 text-white font-bold tracking-wider transition-colors duration-300"
                  onClick={() => handleSelectMeal(meal)}
                >
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
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