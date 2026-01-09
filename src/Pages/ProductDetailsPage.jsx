import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useProductBySlug } from "../hooks/useProduct";

function ProductDetailsPage() {
  const { productSlug } = useParams();
  const { data: product, isLoading, error } = useProductBySlug(productSlug);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const whatsappNumber = "254712345678";
  const whatsappMessage = product
    ? `Hi, I'm interested in purchasing the ${product.name} (KSh ${Number(
        product.price
      ).toLocaleString("en-KE")})`
    : "";

  // Loading Spinner
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 text-center mt-10">Failed to load product.</p>
    );
  if (!product)
    return (
      <p className="text-gray-600 text-center mt-10">Product not found.</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-3 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-600 mb-4 truncate">
          Home / {product.categories?.[0]?.name || "Category"} / {product.name}
        </div>

        <div className="bg-white rounded-md shadow-sm p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT SIDE: Images */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                {product.images?.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 border rounded-md overflow-hidden shrink-0 cursor-pointer ${
                      selectedImage === idx
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img.src || img}
                      alt={img.alt || `Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={
                    product.images?.[selectedImage]?.src || product.images?.[0]
                  }
                  alt={product.name}
                  className="w-full max-h-96 object-contain bg-gray-50 rounded-md"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Details */}
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                {product.name}
              </h1>

              {/* Brand & SKU */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
                {product.brand && (
                  <span>
                    Brand:{" "}
                    <span className="font-semibold text-gray-900">
                      {product.brand}
                    </span>
                  </span>
                )}
                {product.sku && <span className="text-gray-300">|</span>}
                {product.sku && <span>SKU: {product.sku}</span>}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-2xl font-bold text-blue-600">
                  KSh {Number(product.price).toLocaleString("en-KE")}
                </span>
                {product.regular_price &&
                  Number(product.regular_price) > Number(product.price) && (
                    <span className="text-sm line-through text-gray-400">
                      KSh{" "}
                      {Number(product.regular_price).toLocaleString("en-KE")}
                    </span>
                  )}
              </div>

              {/* Stock Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block ${
                  product.stock_status === "instock"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.stock_status === "instock"
                  ? "✓ In Stock"
                  : "Out of Stock"}
              </span>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold">Quantity:</span>
                <div className="flex items-center border rounded-md text-sm overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="px-5 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                  Add to Cart
                  <ShoppingCart size={18} />
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white hover:bg-green-700"
                >
                  Pay via WhatsApp
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="mt-6 text-gray-700">
              <h2 className="font-bold text-xl mb-2">Description</h2>
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          )}

          {/* Attributes / Features */}
          {product.attributes?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {product.attributes.map((attr, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-blue-600 mt-0.5">▸</span>
                    <span>
                      {attr.name}: {attr.options.join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
