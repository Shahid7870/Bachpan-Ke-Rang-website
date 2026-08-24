import React, { useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";
import { Sparkles, ShoppingBag } from "lucide-react";

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="catalog"
      className="py-16 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-orange-600 text-xs font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Store Catalog
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Kids Wear & Baby Collections in Laukaha, Bihar
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Explore trendy boys suits, girls party frocks, newborn gift hampers, and baby shoes in Madhubani district. Click any product to enquire for sizes, wholesale, and retail prices with Md Saquib Raza.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid / Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
            <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">
              No products found in this category
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Please select another category or check back soon for new arrivals at our Laukaha store.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-xs font-bold text-orange-600 hover:underline"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}