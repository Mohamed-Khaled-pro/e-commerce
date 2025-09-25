import React, { useEffect, useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllAreas } from "../services/mealServices";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AreaCard from "./AreaCard";
import Loader from "./Loader";

const AreaSec = () => {
  const [groupedAreas, setGroupedAreas] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllAreas();
        const groups = [];
        for (let i = 0; i < res.meals.length; i += 3) {
          groups.push(res.meals.slice(i, i + 3));
        }
        setGroupedAreas(groups);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
    fetchData();
  }, []);

  if (!loaded) return <Loader size="xxl" />;

  return (
    <section className="w-full my-10 md:my-20 text-center" id="areas">
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-orange-700 relative inline-block p-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Food Areas
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-orange-700 rounded-full mt-2"></span>
      </motion.h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={17}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={900}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12 my-6"
      >
        {groupedAreas.map((group, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col gap-3 rounded-2xl p-4">
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

export default memo(AreaSec);
