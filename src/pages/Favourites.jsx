import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import MealCard from "../components/MealCard";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { clearFavourites } from "../RTX/Slices/Favourites";

export default function Favourites() {
  const favourites = useSelector((state) => state.favourites.items);
  const dispatch = useDispatch();

  const handleClear = useCallback(() => {
    dispatch(clearFavourites());
  }, [dispatch]);

  if (favourites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 my-20 text-center transition-opacity duration-500">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-orange-700 relative inline-block p-2 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Favourite Meals
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-orange-700 rounded-full mt-2"></span>
        </motion.h2>

        <div className="flex flex-col items-center justify-center text-center py-16 bg-orange-50 rounded-2xl">
          <Heart className="text-orange-700 mb-4" size={60} />
          <p className="text-gray-600 text-lg italic mb-4">
            You haven’t added any favourites yet.
          </p>
          <Link
            to="/meals"
            className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-orange-700 transition-colors duration-300"
          >
            Explore Meals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 my-20 text-center transition-opacity duration-500">
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-orange-700 relative inline-block p-2 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Favourite Meals
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-orange-700 rounded-full mt-2"></span>
      </motion.h2>

      <div className="flex justify-end mb-6">
        <button
          onClick={handleClear}
          className="flex items-center cursor-pointer  gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition-colors duration-300"
        >
          <Trash2 />
          Clear All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {favourites.map((meal, index) => (
          <MealCard key={meal.id} id={meal.id} meal={meal} index={index} />
        ))}
      </div>
    </div>
  );
}
