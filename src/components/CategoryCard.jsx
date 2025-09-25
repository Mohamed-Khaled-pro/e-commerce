import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  const handleClick = () => {
    if (!user) {
      toast.warning("You must login first!");
      return; 
    }
    navigate(`/meals/category/${category.strCategory}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-orange-700 to-white/50 border-double border-orange-400/30 hover:border-orange-700/70 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      <LazyLoadImage
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-3">
          {category.strCategory}
        </h3>
        <span className="flex items-center gap-2 text-orange-500 font-extrabold text-lg">
          View Meals{" "}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
