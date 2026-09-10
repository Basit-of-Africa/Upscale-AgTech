import React from 'react';
import { Shield, Radio, ArrowUp, Github, Mail, Globe, Sparkles, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenVerifier: () => void;
  onOpenContact: () => void;
  onNavigateAbout?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVerifier,
  onOpenContact,
  onNavigateAbout,
  onNavigateHome,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateAbout) {
      onNavigateAbout();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="site-footer" className="bg-[#0B1E19] text-white pt-20 pb-12 border-t border-emerald-950 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-[#0B1E19] flex items-center justify-center font-extrabold text-base shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                UA
              </div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Upscale Agro
              </span>
            </button>

            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-sm font-normal">
              Precision agricultural verification, built directly on commercial ground truth. Transforming African farm production into auditable, investable, and resilient operations.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-emerald-300 font-semibold bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-800/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Living Lab: Adubiaro Farms, Osun State</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider block">
                THE STACK
              </span>
              <ul className="space-y-3 text-emerald-100/70 font-medium">
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1">
                    Kulima (AI Intelligence)
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Farms Portal (Cloud ERP)
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    FarmTrace (SHA-256 Ledger)
                  </a>
                </li>
                <li>
                  <a href="#pipeline" className="hover:text-white transition-colors">
                    Verification Pipeline
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider block">
                GROUND TRUTH
              </span>
              <ul className="space-y-3 text-emerald-100/70 font-medium">
                <li>
                  <button
                    onClick={handleAboutClick}
                    className="hover:text-white transition-colors text-left text-emerald-300 font-bold flex items-center gap-1"
                  >
                    <span>About Smartelco Mission</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded uppercase">
                      New
                    </span>
                  </button>
                </li>
                <li>
                  <a href="#farm" className="hover:text-white transition-colors">
                    Adubiaro Living Lab
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-white transition-colors">
                    The Trust Gap
                  </a>
                </li>
                <li>
                  <a href="#trust" className="hover:text-white transition-colors">
                    System Principles
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-white transition-colors">
                    Economic Model Tool
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider block">
                VERIFICATION
              </span>
              <ul className="space-y-3 text-emerald-100/70 font-medium">
                <li>
                  <button
                    onClick={onOpenVerifier}
                    className="hover:text-white transition-colors text-left font-bold text-emerald-300"
                  >
                    Inspect Field Certificate
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-white transition-colors text-left"
                  >
                    Request Deployment
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:partnerships@upscaleagro.com"
                    className="hover:text-white transition-colors"
                  >
                    partnerships@upscaleagro.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60 font-medium">
          <div>
            © {new Date().getFullYear()} Upscale Agro Inc. Operating across Osun, Oyo & Lagos, Nigeria.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-emerald-100/40">Lat: 07°46'N • Lon: 04°34'E</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-emerald-100/40 text-center sm:text-left">
          Field metrics, telemetry sensor streams, and agronomic dispatches continuously recorded from Adubiaro Farms station in Osun Central.
        </div>

      </div>
    </footer>
  );
};
