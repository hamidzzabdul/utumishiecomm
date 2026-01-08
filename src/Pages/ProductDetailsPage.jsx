import React, { useState } from "react";
import { ShoppingCart, Phone, MessageCircle } from "lucide-react";

function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "JBL SB550 3.1CH Soundbar with Wireless Subwoofer",
    price: 45999,
    originalPrice: 52999,
    brand: "JBL",
    sku: "JBL-SB550-001",
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    ],
    description:
      "Experience immersive sound with the JBL SB550 3.1 Channel Soundbar. Featuring a powerful wireless subwoofer for deep bass and crystal-clear audio quality.",
    features: [
      "3.1 Channel surround sound",
      "Wireless subwoofer for deep bass",
      "Bluetooth connectivity",
      "HDMI ARC connection",
      "Remote control included",
      "Wall mountable design",
    ],
    specifications: {
      Channels: "3.1",
      "Total Power": "300W",
      Connectivity: "HDMI ARC, Bluetooth, Optical",
      Subwoofer: "Wireless",
      Dimensions: "950 x 60 x 85mm",
      Weight: "4.5kg",
    },
  };

  const whatsappNumber = "254712345678";
  const whatsappMessage = `Hi, I'm interested in purchasing the ${
    product.name
  } (KSh ${product.price.toLocaleString()})`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-3 py-6">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-600 mb-4">
          Home / Audio Devices / Sound Bars / {product.brand}
        </div>

        <div className="bg-white rounded-md shadow-sm p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* LEFT SIDE */}
            <div className="flex gap-3">
              {/* Thumbnails */}
              <div className="flex flex-col gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 border rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === idx
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-80 object-contain bg-gray-50 rounded-md"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h1 className="text-xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                <span>
                  Brand:{" "}
                  <span className="font-semibold text-gray-900">
                    {product.brand}
                  </span>
                </span>
                <span className="text-gray-300">|</span>
                <span>SKU: {product.sku}</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-blue-600">
                    KSh {product.price.toLocaleString()}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    KSh {product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Stock */}
              <div className="mb-2 pb-4 ">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.inStock ? "✓ In Stock" : "Out of Stock"}
                </span>
                <div className="flex flex-col gap-1 mt-2">
                  <h2 className="text-lg font-semibold ">Description</h2>
                  <p className="w-3/4 text-sm font-semibold text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold">Quantity:</span>
                <div className="flex items-center border rounded-md text-sm overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100 overflow-hidden"
                  >
                    −
                  </button>
                  <span className="px-5 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 cursor-pointer hover:bg-gray-100 overflow-hidden"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className=" pt-4 text-sm">
            <h2 className="font-bold text-lg mb-2">Product Description</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <h3 className="font-bold text-base mb-2">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-5">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-base mb-2">Specifications</h3>
            <div className="text-sm bg-gray-50 rounded-md overflow-hidden mb-6">
              {Object.entries(product.specifications).map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-2 px-4 py-2 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <span className="font-semibold">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            {/* CONTACTS */}
            <div className="mb-6 ">
              <h3 className="font-bold mb-2 text-lg">Contacts</h3>
              <p className="text-sm font-semibold">
                Email: info@sarukdigital.co.ke
              </p>
              <p className="text-sm font-semibold">Phone: 0712345678</p>
              <p className="text-sm font-semibold">WhatsApp: 0712345678</p>
              <p className="text-sm font-semibold">
                Nairobi, Kimathi Street, Old Mutual Building, 2nd Floor Room
                211A
              </p>
              <p className="text-red-500 font-semibold mt-2">
                NB: Prices Are VAT Exclusive
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white cursor-pointer hover:bg-blue-700">
                Add to Cart
                <ShoppingCart size={18} />
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white cursor-pointer hover:bg-green-700"
              >
                Pay via WhatsApp
                <MessageCircle size={18} />
              </a>

              <button className="px-4 py-2 bg-orange-500 text-white cursor-pointer hover:bg-orange-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
