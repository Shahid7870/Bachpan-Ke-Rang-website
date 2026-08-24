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
  return (
    <div className="fixed right-0 flex flex-col gap-1 justify-center top-1/2 -translate-y-1/2 z-50">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
          "Hello Md Saquib Raza, I want to enquire about kids clothes collection.",
        )}`}
        target="_blank"
        rel="noreferrer"
        className="relative group bg-[#25D366] text-white p-2 rounded-full border hover:bg-[#20bd5a] transition"
      >
        <RiWhatsappLine className="w-5 h-5" />

        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2
      whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200"  
        >
          WhatsApp
        </span>
      </a>

      {/* Instagram */}
      <a
        href={STORE_INFO.instagram}
        target="_blank"
        rel="noreferrer"
        className="relative group bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white p-2 rounded-full border border-white/20 hover:scale-105 transition-all duration-200"
      >
        <Instagram className="w-5 h-5" />

        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2
    whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200"
        >
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href={STORE_INFO.fb}
        target="_blank"
        rel="noreferrer"
        className="relative group bg-[#1877F2] text-white p-2 rounded-full border hover:bg-[#166fe5] transition"
      >
        <RiFacebookFill className="w-5 h-5" />

        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2
      whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200"
        >
          Facebook
        </span>
      </a>

      {/* YouTube */}
      <a
        href={STORE_INFO.Youtube}
        target="_blank"
        rel="noreferrer"
        className="relative group bg-[#FF0000] text-white p-2 rounded-full border hover:bg-[#cc0000] transition"
      >
        <RiYoutubeFill className="w-5 h-5" />

        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2
      whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200"
        >
          YouTube
        </span>
      </a>

    {/* Directions */}
<a
  href={STORE_INFO.googleMapsLink}
  target="_blank"
  rel="noreferrer"
  className="relative group bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:scale-105 transition-all duration-200"
  title="Get Directions"
>
  <RiMapPinFill className="w-5 h-5 text-[#EA4335]" />

  <span
    className="absolute right-full mr-2 top-1/2 -translate-y-1/2
    whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200"
  >
    Get Directions
  </span>
</a>
    </div>
  );
};

export default SocialMedia;
