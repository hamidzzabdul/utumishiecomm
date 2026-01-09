import { ShoppingCart, Heart, CircleCheckBig, Info } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router";

// Utility function
const truncate = (str, maxLength) => {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
};

export const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  // Check if product is in wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (product.stock_status === "instock") {
      toast.success("Added to cart!");
      addToCart(product);
    }
  };

  const categoryName = product?.categories?.[0].name || "uncategorized";
  return (
    <div className="bg-white border border-blue-500 group overflow-hidden rounded-sm cursor-pointer">
      {/* IMAGE */}
      <div className="w-full flex items-center justify-center relative pt-3 h-32">
        <NavLink to={`/shop/product/${product.slug}`}>
          <img
            src={product.images?.[0]?.src}
            alt={product.images?.[0]?.alt || product.name}
            className="w-37.5 object-contain"
          />
        </NavLink>

        {/* Hover icons */}
        <div className="w-full flex items-center justify-center gap-3 absolute -bottom-4 opacity-0 group-hover:opacity-100 transition">
          {/* Add to Cart */}
          <div
            className={`w-9 h-9 rounded-full shadow bg-white flex items-center justify-center cursor-pointer border border-gray-300 ${
              product.stock_status !== "instock"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            title={
              product.stock_statu === "instock" ? "Add to Cart" : "Out of Stock"
            }
          >
            <ShoppingCart
              size={18}
              className="text-gray-800"
              onClick={handleAddToCart}
            />
          </div>

          {/* Toggle Wishlist */}

          <div
            className="w-8 h-8 rounded-full shadow bg-white flex items-center justify-center cursor-pointer border border-gray-300"
            onClick={() => toggleWishlist(product)}
            title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart
              size={18}
              strokeWidth={1.6}
              fill={isInWishlist ? "#f97316" : "transparent"}
              color={isInWishlist ? "#f97316" : "#6b7280"}
            />
          </div>
        </div>

        {/* Out of stock badge */}
        {product.stock_status !== "instock" && (
          <div className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
            Out of Stock
          </div>
        )}
      </div>
      <NavLink to={`/shop/product/${product.slug}`}>
        {/* CONTENT */}
        <div className="px-3 pb-3 pt-2 flex flex-col ">
          <div>
            <span className="text-gray-600 font-medium text-xs">
              {categoryName}
            </span>

            {/* FIXED HEIGHT TITLE */}
            <p className="text-sm text-gray-800 h-10 leading-tight overflow-hidden">
              {truncate(product.name, 55)}
            </p>
          </div>

          {/* PRICE */}
          <div className="text-blue-600 font-bold text-base">
            Ksh{" "}
            {new Intl.NumberFormat("en-KE").format(
              product.price.toLocaleString()
            )}
          </div>

          {/* STOCK */}
          <div className="flex items-center gap-1">
            {product.stock_status === "instock" ? (
              <>
                <CircleCheckBig size={14} className="text-green-500" />
                <span className="text-gray-700 font-medium text-xs">
                  In Stock
                </span>
              </>
            ) : (
              <>
                <Info size={14} className="text-red-500" />
                <span className="text-gray-700 font-medium text-xs">
                  Sold Out
                </span>
              </>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
