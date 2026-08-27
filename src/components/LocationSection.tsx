import React from 'react';
import { MapPin, Navigation, Phone, Copy, Check } from 'lucide-react';
import { GYM_PHONE, GYM_ADDRESS, getGoogleMapsDirectionsUrl } from '../utils/contact';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Google Maps Embed URL centered on Swarna Jayanti Park, Niti Khand I, Indirapuram
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Plot No. 573, Opposite Swarna Jayanti Park, NITI KHAND I, Indirapuram, Ghaziabad, Uttar Pradesh 201014'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            Visit Our Gym
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            FIND <span className="text-[#A80710]">SIX ABS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8B8B8]">
            Conveniently situated opposite Swarna Jayanti Park in Indirapuram.
          </p>
        </div>

        {/* Location Card & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Address & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 bg-[#1A1A1A] border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#A80710]/50 flex items-center justify-center text-[#A80710] shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl uppercase text-white">
                    GYM LOCATION
                  </h3>
                  <span className="text-xs text-[#A80710] font-semibold">
                    Prime Indirapuram Spot
                  </span>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="bg-[#0B0B0B] border border-white/10 rounded-xl p-5 mb-6 relative group">
                <div className="text-xs uppercase tracking-wider text-[#B8B8B8] font-bold mb-2">
                  Official Address
                </div>
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  {GYM_ADDRESS}
                </p>

                <button
                  onClick={handleCopyAddress}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#B8B8B8] hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#25D366]" />
                      <span className="text-[#25D366]">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Landmark info */}
              <div className="space-y-2 text-xs text-[#B8B8B8] mb-6">
                <p>📍 <strong className="text-white">Key Landmark:</strong> Directly opposite the entrance gates of Swarna Jayanti Park.</p>
                <p>🚗 <strong className="text-white">Parking:</strong> Ample two-wheeler & four-wheeler roadside parking available.</p>
              </div>
            </div>

            {/* CTAs: GET DIRECTIONS & CALL NOW */}
            <div className="space-y-3 pt-2">
              <a
                href={getGoogleMapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#A80710] hover:bg-[#c00813] text-white font-heading font-bold text-sm tracking-wider uppercase py-3.5 rounded-xl shadow-[0_0_15px_rgba(168,7,16,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${GYM_PHONE}`}
                className="w-full flex items-center justify-center gap-2 bg-[#0B0B0B] hover:bg-white text-white hover:text-[#0B0B0B] font-heading font-bold text-sm tracking-wider uppercase py-3.5 rounded-xl border border-white/15 transition-all"
              >
                <Phone className="w-4 h-4 text-[#A80710]" />
                <span>CALL NOW: {GYM_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Responsive Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-xl min-h-[350px] lg:min-h-[460px] relative">
            <iframe
              title="SIX ABS Gym Location Map"
              src={mapEmbedUrl}
              className="w-full h-full min-h-[350px] lg:min-h-[460px] border-0 filter grayscale-[25%] contrast-[115%]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay map pin badge */}
            <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 backdrop-blur-md border border-[#A80710]/50 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#A80710] animate-ping" />
              <span className="text-xs font-heading font-bold uppercase tracking-wider">
                SIX ABS • NITI KHAND I
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
