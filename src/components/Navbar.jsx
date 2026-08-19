import React, { useState, useEffect } from 'react';
import { Phone, Instagram, Menu, X } from 'lucide-react';
import { STORE_INFO } from '../data/products';
import { RiWhatsappLine } from "@remixicon/react";


const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'categories', label: 'Categories', icon: '👕' },
  { id: 'catalog', label: 'Products', icon: '👗' },
  { id: 'about', label: 'About Us', icon: 'ℹ️' },
  { id: 'contact', label: 'Store Location', icon: '📍' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-sky-600 text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium">
        ✨ Bachpan Ke Rang — Thana Chowk, Laukaha | Call: {STORE_INFO.phone}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/assests/logo.png" 
              alt="Bachpan Ke Rang Logo" 
              className="h-14 w-14 rounded-full border-2 border-amber-500 object-cover shadow-sm" 
            />
            <div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent block hindi-title">
                बचपन के रंग
              </span>
              <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                Bachpan Ke Rang • Laukaha
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-4 text-sm font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-orange-600 font-bold bg-orange-50/80 shadow-xs'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Md Saquib Raza, I want to enquire about kids clothes collection.')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-2 rounded-full font-semibold flex items-center space-x-2 text-sm shadow-md transition transform hover:-translate-y-0.5"
            >
              <span><RiWhatsappLine className="w-5 h-5" /></span>
            </a>
            <a
              href={STORE_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-pink-600 hover:text-pink-700 p-2 rounded-full border border-pink-200 hover:bg-pink-50 transition"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="p-2 bg-orange-50 text-orange-600 rounded-full"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition ${
                  isActive
                    ? 'text-orange-600 bg-orange-50 font-bold border-l-4 border-orange-600'
                    : 'text-gray-800 hover:text-orange-600 hover:bg-gray-50'
                }`}
              >
                {item.icon} {item.label}
              </a>
            );
          })}

          <div className="pt-3 flex flex-col gap-2">
            <a
              href={`https://wa.me/${STORE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-emerald-600 text-white py-2.5 rounded-lg font-bold"
            >
              Chat on WhatsApp
            </a>
            <a
              href={STORE_INFO.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-blue-600 text-white py-2.5 rounded-lg font-bold"
            >
              Get Store Directions
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}