import React, { useState } from 'react';
import { 
  CloudSun, 
  LayoutDashboard, 
  FileCheck2, 
  Activity, 
  Sparkles, 
  Calendar, 
  AlertTriangle, 
  Check, 
  Layers, 
  Radio, 
  Cpu, 
  QrCode, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'kulima' | 'portal' | 'trace'>('all');
  
  // Kulima interactive demo state
  const [cropSim, setCropSim] = useState<'maize' | 'cassava' | 'soya'>('maize');
  
  // Portal role simulator state
  const [portalRole, setPortalRole] = useState<'manager' | 'lender'>('manager');

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>THE INTEGRATED AGTECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133229] tracking-tight leading-tight">
            Three proprietary tools. One working commercial farm.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Calibrated on Adubiaro Farms before any external release. Each layer solves a core operational failure point in sub-Saharan agricultural visibility, climate risk, and capital access.
          </p>
        </div>

        {/* Filter / Focus pills in Smartelco style */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2 shrink-0">Filter Layer:</span>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 ${
              activeTab === 'all'
                ? 'bg-[#133229] text-white shadow-md shadow-emerald-950/20'
                : 'bg-white text-gray-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Complete Stack Overview
          </button>
          <button
            onClick={() => setActiveTab('kulima')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 ${
              activeTab === 'kulima'
                ? 'bg-[#133229] text-white shadow-md shadow-emerald-950/20'
                : 'bg-white text-gray-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            01 • Kulima Intelligence
          </button>
          <button
            onClick={() => setActiveTab('portal')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 ${
              activeTab === 'portal'
                ? 'bg-[#133229] text-white shadow-md shadow-emerald-950/20'
                : 'bg-white text-gray-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            02 • Farms Portal (Cloud)
          </button>
          <button
            onClick={() => setActiveTab('trace')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shrink-0 ${
              activeTab === 'trace'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-900/20'
                : 'bg-white text-gray-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            03 • FarmTrace (Audit Ledger)
          </button>
        </div>

        {/* Stack Grid Layout: High Elevation Dimensional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tool 1: KULIMA (Farm Intelligence) — Tall / Featured Card */}
          <div
            className={`lg:col-span-6 card-elevation p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
              activeTab === 'kulima' || activeTab === 'all' ? 'opacity-100' : 'opacity-40 pointer-events-none'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/80">
                  01 • Farm Intelligence Engine
                </span>
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                  <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                  Satellite & In-Situ Fusion
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#133229] mb-1">
                Kulima
              </h3>
              <div className="text-sm font-bold text-emerald-700 mb-4">
                Weather, micro-climates, and soil telemetry — converted into decisive action
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Synthesizes hyper-local weather models, multispectral Sentinel-2 NDVI canopy imagery, and sub-surface capacitive probes into predictive planting windows, dry-spell risk forecasting, and heat-stress warnings. Every recommendation includes a measurable confidence metric.
              </p>

              {/* Interactive Kulima Live Simulator */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-gray-500 font-bold uppercase text-[11px] tracking-wider">CROP SEEDING MODEL</span>
                  <div className="flex gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                    {(['maize', 'cassava', 'soya'] as const).map((crop) => (
                      <button
                        key={crop}
                        onClick={() => setCropSim(crop)}
                        className={`px-3 py-1 uppercase text-[10.5px] font-bold rounded-md transition-all ${
                          cropSim === crop
                            ? 'bg-[#133229] text-white shadow-xs'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">PLANTING WINDOW</span>
                    <strong className="text-[#133229] font-bold text-sm block mt-0.5">
                      {cropSim === 'maize' ? 'May 16 – May 24' : cropSim === 'cassava' ? 'Late Rain Onset' : 'June 01 – June 10'}
                    </strong>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">CONFIDENCE SCORE</span>
                    <strong className="text-emerald-700 font-bold text-sm block mt-0.5">
                      {cropSim === 'maize' ? '91.4% (Optimal)' : cropSim === 'cassava' ? '86.8% (Robust)' : '94.1% (Peak)'}
                    </strong>
                  </div>
                </div>

                {/* Risk Alerts */}
                <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200/80 text-xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-emerald-900">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    <span>In-Situ Sensor Cross-Check (Osun Central)</span>
                  </div>
                  <div className="text-emerald-800 text-[11.5px] leading-relaxed">
                    Root-zone moisture is at 25.6%, safely inside the optimum germination zone. 10-day dry spell probability stands at a low 11.8%.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-gray-500">
              <span>Active in 4 Guinea Savanna Micro-zones</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Calibrated with 180 Ha Field Probes
              </span>
            </div>
          </div>

          {/* Right Column: Tools 2 & 3 */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            
            {/* Tool 2: FARMS PORTAL (Farm & Stakeholder Cloud) */}
            <div
              className={`card-elevation p-7 sm:p-8 transition-all duration-300 ${
                activeTab === 'portal' || activeTab === 'all' ? 'opacity-100' : 'opacity-40 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/80">
                  02 • Operational & Stakeholder Cloud
                </span>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-[10.5px] font-bold">
                  <button
                    onClick={() => setPortalRole('manager')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      portalRole === 'manager' ? 'bg-[#133229] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Farm Manager
                  </button>
                  <button
                    onClick={() => setPortalRole('lender')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      portalRole === 'lender' ? 'bg-emerald-700 text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Bank / Off-taker
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#133229] mb-1">
                Farms Portal
              </h3>
              <div className="text-sm font-bold text-emerald-700 mb-3">
                Where real daily field operations meet institutional compliance
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Role-gated portal giving farm managers precise dispatch controls while giving agricultural credit officers, insurers, and FMCG buyers live read-only verification of crop progress.
              </p>

              {/* Portal preview strip */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                  <span>ACTIVE DESK: {portalRole === 'manager' ? 'DISPATCH & AGRONOMY' : 'INSTITUTIONAL AUDIT & CREDIT'}</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Sync
                  </span>
                </div>
                {portalRole === 'manager' ? (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-medium text-gray-800">Task #408: Apply Organic Foliar Spray (Block A-1)</span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">Completed</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-medium text-gray-800">Task #409: Calibrate Weighbridge Transponder</span>
                      <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded text-[11px]">In Progress</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-medium text-gray-800">Grain Maize Batch #AF-2026-MZ9: 58.4 MT Verified</span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">Bank Cleared</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                      <span className="font-medium text-gray-800">Satellite Canopy Stress Index: 0.81 NDVI</span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">Optimal Health</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tool 3: FARMTRACE (Production Traceability) */}
            <div
              className={`card-elevation p-7 sm:p-8 transition-all duration-300 ${
                activeTab === 'trace' || activeTab === 'all' ? 'opacity-100' : 'opacity-40 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/80">
                  03 • Cryptographic Traceability
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                  Living Lab Pilot
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#133229] mb-1">
                FarmTrace
              </h3>
              <div className="text-sm font-bold text-amber-700 mb-3">
                Immutable record of what actually happened on the ground
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A seed-to-truck immutable audit trail replacing retroactive self-declarations with cryptographic, GPS-timestamped operator attestations that export directly into bank ESG and buyer compliance formats.
              </p>

              {/* Hash preview box */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-500">
                  <span>IMMUTABLE AUDIT RECORD</span>
                  <span className="text-amber-700 font-mono">SHA-256 Verified</span>
                </div>
                <div className="text-[11px] font-mono text-gray-800 bg-white p-2.5 rounded-lg border border-slate-200 truncate">
                  SHA256: 7f8a9e23c04d18bb8476231908bc449ea3b74962c03847b2
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-600 pt-1">
                  <span>Audited Inputs: 4 of 4 Verified</span>
                  <span className="text-emerald-700 font-bold">0 Prohibited Chemicals</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
