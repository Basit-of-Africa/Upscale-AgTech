import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldAlert, Award, Clock, ArrowRight } from 'lucide-react';

interface ImpactCalculatorProps {
  onOpenContact: () => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ onOpenContact }) => {
  const [hectares, setHectares] = useState<number>(50);
  const [crop, setCrop] = useState<'maize' | 'cassava' | 'soya'>('maize');
  const [currentSystem, setCurrentSystem] = useState<'paper' | 'spreadsheet' | 'mixed'>('paper');

  // Realistic Nigerian agricultural financial calculations
  const yieldPerHa = crop === 'maize' ? 4.2 : crop === 'cassava' ? 22.0 : 2.4; // MT / ha
  const pricePerMT = crop === 'maize' ? 420000 : crop === 'cassava' ? 85000 : 680000; // NGN
  const totalVolumeMT = Number((hectares * yieldPerHa).toFixed(1));
  const totalValueNGN = totalVolumeMT * pricePerMT;

  // Benefits
  const offTakerPremiumPct = currentSystem === 'paper' ? 0.08 : 0.04;
  const offTakerPremiumNGN = Math.round(totalValueNGN * offTakerPremiumPct);

  const fertilizerSavingsNGN = Math.round(hectares * 28000); // ₦28k per ha saved in volatilization & over-application
  const bankApprovalOdds = currentSystem === 'paper' ? '82% (up from 22%)' : '88% (up from 45%)';
  const auditDaysSaved = currentSystem === 'paper' ? 21 : 14;

  return (
    <section id="calculator" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>ECONOMIC MODEL & RISK ESTIMATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            Calculate your farm's bankability & trust dividend.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            Proof has measurable economic value. See how automated verification turns production uncertainty into lower loan interest, off-taker quality bonuses, and zero audit friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#F4F1EA] border border-[#D6D0BE] p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-xl font-semibold text-[#1C1A15] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#3E4B22]" />
              <span>Farm Parameters</span>
            </h3>

            {/* Hectares Slider */}
            <div>
              <div className="flex justify-between items-center font-mono text-xs mb-2">
                <span className="text-[#7A7463] uppercase">CULTIVATED ACREAGE</span>
                <strong className="text-base text-[#1C1A15]">{hectares} Hectares</strong>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full accent-[#3E4B22] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#8B8472] mt-1">
                <span>10 ha</span>
                <span>100 ha</span>
                <span>250 ha</span>
                <span>500 ha</span>
              </div>
            </div>

            {/* Crop Selector */}
            <div>
              <span className="text-[#7A7463] uppercase block font-mono text-xs mb-2">
                PRIMARY CROPPING COMMODITY
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {(
                  [
                    { id: 'maize', label: 'Yellow Maize' },
                    { id: 'cassava', label: 'Cassava Roots' },
                    { id: 'soya', label: 'Soybeans' },
                  ] as const
                ).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCrop(c.id)}
                    className={`p-2.5 border text-center transition-colors ${
                      crop === c.id
                        ? 'bg-[#3E4B22] text-[#FAF8F4] border-[#3E4B22] font-semibold'
                        : 'bg-[#FAF8F4] text-[#5C5748] border-[#D6D0BE] hover:text-[#1C1A15]'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current System */}
            <div>
              <span className="text-[#7A7463] uppercase block font-mono text-xs mb-2">
                CURRENT FIELD RECORD KEEPING
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {(
                  [
                    { id: 'paper', label: 'Paper / WhatsApp' },
                    { id: 'spreadsheet', label: 'Excel Sheet' },
                    { id: 'mixed', label: 'Partial Digital' },
                  ] as const
                ).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSystem(s.id)}
                    className={`p-2.5 border text-center transition-colors ${
                      currentSystem === s.id
                        ? 'bg-[#1C1A15] text-[#FAF8F4] border-[#1C1A15] font-semibold'
                        : 'bg-[#FAF8F4] text-[#5C5748] border-[#D6D0BE] hover:text-[#1C1A15]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#E3E7D3]/60 border border-[#CAD0BA] text-xs font-mono text-[#3E4B22]">
              Benchmark calibrated with actual Adubiaro Farms multi-season data and grain buyer contracts in Osun, Oyo & Ogun States.
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-[#E3E7D3] border border-[#CAD0BA] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#CAD0BA]">
                <div className="font-mono text-xs text-[#3E4B22] uppercase font-semibold">
                  ESTIMATED TRUST & REVENUE DIVIDEND
                </div>
                <div className="font-mono text-xs text-[#5C5748]">
                  Annual Season Projection
                </div>
              </div>

              {/* Key Output Metrics */}
              <div className="space-y-4">
                
                {/* 1. Off-taker bonus */}
                <div className="bg-[#FAF8F4] p-4 border border-[#CAD0BA]">
                  <span className="font-mono text-[11px] text-[#7A7463] uppercase block">
                    1. OFF-TAKER QUALITY & PROVENANCE BONUS
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1A15] mt-1">
                    +₦{offTakerPremiumNGN.toLocaleString()}
                  </div>
                  <p className="text-xs font-mono text-[#5C5748] mt-1">
                    Direct premium from verified pesticide compliance and moisture lock on {totalVolumeMT} MT.
                  </p>
                </div>

                {/* 2. Fertilizer loss prevented */}
                <div className="bg-[#FAF8F4] p-4 border border-[#CAD0BA]">
                  <span className="font-mono text-[11px] text-[#7A7463] uppercase block">
                    2. KULIMA WEATHER SAVINGS (INPUT PRESERVATION)
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#3E4B22] mt-1">
                    +₦{fertilizerSavingsNGN.toLocaleString()}
                  </div>
                  <p className="text-xs font-mono text-[#5C5748] mt-1">
                    Saved by applying nitrogen strictly within dry-spell-safe windows across {hectares} ha.
                  </p>
                </div>

                {/* 3. Underwriting Readiness */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="bg-[#FAF8F4] p-3 border border-[#CAD0BA]">
                    <span className="text-[#7A7463] block text-[10px] uppercase">BANK LOAN ODDS</span>
                    <strong className="text-sm text-[#1C1A15]">{bankApprovalOdds}</strong>
                  </div>
                  <div className="bg-[#FAF8F4] p-3 border border-[#CAD0BA]">
                    <span className="text-[#7A7463] block text-[10px] uppercase">AUDIT TIME SAVED</span>
                    <strong className="text-sm text-[#3E4B22]">{auditDaysSaved} Days Saved</strong>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-[#CAD0BA] mt-6">
              <button
                onClick={onOpenContact}
                className="w-full py-3 px-6 bg-[#1C1A15] hover:bg-[#3E4B22] text-[#FAF8F4] font-semibold text-sm font-sans tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <span>Deploy Stack on Your Operation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
