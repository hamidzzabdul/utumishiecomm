import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import cat1 from "../assets/categories/apple-store-banner.webp";
import cat2 from "../assets/categories/phones-and-tablets-banner.webp";
import cat3 from "../assets/categories/laptops-banner.webp";
import cat4 from "../assets/categories/monitors-banner.webp";
import cat5 from "../assets/categories/desktops-banner-images.webp";
import cat6 from "../assets/categories/smartphone-accessories-new-banner.webp";

const CategoryData = [
  {
    id: 1,
    name: "Apple Store",
    image: cat1,
  },
  {
    id: 2,
    name: "Phones & Tablets",
    image: cat2,
  },
  {
    id: 3,
    name: "Laptops",
    image: cat3,
  },
  {
    id: 4,
    name: "Montitors",
    image: cat4,
  },
  {
    id: 5,
    name: "Desktops",
    image: cat5,
  },
  {
    id: 6,
    name: "SmartPhone Acc...",
    image: cat6,
  },
  {
    id: 7,
    name: "Entertainment",
    image: cat1,
  },
  {
    id: 8,
    name: "Televisions",
    image: cat2,
  },
  {
    id: 9,
    name: "",
    image: cat2,
  },
  {
    id: 10,
    name: "Televisions",
    image: cat2,
  },
];

function Categories() {
  return (
    <div className="w-[95%] mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={2} // default for very small screens
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
          1280: {
            slidesPerView: 10,
          },
        }}
        className="w-full h-20 mt-2"
      >
        {CategoryData.map((cat) => (
          <SwiperSlide
            className="cursor-pointer overflow-hidden relative"
            key={cat.id}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;
