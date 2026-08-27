import React from 'react';
import { Clock, Sun, Moon } from 'lucide-react';

export const OpeningHours: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto">
        {/* Compact Charcoal Card */}
        <div className="bg-[#1A1A1A] border-2 border-white/10 hover:border-[#A80710]/50 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
          {/* Subtle Ambient Red Flare */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#A80710]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B0B0B] border border-[#A80710]/40 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-2">
              <Clock className="w-3.5 h-3.5" />
              Daily Training Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-heading tracking-tight text-white">
              OPENING <span className="text-[#A80710]">HOURS</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#B8B8B8]">
              Structured morning & evening slots designed for focused workout attention.
            </p>
          </div>

          {/* Time Slots Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Morning Slot */}
            <div className="bg-[#0B0B0B] border border-white/10 rounded-xl p-6 flex flex-col items-center text-center group hover:border-[#A80710]/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#A80710]/40 flex items-center justify-center text-[#A80710] mb-3 group-hover:scale-110 transition-transform">
                <Sun className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B8B8B8] mb-1">
                MORNING BATCH
              </span>
              <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-wide">
                7:00 AM – 9:00 AM
              </div>
              <span className="mt-2 text-xs text-white/50">
                Kickstart your day with high metabolic drive
              </span>
            </div>

            {/* Evening Slot */}
            <div className="bg-[#0B0B0B] border border-white/10 rounded-xl p-6 flex flex-col items-center text-center group hover:border-[#A80710]/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#A80710]/40 flex items-center justify-center text-[#A80710] mb-3 group-hover:scale-110 transition-transform">
                <Moon className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B8B8B8] mb-1">
                EVENING BATCH
              </span>
              <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-wide">
                6:00 PM – 9:00 PM
              </div>
              <span className="mt-2 text-xs text-white/50">
                Decompress, lift heavy & build peak strength
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
