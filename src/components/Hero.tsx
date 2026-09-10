import React, { useState } from 'react';
import { Shield, Layers, Radio, Sparkles, ArrowRight, CheckCircle2, MapPin, Activity, Droplets, Satellite, TrendingUp } from 'lucide-react';
import { FARM_PLOTS } from '../data/mockData';
import { FarmPlot } from '../types';

interface HeroProps {
  onOpenVerifierWithPlot: (plot: FarmPlot) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVerifierWithPlot, onOpenContact }) => {
  const [selectedPlot, setSelectedPlot] = useState<FarmPlot>(FARM_PLOTS[0]);
  const [activeLayer, setActiveLayer] = useState<'cadastral' | 'ndvi' | 'sensors'>('cadastral');

  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pb-20 overflow-hidden bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Main Hero Container - Smartelco 28px rounded banner style */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[660px] lg:min-h-[720px] bg-[#133229] text-white shadow-2xl shadow-emerald-950/25 border border-emerald-800/40">
          
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
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 flex flex-col justify-between min-h-[660px] lg:min-h-[720px]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto">
              
              {/* Left Column: Bold Smartelco Typography & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>PRODUCTION-GRADE AGRICULTURAL INTELLIGENCE</span>
                </div>

                {/* Main Headline - Smartelco Scale & Weight */}
                <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.08] tracking-[-0.02em] text-white">
                  Software for farms that have to <span className="text-emerald-400">prove</span> what happened.
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-emerald-100/80 font-normal leading-relaxed max-w-2xl">
                  Upscale AgTech transforms real African agricultural production into measurable, bank-grade intelligence. From IoT root-zone sensors to tamper-proof audit ledgers — built on a living 180-hectare commercial farm, not a slide deck.
                </p>

                {/* Proof Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero Synthetic Yields</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>180 Ha Living Lab</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Bank & Buyer Verifiable</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
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

              {/* Right Column: Floating Interactive Cadastral Radar & Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/95 backdrop-blur-xl rounded-[24px] p-5 sm:p-6 text-gray-900 shadow-2xl shadow-black/40 border border-white/40 relative">
                  
                  {/* Radar Card Header with Layer Toggles */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/80 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="font-sans text-xs font-bold tracking-tight text-[#133229]">
                        ADUBIARO CADASTRAL RADAR
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-[10.5px] font-semibold">
                      <button
                        onClick={() => setActiveLayer('cadastral')}
                        className={`px-2.5 py-1 rounded-md transition-all ${
                          activeLayer === 'cadastral'
                            ? 'bg-[#133229] text-white shadow-xs'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Parcels
                      </button>
                      <button
                        onClick={() => setActiveLayer('ndvi')}
                        className={`px-2.5 py-1 rounded-md transition-all ${
                          activeLayer === 'ndvi'
                            ? 'bg-emerald-700 text-white shadow-xs'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        NDVI Health
                      </button>
                      <button
                        onClick={() => setActiveLayer('sensors')}
                        className={`px-2.5 py-1 rounded-md transition-all ${
                          activeLayer === 'sensors'
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        IoT Probes
                      </button>
                    </div>
                  </div>

                  {/* Interactive SVG Canvas with Real Aerial Style */}
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-900 overflow-hidden select-none border border-slate-200">
                    
                    {/* Background satellite texture */}
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    <svg viewBox="0 0 320 240" className="w-full h-full relative z-10">
                      {/* Parcel A-1: Maize */}
                      <g
                        className="cursor-pointer group transition-transform"
                        onClick={() => setSelectedPlot(FARM_PLOTS[0])}
                      >
                        <rect
                          x="14"
                          y="14"
                          width="140"
                          height="100"
                          rx="6"
                          fill={
                            activeLayer === 'ndvi'
                              ? '#059669'
                              : selectedPlot.id === 'plot-a1'
                              ? '#10b981'
                              : '#064e3b'
                          }
                          fillOpacity={selectedPlot.id === 'plot-a1' ? '0.85' : '0.6'}
                          stroke={selectedPlot.id === 'plot-a1' ? '#34d399' : '#047857'}
                          strokeWidth={selectedPlot.id === 'plot-a1' ? '2.5' : '1.2'}
                        />
                        <text x="24" y="36" className="font-mono text-[10px] fill-white font-bold">
                          BLOCK A-1
                        </text>
                        <text x="24" y="52" className="font-sans text-[11px] fill-emerald-100 font-medium">
                          Yellow Maize (14.5 ha)
                        </text>
                        <text x="24" y="70" className="font-mono text-[9.5px] fill-emerald-300">
                          SM: 25.6% • Healthy
                        </text>
                      </g>

                      {/* Parcel B-2: Cassava */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setSelectedPlot(FARM_PLOTS[1])}
                      >
                        <rect
                          x="166"
                          y="14"
                          width="140"
                          height="100"
                          rx="6"
                          fill={
                            activeLayer === 'ndvi'
                              ? '#10b981'
                              : selectedPlot.id === 'plot-b2'
                              ? '#10b981'
                              : '#064e3b'
                          }
                          fillOpacity={selectedPlot.id === 'plot-b2' ? '0.85' : '0.5'}
                          stroke={selectedPlot.id === 'plot-b2' ? '#34d399' : '#047857'}
                          strokeWidth={selectedPlot.id === 'plot-b2' ? '2.5' : '1.2'}
                        />
                        <text x="176" y="36" className="font-mono text-[10px] fill-white font-bold">
                          BED B-2
                        </text>
                        <text x="176" y="52" className="font-sans text-[11px] fill-emerald-100 font-medium">
                          Cassava TME 419 (18 ha)
                        </text>
                        <text x="176" y="70" className="font-mono text-[9.5px] fill-emerald-300">
                          SM: 28.4% • Robust
                        </text>
                      </g>

                      {/* Parcel C-3: Soya */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setSelectedPlot(FARM_PLOTS[2])}
                      >
                        <rect
                          x="14"
                          y="124"
                          width="140"
                          height="102"
                          rx="6"
                          fill={
                            activeLayer === 'ndvi'
                              ? '#34d399'
                              : selectedPlot.id === 'plot-c3'
                              ? '#10b981'
                              : '#064e3b'
                          }
                          fillOpacity={selectedPlot.id === 'plot-c3' ? '0.85' : '0.45'}
                          stroke={selectedPlot.id === 'plot-c3' ? '#34d399' : '#047857'}
                          strokeWidth={selectedPlot.id === 'plot-c3' ? '2.5' : '1.2'}
                        />
                        <text x="24" y="146" className="font-mono text-[10px] fill-white font-bold">
                          PLOT C-3
                        </text>
                        <text x="24" y="162" className="font-sans text-[11px] fill-emerald-100 font-medium">
                          Soya Trial (8.5 ha)
                        </text>
                        <text x="24" y="180" className="font-mono text-[9.5px] fill-emerald-300">
                          SM: 22.1% • Monitored
                        </text>
                      </g>

                      {/* Parcel D-4: Buffer */}
                      <g
                        className="cursor-pointer group"
                        onClick={() => setSelectedPlot(FARM_PLOTS[3])}
                      >
                        <rect
                          x="166"
                          y="124"
                          width="140"
                          height="102"
                          rx="6"
                          fill={
                            activeLayer === 'ndvi'
                              ? '#047857'
                              : selectedPlot.id === 'plot-d4'
                              ? '#10b981'
                              : '#064e3b'
                          }
                          fillOpacity={selectedPlot.id === 'plot-d4' ? '0.85' : '0.4'}
                          stroke={selectedPlot.id === 'plot-d4' ? '#34d399' : '#047857'}
                          strokeWidth={selectedPlot.id === 'plot-d4' ? '2.5' : '1.2'}
                        />
                        <text x="176" y="146" className="font-mono text-[10px] fill-white font-bold">
                          ZONE D-4
                        </text>
                        <text x="176" y="162" className="font-sans text-[11px] fill-emerald-100 font-medium">
                          Buffer & Soils (4 ha)
                        </text>
                        <text x="176" y="180" className="font-mono text-[9.5px] fill-emerald-300">
                          SM: 31.0% • Forested
                        </text>
                      </g>

                      {/* In-situ Sensor Probes */}
                      {(activeLayer === 'sensors' || activeLayer === 'cadastral') && (
                        <>
                          <circle cx="84" cy="64" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" className="animate-pulse" />
                          <circle cx="236" cy="64" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                          <circle cx="84" cy="174" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                          <circle cx="236" cy="174" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        </>
                      )}
                    </svg>

                    {/* Interactive overlay tag */}
                    <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md text-emerald-300 px-2.5 py-1 rounded-md text-[10px] font-mono flex items-center gap-1.5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Click parcel to view live telemetry</span>
                    </div>
                  </div>

                  {/* Selected Plot Details */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                            {selectedPlot.id.toUpperCase()}
                          </span>
                          <h4 className="font-sans text-base font-bold text-[#133229]">
                            {selectedPlot.name}
                          </h4>
                        </div>
                        <div className="text-xs text-gray-500 font-medium mt-0.5">
                          {selectedPlot.variety} ({selectedPlot.areaHa} Hectares)
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 font-mono text-xs px-2.5 py-1 bg-emerald-50 text-emerald-800 font-bold rounded-full border border-emerald-200">
                          NDVI: {selectedPlot.healthScore}/100
                        </span>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div>
                        <span className="text-gray-400 block text-[10px] font-sans font-medium">SOIL MOISTURE</span>
                        <strong className="text-[#133229] font-bold text-sm">{selectedPlot.soilMoisture}%</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] font-sans font-medium">RISK LEVEL</span>
                        <strong className="text-emerald-700 font-bold text-sm">{selectedPlot.riskLevel}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[10px] font-sans font-medium">LEDGER HASH</span>
                        <strong className="text-[#133229] font-bold text-[11px] truncate block">{selectedPlot.verificationHash}</strong>
                      </div>
                    </div>

                    {/* Verification Button */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-gray-500 font-medium">
                        Planted: {selectedPlot.plantingDate}
                      </span>
                      <button
                        onClick={() => onOpenVerifierWithPlot(selectedPlot)}
                        id="btn-inspect-plot-proof"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
                      >
                        <Shield className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Inspect Audit Proof →</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>

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
