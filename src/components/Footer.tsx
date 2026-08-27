import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { GYM_PHONE, GYM_ADDRESS, getWhatsAppUrl, getGoogleMapsDirectionsUrl } from '../utils/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#B8B8B8] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <Logo size="md" showTagline />
            <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed pt-2">
              “Don’t Just Build a Body. Build the Strongest Version of You.”
            </p>
            <p className="text-xs text-white/50">
              A beginner-friendly, transformation-focused gym in Indirapuram for men & women.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why SIX ABS</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">Membership Plans</a>
              </li>
              <li>
                <a href="#supplements" className="hover:text-white transition-colors">Fitness Supplements</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Gym Location & Map</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Batches */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A80710]" />
              Batch Timings
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-white font-semibold block">Morning Session:</span>
                <span className="text-[#B8B8B8]">7:00 AM – 9:00 AM</span>
              </div>
              <div>
                <span className="text-white font-semibold block">Evening Session:</span>
                <span className="text-[#B8B8B8]">6:00 PM – 9:00 PM</span>
              </div>
              <div className="pt-2 text-xs text-white/60">
                Open Monday through Saturday.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Address */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest mb-4">
              Contact & Address
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="flex items-start gap-2 text-xs text-white/80">
                <MapPin className="w-4 h-4 text-[#A80710] shrink-0 mt-0.5" />
                <span>{GYM_ADDRESS}</span>
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${GYM_PHONE}`}
                  className="flex items-center gap-2 text-white hover:text-[#A80710] transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A80710]" />
                  <span>Call: {GYM_PHONE}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20ba59] transition-colors font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {GYM_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} SIX ABS Gym. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Indirapuram, Ghaziabad</span>
            <span>•</span>
            <span>Trainer Mentorship & Fitness</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
