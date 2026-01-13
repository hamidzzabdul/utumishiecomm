import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";
import { CategoryData } from "../utils/data";

import logo from "/logo.png";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const handleCategoryClick = (categoryName) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200from-purple-500 bg-linear-to-r from-purple-500 via-pink-500 to-red-500">
            <h2 className="text-xl font-bold text-white">Categories</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:text-gray-200 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Categories List */}
          <div className="flex-1 overflow-y-auto p-4">
            {CategoryData.map((category) => (
              <NavLink
                to={`/shop/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className="p-3 mb-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-gray-200"
                >
                  <span className="font-medium text-gray-800">
                    {category.name}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sticky top-0 z-20 ">
        {/* Top Info Bar */}
        <div className="w-full  m-auto bg-linear-to-r from-purple-500 via-pink-500 to-red-500  items-center justify-center gap-3 text-sm flex">
          <div className="w-full max-w-350 py-2 m-auto flex flex-col sm:flex-row  items-center justify-center gap-1 sm:gap-3 text-sm">
            <div className="text-white font-semibold tracking-widest flex items-center">
              <span className="text-white font-semibold tracking-widest sm:hidden ">
                For inquiries Call:
              </span>
              <span>0799 224 540</span>
            </div>
            <span className="hidden sm:block text-lg font-bold text-white">
              |
            </span>
            <p className="text-white hidden sm:block font-semibold tracking-widest">
              0799 224 540
            </p>
            <span className="hidden sm:block text-lg font-bold text-white">
              |
            </span>
            <p className="text-sm sm:text-base hidden sm:block text-white font-semibold tracking-widest">
              utumishicomputers@gmail.com
            </p>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full bg-white border-b border-b-gray-300">
          <div className="w-[95%] max-w-350 m-auto flex items-center justify-between p-3 ">
            <NavLink to="/">
              <div className="w-25 ">
                <img
                  src={logo}
                  alt="utumishi logo"
                  className="w-full object-contain"
                />
              </div>
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
            <div className="flex items-center gap-2 sm:gap-6">
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
                <div className="relative hidden sm:block hover:text-blue-600 cursor-pointer">
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

              <button
                onClick={() => setIsSidebarOpen(true)}
                className="px-3 py-3 flex items-center justify-center gap-2 bg-blue-500 cursor-pointer hover:bg-blue-600 transition-colors"
              >
                <Menu size={18} className="text-white" />
                <span className="text-sm font-semibold text-white">
                  Browse{" "}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full bg-white ">
          <div className="w-full mx-auto max-w-350 bg-white pb-3">
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
