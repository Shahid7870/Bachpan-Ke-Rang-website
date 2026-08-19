import React from 'react';
import { STORE_INFO } from '../data/products';
import { RiWhatsappLine } from "@remixicon/react";


export default function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Md Saquib Raza, I saw your Bachpan Ke Rang website and want to enquire about products.')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group border-2 border-white"
    >
      <RiWhatsappLine className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm px-0 group-hover:px-2">
        Chat with Md Saquib Raza
      </span>
    </a>
  );
}
