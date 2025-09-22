import { Heart } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RecommendedCard({ meal, index }) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50,rotateY:-70 }}
      whileInView={{ opacity: 1, y: 0,rotateY:0 }}
      transition={{
        duration: 2.6,
        delay: index * 0.2, // تأخير بين كل كرت
        type: "spring",
        stiffness: 20,
      }}
      className="relative w-full max-w-[360px] h-[210px] md:h-[360px] rounded-xl overflow-hidden cursor-pointer transform border-4 border-double border-orange-500 group hover:scale-[1.01]"
    >
      <LazyLoadImage
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/60 pointer-events-none"></div>

      <div className="absolute top-1.5 right-1.5 bg-orange-500/90 text-white px-3 py-1 rounded-md flex items-center gap-1 shadow-md z-20 text-xs md:text-sm font-semibold pointer-events-auto">
        <span>★</span>
        <span>{meal.strArea}</span>
      </div>

      <div className="absolute top-2 left-2 z-20 pointer-events-auto">
        <Heart
          onClick={handleLike}
          className={`cursor-pointer transition-transform duration-200 hover:scale-110 size-4.5 md:size-5 lg:size-7 ${
            like ? "text-red-500 fill-current" : "text-white"
          }`}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-2 font-bold text-xsm md:text-md lg:text-lg z-20 pointer-events-none">
        {meal.strMeal}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <p className="text-sm md:text-md lg:text-lg font-semibold bg-black/50 p-2 rounded">
          {meal.strCategory} - Delicious {meal.strArea} Cuisine
        </p>
      </div>
    </motion.div>
  );
}
