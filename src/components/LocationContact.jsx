import React from "react";
import { STORE_INFO } from "../data/products";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { RiWhatsappLine } from "@remixicon/react";

export default function LocationContact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
            Visit Our Store in Laukaha
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
            Store Location & Contact Details
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Visit the best kids wear and baby dress shop located conveniently at Thana Chowk, Laukaha Bazaar, Madhubani District, Bihar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl"></div>

            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold hindi-title text-amber-400">
                बचपन के रंग (हमारे संग)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Proprietor: {STORE_INFO.proprietor}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">
                    Store Address / पता:
                  </div>
                  <div className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    <span className="block font-medium text-slate-100">
                      Thana Chowk, Laukaha Bazar, Madhubani, Bihar - 847421
                    </span>
                    <span className="block text-slate-400 text-xs mt-0.5">
                      थाना चौक लौकहा बाजार, मधुबनी, बिहार - 847421
                    </span> 
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">
                    Phone & WhatsApp:
                  </div>
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="text-emerald-300 font-bold block hover:underline"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-200">
                    Store Timings / समय:
                  </div>
                  <div className="text-slate-300 text-xs sm:text-sm">
                    {STORE_INFO.timings}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={STORE_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Md Saquib Raza, I need directions to Bachpan Ke Rang store in Laukaha.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition"
              >
                <RiWhatsappLine className="w-5 h-5" />
                <span>Quick WhatsApp Message</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[460px] relative">
            <iframe
              title="Bachpan Ke Rang Location Map - Laukaha Bihar"
              src="https://maps.google.com/maps?q=GFXC%2BPR8%2C%20Laukaha%2C%20Bihar%20847421&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-md border border-slate-200 text-xs">
              <div className="font-bold text-slate-800">Bachpan Ke Rang (लौकहा)</div>
              <div className="text-slate-500 text-[11px]">
                Thana Chowk, Laukaha, Bihar 847421
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}