import React from 'react';
import { Shield, Radio, ArrowUp, Github, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenVerifier: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVerifier, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#FAF8F4] border-t border-[#D6D0BE] text-[#1C1A15] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D6D0BE]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1C1A15] text-[#FAF8F4] flex items-center justify-center font-serif font-bold text-sm">
                UA
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1A15]">
                Upscale Agro
              </span>
            </div>

            <p className="text-sm text-[#5C5748] leading-relaxed max-w-sm">
              Agricultural technology, built on real production. Making commercial farm operations measurable, intelligent, and verifiable across Nigeria and West Africa.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-[#3E4B22] pt-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-600" />
              <span>Living Lab: Adubiaro Farms, Osun State</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-xs">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <span className="text-[#7A7463] uppercase font-semibold block">
                THE STACK
              </span>
              <ul className="space-y-2 text-[#5C5748]">
                <li>
                  <a href="#products" className="hover:text-[#1C1A15] transition-colors">
                    Kulima (Intelligence)
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#1C1A15] transition-colors">
                    Farms Portal (Cloud)
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#1C1A15] transition-colors">
                    FarmTrace (Ledger)
                  </a>
                </li>
                <li>
                  <a href="#pipeline" className="hover:text-[#1C1A15] transition-colors">
                    Process Pipeline
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <span className="text-[#7A7463] uppercase font-semibold block">
                GROUND TRUTH
              </span>
              <ul className="space-y-2 text-[#5C5748]">
                <li>
                  <a href="#farm" className="hover:text-[#1C1A15] transition-colors">
                    Adubiaro Farms Lab
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-[#1C1A15] transition-colors">
                    The Trust Gap
                  </a>
                </li>
                <li>
                  <a href="#trust" className="hover:text-[#1C1A15] transition-colors">
                    Trust Principles
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-[#1C1A15] transition-colors">
                    Risk Model Tool
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <span className="text-[#7A7463] uppercase font-semibold block">
                VERIFICATION
              </span>
              <ul className="space-y-2 text-[#5C5748]">
                <li>
                  <button
                    onClick={onOpenVerifier}
                    className="hover:text-[#1C1A15] transition-colors text-left"
                  >
                    Inspect Audit Proof
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenContact}
                    className="hover:text-[#1C1A15] transition-colors text-left"
                  >
                    Request Deployment
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:hello@upscaleagro.com"
                    className="hover:text-[#1C1A15] transition-colors"
                  >
                    hello@upscaleagro.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7A7463]">
          <div>
            © {new Date().getFullYear()} Upscale Agro Inc. Operating in Osun, Oyo & Lagos, Nigeria.
          </div>

          <div className="flex items-center gap-6">
            <span>Lat: 07°46'N • Lon: 04°34'E</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#1C1A15] hover:text-[#3E4B22] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#ECE7DA] text-[11px] font-mono text-[#8B8472] text-center sm:text-left">
          Field metrics, moisture recordings, and agronomy logs live-streamed from Adubiaro Farms test stations in Osun Central.
        </div>

      </div>
    </footer>
  );
};
