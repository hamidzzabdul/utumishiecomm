/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import ProductCard from "../Components/ProductCard";
import SidebarFilters from "../Components/SidebarFilter";
import ProductSkeleton from "../Components/ProductSkeleton";
import EmptyProductsState from "../Components/EmptyProductsState";

import { useProducts } from "../hooks/useProduct";
import { useCategories } from "../hooks/useCategories";

/* ---------------------------------------
   PRICE RANGE HELPER
---------------------------------------- */
const getPriceParams = (selectedPrices) => {
  if (!selectedPrices.length) return {};

  const ranges = {
    under50k: { min: 0, max: 50000 },
    "20kto50k": { min: 20000, max: 50000 },
    "80kto200k": { min: 80000, max: 200000 },
    over200k: { min: 200000, max: 999999999 },
  };

  let min = Infinity;
  let max = 0;

  selectedPrices.forEach((key) => {
    const range = ranges[key];
    if (!range) return;
    min = Math.min(min, range.min);
    max = Math.max(max, range.max);
  });

  return {
    min_price: min !== Infinity ? min : undefined,
    max_price: max || undefined,
  };
};

/* ---------------------------------------
   SHOP PAGE
---------------------------------------- */
function ShopPage() {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = searchParams.get("search") || "";
  const isSearchMode = !!search;

  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const { data: categories } = useCategories();

  /* ---------------------------------------
     SYNC CATEGORY FROM URL SLUG
  ---------------------------------------- */
  useEffect(() => {
    if (!categorySlug || !categories || isSearchMode) return;

    const slug = categorySlug.replace(/-/g, " ").toLowerCase();
    const matched = categories.find((cat) => cat.name.toLowerCase() === slug);

    if (matched) {
      setSelectedCategories([matched]); // Always replace with single category
      setCurrentPage(1);
    }
  }, [categorySlug, categories, isSearchMode]);

  /* ---------------------------------------
     RESET PAGE ON FILTER CHANGE
  ---------------------------------------- */
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedPrices, inStockOnly, search]);

  /* ---------------------------------------
     SYNC FILTERS TO URL (only when NOT searching)
  ---------------------------------------- */
  useEffect(() => {
    if (isSearchMode) return; // Don't sync filters when in search mode

    const params = new URLSearchParams();

    if (selectedCategories.length) {
      params.set("categories", selectedCategories.map((c) => c.id).join(","));
    }

    if (selectedPrices.length) {
      params.set("prices", selectedPrices.join(","));
    }

    if (inStockOnly) params.set("instock", "true");

    setSearchParams(params, { replace: true });
  }, [
    selectedCategories,
    selectedPrices,
    inStockOnly,
    setSearchParams,
    isSearchMode,
  ]);

  /* ---------------------------------------
     FETCH PRODUCTS (SERVER-SIDE)
  ---------------------------------------- */
  const { data, isLoading } = useProducts({
    per_page: isSearchMode ? 100 : productsPerPage,
    page: isSearchMode ? 1 : currentPage,
    search: search || undefined,
    category:
      !isSearchMode && selectedCategories.length > 0
        ? selectedCategories.map((c) => c.id).join(",")
        : undefined,
    stock_status: !isSearchMode && inStockOnly ? "instock" : undefined,
    ...(!isSearchMode ? getPriceParams(selectedPrices) : {}),
  });

  /* ---------------------------------------
     CLIENT-SIDE SEARCH REFINEMENT
  ---------------------------------------- */
  const allFilteredProducts = useMemo(() => {
    if (!data?.products) return [];
    if (!search.trim()) return data.products;

    const searchTerms = search.toLowerCase().trim().split(/\s+/);

    return data.products
      .map((product) => {
        const name = product.name.toLowerCase();

        const containsAllTerms = searchTerms.every((term) =>
          name.includes(term)
        );
        if (!containsAllTerms) return null;

        let score = 0;

        if (name === search.toLowerCase()) {
          score = 1000;
        } else if (name.startsWith(search.toLowerCase())) {
          score = 500;
        } else if (name.includes(search.toLowerCase())) {
          score = 150;
        } else {
          score = 100;
        }

        return { product, score };
      })
      .filter((item) => item !== null)
      .sort((a, b) => b.score - a.score)
      .map(({ product }) => product);
  }, [data, search]);

  /* ---------------------------------------
     PAGINATION FOR FILTERED RESULTS
  ---------------------------------------- */
  const { products, totalPages } = useMemo(() => {
    if (!isSearchMode) {
      return {
        products: data?.products || [],
        totalPages: data?.totalPages || 1,
      };
    }

    const total = Math.ceil(allFilteredProducts.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    return {
      products: allFilteredProducts.slice(start, end),
      totalPages: total || 1,
    };
  }, [data, isSearchMode, allFilteredProducts, currentPage, productsPerPage]);

  /* ---------------------------------------
     PAGINATION HANDLER
  ---------------------------------------- */
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------------------------------
     RESET ALL FILTERS OR SEARCH
  ---------------------------------------- */
  const handleReset = () => {
    if (isSearchMode) {
      navigate("/shop");
    } else {
      setSelectedCategories([]);
      setSelectedPrices([]);
      setInStockOnly(false);
      setCurrentPage(1);
      setSearchParams({});
    }
  };

  /* ---------------------------------------
     RENDER SEARCH MODE
  ---------------------------------------- */
  if (isSearchMode) {
    return (
      <div className="w-full max-w-350 mx-auto mt-3">
        <div className="bg-white rounded-sm">
          {/* Search Header */}
          <div className="px-6 py-4 bg-linear-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-white text-2xl font-bold mb-1">
                  Search Results
                </h1>
                <p className="text-white/90 text-sm">
                  Showing results for "{search}"
                </p>
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
              >
                Back to Shop
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="px-6 py-3 border-b bg-gray-50">
            {!isLoading && (
              <p className="text-gray-600 text-sm">
                {allFilteredProducts.length === 0
                  ? "No products found"
                  : `Found ${allFilteredProducts.length} product${
                      allFilteredProducts.length !== 1 ? "s" : ""
                    }`}
              </p>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
            {isLoading ? (
              Array.from({ length: productsPerPage }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            ) : products.length === 0 ? (
              <div className="col-span-full">
                <EmptyProductsState onReset={handleReset} />
              </div>
            ) : (
              products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && !isLoading && products.length > 0 && (
            <div className="flex justify-center items-center gap-4 py-6 border-t">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-300 hover:bg-purple-600 transition-colors"
              >
                Previous
              </button>

              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-300 hover:bg-purple-600 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ---------------------------------------
     RENDER NORMAL SHOP MODE
  ---------------------------------------- */
  return (
    <div className="w-full max-w-350 mx-auto mt-3 flex gap-3">
      {/* SIDEBAR */}
      <div className="w-[20%] hidden md:block bg-white rounded-sm">
        <SidebarFilters
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedPrices={selectedPrices}
          setSelectedPrices={setSelectedPrices}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
        />
      </div>

      {/* PRODUCTS */}
      <div className="w-full md:w-[80%] bg-white rounded-sm">
        <div className="px-3 py-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 flex justify-between">
          <h2 className="text-white text-xl font-semibold">
            Explore our Products
          </h2>

          {!isLoading && (
            <span className="text-white text-sm">
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
          {isLoading ? (
            Array.from({ length: productsPerPage }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          ) : products.length === 0 ? (
            <EmptyProductsState onReset={handleReset} />
          ) : (
            products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && !isLoading && (
          <div className="flex justify-center items-center gap-4 py-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
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
