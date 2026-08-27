import React from 'react';
import { ArrowRight, Flame, Target, Trophy } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'START',
      action: 'Show up.',
      description: 'Step inside without intimidation. Get evaluated and set your personalized baseline.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    },
    {
      step: '02',
      title: 'TRAIN',
      action: 'Push your limits.',
      description: 'Execute progressive resistance, master exercise form, and build explosive endurance.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    },
    {
      step: '03',
      title: 'TRANSFORM',
      action: 'Become stronger.',
      description: 'Watch your physique, confidence, and core strength redefine what you thought possible.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            The Roadmap to Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            YOUR JOURNEY <span className="text-[#A80710]">STARTS HERE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white font-medium italic">
            “Your starting point doesn't define you. Your consistency does.”
          </p>
        </div>

        {/* 3 Visual Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-[#1A1A1A] border border-white/10 hover:border-[#A80710]/70 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl"
              >
                {/* Visual Stage Image */}
                <div className="relative h-48 overflow-hidden bg-[#121212]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
                  
                  {/* Step Badge */}
                  <span className="absolute top-4 left-4 bg-[#A80710] text-white font-heading font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
                    STAGE {item.step}
                  </span>
                </div>

                {/* Stage Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0B0B0B] border border-[#A80710]/40 flex items-center justify-center text-[#A80710]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-2xl font-black uppercase font-heading text-white tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    <div className="text-[#A80710] font-heading font-bold text-lg uppercase tracking-wider mb-2">
                      {item.action}
                    </div>

                    <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Stage Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                    <span className="uppercase font-semibold tracking-wider">Progress Step {idx + 1}/3</span>
                    {idx < 2 ? (
                      <span className="flex items-center gap-1 text-[#A80710] font-bold">
                        Next <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="text-[#25D366] font-bold">Mastery Peak</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-[#1A1A1A] via-[#221012] to-[#1A1A1A] border border-[#A80710]/40 max-w-4xl mx-auto shadow-[0_0_25px_rgba(168,7,16,0.15)]">
          <p className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-white">
            “You don't need to be fit to start. You need to start to become fit.”
          </p>
        </div>
      </div>
    </section>
  );
};
