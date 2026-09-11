import React, { useState, useEffect } from 'react';
import { ShieldCheck, Radio, ArrowRight, Menu, X, Sprout } from 'lucide-react';

interface NavbarProps {
  onOpenVerifier: () => void;
  onOpenContact: () => void;
  currentView?: 'home' | 'about';
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVerifier,
  onOpenContact,
  currentView = 'home',
  onNavigateHome,
  onNavigateAbout,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateAbout) {
      onNavigateAbout();
    }
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(19,50,41,0.06)] border-b border-emerald-900/10 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Smartelco style */}
          <a
            href="#"
            onClick={handleBrandClick}
            id="nav-brand-link"
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#133229] to-[#0B1E19] flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
            </div>
            <span className="font-sans text-[20px] font-bold tracking-tight text-[#133229]">
              Upscale <span className="text-emerald-600 font-extrabold">AgTech</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-gray-600">
            <button
              onClick={handleAboutClick}
              id="nav-link-about"
              className={`hover:text-[#133229] transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
                currentView === 'about'
                  ? 'text-emerald-700 font-bold bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/70'
                  : 'font-medium hover:text-emerald-700'
              }`}
            >
              <span>About Us</span>
              {currentView !== 'about' && (
                <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded-md">
                  New
                </span>
              )}
            </button>
          </nav>

          {/* Action CTAs - Pill buttons with hover glow */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              id="btn-nav-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#133229] hover:bg-[#1D4A3C] rounded-full shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-950/25 transition-all duration-200 group"
            >
              <span>Request Pilot</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenVerifier}
              className="p-2 text-xs rounded-full bg-emerald-50 border border-emerald-200 text-[#133229]"
              title="Verify certificate"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-xl border border-slate-200 bg-white text-gray-700 hover:text-[#133229]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 space-y-3"
        >
          <div className="flex items-center gap-2 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 rounded-lg">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Adubiaro Node Online • Osun State, Nigeria</span>
          </div>
          <div className="flex flex-col space-y-1 text-sm font-medium text-gray-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateAbout) onNavigateAbout();
              }}
              className={`text-left py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                currentView === 'about' ? 'bg-emerald-50 text-emerald-900 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              <span>About Us (Smartelco Mission)</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold uppercase">
                New
              </span>
            </button>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerifier();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#133229] bg-emerald-50 hover:bg-emerald-100 rounded-full border border-emerald-200 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verify Production Batch</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#133229] hover:bg-[#1D4A3C] rounded-full flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request Farm Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
