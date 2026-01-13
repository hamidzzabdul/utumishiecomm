import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import hero1 from "../assets/hero/hero11.webp";
import hero12 from "../assets/hero/hero12.webp";
import hero13 from "../assets/hero/hero13.webp";

import hero21 from "../assets/hero/hero21.webp";
import hero22 from "../assets/hero/hero22.webp";
import hero23 from "../assets/hero/hero23.webp";

import hero31 from "../assets/hero/hero31.webp";

function Hero() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex items-center justify-between mt-2 gap-2 ">
      {/* LEFT SLIDER */}
      <div className="w-[15%] h-85 hidden md:block">
        <Swiper spaceBetween={0} slidesPerView={1} className="w-full h-full">
          <SwiperSlide>
            <img src={hero1} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero12} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero13} className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* CENTER SLIDER WITH CUSTOM NAV BUTTONS */}
      <div className="w-full md:w-[70%] h-64 sm:h-80 md:h-85 relative overflow-hidden rounded-lg">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img src={hero21} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero22} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero23} className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>

        {/* PREV BUTTON */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>
      </div>

      {/* RIGHT SLIDER */}
      <div className="w-[15%] h-85 hidden md:block">
        <Swiper spaceBetween={0} slidesPerView={1} className="w-full h-full">
          <SwiperSlide>
            <img src={hero31} className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
