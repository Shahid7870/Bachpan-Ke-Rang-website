import React from "react";
import { MessageSquare } from "lucide-react";
import { STORE_INFO } from "../data/products";
import { RiWhatsappLine } from "@remixicon/react";


export default function ProductCard({ product }) {
  const whatsappOrderMsg = `Hello Bachpan Ke Rang, I want to enquire about "${product.name}" (${product.hindiName}) for age ${product.age}. Please share price & availability.`;

  return (
   <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
  {/* Image Container with full-contain fitting and clean background */}
  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-50 flex items-center justify-center p-2">
    <img
      src={product.image}
      alt={product.name}
      className="max-h-full max-w-full object-contain object-center group-hover:scale-105 transition duration-500"
    />
    {product.tag && (
      <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
        {product.tag}
      </span>
    )}
    <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg z-10">
      Age: {product.age}
    </span>
  </div>

  <div className="p-5 flex-1 flex flex-col justify-between">
    <div>
      <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-snug group-hover:text-orange-600 transition">
        {product.name}
      </h3>
      <p className="text-xs font-semibold text-amber-700 mt-0.5">
        {product.hindiName}
      </p>
      <p className="text-xs text-slate-500 mt-2.5 line-clamp-2">
        {product.description}
      </p>
    </div>

    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
      <div>
        <span className="text-[11px] text-slate-400 block font-medium">
          Pricing
        </span>
        <span className="text-xs font-bold text-emerald-700">
          Best Wholesale/Retail
        </span>
      </div>
      <a
        href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappOrderMsg)}`}
        target="_blank"
        rel="noreferrer"
        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm transition transform active:scale-95"
      >
        <RiWhatsappLine className="w-5 h-5" />
        <span>Enquire on WhatsApp</span>
      </a>
    </div>
  </div>
</div>
  );
}
