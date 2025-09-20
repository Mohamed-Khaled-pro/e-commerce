import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "./Slider";

export default function HeroSec() {
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

  return (
    <div className="Hero relative w-full flex flex-col justify-content-center lg:justify-content-start items-center">
      <motion.div
        className="max-w-6xl text-center space-y-4 lg:space-y-1  text-white mt-34 md:mt-36"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl mt-4 font-bold leading-tight">
          Discover <span className="text-orange-500">Delicious</span> Recipes
        </h1>

        <p className="text-md px-2 md:text-xl text-gray-200">
          Find step-by-step recipes, cooking tips, and food inspiration from
          around the world.
        </p>

        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full shadow-lg p-2 max-w-md mx-2 my-4 md:mx-auto px-2">
          <Search className="text-white ml-2" />
          <input
            type="text"
            placeholder="Search recipes..."
            className="flex-1 bg-transparent outline-none px-3 text-white placeholder-gray-300"
          />
          <button className="bg-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white px-4 py-2 rounded-full font-bold">
            Search
          </button>
        </div>

        <div className="flex gap-4 my-4 lg:my-1 justify-center pt-2">
          <button className="btn btn-primary">Explore Categories</button>
          <button className="btn btn-secondary">Popular Recipes</button>
        </div>
      </motion.div>

      <div className="w-full mt-16 md:mt-12 px-2 overflow-hidden">
        <Slider images={images} />
      </div>
    </div>
  );
}
