import { Heart, MapPin } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toggleFavourite } from "../RTX/Slices/Favourites";
import { toast } from "react-toastify";
import { memo, useMemo, useCallback } from "react";

const FavouriteHeart = memo(({ isFav, onClick }) => (
  <Heart
    onClick={onClick}
    className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${
      isFav ? "text-red-500 fill-current" : "text-white"
    }`}
  />
));

const MealCard = ({ meal, id, showPopular }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourites.items);
  const user = useSelector((state) => state.user.value);

  const isFav = useMemo(() => favourites.some((item) => item.id === id), [favourites, id]);

  const handleClick = useCallback(() => {
    if (!user) {
      toast.warning("You must login first!");
      return; 
    }
    navigate(`/meal/${id}`);
  }, [navigate, user, id]);

  const handleLike = useCallback((e) => {
    e.stopPropagation();
    if (!user) {
      toast.warning("You must login first!");
      return;
    }
    dispatch(toggleFavourite({ id, ...meal }));
  }, [dispatch, user, id, meal]);

  return (
    <div
      onClick={handleClick}
      className="relative w-full max-w-[360px] h-[210px] md:h-[360px] rounded-xl overflow-hidden cursor-pointer border-2 border-double border-orange-700 group hover:scale-[1.01] transition-transform duration-300"
      style={{ willChange: "transform, opacity" }}
    >
      <LazyLoadImage
        src={meal.strMealThumb}
        alt={meal.strMeal}
        effect="blur"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

      <div className="absolute top-2 left-2 z-20 pointer-events-auto">
        <FavouriteHeart isFav={isFav} onClick={handleLike} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <p className="text-sm md:text-md lg:text-2xl font-bold p-2 rounded">
          {meal.strMeal}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/20 group-hover:from-black/60 shadow-sm text-white text-center py-2 font-semibold md:font-bold text-xsm md:text-md lg:text-lg z-20 pointer-events-none">
        {meal.strMeal}
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
    </div>
  );
};

export default memo(MealCard);
