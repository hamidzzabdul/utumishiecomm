import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

import { CategoryData } from "../utils/data";

function Categories() {
  return (
    <div className="w-[95%] mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={2} // default for very small screens
        breakpoints={{
          480: { slidesPerView: 4 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
          1280: { slidesPerView: 10 },
        }}
        className="w-full h-20 mt-2"
      >
        {CategoryData.map((cat) => (
          <SwiperSlide
            key={cat.id}
            className="cursor-pointer overflow-hidden relative"
          >
            <Link
              to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="block w-full h-full"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-[70%] w-full object-cover"
              />
              <div className="absolute bottom-0 bg-black/70 flex items-center justify-center text-center w-full h-[30%]">
                <span className="text-white text-[.7rem] px-1 truncate">
                  {cat.name}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
