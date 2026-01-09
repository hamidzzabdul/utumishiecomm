import React from "react";
import { useCategories } from "../hooks/useCategories";

function SidebarFilters({
  selectedCategories,
  setSelectedCategories,
  setSelectedPrices,
  inStockOnly,
  setInStockOnly,
}) {
  const { data: categories } = useCategories();

  const filteredCategories = categories?.filter(
    (cat) => cat.name !== "Uncategorized"
  );

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.some((c) => c.id === category.id)
        ? prev.filter((c) => c.id !== category.id)
        : [...prev, category]
    );
  };

  return (
    <div className="p-4">
      {/* CATEGORIES */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2 text-blue-500">
          Filter by Categories
        </h2>

        <div className="space-y-2">
          {filteredCategories?.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
                checked={selectedCategories.some((c) => c.id === cat.id)}
                onChange={() => toggleCategory(cat)}
              />
              <span className="text-sm">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* STOCK */}
      <div>
        <h3 className="font-medium mb-3 text-blue-500">Stock Status</h3>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-blue-500"
            checked={inStockOnly}
            onChange={() => setInStockOnly((prev) => !prev)}
          />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}

export default SidebarFilters;
