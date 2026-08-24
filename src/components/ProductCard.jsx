import React from "react";
import { STORE_INFO } from "../data/products";
import { RiWhatsappLine } from "@remixicon/react";

export default function ProductCard({ product }) {
  // Construct the custom message for this specific product
  const message = `Hello Md Saquib Raza, I am interested in purchasing: ${product.name} (Code: ${product.id}). Is it available?`;

  // Encode the message to ensure spaces and special characters work safely in URLs
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Product Image */}
        <div className="h-64 sm:h-72 w-full bg-slate-100 overflow-hidden relative flex items-center justify-center p-3">
          <img
            src={product.image}
            alt={`${product.name} - Bachpan Ke Rang`}
            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
          />
          {product.tag && (
            <span className="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {product.tag}
            </span>
          )}
        </div>

        {/* Product Information */}
        <div className="p-4 sm:p-5">
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className="font-bold text-slate-900 text-base line-clamp-1">
              {product.name}
            </h3>
          </div>
          <p className="text-sm font-semibold text-orange-600 mb-2">
            {product.hindiName}
          </p>
          <p className="text-sm text-slate-600 line-clamp-2 mb-3">
            {product.description}
          </p>
          <div className="inline-block bg-slate-100 text-slate-700 text-[12px] font-medium px-2.5 py-1 rounded-md mb-4">
            Age Group: {product.age}
          </div>
        </div>
      </div>

      {/* WhatsApp Enquiry Button */}
      <div className="p-4 sm:p-5 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Enquire about ${product.name} on WhatsApp`}
          className="w-fit bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm"
        >
          <RiWhatsappLine className="w-5 h-5" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}