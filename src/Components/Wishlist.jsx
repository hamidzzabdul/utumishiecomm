import React, { useState } from "react";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Apple MacBook Air M2",
      price: 129999,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop",
      inStock: true,
    },
    {
      id: 2,
      name: "Canon EOS R6 Camera",
      price: 185000,
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop",
      inStock: true,
    },
    {
      id: 3,
      name: "Apple iPad Pro 12.9",
      price: 115000,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop",
      inStock: false,
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (id) => {
    alert("Item added to cart!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="w-full flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <a href="/" className="hover:text-blue-600 cursor-pointer">
              Home
            </a>
            <span>/</span>
            <span className="font-semibold text-gray-900">Wishlist</span>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </a>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600 text-sm">
            {wishlistItems.length} saved item(s)
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-10 text-center">
            <Heart size={60} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Save items you love to your wishlist
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-semibold cursor-pointer"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header Row */}
            <div className="hidden md:grid grid-cols-12 gap-3 px-5 py-3 border-b text-sm font-semibold text-gray-600">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-center">Action</div>
            </div>

            {/* List Items */}
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-3 px-5 py-4 border-b items-center hover:bg-gray-50 transition"
              >
                {/* PRODUCT */}
                <div className="col-span-12 md:col-span-6 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded cursor-pointer"
                  />
                  <p className="font-semibold text-sm text-gray-800 line-clamp-2 cursor-pointer">
                    {item.name}
                  </p>
                </div>

                {/* PRICE */}
                <div className="col-span-4 md:col-span-2 text-sm font-bold text-blue-600 text-center">
                  KSh {item.price.toLocaleString()}
                </div>

                {/* STOCK */}
                <div className="col-span-4 md:col-span-2 text-center">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      item.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="col-span-4 md:col-span-2 flex justify-center gap-3">
                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 cursor-pointer ${
                      item.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={14} />
                    Add
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 rounded-md hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
