import { useEffect, useState } from "react";
import Loader from "./Loader";
import RecommendedCard from "./RecommendedCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getRandomMeal } from "../services/mealServices";
export default function RecommendedSection() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      let data = [];
      let ids = new Set();
         
      while (data.length < 4) {
        const res = await getRandomMeal()
        const meal = res.meals[0];

        if (!ids.has(meal.idMeal)) {
          data.push(meal);
          ids.add(meal.idMeal);
        }
      }
      setMeals(data);
      setLoading(false);
    };

    fetchMeals();
  }, []);

  if (loading) return <Loader size="xxl" />;

  return (
    <section className="w-full px-1 py-10 mt-10 text-center" id="recommended">
       <motion.h2

      className="text-2xl md:text-4xl font-bold text-center  text-orange-700 relative inline-block p-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Recommended Meals

      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-orange-700 rounded-full mt-2"></span>
    </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center my-10 md:my-20">
        {meals.map((meal,index) => (
          <RecommendedCard key={meal.idMeal} id={meal.idMeal} index={index} meal={meal} />
        ))}
      </div>
    </section>
  );
}
