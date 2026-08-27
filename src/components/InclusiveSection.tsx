import React from 'react';
import { Dumbbell, HeartPulse, CheckCircle2 } from 'lucide-react';

export const InclusiveSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            Inclusive Fitness Environment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            ONE GYM. <span className="text-[#A80710]">EVERY GOAL.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            “SIX ABS welcomes both men and women — from complete beginners to experienced fitness enthusiasts.”
          </p>
        </div>

        {/* Two Professional Fitness Cards (Male & Female) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Men's Training Focus */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/10 hover:border-[#A80710]/60 transition-all duration-300 shadow-xl">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop"
                alt="Male athlete lifting weights with focus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1">
                  <Dumbbell className="w-5 h-5 text-[#A80710]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#B8B8B8]">
                    STRENGTH & HYPERTROPHY
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase font-heading text-white">
                  MEN'S STRENGTH & BULK
                </h3>
              </div>
            </div>

            <div className="p-6 pt-2">
              <div className="grid grid-cols-2 gap-2 text-xs text-[#B8B8B8]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Heavy Compound Lifts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Hypertrophy Protocols</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Six-Pack Core Focus</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Power & Posture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Women's Training Focus */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/10 hover:border-[#A80710]/60 transition-all duration-300 shadow-xl">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
                alt="Female athlete training with kettlebell and cables"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1">
                  <HeartPulse className="w-5 h-5 text-[#A80710]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#B8B8B8]">
                    TONING & FUNCTIONAL STRENGTH
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase font-heading text-white">
                  WOMEN'S FITNESS & TONING
                </h3>
              </div>
            </div>

            <div className="p-6 pt-2">
              <div className="grid grid-cols-2 gap-2 text-xs text-[#B8B8B8]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Glute & Core Sculpting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>High-Energy Fat Loss</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Supportive Coaching</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Stamina & Flexibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
