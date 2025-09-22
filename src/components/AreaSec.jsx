import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllAreas } from "../services/mealServices";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AreaCard from "./AreaCard";

const AreaSec = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllAreas();
        setAreas(res.meals); 
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-full py-10 text-center" id="categories">
 <motion.h2
      className="text-2xl md:text-4xl font-bold text-center  text-orange-700 relative inline-block p-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
Food Areas     
 <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-1 bg-orange-700 rounded-full mt-2"></span>
    </motion.h2>

    <Swiper
  modules={[Autoplay]}
  spaceBetween={25}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={900}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-12 my-14"
>
  {areas.reduce((result, area, index) => {
    if (index % 3 === 0) {
      result.push(areas.slice(index, index + 3));
    }
    return result;
  }, []).map((group, i) => (
    <SwiperSlide key={i}>
      <div className="flex flex-col gap-3 rounded-2xl  p-4 hover:shadow-lg transition-all duration-300">
        {group.map((area, j) => (
          <AreaCard key={j} area={area} />
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default AreaSec;
