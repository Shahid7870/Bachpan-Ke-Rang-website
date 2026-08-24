import React from 'react';
import { STORE_INFO } from '../data/products';
import { CheckCircle } from 'lucide-react';

export default function AboutStore() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-200 bg-slate-900 p-2">
              <img 
                src="/assets/CarryBag.jpeg" 
                alt="Bachpan Ke Rang - Best Kids Shop in Laukaha Bihar Official Bag" 
                className="rounded-xl w-full h-auto object-cover max-h-96 mx-auto"
              />
              <div className="text-center py-2 text-amber-300 text-xs font-semibold">
                Official Signature Packaging & Brand Guarantee
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-wider">
              About The Store
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
              Welcome to <span className="text-orange-600 hindi-title">बचपन के रंग</span> <br />
              <span className="text-xl sm:text-2xl text-slate-700 font-semibold">
                Best Kids Wear & Baby Accessories Shop in Laukaha, Madhubani
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded and managed by <strong>{STORE_INFO.proprietor}</strong>, <em>Bachpan Ke Rang</em> is recognized as the best kids shop in Laukaha, Bihar. Located at Thana Chowk, Laukaha Bazar, we bring top-quality boys party wear, girls frocks, soft footwear, and newborn baby accessories at affordable wholesale and retail prices across Madhubani district.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Newborn baby gift sets & soft booties",
                "Trendy UV protection sunglasses & caps",
                "Imported breathable cotton tops & shorts",
                "Grand 3-piece blazers & festive sherwanis",
                "Comfortable soft-grip footwear & slippers",
                "Best prices & bulk order enquiry support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-2xl font-extrabold text-orange-600">5.0 ★</span>
                <span className="text-xs text-slate-600 block">Top Rated in Bihar</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-sky-700">1000+</span>
                <span className="text-xs text-slate-600 block">Happy Parents</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-emerald-700">Daily</span>
                <span className="text-xs text-slate-600 block">7 AM - 9 PM Open</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}