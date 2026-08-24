import React from "react";
import { STORE_INFO } from "../data/products";
import { Instagram, Phone, MapPin, Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/logo.png"
                alt="Bachpan Ke Rang - Best Kids Shop in Laukaha"
                className="w-12 h-12 rounded-full border border-amber-400 object-cover"
              />
              <div>
                <div className="text-xl font-bold text-white hindi-title">
                  बचपन के रंग (हमारे संग)
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  Bachpan Ke Rang • Laukaha, Bihar
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              The premier kids wear and baby fashion destination in Laukaha, Madhubani. 
              Offering stylish children clothing, footwear, baby accessories, and gift sets 
              at wholesale and retail prices.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-orange-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="hover:text-orange-400 transition"
                >
                  Kids Categories
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-orange-400 transition">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition">
                  About Store
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition">
                  Store Directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="hover:text-white"
                >
                  {STORE_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <a
                  href={STORE_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  @bachpankerang
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Thana Chowk, Laukaha, Madhubani, Bihar 847421</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} <span className="text-orange-500">Bachpan Ke Rang</span>. All Rights Reserved.
            Prop. Md Saquib Raza.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400 font-medium">
              <Code2 className="w-4 h-4 text-orange-500" />
              Website Developed by{" "}
              <a
                href={`https://wa.me/917870019475?text=${encodeURIComponent("Hello Shahid Iqbal, I saw the Bachpan Ke Rang website and want to connect with you.")}`}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 font-semibold hover:text-amber-300 hover:underline transition inline-flex items-center gap-1"
              >
                Shahid Iqbal
              </a>
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="flex items-center gap-1">
              Crafted for Kids Fashion with{" "}
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in
              Bihar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}