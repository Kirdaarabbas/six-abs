import React from 'react';
import { MessageSquare, Phone, ArrowRight, Award, Users, ShieldCheck, Flame } from 'lucide-react';
import { GYM_PHONE, getWhatsAppUrl } from '../utils/contact';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0B0B]">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Athlete working out at gym"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-fade-in"
          loading="eager"
        />
        {/* Layered dark gradients for maximum typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0B]/60 to-[#0B0B0B]" />
        {/* Subtle red spotlight glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#A80710]/15 blur-[120px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Brand Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#A80710]/50 mb-6 shadow-[0_0_20px_rgba(168,7,16,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#A80710] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-white/90">
            SIX ABS • INDIRAPURAM
          </span>
        </div>

        {/* Main Tagline / One-Liner */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase font-heading tracking-tight leading-[1.08] text-white max-w-4xl drop-shadow-lg">
          “DON’T JUST BUILD A BODY. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90">
            BUILD THE{' '}
          </span>
          <span className="text-[#A80710] drop-shadow-[0_0_25px_rgba(168,7,16,0.6)]">
            STRONGEST VERSION
          </span>{' '}
          OF YOU.”
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#B8B8B8] max-w-3xl leading-relaxed font-normal">
          A beginner-friendly, transformation-focused gym for men and women, backed by{' '}
          <span className="text-white font-semibold">10+ years of trainer experience</span> and{' '}
          <span className="text-white font-semibold">personal mentorship</span>.
        </p>

        {/* Main CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-join-cta"
            onClick={onOpenJoinModal}
            className="flex items-center justify-center gap-3 bg-[#A80710] hover:bg-[#c00813] text-white font-heading font-bold text-lg tracking-wider uppercase px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(168,7,16,0.5)] hover:shadow-[0_0_40px_rgba(168,7,16,0.8)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>JOIN SIX ABS</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            id="hero-whatsapp-cta"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#222222] text-white font-heading font-bold text-lg tracking-wider uppercase px-8 py-4 rounded-xl border border-white/15 hover:border-[#25D366]/60 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.25)] transition-all transform hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Quick Call Bar */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#B8B8B8]">
          <span>Need immediate assistance?</span>
          <a
            href={`tel:${GYM_PHONE}`}
            className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#A80710] transition-colors underline decoration-[#A80710]/50 underline-offset-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#A80710]" />
            Call: {GYM_PHONE}
          </a>
        </div>

        {/* 4 Trust Indicators */}
        <div className="mt-12 w-full pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1A1A1A]/40 border border-white/5">
            <Award className="w-6 h-6 text-[#A80710] mb-2" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-heading text-white">
              10+ YEARS EXPERIENCE
            </span>
            <span className="text-[11px] text-[#B8B8B8] mt-0.5">Proven coaching track record</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1A1A1A]/40 border border-white/5">
            <ShieldCheck className="w-6 h-6 text-[#A80710] mb-2" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-heading text-white">
              BEGINNER FRIENDLY
            </span>
            <span className="text-[11px] text-[#B8B8B8] mt-0.5">Zero judgment, step-by-step</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1A1A1A]/40 border border-white/5">
            <Users className="w-6 h-6 text-[#A80710] mb-2" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-heading text-white">
              MEN & WOMEN
            </span>
            <span className="text-[11px] text-[#B8B8B8] mt-0.5">Safe, inclusive atmosphere</span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1A1A1A]/40 border border-white/5">
            <Flame className="w-6 h-6 text-[#A80710] mb-2" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-heading text-white">
              PERSONAL MENTORSHIP
            </span>
            <span className="text-[11px] text-[#B8B8B8] mt-0.5">1-on-1 form correction & goals</span>
          </div>
        </div>
      </div>
    </section>
  );
};
