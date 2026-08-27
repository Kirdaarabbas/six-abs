import React from 'react';
import { Check, Flame, Sparkles, ShieldCheck } from 'lucide-react';
import { Plan } from '../types';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'BASIC',
      price: '₹1,500',
      period: '/ MONTH',
      features: [
        'Gym access',
        'Basic workout guidance',
        'Beginner-friendly training',
        'General fitness support',
      ],
      ctaText: 'GET STARTED',
    },
    {
      id: 'transform',
      name: 'TRANSFORM',
      price: '₹2,500',
      period: '/ MONTH',
      isPopular: true,
      features: [
        'Gym access',
        'Personalized workout plan',
        'Progress tracking',
        'Trainer guidance',
        'Transformation-focused training',
      ],
      ctaText: 'START TRANSFORMATION',
    },
    {
      id: 'personal-mentorship',
      name: 'PERSONAL MENTORSHIP',
      price: '₹4,500',
      period: '/ MONTH',
      features: [
        'Everything in Transform',
        'Personal mentorship',
        'Customized workout guidance',
        'Exercise-form correction',
        'Regular progress reviews',
        'Personalized fitness guidance',
      ],
      ctaText: 'GET PERSONAL MENTORSHIP',
    },
  ];

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#A80710]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            Simple & Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            CHOOSE YOUR <span className="text-[#A80710]">PLAN</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8B8B8]">
            No hidden charges. Select the level of guidance that matches your fitness ambition.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isPop = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPop
                    ? 'bg-[#1A1A1A] border-2 border-[#A80710] shadow-[0_0_35px_rgba(168,7,16,0.35)] lg:-translate-y-3 z-20'
                    : 'bg-[#141414] border border-white/10 hover:border-white/25 hover:bg-[#181818] z-10'
                } p-7 sm:p-8`}
              >
                {/* Most Popular Badge */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A80710] text-white text-xs font-heading font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,7,16,0.8)] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Name & Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-heading text-white tracking-wide">
                      {plan.name}
                    </h3>
                    {isPop ? (
                      <Sparkles className="w-5 h-5 text-[#A80710]" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-white/40" />
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#B8B8B8]">
                      {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      What's Included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isPop
                              ? 'bg-[#A80710] text-white'
                              : 'bg-white/10 text-[#A80710]'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-sm text-[#E0E0E0] leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-xl font-heading font-bold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      isPop
                        ? 'bg-[#A80710] hover:bg-[#c00813] text-white shadow-[0_0_20px_rgba(168,7,16,0.6)] hover:shadow-[0_0_30px_rgba(168,7,16,0.9)] transform hover:-translate-y-0.5'
                        : 'bg-[#1A1A1A] hover:bg-white text-white hover:text-[#0B0B0B] border border-white/15'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Disclaimer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#B8B8B8] max-w-xl mx-auto italic">
            “Membership prices are subject to change. Contact SIX ABS for current pricing and availability.”
          </p>
        </div>
      </div>
    </section>
  );
};
