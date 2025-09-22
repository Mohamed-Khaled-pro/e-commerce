import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Slider({ images }) {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        coverflowEffect={{
          rotate: 60,
          stretch: -100,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {images.concat(images).map((img, idx) => (
          <SwiperSlide
            key={idx}
            className=" !w-64 !h-64 md:!w-86 md:!h-72  flex items-center justify-center"
          >
            <LazyLoadImage
              src={img.src}
              alt="Meals-Photo"
              effect="blur"
              className="w-64 h-64 md:w-86 md:h-72  object-cover rounded-lg border-4 border-double border-orange-700 shadow-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev hover:bg-white hover:text-orange-700 absolute top-1/2 left-1 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-orange-700 text-white cursor-pointer shadow-lg z-10">
        <ChevronLeft size={22} />
      </div>
      <div className="custom-next hover:bg-white hover:text-orange-700 absolute top-1/2 right-1 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-orange-700 text-white cursor-pointer shadow-lg z-10">
        <ChevronRight size={22} />
      </div>
    </div>
  );
}
