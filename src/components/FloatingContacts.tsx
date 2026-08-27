import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { GYM_PHONE, getWhatsAppUrl } from '../utils/contact';

export const FloatingContacts: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Call Floating Button */}
      <a
        id="floating-call-btn"
        href={`tel:${GYM_PHONE}`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1A1A1A] hover:bg-[#A80710] text-white border-2 border-white/20 hover:border-white shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Call SIX ABS Gym"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#A80710] group-hover:text-white transition-colors" />
        
        {/* Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-16 bg-[#0B0B0B] text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Call: {GYM_PHONE}
        </span>
      </a>

      {/* WhatsApp Floating Button with pulsing ring */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp with SIX ABS Gym"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current relative z-10" />

        {/* Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-16 bg-[#0B0B0B] text-white text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          WhatsApp: {GYM_PHONE}
        </span>
      </a>
    </div>
  );
};
