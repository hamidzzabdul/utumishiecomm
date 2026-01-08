import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import SidebarFilters from "../Components/SidebarFilter";
import { useProducts } from "../hooks/useProduct";

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const {
    data: products = [],
    isLoading,
    error,
  } = useProducts({
    per_page: productsPerPage,
    page: currentPage,
  });

  // WooCommerce returns total count in headers (optional)
  // We'll assume 100 products for now for demo purposes
  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="w-full mt-3 flex gap-3">
      {/* Sidebar */}
      <div className="w-[20%] bg-white rounded-sm hidden md:block">
        <SidebarFilters />
      </div>

      {/* Products */}
      <div className="w-full md:w-[80%] bg-white rounded-sm">
        <div className="flex items-center justify-between px-3 py-2 bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600">
          <h2 className="text-xl font-semibold text-white">
            Explore our Products
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-4">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === idx + 1
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => goToPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300 cursor-pointer"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
