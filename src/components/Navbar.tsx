import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { GYM_PHONE, getWhatsAppUrl } from '../utils/contact';

interface NavbarProps {
  onOpenJoinModal: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WHY US', href: '#why-us' },
    { name: 'PLANS', href: '#plans' },
    { name: 'SUPPLEMENTS', href: '#supplements' },
    { name: 'LOCATION', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 75;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#1A1A1A] py-3 shadow-[0_4px_25px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="focus:outline-none"
        >
          <Logo size="md" showTagline />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold tracking-wider text-[#B8B8B8] hover:text-white transition-colors uppercase relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A80710] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${GYM_PHONE}`}
            className="flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white bg-[#1A1A1A] px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            title="Call SIX ABS"
          >
            <Phone className="w-3.5 h-3.5 text-[#A80710]" />
            <span>{GYM_PHONE}</span>
          </a>

          <button
            id="nav-join-btn"
            onClick={() => onOpenJoinModal()}
            className="bg-[#A80710] hover:bg-[#c00813] text-white font-heading font-bold text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(168,7,16,0.45)] hover:shadow-[0_0_25px_rgba(168,7,16,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            JOIN NOW
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenJoinModal()}
            className="bg-[#A80710] text-white font-heading font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-md"
          >
            JOIN NOW
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-[#1A1A1A] text-white hover:text-[#A80710] transition-colors focus:outline-none border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-b border-[#1A1A1A] px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-white/90 hover:text-white hover:bg-[#1A1A1A] px-4 py-2.5 rounded-lg transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#A80710] text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1A1A1A] space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full bg-[#A80710] hover:bg-[#c00813] text-white font-heading font-bold text-base tracking-wider uppercase py-3 rounded-lg text-center block shadow-[0_0_20px_rgba(168,7,16,0.4)]"
            >
              JOIN SIX ABS NOW
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#25D366]/20 text-white text-xs font-semibold py-2.5 rounded-lg border border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                href={`tel:${GYM_PHONE}`}
                className="flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-white/10 text-white text-xs font-semibold py-2.5 rounded-lg border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#A80710]" />
                Call {GYM_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
