import React, { useState, useEffect } from 'react';
import { ShieldCheck, Radio, ChevronRight, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenVerifier: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVerifier, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md border-[#D6D0BE] shadow-xs'
          : 'bg-[#F4F1EA] border-[#D6D0BE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 bg-[#1C1A15] flex items-center justify-center border border-[#1C1A15] shadow-xs group-hover:bg-[#3E4B22] transition-colors">
              <svg className="w-5 h-5 text-[#FAF8F4]" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="2" width="24" height="24" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 21 L10 10 L14 16 L18 8 L24 21" stroke="#BF7E27" strokeWidth="1.8" fill="none" />
                <circle cx="10" cy="10" r="1.5" fill="#FAF8F4" />
                <circle cx="18" cy="8" r="1.5" fill="#FAF8F4" />
              </svg>
            </div>
            <div>
              <div className="font-serif text-xl font-bold tracking-tight text-[#1C1A15] flex items-center gap-2">
                <span>Upscale Agro</span>
                <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 bg-[#E3E7D3] text-[#3E4B22] font-semibold border border-[#D6D0BE]">
                  v2.4
                </span>
              </div>
              <div className="font-mono text-[11px] text-[#5C5748] tracking-tight">
                Agricultural technology • Nigeria
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#5C5748]">
            <a
              href="#mission"
              id="nav-link-mission"
              className="hover:text-[#1C1A15] transition-colors py-1 border-b border-transparent hover:border-[#3E4B22]"
            >
              The Trust Gap
            </a>
            <a
              href="#products"
              id="nav-link-products"
              className="hover:text-[#1C1A15] transition-colors py-1 border-b border-transparent hover:border-[#3E4B22]"
            >
              The Stack
            </a>
            <a
              href="#farm"
              id="nav-link-farm"
              className="hover:text-[#1C1A15] transition-colors py-1 border-b border-transparent hover:border-[#3E4B22]"
            >
              Founding Farm
            </a>
            <a
              href="#pipeline"
              id="nav-link-pipeline"
              className="hover:text-[#1C1A15] transition-colors py-1 border-b border-transparent hover:border-[#3E4B22]"
            >
              Process Flow
            </a>
            <a
              href="#calculator"
              id="nav-link-calculator"
              className="hover:text-[#1C1A15] transition-colors py-1 border-b border-transparent hover:border-[#3E4B22]"
            >
              Risk Assessment
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenVerifier}
              id="btn-nav-verify"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-[#1C1A15] bg-[#ECE7DA] hover:bg-[#E3E7D3] border border-[#D6D0BE] transition-colors"
              title="Lookup cryptographic production proof"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B22]" />
              <span>Verify Batch</span>
            </button>

            <button
              onClick={onOpenContact}
              id="btn-nav-cta"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#FAF8F4] bg-[#1C1A15] hover:bg-[#3E4B22] border border-[#1C1A15] hover:border-[#3E4B22] transition-colors"
            >
              <span>Talk to us</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenVerifier}
              className="p-2 text-xs font-mono bg-[#ECE7DA] border border-[#D6D0BE] text-[#1C1A15]"
              title="Verify certificate"
            >
              <ShieldCheck className="w-4 h-4 text-[#3E4B22]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 border border-[#D6D0BE] bg-[#ECE7DA] text-[#1C1A15]"
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
          className="md:hidden border-t border-[#D6D0BE] bg-[#F4F1EA] px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex items-center gap-2 py-1 text-xs font-mono text-[#5C5748]">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Adubiaro Node Online: Osun State</span>
          </div>
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#1C1A15]">
            <a
              href="#mission"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-[#ECE7DA] rounded-none border-b border-[#D6D0BE]"
            >
              The Trust Gap
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-[#ECE7DA] rounded-none border-b border-[#D6D0BE]"
            >
              The Stack (Kulima, Portal, Trace)
            </a>
            <a
              href="#farm"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-[#ECE7DA] rounded-none border-b border-[#D6D0BE]"
            >
              Founding Farm (Adubiaro)
            </a>
            <a
              href="#pipeline"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-[#ECE7DA] rounded-none border-b border-[#D6D0BE]"
            >
              Verification Pipeline
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 hover:bg-[#ECE7DA] rounded-none border-b border-[#D6D0BE]"
            >
              Risk Assessment Tool
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerifier();
              }}
              className="w-full py-2.5 px-4 text-xs font-mono font-medium text-[#1C1A15] bg-[#ECE7DA] border border-[#D6D0BE] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#3E4B22]" />
              <span>Inspect Audit Certificate</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#FAF8F4] bg-[#1C1A15] hover:bg-[#3E4B22] flex items-center justify-center gap-2"
            >
              <span>Partner With Us</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
