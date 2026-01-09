import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim();

    // Don't search if empty
    if (!trimmedSearch) return;

    // Navigate to shop with search query
    navigate(`/shop?search=${encodeURIComponent(trimmedSearch)}`);

    // Clear the input field
    setSearchTerm("");
  };

  return (
    <div className="w-full flex flex-col sticky top-0 z-50 ">
      {/* Top Info Bar */}
      <div className="w-full max-w-350 py-2 m-auto bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center gap-3 text-sm">
        <p className="text-white font-semibold tracking-widest">0706 328 544</p>
        <span className="text-lg font-bold text-white">|</span>
        <p className="text-white font-semibold tracking-widest">0706 328 544</p>
        <span className="text-lg font-bold text-white">|</span>
        <p className="text-white font-semibold tracking-widest">
          info@utumishicomputer.co.ke
        </p>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white border-b border-b-gray-300">
        <div className="w-[95%] max-w-350 m-auto flex items-center justify-between p-3 ">
          <NavLink to="/">
            <h1 className="text-2xl font-bold text-blue-600">
              Utumishi Computers
            </h1>
          </NavLink>

          {/* Search Bar */}
          <div className="w-[30%] h-9 border-gray-500 border hidden md:flex items-center justify-between overflow-hidden ">
            <div className="p-2 flex items-center justify-center">
              <Search className=" text-blue-500 " />
            </div>
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-[80%] outline-none px-2 placeholder:text-sm"
            />
            <div
              className="h-full px-3 text-white bg-blue-500 cursor-pointer text-sm flex items-center justify-center"
              onClick={handleSearch}
            >
              Search
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <NavLink to="/cart">
              <div className="relative hover:text-blue-600 cursor-pointer">
                <ShoppingCart size={24} />
                {!cart.length ? (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                ) : (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>

            <NavLink to="/wishlist">
              <div className="relative hover:text-blue-600 cursor-pointer">
                <Heart size={24} />
                {!wishlist.length ? (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                ) : (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </NavLink>

            <button className="px-3 py-3 flex items-center justify-center gap-2 bg-blue-500 cursor-pointer">
              <Menu size={18} className="text-white" />
              <span className="text-sm font-semibold text-white">Browse </span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full mx-auto max-w-350 bg-white pb-3">
        <Categories />
      </div>
    </div>
  );
}

export default Navbar;
