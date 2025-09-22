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
      className="text-2xl md:text-4xl font-bold text-center  text-orange-500 relative inline-block p-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
Food Areas     
 <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-1 bg-orange-500 rounded-full mt-2"></span>
    </motion.h2>

     <Swiper
  modules={[ Autoplay]}
  spaceBetween={20}
  slidesPerView={4}
  loop={true}
  loopFillGroupWithBlank={true}
  centeredSlides={true}
  
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={800}
  breakpoints={{
    320: { slidesPerView: 2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  className="pb-10 my-14"
>
        {areas.map((area , index) => (
          <SwiperSlide key={index}>
            <AreaCard area={area}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AreaSec;
