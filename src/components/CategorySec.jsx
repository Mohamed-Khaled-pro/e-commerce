import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CategoryCard from "./CategoryCard";
import "swiper/css";
import "swiper/css/navigation";
import {  getCategories } from "../services/mealServices";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Loader from "./Loader";

const CategorySec = () => {
  const [category, setCategory] = useState([]);
  const [loaded, setLoaded] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategories();
        setCategory(res.categories); 
       setLoaded(true); 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  if (!loaded) return <Loader size="xxl" />;
   

  return (
    <section className="w-full py-10 text-center" id="categories">
 <motion.h2
      className="text-2xl md:text-4xl font-bold text-center  text-orange-700 relative inline-block p-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
Food Categories     
 <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-orange-700 rounded-full mt-2"></span>
    </motion.h2>
   <Swiper
  modules={[Autoplay]}
  spaceBetween={25}
  slidesPerView={4}
  loop={true}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  speed={900}
  breakpoints={{
    320: { slidesPerView: 2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  className="pb-10 my-14"
>
  {category.map((cat) => (
    <SwiperSlide key={cat.idCategory}>
      <CategoryCard category={cat}  />
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default CategorySec;
