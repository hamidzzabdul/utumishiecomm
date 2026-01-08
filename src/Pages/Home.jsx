import React from "react";
import Hero from "../Components/Hero";
import CategorySlider from "../Components/CategorySlider";
import { useCategories } from "../hooks/useCategories.js";

function Home() {
  const { data: categories } = useCategories();

  const filtereCategories = categories
    ?.filter((cat) => cat.name !== "Uncategorized")
    .sort((a, b) => (b.count || 0) - (a.count || 0));
  return (
    <div className="w-full max-w-350 mx-auto">
      <Hero />
      {filtereCategories?.map((cat) => (
        <div key={cat.id}>
          <CategorySlider category={cat} />
        </div>
      ))}
    </div>
  );
}

export default Home;
