import React from 'react';
import { STORE_INFO } from '../data/products';
import { Phone, Instagram, MapPin } from 'lucide-react';

export default function VisitingCardSection() {
  return (
    <section className="py-14 bg-gradient-to-r from-amber-100/70 via-orange-50 to-sky-100/70 border-t border-amber-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Digital Visiting Card</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Store Contact Card (विजिटिंग कार्ड)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Save or scan the QR code to connect with us directly on WhatsApp & Instagram.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-amber-200 max-w-3xl mx-auto">
          <img 
            src="/assests/VistingCard.jpeg" 
            alt="Bachpan Ke Rang Visiting Card" 
            className="w-full h-50 rounded-xl shadow-sm border border-slate-100"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-center">
            <a 
              href={`tel:${STORE_INFO.phone}`} 
              className="p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition flex flex-col items-center justify-center gap-1"
            >
              <Phone className="w-5 h-5 text-orange-600" />
              <span className="text-xs font-bold text-slate-800">{STORE_INFO.phone}</span>
              <span className="text-[10px] text-slate-500">Call Now</span>
            </a>

            <a 
              href={STORE_INFO.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition flex flex-col items-center justify-center gap-1"
            >
              <Instagram className="w-5 h-5 text-pink-600" />
              <span className="text-xs font-bold text-slate-800">{STORE_INFO.instagramHandle}</span>
              <span className="text-[10px] text-slate-500">Follow on Instagram</span>
            </a>

            <a 
              href={STORE_INFO.googleMapsLink} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-sky-50 rounded-xl hover:bg-sky-100 transition flex flex-col items-center justify-center gap-1"
            >
              <MapPin className="w-5 h-5 text-sky-600" />
              <span className="text-xs font-bold text-slate-800">Thana Chowk</span>
              <span className="text-[10px] text-slate-500">Laukaha Bazaar, Bihar</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
