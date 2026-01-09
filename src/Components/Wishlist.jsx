import React, { useState } from "react";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import toast from "react-hot-toast";

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRemoveItem = (productId) => {
    removeFromWishlist(productId);
  };

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleConfirmAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      removeFromWishlist(selectedProduct.id);
      toast.success(`${selectedProduct.name} added to cart`);
    }
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="w-full flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <NavLink to="/" className="hover:text-blue-600 cursor-pointer">
              Home
            </NavLink>
            <span>/</span>
            <span className="font-semibold text-gray-900">Wishlist</span>
          </div>

          <NavLink
            to="/shop"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </NavLink>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600 text-sm">
            {wishlist.length} saved item(s)
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-10 text-center">
            <Heart size={60} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Save items you love to your wishlist
            </p>
            <NavLink
              to="/shop"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-semibold cursor-pointer"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </NavLink>
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
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-3 px-5 py-4 border-b items-center hover:bg-gray-50 transition"
              >
                {/* PRODUCT */}
                <div className="col-span-12 md:col-span-6 flex items-center gap-3">
                  <img
                    src={
                      item.images?.[0]?.src ||
                      item.image ||
                      "https://via.placeholder.com/100"
                    }
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded cursor-pointer"
                  />
                  <p className="font-semibold text-sm text-gray-800 line-clamp-2 cursor-pointer">
                    {item.name}
                  </p>
                </div>

                {/* PRICE */}
                <div className="col-span-4 md:col-span-2 text-sm font-bold text-blue-600 text-center">
                  KSh {parseFloat(item.price).toLocaleString()}
                </div>

                {/* STOCK */}
                <div className="col-span-4 md:col-span-2 text-center">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      item.stock_status === "instock" || item.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.stock_status === "instock" || item.inStock
                      ? "In Stock"
                      : "Out of Stock"}
                  </span>
                </div>

                {/* ACTION BUTTONS */}
                <div className="col-span-4 md:col-span-2 flex justify-center gap-3">
                  <button
                    onClick={() => handleAddToCartClick(item)}
                    disabled={
                      item.stock_status === "outofstock" && !item.inStock
                    }
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 cursor-pointer ${
                      item.stock_status === "instock" || item.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={14} />
                    Add
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 rounded-md hover:bg-red-50 cursor-pointer"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <ConfirmationModal
          isOpen={modalOpen}
          title="Add to Cart"
          message={`Do you want to add "${selectedProduct?.name}" to your cart?`}
          onConfirm={handleConfirmAddToCart}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}

export default WishlistPage;
