import React from "react";
import { STORE_INFO } from "../data/products";
import { Instagram } from "lucide-react";
import {
  RiWhatsappLine,
  RiFacebookFill,
  RiYoutubeFill,
  RiMapPinFill,
} from "@remixicon/react";

const SocialMedia = () => {
  const whatsappMsg = `Hello Md Saquib Raza, I want to enquire about kids clothes at Bachpan Ke Rang, Laukaha.`;

  return (
    <div className="fixed right-0 sm:right-0 flex flex-col gap-2 justify-center top-1/2 -translate-y-1/2 z-50">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Bachpan Ke Rang on WhatsApp"
        className="relative group bg-[#25D366] text-white p-2.5 rounded-full border border-white/20 shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200"
      >
        <RiWhatsappLine className="w-5 h-5" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md">
          WhatsApp Us
        </span>
      </a>

      {/* Instagram */}
      <a
        href={STORE_INFO.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Bachpan Ke Rang Instagram Profile"
        className="relative group bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white p-2.5 rounded-full border border-white/20 shadow-lg hover:scale-110 transition-all duration-200"
      >
        <Instagram className="w-5 h-5" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md">
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href={STORE_INFO.fb}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Bachpan Ke Rang Facebook Page"
        className="relative group bg-[#1877F2] text-white p-2.5 rounded-full border border-white/20 shadow-lg hover:bg-[#166fe5] hover:scale-110 transition-all duration-200"
      >
        <RiFacebookFill className="w-5 h-5" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md">
          Facebook
        </span>
      </a>

      {/* YouTube */}
      <a
        href={STORE_INFO.Youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Bachpan Ke Rang YouTube Channel"
        className="relative group bg-[#FF0000] text-white p-2.5 rounded-full border border-white/20 shadow-lg hover:bg-[#cc0000] hover:scale-110 transition-all duration-200"
      >
        <RiYoutubeFill className="w-5 h-5" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md">
          YouTube
        </span>
      </a>

      {/* Directions */}
      <a
        href={STORE_INFO.googleMapsLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Get Google Maps Directions to Store in Laukaha"
        className="relative group bg-white text-slate-800 p-2.5 rounded-full border border-slate-200 shadow-lg hover:scale-110 transition-all duration-200"
      >
        <RiMapPinFill className="w-5 h-5 text-[#EA4335]" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md">
          Get Directions
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;