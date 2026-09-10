import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldAlert, Award, Clock, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';

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
    <section id="calculator" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>ECONOMIC MODEL & RISK ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133229] tracking-tight leading-tight">
            Calculate your farm's bankability & trust dividend.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Verifiable proof yields concrete economic capital. Model how automated field telemetry converts seasonal uncertainty into preferential lending rates, off-taker quality bonuses, and immediate compliance clearance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 card-elevation p-7 sm:p-9 space-y-7">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#133229] flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                  <Calculator className="w-5 h-5" />
                </div>
                <span>Farm Parameters</span>
              </h3>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                Interactive Model
              </span>
            </div>

            {/* Hectares Slider */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">CULTIVATED ACREAGE</span>
                <span className="text-xl font-extrabold text-[#133229] bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-xs">
                  {hectares} <span className="text-xs font-medium text-gray-500">Hectares</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-xs font-semibold text-gray-400 mt-2">
                <span>10 ha</span>
                <span>100 ha</span>
                <span>250 ha</span>
                <span>500 ha</span>
              </div>
            </div>

            {/* Crop Selector */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                PRIMARY CROPPING COMMODITY
              </span>
              <div className="grid grid-cols-3 gap-2.5">
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
                    className={`py-3 px-3 rounded-xl text-center text-xs font-bold transition-all ${
                      crop === c.id
                        ? 'bg-[#133229] text-white shadow-md shadow-emerald-950/20 ring-2 ring-emerald-500/40'
                        : 'bg-slate-50 text-gray-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current System */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                CURRENT FIELD RECORD KEEPING
              </span>
              <div className="grid grid-cols-3 gap-2.5">
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
                    className={`py-3 px-3 rounded-xl text-center text-xs font-bold transition-all ${
                      currentSystem === s.id
                        ? 'bg-[#133229] text-white shadow-md shadow-emerald-950/20 ring-2 ring-emerald-500/40'
                        : 'bg-slate-50 text-gray-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-xs text-emerald-900 leading-relaxed font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Calibrated against commercial grain contracts across Osun, Oyo, and Ogun States.</span>
            </div>
          </div>

          {/* Results Column - Smartelco Dark Hero Styled Results Container */}
          <div className="lg:col-span-6 rounded-[28px] bg-[#133229] text-white p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-emerald-950/30 border border-emerald-800/50 relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-radial-at-t from-emerald-500/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  ESTIMATED TRUST & VALUE DIVIDEND
                </div>
                <div className="text-xs text-emerald-100/70 font-mono">
                  Annual Season Projection
                </div>
              </div>

              {/* Key Output Metrics */}
              <div className="space-y-4">
                
                {/* 1. Off-taker bonus */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                    1. OFF-TAKER QUALITY & PROVENANCE BONUS
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    +₦{offTakerPremiumNGN.toLocaleString()}
                  </div>
                  <p className="text-xs text-emerald-100/80 mt-1.5 leading-relaxed">
                    Direct premium from verified moisture control, zero synthetic residue, and delivery lock on {totalVolumeMT} MT.
                  </p>
                </div>

                {/* 2. Fertilizer loss prevented */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                    2. KULIMA CLIMATE SAVINGS (INPUT PRESERVATION)
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1">
                    +₦{fertilizerSavingsNGN.toLocaleString()}
                  </div>
                  <p className="text-xs text-emerald-100/80 mt-1.5 leading-relaxed">
                    Eliminated fertilizer leaching and volatilization through weather-synchronized nutrient dosing across {hectares} ha.
                  </p>
                </div>

                {/* 3. Underwriting Readiness */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <span className="text-emerald-300 block text-[10px] font-bold uppercase tracking-wider">BANK LOAN CLEARANCE</span>
                    <strong className="text-base text-white font-extrabold block mt-1">{bankApprovalOdds}</strong>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                    <span className="text-emerald-300 block text-[10px] font-bold uppercase tracking-wider">AUDIT DURATION</span>
                    <strong className="text-base text-emerald-400 font-extrabold block mt-1">{auditDaysSaved} Days Saved</strong>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-white/15 mt-6 relative z-10">
              <button
                onClick={onOpenContact}
                className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-[#0B1E19] font-extrabold text-sm rounded-full shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Deploy AgTech Stack on Your Farm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
