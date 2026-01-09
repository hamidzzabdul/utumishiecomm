import React, { useState } from "react";
import { Trash2, MessageCircle, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import ConfirmationModal from "../Components/ConfirmationModal";

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // MODAL STATE
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Subtotal, shipping, total
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  const whatsappNumber = "0712345678";
  const cartSummary = cart
    .map(
      (item) =>
        `${item.name} (x${item.qty}) - KSh ${(
          item.price * item.qty
        ).toLocaleString()}`
    )
    .join("\n");

  const whatsappMessage = `Hi, I want to complete my order:\n\n${cartSummary}\n\nTotal: KSh ${total.toLocaleString()}`;

  /* -----------------------------
     DELETE HANDLERS
  ----------------------------- */
  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      removeFromCart(itemToDelete.id);
    }
    setItemToDelete(null);
    setModalOpen(false);
  };

  const handleCancelDelete = () => {
    setItemToDelete(null);
    setModalOpen(false);
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
            <span className="font-semibold text-gray-900">Shopping Cart</span>
          </div>
          <a
            href="/shop"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </a>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add items to your cart to continue shopping
            </p>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold cursor-pointer"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm p-4 flex gap-4"
                >
                  <img
                    src={item.images?.[0]?.src}
                    alt={item.images?.[0]?.alt || item.name}
                    className="w-20 h-20 object-contain bg-gray-50 rounded-lg shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {item.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm font-bold text-blue-600">
                          KSh {item.price.toLocaleString()}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            item.stock_status === "instock"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.stock_status === "instock"
                            ? "In Stock"
                            : "Out of Stock"}
                        </span>
                      </div>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border-2 border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.qty - 1))
                          }
                          className="px-2 py-1 hover:bg-gray-100 font-bold cursor-pointer"
                        >
                          −
                        </button>

                        <span className="px-3 py-1 border-x-2 border-gray-300 font-semibold min-w-10 text-center">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                          className="px-2 py-1 hover:bg-gray-100 font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      {/* DELETE (NOW OPENS MODAL) */}
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold text-sm cursor-pointer"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4 space-y-4">
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Email: info@sarukdigital.co.ke</div>
                  <div>Phone: 0712345678</div>
                  <div>Projector Spot: 0712345678</div>
                  <div>WhatsApp: 0712345678</div>
                  <div>
                    Nairobi, Kimathi Street, Old Mutual Building, 2nd Floor Room
                    211A
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    NB: Prices Are VAT Exclusive
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-900 mt-4">
                  Order Summary
                </h2>

                <div className="space-y-2 pb-2 border-b">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cart.length} items)</span>
                    <span className="font-semibold">
                      KSh {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      KSh {shipping.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-blue-600">
                    KSh {total.toLocaleString()}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-bold text-sm cursor-pointer">
                    Proceed to Checkout
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONFIRMATION MODAL */}
      <ConfirmationModal
        isOpen={modalOpen}
        title="Remove Item"
        message={`Are you sure you want to remove "${itemToDelete?.name}" from your cart?`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
}

export default CartPage;
