import React, { useState } from "react";
import { useCategories } from "../hooks/useCategories";

const PRICE_RANGES = [
  { label: "Under KSh 5,000", value: "under5k" },
  { label: "KSh 5,000 - KSh 10,000", value: "5kto10k" },
  { label: "KSh 10,000 - KSh 20,000", value: "10kto20k" },
  { label: "Over KSh 20,000", value: "over20k" },
];

const BRANDS = ["Apple", "Samsung", "Sony", "Huawei"];

function SidebarFilters() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const { data: categories } = useCategories();
  const filteredCategories = categories?.filter(
    (cat) => cat !== "Uncategorized"
  );

  const toggleValue = (value, setter, current) => {
    setter(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  return (
    <div className="p-4">
      {/* BRANDS */}
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
                className="w-4 h-4 rounded-full accent-blue-500"
                checked={selectedBrands.includes(cat)}
                onChange={() =>
                  toggleValue(cat, setSelectedBrands, selectedBrands)
                }
              />
              <span className="text-sm">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-blue-500">Price</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded-full accent-blue-500"
                checked={selectedPrices.includes(range.value)}
                onChange={() =>
                  toggleValue(range.value, setSelectedPrices, selectedPrices)
                }
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* STOCK STATUS */}
      <div>
        <h3 className="font-medium mb-3 text-blue-500">Stock Status</h3>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded-full accent-blue-500"
            checked={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
          />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}

export default SidebarFilters;
