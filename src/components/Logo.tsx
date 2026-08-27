import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Athlete Chiseled Six-Pack Torso Badge */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} bg-gradient-to-b from-[#1A1A1A] to-[#0B0B0B] border border-[#A80710]/40 rounded-xl p-1.5 shadow-[0_0_15px_rgba(168,7,16,0.25)] group`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#A80710] opacity-10 blur-sm rounded-xl group-hover:opacity-30 transition-opacity" />
        
        {/* Custom Athletic Muscular Torso SVG */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          {/* Broad Shoulders & Traps */}
          <path
            d="M8 12C12 9 17 8 24 8C31 8 36 9 40 12C38 17 37 21 37 26C35 34 31 40 24 43C17 40 13 34 11 26C11 21 10 17 8 12Z"
            fill="#121212"
            stroke="#A80710"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pectoral Muscles */}
          <path
            d="M14 16C18 16 22 17 24 20C26 17 30 16 34 16"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Center Line / Linea Alba */}
          <path
            d="M24 20V39"
            stroke="#A80710"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Top Abs (Pack 1 & 2) */}
          <path
            d="M17 23C19 23 21.5 24 23 24.5M31 23C29 23 26.5 24 25 24.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Mid Abs (Pack 3 & 4) */}
          <path
            d="M18 28C20 28 22 29 23 29.5M30 28C28 28 26 29 25 29.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Lower Abs (Pack 5 & 6) */}
          <path
            d="M19 33C20.5 33 22 34 23 34.5M29 33C27.5 33 26 34 25 34.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Serratus / Oblique V-Taper Cut */}
          <path
            d="M17 38L24 41L31 38"
            stroke="#A80710"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-black tracking-wider uppercase font-heading ${textSizes[size]} flex items-center leading-none`}>
          <span className="text-white">SIX</span>
          <span className="text-[#A80710] ml-1.5 drop-shadow-[0_0_10px_rgba(168,7,16,0.6)]">ABS</span>
        </div>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8B8B8] font-semibold mt-0.5">
            GYM & MENTORSHIP
          </span>
        )}
      </div>
    </div>
  );
};
