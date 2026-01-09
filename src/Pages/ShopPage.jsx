/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "../Components/ProductCard";
import SidebarFilters from "../Components/SidebarFilter";
import { useProducts } from "../hooks/useProduct";
import ProductSkeleton from "../Components/ProductSkeleton";
import EmptyProductsState from "../Components/EmptyProductsState";
import { useSearchParams } from "react-router-dom";

// Helper function to convert price range selections to min/max values
const getPriceParams = (selectedPrices) => {
  if (selectedPrices.length === 0) return {};

  const ranges = {
    under50k: { min: 0, max: 50000 },
    "20kto50k": { min: 20000, max: 50000 },
    "80kto200k": { min: 80000, max: 200000 },
    over200k: { min: 200000, max: 999999999 },
  };

  let minPrice = Infinity;
  let maxPrice = 0;

  selectedPrices.forEach((range) => {
    const { min, max } = ranges[range];
    minPrice = Math.min(minPrice, min);
    maxPrice = Math.max(maxPrice, max);
  });

  return {
    min_price: minPrice,
    max_price: maxPrice,
  };
};

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  // search params
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedPrices,
    inStockOnly,
    search,
    searchParams,
    setSearchParams,
  ]);

  // Update URL with all active filters (preserving search)
  useEffect(() => {
    const params = new URLSearchParams();

    // Keep search in URL if it exists
    if (search) {
      params.set("search", search);
    }

    // Add categories to URL
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.map((c) => c.id).join(","));
    }

    // Add prices to URL
    if (selectedPrices.length > 0) {
      params.set("prices", selectedPrices.join(","));
    }

    // Add stock status to URL
    if (inStockOnly) {
      params.set("instock", "true");
    }

    // Only update if params changed
    if (params.toString() !== searchParams.toString()) {
      setSearchParams(params, { replace: true });
    }
  }, [selectedCategories, selectedPrices, inStockOnly, search]);

  // Fetch products - remove search from API call, we'll filter client-side
  const { data, isLoading } = useProducts({
    per_page: 100, // Get more products to filter from
    page: 1, // Always get first page, we'll handle pagination client-side
    category:
      selectedCategories.length > 0
        ? selectedCategories.map((c) => c.id).join(",")
        : undefined,
    stock_status: inStockOnly ? "instock" : undefined,
    ...getPriceParams(selectedPrices),
  });

  const allProducts = data?.products || [];

  // CLIENT-SIDE FILTERING AND SEARCH (Search ONLY product names)
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Apply search filter if search term exists - ONLY SEARCH NAMES
    if (search && search.trim()) {
      const searchLower = search.toLowerCase().trim();

      filtered = filtered.filter((product) => {
        const nameLower = product.name.toLowerCase();

        // ONLY check product name for the search term
        return nameLower.includes(searchLower);
      });

      // Sort by relevance (exact matches first)
      filtered.sort((a, b) => {
        const aNameLower = a.name.toLowerCase();
        const bNameLower = b.name.toLowerCase();

        // Exact match in name gets priority
        const aExactMatch = aNameLower === searchLower;
        const bExactMatch = bNameLower === searchLower;

        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;

        // Name starts with search term gets second priority
        const aStartsWith = aNameLower.startsWith(searchLower);
        const bStartsWith = bNameLower.startsWith(searchLower);

        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;

        return 0;
      });
    }

    return filtered;
  }, [allProducts, search]);

  // CLIENT-SIDE PAGINATION
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const products = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setInStockOnly(false);
    setCurrentPage(1);

    // Clear ALL filters from URL INCLUDING search
    setSearchParams({});
  };

  return (
    <div className="w-full mt-3 flex gap-3 relative">
      {/* Sidebar */}
      <div className="w-[20%] bg-white rounded-sm hidden md:block">
        <SidebarFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPrices={selectedPrices}
          setSelectedPrices={setSelectedPrices}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
        />
      </div>

      {/* Products */}
      <div className="w-full md:w-[80%] bg-white rounded-sm">
        <div className="flex items-center justify-between px-3 py-2 bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600">
          <h2 className="text-xl font-semibold text-white">
            {search ? `Search Results for "${search}"` : "Explore our Products"}
          </h2>
          {search && (
            <span className="text-sm text-white">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "result" : "results"} found
            </span>
          )}
        </div>

        {/* Active Filters Display */}
        {(search ||
          selectedCategories.length > 0 ||
          selectedPrices.length > 0 ||
          inStockOnly) && (
          <div className="p-3 border-b border-gray-200 flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-600">
              Active Filters:
            </span>

            {search && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                Search: {search}
              </span>
            )}

            {selectedCategories.map((cat) => (
              <span
                key={cat.id}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
              >
                {cat.name}
              </span>
            ))}

            {selectedPrices.map((price) => (
              <span
                key={price}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
              >
                {price.replace(/([a-z])(\d)/g, "$1 $2").replace(/to/g, " to ")}
              </span>
            ))}

            {inStockOnly && (
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                In Stock Only
              </span>
            )}

            <button
              onClick={handleReset}
              className="ml-2 px-2 py-1 cursor-pointer text-xs text-red-600 hover:text-red-800 underline"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2">
          {isLoading ? (
            <ProductSkeleton />
          ) : products.length === 0 ? (
            <EmptyProductsState onReset={handleReset} />
          ) : (
            products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && !isLoading && (
          <div className="flex items-center justify-center gap-4 py-4 w-full">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopPage;
