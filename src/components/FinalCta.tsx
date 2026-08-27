import React from 'react';
import { ArrowRight, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { GYM_PHONE, getWhatsAppUrl } from '../utils/contact';

interface FinalCtaProps {
  onOpenJoinModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative overflow-hidden">
      {/* Cinematic Background Glow & Vignette */}
      <div className="absolute inset-0 bg-radial from-[#A80710]/25 via-[#1A1A1A]/60 to-[#0B0B0B] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A80710]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#A80710]/60 mb-6 shadow-[0_0_20px_rgba(168,7,16,0.4)]">
          <Sparkles className="w-3.5 h-3.5 text-[#A80710]" />
          <span className="text-xs uppercase font-heading font-black tracking-widest text-white">
            YOUR TRANSFORMATION AWAITS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-heading tracking-tight text-white leading-tight">
          READY TO BECOME YOUR <br className="hidden sm:inline" />
          <span className="text-[#A80710] drop-shadow-[0_0_35px_rgba(168,7,16,0.8)]">
            STRONGEST SELF?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-5 text-lg sm:text-xl text-[#E0E0E0] font-medium max-w-2xl mx-auto">
          “Stop waiting for the perfect time. Start today.”
        </p>

        {/* 3 Strong Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          {/* JOIN SIX ABS */}
          <button
            id="final-join-btn"
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#A80710] hover:bg-[#c00813] text-white font-heading font-black text-base sm:text-lg tracking-wider uppercase px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(168,7,16,0.6)] hover:shadow-[0_0_45px_rgba(168,7,16,0.9)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>JOIN SIX ABS</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* WHATSAPP US */}
          <a
            id="final-whatsapp-btn"
            href={getWhatsAppUrl("Hi SIX ABS! I'm ready to start today. Please share enrollment details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#1A1A1A] hover:bg-[#25D366]/20 text-white font-heading font-bold text-base sm:text-lg tracking-wider uppercase px-7 py-4 rounded-xl border border-white/15 hover:border-[#25D366]/60 shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all transform hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
            <span>WHATSAPP US</span>
          </a>

          {/* CALL 8130937598 */}
          <a
            id="final-call-btn"
            href={`tel:${GYM_PHONE}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0B0B0B] hover:bg-white text-white hover:text-[#0B0B0B] font-heading font-bold text-base sm:text-lg tracking-wider uppercase px-7 py-4 rounded-xl border border-white/15 transition-all transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 text-[#A80710]" />
            <span>CALL {GYM_PHONE}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
