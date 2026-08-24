import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import ProductCatalog from './components/ProductCatalog';
import AboutStore from './components/AboutStore';
import VisitingCardSection from './components/VisitingCardSection';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import SocialMedia from './components/SocialMedia';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <ProductCatalog />
        <AboutStore />
        <VisitingCardSection />
        <LocationContact />
      </main>
      <Footer />
      <SocialMedia/>
      <WhatsAppFloating />
    </div>
  );
}
