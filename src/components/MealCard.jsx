import { Heart, MapPin } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { toggleFavourite } from "../RTX/Slices/Favourites";
import { useState } from "react";

export default function MealCard({ meal, index, id, showPopular }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favourites = useSelector((state) => state.favourites.items);
  const isFav = favourites.some((item) => item.id === id);

  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    navigate(`/meal/${id}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(toggleFavourite({ id, ...meal }));
  };
      
  return (
    <motion.div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => handleClick(id)}
      initial={{ opacity: 0, y: 50, rotateY: -50 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{
        duration: 1.3,
        delay: index * 0.2,
        type: "spring",
        stiffness: 40,
      }}
      className="relative w-full max-w-[360px] h-[210px] md:h-[360px] rounded-xl overflow-hidden cursor-pointer transform border-2 border-double border-orange-700 group hover:scale-[1.01] "
    >
      {/* صورة الوجبة */}
      <LazyLoadImage
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-full object-cover hover:blur-xs"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/60 pointer-events-none"></div>

      {/* ❤️ زر  */}
      <div className="absolute top-2 left-2 z-20 pointer-events-auto">
        <Heart
          onClick={handleLike}
          className={`cursor-pointer transition-transform duration-200 hover:scale-110 size-4.5 md:size-5 lg:size-7 ${
            isFav ? "text-red-500 fill-current" : "text-white"
          }`}
        />
      </div>

      {/* اسم الوجبة */}
      <div
        className={`${
          show ? "hidden" : "absolute bottom-0 left-0"
        }  w-full bg-gradient-to-t from-black/20 hover:from-black/60 to-black/60 shadow-sm text-white text-center py-2 font-semi md:font-bold text-xsm md:text-md lg:text-lg z-20 pointer-events-none`}
      >
        {meal.strMeal}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <p className="text-sm md:text-md lg:text-2xl font-bold p-2 rounded">
          {meal.strMeal}
        </p>
      </div>

      <div className="absolute top-2 right-2 flex flex-col items-end gap-1 z-20">
        
        {meal.strArea && (
          <div className="bg-orange-700/90 text-white px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-md text-[10px] md:text-xs font-semibold pointer-events-none">
            <MapPin size={14} />
            <span>{meal.strArea}</span>
          </div>
        )}

        {showPopular && (
          <div className="bg-white text-orange-700 px-2 py-0.5 rounded-md text-[10px] md:text-xs font-extrabold shadow-md">
            Popular
          </div>
        )}
      </div>
    </motion.div>
  );
}
