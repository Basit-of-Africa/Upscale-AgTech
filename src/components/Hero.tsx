import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { FarmPlot } from '../types';

interface HeroProps {
  onOpenVerifierWithPlot?: (plot: FarmPlot) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pb-20 overflow-hidden bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Main Hero Container - Smartelco 28px rounded banner style */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[520px] lg:min-h-[580px] bg-[#133229] text-white shadow-2xl shadow-emerald-950/25 border border-emerald-800/40 flex items-center">
          
          {/* Rich High-Resolution Agricultural Background with Smartelco Deep Green Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=85"
              alt="Lush agricultural field in Nigeria with modern smart farming technology"
              className="w-full h-full object-cover object-center scale-105 opacity-35 filter saturate-125"
            />
            {/* Multi-stage dimensional gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E19]/95 via-[#133229]/88 to-[#133229]/70" />
            <div className="absolute inset-0 bg-radial-at-t from-emerald-500/15 via-transparent to-black/60" />
          </div>

          {/* Floating Subtle Coordinate Stamp */}
          <div className="absolute top-6 right-8 font-mono text-[11px] text-emerald-300/60 uppercase tracking-widest hidden lg:flex items-center gap-2 z-10 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>OSUN CENTRAL GUINEAN SAVANNA • 07°46'N 04°34'E</span>
          </div>

          {/* Hero Inner Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-3xl space-y-7">
            {/* Main Headline - Smartelco Scale & Weight */}
            <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-semibold leading-[1.06] tracking-[-0.025em] text-white">
              Software for farms that have to <span className="text-emerald-400">prove</span> what happened.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-emerald-100/80 font-normal leading-relaxed max-w-2xl">
              Upscale AgTech transforms real African agricultural production into measurable, bank-grade intelligence. From IoT root-zone sensors to tamper-proof audit ledgers — built on a living 180-hectare commercial farm, not a slide deck.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                id="hero-btn-stack"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B1E19] font-bold text-sm rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>Request Farm Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                id="hero-btn-farm"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
              >
                <span>Explore The Stack</span>
              </a>
            </div>

            {/* Farm Footnote */}
            <div className="pt-2 text-xs text-emerald-200/70 font-mono flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Calibrated across 180 hectares at Adubiaro Farms in Osun State, Nigeria</span>
            </div>
          </div>

        </div>

        {/* Smartelco-Grade Impact Ribbon (Dimensional floating cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="card-elevation p-5 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-sans">
              Living Lab Area
            </span>
            <div className="my-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-[#133229]">180</span>
              <span className="text-emerald-600 text-lg font-bold ml-1">Ha</span>
            </div>
            <span className="text-xs text-gray-500">Continuous in-situ sensor verification in Osun State</span>
          </div>

          <div className="card-elevation p-5 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-sans">
              Traceability Rate
            </span>
            <div className="my-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-[#133229]">99.4</span>
              <span className="text-emerald-600 text-lg font-bold ml-1">%</span>
            </div>
            <span className="text-xs text-gray-500">Seed-to-weighbridge cryptographic audit logging</span>
          </div>

          <div className="card-elevation p-5 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-sans">
              Resource Efficiency
            </span>
            <div className="my-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-[#133229]">42</span>
              <span className="text-emerald-600 text-lg font-bold ml-1">%</span>
            </div>
            <span className="text-xs text-gray-500">Fertilizer & input waste eliminated by Kulima AI</span>
          </div>

          <div className="card-elevation p-5 flex flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-sans">
              Credit De-risked
            </span>
            <div className="my-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-[#133229]">₦145</span>
              <span className="text-emerald-600 text-lg font-bold ml-1">M+</span>
            </div>
            <span className="text-xs text-gray-500">Agricultural working capital unlocked with banks</span>
          </div>
        </div>

      </div>
    </section>
  );
};
