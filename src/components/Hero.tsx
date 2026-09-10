import React, { useState } from 'react';
import { Shield, Layers, Radio, Sparkles, ArrowDown, ExternalLink, CheckCircle2, MapPin } from 'lucide-react';
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
    <section id="hero" className="relative border-b border-[#D6D0BE] overflow-hidden">
      {/* Subtle coordinate watermark */}
      <div className="absolute top-8 right-8 font-mono text-[10px] text-[#A69F8B] uppercase tracking-widest hidden xl:block select-none pointer-events-none">
        LAT 07°46'18"N • LON 04°34'02"E • OSUN CENTRAL GUINEAN SAVANNA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E3E7D3] border border-[#CAD0BA] text-[#3E4B22] text-xs font-mono font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E4B22] animate-pulse" />
              <span>AGRICULTURAL TECHNOLOGY, BUILT ON REAL PRODUCTION</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium tracking-tight text-[#1C1A15] max-w-2xl">
              Software for farms that have to prove what actually happened.
            </h1>

            <p className="text-lg sm:text-xl text-[#5C5748] font-normal leading-relaxed max-w-xl">
              Upscale Agro builds the technology layer that makes agricultural production measurable, intelligent, and verifiable, starting with one working farm, not a pitch deck.
            </p>

            {/* Value affirmations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs text-[#5C5748]">
              <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F4] border border-[#D6D0BE]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B22] shrink-0" />
                <span>Zero synthetic yields</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F4] border border-[#D6D0BE]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B22] shrink-0" />
                <span>Osun State living lab</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F4] border border-[#D6D0BE]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B22] shrink-0" />
                <span>Auditable by banks</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                id="hero-btn-stack"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3E4B22] hover:bg-[#2F3918] text-[#FAF8F4] font-semibold text-sm tracking-wide border border-[#3E4B22] transition-colors shadow-xs"
              >
                <span>See the technology</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#farm"
                id="hero-btn-farm"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#1C1A15] text-[#1C1A15] hover:text-[#FAF8F4] font-semibold text-sm tracking-wide border border-[#1C1A15] transition-colors"
              >
                <span>Meet the founding farm</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Farm footnote */}
            <div className="pt-2 text-xs text-[#7A7463] font-mono flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#BF7E27]" />
              <span>Calibrated across 180 hectares at Adubiaro Farms, Osun State</span>
            </div>
          </div>

          {/* Right Column: Interactive Cadastral Telemetry Radar */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-4 sm:p-6 shadow-sm relative">
              
              {/* Plot map header with layer toggles */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D6D0BE] flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#3E4B22] rounded-xs" />
                  <span className="font-mono text-xs font-semibold tracking-tight text-[#1C1A15]">
                    ADUBIARO FARMS CADASTRAL RADAR
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#ECE7DA] p-1 border border-[#D6D0BE] text-[10px] font-mono">
                  <button
                    onClick={() => setActiveLayer('cadastral')}
                    className={`px-2 py-0.5 transition-colors ${
                      activeLayer === 'cadastral'
                        ? 'bg-[#1C1A15] text-[#FAF8F4] font-semibold'
                        : 'text-[#5C5748] hover:text-[#1C1A15]'
                    }`}
                  >
                    Parcels
                  </button>
                  <button
                    onClick={() => setActiveLayer('ndvi')}
                    className={`px-2 py-0.5 transition-colors ${
                      activeLayer === 'ndvi'
                        ? 'bg-[#3E4B22] text-[#FAF8F4] font-semibold'
                        : 'text-[#5C5748] hover:text-[#1C1A15]'
                    }`}
                  >
                    NDVI Health
                  </button>
                  <button
                    onClick={() => setActiveLayer('sensors')}
                    className={`px-2 py-0.5 transition-colors ${
                      activeLayer === 'sensors'
                        ? 'bg-[#BF7E27] text-[#FAF8F4] font-semibold'
                        : 'text-[#5C5748] hover:text-[#1C1A15]'
                    }`}
                  >
                    IoT Probes
                  </button>
                </div>
              </div>

              {/* Interactive SVG Canvas */}
              <div className="relative aspect-square w-full bg-[#EAE6DA] border border-[#D6D0BE] overflow-hidden select-none">
                
                {/* SVG Farm Grid */}
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs>
                    <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D3CEBB" strokeWidth="0.5" />
                    </pattern>
                  </defs>

                  <rect width="320" height="320" fill="url(#grid-pattern)" />

                  {/* Parcel A-1: Maize */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedPlot(FARM_PLOTS[0])}
                  >
                    <rect
                      x="16"
                      y="16"
                      width="150"
                      height="135"
                      fill={
                        activeLayer === 'ndvi'
                          ? '#C6D89F'
                          : selectedPlot.id === 'plot-a1'
                          ? '#DDE3C4'
                          : '#E3E7D3'
                      }
                      stroke={selectedPlot.id === 'plot-a1' ? '#3E4B22' : '#BDB7A3'}
                      strokeWidth={selectedPlot.id === 'plot-a1' ? '2.5' : '1.2'}
                      className="transition-all"
                    />
                    {/* Plot furrow lines */}
                    <g stroke="#3E4B22" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 3">
                      <line x1="30" y1="35" x2="30" y2="135" />
                      <line x1="55" y1="35" x2="55" y2="135" />
                      <line x1="80" y1="35" x2="80" y2="135" />
                      <line x1="105" y1="35" x2="105" y2="135" />
                      <line x1="130" y1="35" x2="130" y2="135" />
                    </g>
                    <text x="24" y="36" className="font-mono text-[9px] fill-[#3E4B22] font-bold">
                      BLOCK A-1
                    </text>
                    <text x="24" y="50" className="font-sans text-[10px] fill-[#1C1A15] font-semibold">
                      Yellow Maize (14.5 ha)
                    </text>
                  </g>

                  {/* Parcel B-2: Cassava */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedPlot(FARM_PLOTS[1])}
                  >
                    <rect
                      x="176"
                      y="16"
                      width="128"
                      height="170"
                      fill={
                        activeLayer === 'ndvi'
                          ? '#B2CA86'
                          : selectedPlot.id === 'plot-b2'
                          ? '#DDE3C4'
                          : '#FAF8F4'
                      }
                      stroke={selectedPlot.id === 'plot-b2' ? '#3E4B22' : '#BDB7A3'}
                      strokeWidth={selectedPlot.id === 'plot-b2' ? '2.5' : '1.2'}
                      className="transition-all"
                    />
                    <text x="186" y="36" className="font-mono text-[9px] fill-[#3E4B22] font-bold">
                      BED B-2
                    </text>
                    <text x="186" y="50" className="font-sans text-[10px] fill-[#1C1A15] font-semibold">
                      Cassava TME 419 (18 ha)
                    </text>
                  </g>

                  {/* Parcel C-3: Soya */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedPlot(FARM_PLOTS[2])}
                  >
                    <rect
                      x="16"
                      y="160"
                      width="150"
                      height="144"
                      fill={
                        activeLayer === 'ndvi'
                          ? '#A4C374'
                          : selectedPlot.id === 'plot-c3'
                          ? '#DDE3C4'
                          : '#ECE7DA'
                      }
                      stroke={selectedPlot.id === 'plot-c3' ? '#3E4B22' : '#BDB7A3'}
                      strokeWidth={selectedPlot.id === 'plot-c3' ? '2.5' : '1.2'}
                      className="transition-all"
                    />
                    <text x="24" y="180" className="font-mono text-[9px] fill-[#3E4B22] font-bold">
                      PLOT C-3
                    </text>
                    <text x="24" y="194" className="font-sans text-[10px] fill-[#1C1A15] font-semibold">
                      Soya Trial (8.5 ha)
                    </text>
                  </g>

                  {/* Parcel D-4: Agroforestry */}
                  <g
                    className="cursor-pointer group"
                    onClick={() => setSelectedPlot(FARM_PLOTS[3])}
                  >
                    <rect
                      x="176"
                      y="196"
                      width="128"
                      height="108"
                      fill={
                        activeLayer === 'ndvi'
                          ? '#8EAF5E'
                          : selectedPlot.id === 'plot-d4'
                          ? '#DDE3C4'
                          : '#E3E7D3'
                      }
                      stroke={selectedPlot.id === 'plot-d4' ? '#3E4B22' : '#BDB7A3'}
                      strokeWidth={selectedPlot.id === 'plot-d4' ? '2.5' : '1.2'}
                      className="transition-all"
                    />
                    <text x="186" y="216" className="font-mono text-[9px] fill-[#3E4B22] font-bold">
                      ZONE D-4
                    </text>
                    <text x="186" y="230" className="font-sans text-[10px] fill-[#1C1A15] font-semibold">
                      Buffer & Soils (4 ha)
                    </text>
                  </g>

                  {/* In-situ Sensor Probes */}
                  {(activeLayer === 'sensors' || activeLayer === 'cadastral') && (
                    <>
                      {/* Node 1 */}
                      <circle cx="85" cy="80" r="5" fill="#BF7E27" stroke="#FAF8F4" strokeWidth="1.5" className="animate-pulse" />
                      <circle cx="85" cy="80" r="10" fill="none" stroke="#BF7E27" strokeWidth="0.8" opacity="0.6" />
                      
                      {/* Node 2 */}
                      <circle cx="240" cy="100" r="5" fill="#BF7E27" stroke="#FAF8F4" strokeWidth="1.5" />
                      
                      {/* Node 3 */}
                      <circle cx="90" cy="230" r="5" fill="#BF7E27" stroke="#FAF8F4" strokeWidth="1.5" />

                      {/* Central Mast */}
                      <rect x="166" y="152" width="8" height="8" fill="#1C1A15" />
                      <circle cx="170" cy="156" r="2" fill="#FAF8F4" />
                    </>
                  )}
                </svg>

                {/* Status chip over canvas */}
                <div className="absolute bottom-2 left-2 bg-[#1C1A15]/85 text-[#FAF8F4] px-2 py-1 text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Click parcels to inspect live field telemetry</span>
                </div>
              </div>

              {/* Selected Plot Telemetry Card */}
              <div className="mt-4 pt-3 border-t border-[#D6D0BE] space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#BF7E27] font-semibold">
                        {selectedPlot.id.toUpperCase()}
                      </span>
                      <span className="text-xs text-[#8B8472]">•</span>
                      <h4 className="font-serif text-base font-semibold text-[#1C1A15]">
                        {selectedPlot.name}
                      </h4>
                    </div>
                    <div className="text-xs text-[#5C5748]">
                      {selectedPlot.variety} ({selectedPlot.areaHa} Hectares)
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-block font-mono text-[11px] px-2 py-0.5 bg-[#E3E7D3] text-[#3E4B22] font-semibold border border-[#CAD0BA]">
                      NDVI: {selectedPlot.healthScore}/100
                    </span>
                  </div>
                </div>

                {/* Plot metrics */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-mono bg-[#ECE7DA] p-2.5 border border-[#D6D0BE]">
                  <div>
                    <span className="text-[#7A7463] block text-[10px]">SOIL MOISTURE</span>
                    <strong className="text-[#1C1A15]">{selectedPlot.soilMoisture}%</strong>
                  </div>
                  <div>
                    <span className="text-[#7A7463] block text-[10px]">RISK STATUS</span>
                    <strong className="text-[#3E4B22]">{selectedPlot.riskLevel}</strong>
                  </div>
                  <div>
                    <span className="text-[#7A7463] block text-[10px]">LEDGER PROOF</span>
                    <strong className="text-[#1C1A15]">{selectedPlot.verificationHash}</strong>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#5C5748] font-mono">
                    Planting: {selectedPlot.plantingDate}
                  </span>
                  <button
                    onClick={() => onOpenVerifierWithPlot(selectedPlot)}
                    id="btn-inspect-plot-proof"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#3E4B22] hover:text-[#1C1A15] transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>View Audit Certificate →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
