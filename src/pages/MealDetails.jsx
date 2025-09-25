import React, { useEffect, useState, useMemo, memo } from "react";
import { useParams } from "react-router";
import { getMealById } from "../services/mealServices";
import { areaToCode } from "../../utils/areatocode";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../RTX/Slices/Favourites";
import { Heart } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Ingredients = memo(({ meal }) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
    {Array.from({ length: 20 }).map((_, i) => {
      const ingredient = meal[`strIngredient${i + 1}`];
      const measure = meal[`strMeasure${i + 1}`];
      if (!ingredient?.trim()) return null;
      return (
        <motion.div
          key={i}
          className="bg-orange-700 text-white rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold">{ingredient}</p>
          <p className="text-lg font-bold">{measure}</p>
        </motion.div>
      );
    })}
  </div>
));

const VideoSection = memo(({ embedUrl }) => (
  <motion.div
    className="my-32"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 relative p-3 text-center">
      Watch Video
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[100px] h-1 bg-orange-700 rounded-full"></span>
    </h2>
    <motion.div
      className="rounded-xl overflow-hidden shadow-md my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <iframe
        src={embedUrl}
        title="Meal Video"
        allowFullScreen
        className="w-full h-[400px] md:h-[600px]"
      ></iframe>
    </motion.div>
  </motion.div>
));

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.items);

  const isFav = useMemo(() => favourites.some((item) => item.id === id), [favourites, id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMealById(id);
        setMeal(res.meals[0]);
      } catch (err) {
        console.log("Error Can't Fetch Product Details", err);
      }
    };
    fetchData();
  }, [id]);

  if (!meal)
    return <p className="text-center mt-10 text-lg">Loading...</p>;

  const countryCode = areaToCode[meal.strArea];
  const flagUrl = countryCode ? `https://flagcdn.com/h20/${countryCode}.png` : null;
  const embedUrl = meal.strYoutube ? meal.strYoutube.replace("watch?v=", "embed/") : null;

const handleLike = () => {
  dispatch(toggleFavourite({ id, ...meal }));
};
  return (
    <motion.div
      className="min-h-screen py-10 px-2 md:px-3 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full rounded-2xl mx-auto overflow-hidden py-8 px-2 space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-stretch w-full">
          <motion.div
            className="h-full flex flex-col justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold mb-4 flex justify-between items-center gap-3 text-gray-800">
              {meal.strMeal}
              {flagUrl && (
                <motion.img
                  src={flagUrl}
                  alt={meal.strArea}
                  className="w-12 h-8 rounded shadow"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              )}
            </h1>

            <div className="flex gap-4 mb-4 text-sm text-white">
              <span className="px-3 py-1 bg-orange-700 rounded-full shadow-sm">
                {meal.strCategory}
              </span>
              <span className="px-3 py-1 bg-orange-700 rounded-full shadow-sm">
                {meal.strArea}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 relative p-3 text-center my-10">
              Instructions
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[100px] h-1 bg-orange-700 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{meal.strInstructions}</p>
          </motion.div>

          <motion.div
            className="h-full w-full flex relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <LazyLoadImage
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-full max-h-[500px] object-cover rounded-xl shadow-md border-4 border-double border-orange-700"
            />
            <Heart
              onClick={handleLike}
              className={`absolute top-4 right-4 cursor-pointer transition-transform duration-200 hover:scale-110 size-10 ${
                isFav ? "text-red-500 fill-current" : "text-gray-600"
              }`}
            />
          </motion.div>
        </div>

        <div className="my-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 relative p-3 text-center my-5">
            Ingredients
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[100px] h-1 bg-orange-700 rounded-full"></span>
          </h2>
          <Ingredients meal={meal} />
        </div>

        {embedUrl && <VideoSection embedUrl={embedUrl} />}
      </div>
    </motion.div>
  );
}
