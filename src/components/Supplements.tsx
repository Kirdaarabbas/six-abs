import React from 'react';
import { Supplement } from '../types';
import { ShoppingBag, MessageSquare } from 'lucide-react';
import { getSupplementWhatsAppUrl } from '../utils/contact';

interface SupplementsProps {
  onEnquireProduct: (productName: string) => void;
}

export const Supplements: React.FC<SupplementsProps> = ({ onEnquireProduct }) => {
  const supplements: Supplement[] = [
    {
      id: 'whey-protein',
      name: 'Whey Protein',
      price: '₹2,499',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop',
      tagline: 'High quality protein matrix for post-workout recovery.',
      category: 'Muscle Recovery',
    },
    {
      id: 'creatine',
      name: 'Creatine Monohydrate',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop',
      tagline: 'Micronized formula for enhanced strength & training power.',
      category: 'Strength & Power',
    },
    {
      id: 'mass-gainer',
      name: 'Mass Gainer',
      price: '₹2,199',
      image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop',
      tagline: 'Calorie-dense complex carbs and protein for healthy mass.',
      category: 'Mass Building',
    },
    {
      id: 'multivitamin',
      name: 'Multivitamin',
      price: '₹699',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
      tagline: 'Daily micronutrients to support vitality and immune defense.',
      category: 'Daily Wellness',
    },
    {
      id: 'pre-workout',
      name: 'Pre-Workout',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      tagline: 'Engineered for energy, focus and high-intensity workout pump.',
      category: 'Energy & Focus',
    },
  ];

  return (
    <section id="supplements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            In-Gym Nutrition & Fuel
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            FUEL YOUR <span className="text-[#A80710]">FITNESS</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white font-medium">
            “Train hard. Recover smart. Support your goals.”
          </p>
          <p className="mt-1 text-xs sm:text-sm text-[#B8B8B8]">
            Genuine, certified fitness supplements available directly at our SIX ABS front desk.
          </p>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {supplements.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 hover:border-[#A80710]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-[0_10px_25px_rgba(168,7,16,0.25)]"
            >
              {/* Product Image Container */}
              <div className="relative h-44 overflow-hidden bg-[#121212]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0B0B0B]/85 backdrop-blur-sm border border-white/10 text-[10px] uppercase font-bold text-[#B8B8B8] px-2.5 py-1 rounded-md">
                  {item.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wide group-hover:text-[#A80710] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#B8B8B8] mt-1.5 line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#B8B8B8] font-medium block">
                      Price
                    </span>
                    <span className="text-xl font-extrabold font-heading text-white">
                      {item.price}
                    </span>
                  </div>

                  <a
                    href={getSupplementWhatsAppUrl(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#A80710] hover:bg-[#c00813] text-white text-xs font-heading font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg shadow-sm hover:shadow-[0_0_12px_rgba(168,7,16,0.6)] transition-all"
                    title={`Enquire about ${item.name}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>ENQUIRE NOW</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center p-4 rounded-xl bg-[#141414] border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs text-[#B8B8B8] leading-relaxed">
            ⚠️ <span className="font-medium text-white/90">Disclaimer:</span> “Supplement suitability varies by individual. Seek professional advice when appropriate.”
          </p>
        </div>
      </div>
    </section>
  );
};
