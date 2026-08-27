import React from 'react';
import { Award, Compass, TrendingUp, UserCheck } from 'lucide-react';

export const WhySixAbs: React.FC = () => {
  const cards = [
    {
      icon: Award,
      title: '10+ YEARS EXPERIENCE',
      description: 'Train under a highly experienced fitness trainer with more than 10 years of experience.',
      tag: 'Expert Coaching',
    },
    {
      icon: Compass,
      title: 'BEGINNER FRIENDLY',
      description: "No matter where you're starting, get guidance that helps you train confidently and correctly.",
      tag: 'Zero Intimidation',
    },
    {
      icon: TrendingUp,
      title: 'TRANSFORMATION FOCUSED',
      description: 'Structured training designed around strength, fitness, consistency and visible progress.',
      tag: 'Visible Results',
    },
    {
      icon: UserCheck,
      title: 'PERSONAL MENTORSHIP',
      description: 'Get personalized guidance on workouts, exercise technique, progression and fitness goals.',
      tag: '1-on-1 Attention',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            The SIX ABS Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            WHY <span className="text-[#A80710]">SIX ABS?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8B8B8]">
            We bridge the gap between aimless workouts and real, sustainable physical transformation.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-[#1A1A1A] hover:bg-[#202020] border border-white/10 hover:border-[#A80710]/60 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl hover:shadow-[0_10px_30px_rgba(168,7,16,0.2)]"
              >
                {/* Accent Top Border Subtle Highlight */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#A80710]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#0B0B0B] border border-[#A80710]/40 flex items-center justify-center text-[#A80710] group-hover:bg-[#A80710] group-hover:text-white transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-heading font-bold text-white/30 tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase font-heading text-white tracking-wide group-hover:text-[#A80710] transition-colors mb-3">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/60 font-medium">
                  <span>{card.tag}</span>
                  <span className="text-[#A80710] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
