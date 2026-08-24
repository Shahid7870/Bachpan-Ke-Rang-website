import React from "react";
import { Sparkles, Shirt, Footprints, Award } from "lucide-react";

const CATEGORY_CARDS = [
  {
    title: "Boys Collection",
    subtitle: "लड़कों के फैंसी कपड़े",
    desc: "Imported t-shirts, RFD shorts, rugged denims & stylish shirts for boys in Laukaha.",
    icon: Shirt,
    color: "from-blue-500 to-sky-600",
    image: "/assets/boywear.jpeg",
  },
  {
    title: "Girls Party Frocks",
    subtitle: "लड़कियों के फ्रॉक व ड्रेसेस",
    desc: "Rose flower party gowns, fairytale dresses & cute headbands available in Madhubani.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    image: "/assets/frock.jpeg",
  },
  {
    title: "Suits & Coat Pants",
    subtitle: "कोट-पैंट एवं शेरवानी",
    desc: "3-piece coat sets, blazers & royal ethnic wear for weddings and celebrations.",
    icon: Award,
    color: "from-emerald-600 to-teal-800",
    image: "/assets/coatPant.png",
  },
  {
    title: "Footwear & Booties",
    subtitle: "चप्पल, जूते व सैंडल",
    desc: "Anti-slip soft sole baby walking shoes, sandals, and booties for infants.",
    icon: Footprints,
    color: "from-amber-500 to-orange-600",
    image: "/assets/Booty.webp",
  },
];

export default function FeaturedCategories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
            Top Kids Wear Categories in Laukaha
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Special Children's Fashion & Accessories in Bihar
          </p>
          <p className="text-sm text-slate-600 mt-2">
            Explore carefully curated clothes, party wear, footwear, and baby accessories made with gentle, premium fabrics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_CARDS.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container fixed with object-contain */}
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center p-3">
                  <img
                    src={cat.image}
                    alt={`${cat.title} - Bachpan Ke Rang Laukaha`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-slate-800 shadow-sm z-10">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-orange-600 transition">
                      {cat.title}
                    </h3>
                    <p className="text-sm font-semibold text-amber-700 mb-2">
                      {cat.subtitle}
                    </p>
                    <p className="text-sm text-slate-600">{cat.desc}</p>
                  </div>
                  <a
                    href="#catalog"
                    className="mt-4 inline-flex items-center text-sm font-bold text-orange-600 hover:text-orange-700"
                  >
                    View Items &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}