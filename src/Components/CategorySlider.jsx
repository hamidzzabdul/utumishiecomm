import { useRef } from "react";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  Heart,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import toast from "react-hot-toast";

import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext";
import { useProducts } from "../hooks/useProduct.js";
import ProductSkeleton from "./ProductSkeleton.jsx";

function truncate(text, maxLength = 50) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
function CategorySlider({ category }) {
  const swiperRef = useRef(null);
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  const { data: products, isLoading } = useProducts({
    category: category.id,
    per_page: 12,
  });

  const filteredProducts = products?.filter((product) =>
    product.categories?.some((cat) => cat.id === category.id)
  );

  const handleAddToCart = (product) => {
    if (product.stock_status) {
      toast.success("Added to cart!");
      addToCart(product);
    } else {
      toast.error("Product is out of stock!");
    }
  };

  return (
    <div className="w-full mt-2 bg-white pb-2 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600">
        <h2 className="text-xl font-semibold text-white">{category.name}</h2>
        <NavLink
          to={`/shop/${category.slug}`}
          className="font-semibold text-white"
        >
          See All
        </NavLink>
      </div>

      {/* Slider */}
      <div className="mt-2 w-full px-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          className="w-full h-full transition-opacity duration-300"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <ProductSkeleton />
                </SwiperSlide>
              ))
            : filteredProducts?.map((product, index) => {
                const isInWishlist = wishlist.some(
                  (item) => item.id === product.id
                );

                return (
                  <SwiperSlide
                    className="w-full h-full cursor-pointer group border border-blue-500 rounded-r-sm"
                    key={product.id}
                  >
                    {/* Image */}
                    <div className="w-full h-40 flex items-center justify-center relative overflow-hidden">
                      <NavLink to={`/shop/${product.slug}`}>
                        <img
                          src={product.images?.[0]?.src}
                          alt={product.images?.[0]?.alt || product.name}
                          className="w-37.5 object-contain"
                        />
                      </NavLink>

                      {/* Actions */}
                      <div className="absolute bottom-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <div
                          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart
                            size={18}
                            className="text-gray-500 hover:text-blue-500"
                          />
                        </div>

                        <div
                          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center"
                          onClick={() => toggleWishlist(product)}
                        >
                          <Heart
                            size={18}
                            fill={isInWishlist ? "#f97316" : "transparent"}
                            color={isInWishlist ? "#f97316" : "#6b7280"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <NavLink to={`/shop/${product.slug}`}>
                      <div className="p-2 flex flex-col gap-1">
                        <span className="text-gray-600 font-semibold">
                          SKU 00{index + 1}
                        </span>
                        <p className="text-sm h-10 overflow-hidden">
                          {truncate(product.name, 40)}
                        </p>

                        <div className="flex items-center gap-2">
                          <CircleCheckBig
                            size={20}
                            className="text-green-500"
                          />
                          <span className="text-sm font-semibold">
                            {product.stock_status === "instock"
                              ? "In Stock"
                              : "Sold Out"}
                          </span>
                        </div>
                      </div>
                    </NavLink>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </div>
  );
}

export default CategorySlider;
