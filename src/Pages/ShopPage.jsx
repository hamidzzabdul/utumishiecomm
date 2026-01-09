/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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

  return { min_price: min, max_price: max };
};

/* ---------------------------------------
   SHOP PAGE
---------------------------------------- */
function ShopPage() {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  /* ---------------------------------------
     FETCH CATEGORIES (for slug → ID mapping)
  ---------------------------------------- */
  const { data: categories } = useCategories();

  /* ---------------------------------------
     HANDLE CATEGORY SLUG FROM URL
  ---------------------------------------- */
  useEffect(() => {
    if (!categorySlug || !categories) return;

    const slug = categorySlug.replace(/-/g, " ").toLowerCase();

    const matchedCategory = categories.find(
      (cat) => cat.name.toLowerCase() === slug
    );

    if (matchedCategory) {
      setSelectedCategories([matchedCategory]);
      setCurrentPage(1);
    }
  }, [categorySlug, categories]);

  /* ---------------------------------------
     RESET PAGE ON FILTER CHANGE
  ---------------------------------------- */
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedPrices, inStockOnly, search]);

  /* ---------------------------------------
     SYNC FILTERS TO URL (QUERY STRING)
  ---------------------------------------- */
  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);

    if (selectedCategories.length) {
      params.set("categories", selectedCategories.map((c) => c.id).join(","));
    }

    if (selectedPrices.length) {
      params.set("prices", selectedPrices.join(","));
    }

    if (inStockOnly) params.set("instock", "true");

    if (params.toString() !== searchParams.toString()) {
      setSearchParams(params, { replace: true });
    }
  }, [
    selectedCategories,
    selectedPrices,
    inStockOnly,
    search,
    searchParams,
    setSearchParams,
  ]);

  /* ---------------------------------------
     FETCH PRODUCTS (SERVER FILTERS)
  ---------------------------------------- */
  const { data, isLoading } = useProducts({
    per_page: 100,
    page: 1,
    category:
      selectedCategories.length > 0
        ? selectedCategories.map((c) => c.id).join(",")
        : undefined,
    stock_status: inStockOnly ? "instock" : undefined,
    ...getPriceParams(selectedPrices),
  });

  const allProducts = useMemo(() => data?.products || [], [data]);

  /* ---------------------------------------
     CLIENT-SIDE SEARCH (NAME ONLY)
  ---------------------------------------- */
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (search?.trim()) {
      const term = search.toLowerCase().trim();

      result = result.filter((p) => p.name.toLowerCase().includes(term));

      result.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        if (aName === term && bName !== term) return -1;
        if (bName === term && aName !== term) return 1;

        if (aName.startsWith(term) && !bName.startsWith(term)) return -1;
        if (bName.startsWith(term) && !aName.startsWith(term)) return 1;

        return 0;
      });
    }

    return result;
  }, [allProducts, search]);

  /* ---------------------------------------
     PAGINATION
  ---------------------------------------- */
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const products = filteredProducts.slice(start, start + productsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setInStockOnly(false);
    setCurrentPage(1);
    setSearchParams({});
  };

  /* ---------------------------------------
     RENDER
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
        <div className="px-3 py-2 bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600 flex justify-between">
          <h2 className="text-white text-xl font-semibold">
            {search ? `Search Results for "${search}"` : "Explore our Products"}
          </h2>
          {search && (
            <span className="text-white text-sm">
              {filteredProducts.length} results
            </span>
          )}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
          {isLoading ? (
            Array.from({ length: productsPerPage }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          ) : products.length === 0 ? (
            <EmptyProductsState onReset={handleReset} />
          ) : (
            products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && !isLoading && (
          <div className="flex justify-center gap-4 py-4">
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
