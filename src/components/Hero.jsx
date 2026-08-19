import React from "react";
import {
  MessageCircle,
  MapPin,
  PhoneCall,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { RiWhatsappLine } from "@remixicon/react";

import { STORE_INFO } from "../data/products";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-6 pb-16 bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-orange-100/80 text-orange-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-orange-200 shadow-xs">
  <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
  <span>Laukaha's #1 Kids Fashion Hub</span>
  <span className="text-orange-400 font-bold">•</span>
  <span className="text-orange-900 uppercase tracking-widest text-[11px] sm:text-xs">
    FASHION • ACCESSORIES • GIFTS
  </span>
</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              <span className="hindi-title text-orange-600">बचपन के रंग</span>{" "}
              <br />
              <span className="text-sky-800 text-2xl sm:text-3xl lg:text-4xl font-bold">
                हमारे संग — Premium Kids Wear
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              {STORE_INFO.hindiTagline}. Discover charming suits, party frocks,
              daily casuals, soft footwear, sunglasses, and adorable gift
              hampers at wholesale-friendly rates!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Md Saquib Raza, I would like to see the latest collection at Bachpan Ke Rang!")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-3 transition transform hover:-translate-y-0.5"
              >
                <RiWhatsappLine className="w-5 h-5" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={STORE_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-sky-600/30 flex items-center gap-3 transition transform hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5" />
                <span>Directions on Map</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-800 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition"
              >
                <PhoneCall className="w-5 h-5 text-orange-600" />
                <span>Call Store</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200">
              <div className="text-center lg:text-left">
                <div className="text-orange-600 font-bold text-lg sm:text-xl">
                  100%
                </div>
                <div className="text-xs text-slate-500">
                  Skin-Friendly Fabrics
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-sky-700 font-bold text-lg sm:text-xl">
                  0 to 10 Yrs
                </div>
                <div className="text-xs text-slate-500">Boys & Girls Sizes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-emerald-700 font-bold text-lg sm:text-xl">
                  Best Price
                </div>
                <div className="text-xs text-slate-500">
                  उचित मूल्य पर उपलब्ध
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-400 to-sky-400 rounded-3xl blur-xl opacity-30"></div>

              <div className="relative bg-white rounded-2xl p-3 shadow-2xl border border-amber-100">
                <img
                  src="/assests/ShopName.png"
                  alt="Bachpan Ke Rang Main Store Banner"
                  className="w-full h-auto rounded-xl object-cover shadow-sm"
                />
                <div className="p-3 bg-amber-50/70 rounded-lg mt-3 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="flex items-center gap-1.5 text-orange-700">
                    <ShieldCheck className="w-4 h-4" /> Prop:{" "}
                    {STORE_INFO.proprietor}
                  </span>
                  <span className="text-sky-800">Thana Chowk, Laukaha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
