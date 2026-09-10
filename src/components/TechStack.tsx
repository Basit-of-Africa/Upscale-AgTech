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
  ArrowUpRight 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'kulima' | 'portal' | 'trace'>('all');
  
  // Kulima interactive demo state
  const [cropSim, setCropSim] = useState<'maize' | 'cassava' | 'soya'>('maize');
  
  // Portal role simulator state
  const [portalRole, setPortalRole] = useState<'manager' | 'lender'>('manager');

  return (
    <section id="products" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>THE INTEGRATED STACK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            Three tools. One working farm.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            Built with Adubiaro Farms, for Adubiaro Farms first, before anywhere else. Each layer addresses a critical failure point in traditional farm record-keeping and climate resilience.
          </p>
        </div>

        {/* Filter / Focus pills */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs overflow-x-auto pb-2">
          <span className="text-[#8B8472] uppercase mr-2">Focus View:</span>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'all'
                ? 'bg-[#1C1A15] text-[#FAF8F4] border-[#1C1A15]'
                : 'bg-[#ECE7DA] text-[#5C5748] border-[#D6D0BE] hover:text-[#1C1A15]'
            }`}
          >
            Complete Stack Overview
          </button>
          <button
            onClick={() => setActiveTab('kulima')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'kulima'
                ? 'bg-[#3E4B22] text-[#FAF8F4] border-[#3E4B22]'
                : 'bg-[#ECE7DA] text-[#5C5748] border-[#D6D0BE] hover:text-[#1C1A15]'
            }`}
          >
            01 Kulima (Intelligence)
          </button>
          <button
            onClick={() => setActiveTab('portal')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'portal'
                ? 'bg-[#3E4B22] text-[#FAF8F4] border-[#3E4B22]'
                : 'bg-[#ECE7DA] text-[#5C5748] border-[#D6D0BE] hover:text-[#1C1A15]'
            }`}
          >
            02 Farms Portal (Operations)
          </button>
          <button
            onClick={() => setActiveTab('trace')}
            className={`px-3 py-1.5 border transition-colors ${
              activeTab === 'trace'
                ? 'bg-[#BF7E27] text-[#FAF8F4] border-[#BF7E27]'
                : 'bg-[#ECE7DA] text-[#5C5748] border-[#D6D0BE] hover:text-[#1C1A15]'
            }`}
          >
            03 FarmTrace (Traceability)
          </button>
        </div>

        {/* Stack Grid Layout: Field-Plot Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tool 1: KULIMA (Farm Intelligence) — Tall / Featured Card */}
          <div
            className={`lg:col-span-6 bg-[#F4F1EA] border border-[#D6D0BE] p-6 sm:p-8 flex flex-col justify-between transition-all ${
              activeTab === 'kulima' || activeTab === 'all' ? 'opacity-100 ring-2 ring-[#3E4B22]/30' : 'opacity-40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs px-2.5 py-1 bg-[#E3E7D3] text-[#3E4B22] border border-[#CAD0BA] font-semibold">
                  01 • Farm Intelligence
                </span>
                <span className="font-mono text-[11px] text-[#7A7463] flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-[#3E4B22]" />
                  ML + Sensor Fusion
                </span>
              </div>

              <h3 className="font-serif text-3xl font-semibold text-[#1C1A15] mb-1">
                Kulima
              </h3>
              <div className="text-sm font-semibold text-[#3E4B22] font-mono mb-4">
                Weather and land, turned into decisions
              </div>

              <p className="text-[#5C5748] text-base leading-relaxed mb-6">
                Takes external weather, geospatial, and seasonal data and turns it into planting-window guidance, dry-spell and flood-risk detection, and heat-stress warnings, each with a confidence score attached rather than false certainty.
              </p>

              {/* Interactive Kulima Live Simulator */}
              <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-4 font-mono text-xs space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#ECE7DA] pb-2">
                  <span className="text-[#7A7463] uppercase text-[10px]">CROP ADAPTATION MODEL</span>
                  <div className="flex gap-1">
                    {(['maize', 'cassava', 'soya'] as const).map((crop) => (
                      <button
                        key={crop}
                        onClick={() => setCropSim(crop)}
                        className={`px-2 py-0.5 uppercase text-[10px] ${
                          cropSim === crop
                            ? 'bg-[#3E4B22] text-[#FAF8F4] font-semibold'
                            : 'bg-[#ECE7DA] text-[#5C5748]'
                        }`}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#ECE7DA] p-2 border border-[#D6D0BE]">
                    <span className="text-[#7A7463] block text-[10px]">PLANTING WINDOW</span>
                    <strong className="text-[#1C1A15]">
                      {cropSim === 'maize' ? 'May 16 - May 24' : cropSim === 'cassava' ? 'Late Rain Onset' : 'June 01 - June 10'}
                    </strong>
                  </div>
                  <div className="bg-[#ECE7DA] p-2 border border-[#D6D0BE]">
                    <span className="text-[#7A7463] block text-[10px]">CONFIDENCE SCORE</span>
                    <strong className="text-[#3E4B22]">
                      {cropSim === 'maize' ? '91.4% (High)' : cropSim === 'cassava' ? '86.8% (Good)' : '94.1% (Optimal)'}
                    </strong>
                  </div>
                </div>

                {/* Risk Alerts */}
                <div className="bg-[#E3E7D3]/60 p-2.5 border border-[#CAD0BA] text-[11px] space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[#3E4B22]">
                    <Activity className="w-3.5 h-3.5" />
                    <span>In-situ Sensor Cross-Check (Osun Central)</span>
                  </div>
                  <div className="text-[#5C5748]">
                    Soil moisture 24.8% exceeds field capacity threshold for seed germination. Dry spell risk next 10 days evaluated at 12%.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6D0BE] flex items-center justify-between text-xs font-mono text-[#5C5748]">
              <span>Active in 4 micro-climates</span>
              <span className="text-[#3E4B22] font-semibold">Calibrated with Adubiaro Probes</span>
            </div>
          </div>

          {/* Right Column: Tools 2 & 3 */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Tool 2: FARMS PORTAL (Farm & Stakeholder Cloud) */}
            <div
              className={`bg-[#F4F1EA] border border-[#D6D0BE] p-6 sm:p-8 transition-all ${
                activeTab === 'portal' || activeTab === 'all' ? 'opacity-100 ring-2 ring-[#3E4B22]/30' : 'opacity-40'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="font-mono text-xs px-2.5 py-1 bg-[#E3E7D3] text-[#3E4B22] border border-[#CAD0BA] font-semibold">
                  02 • Farm & Stakeholder Cloud
                </span>
                <div className="flex items-center gap-1 font-mono text-[10px] bg-[#ECE7DA] p-1 border border-[#D6D0BE]">
                  <button
                    onClick={() => setPortalRole('manager')}
                    className={`px-1.5 py-0.5 ${portalRole === 'manager' ? 'bg-[#1C1A15] text-[#FAF8F4]' : 'text-[#5C5748]'}`}
                  >
                    Mgr View
                  </button>
                  <button
                    onClick={() => setPortalRole('lender')}
                    className={`px-1.5 py-0.5 ${portalRole === 'lender' ? 'bg-[#3E4B22] text-[#FAF8F4]' : 'text-[#5C5748]'}`}
                  >
                    Bank/Off-taker
                  </button>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#1C1A15] mb-1">
                Farms Portal
              </h3>
              <div className="text-sm font-semibold text-[#3E4B22] font-mono mb-3">
                Where the operation is managed
              </div>

              <p className="text-[#5C5748] text-sm leading-relaxed mb-4">
                Role-based dashboards for admins and farm managers to run day-to-day operations and reporting. Provides bank officers and industrial off-takers direct read-only visibility into verified field milestones.
              </p>

              {/* Portal preview strip */}
              <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-3 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#7A7463]">
                  <span>ACTIVE VIEW: {portalRole === 'manager' ? 'FARM OPERATIONS & DISPATCH' : 'AUDIT & COMPLIANCE DESK'}</span>
                  <span className="text-emerald-700">● Live Sync</span>
                </div>
                {portalRole === 'manager' ? (
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between bg-[#ECE7DA] p-1.5 border border-[#D6D0BE]">
                      <span>Task #408: Apply Organic Foliar (Block A-1)</span>
                      <span className="text-[#3E4B22] font-semibold">Completed</span>
                    </div>
                    <div className="flex items-center justify-between bg-[#ECE7DA] p-1.5 border border-[#D6D0BE]">
                      <span>Task #409: Calibrate Weighbridge Node</span>
                      <span className="text-[#BF7E27] font-semibold">In Progress</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between bg-[#ECE7DA] p-1.5 border border-[#D6D0BE]">
                      <span>Grain Maize Lot #AF-2026-MZ9: 58.4 MT Verified</span>
                      <span className="text-[#3E4B22] font-semibold">Bank Cleared</span>
                    </div>
                    <div className="flex items-center justify-between bg-[#ECE7DA] p-1.5 border border-[#D6D0BE]">
                      <span>Satellite Crop Canopy Index: 0.78 NDVI</span>
                      <span className="text-[#3E4B22] font-semibold">Normal</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tool 3: FARMTRACE (Production Traceability) */}
            <div
              className={`bg-[#F4F1EA] border border-[#D6D0BE] p-6 sm:p-8 transition-all ${
                activeTab === 'trace' || activeTab === 'all' ? 'opacity-100 ring-2 ring-[#BF7E27]/40' : 'opacity-40'
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="font-mono text-xs px-2.5 py-1 bg-[#FAF2E6] text-[#BF7E27] border border-[#E8D4B8] font-semibold">
                  03 • Production Traceability
                </span>
                <span className="font-mono text-[10px] uppercase font-semibold text-[#BF7E27] bg-[#ECE7DA] px-2 py-0.5 border border-[#D6D0BE]">
                  In Active Development
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#1C1A15] mb-1">
                FarmTrace
              </h3>
              <div className="text-sm font-semibold text-[#BF7E27] font-mono mb-3">
                What actually happened, recorded
              </div>

              <p className="text-[#5C5748] text-sm leading-relaxed mb-4">
                A field-level record of planting, inputs, incidents, and harvest, built from the ground up as its own system. Replaces retroactive claims with cryptographic operator-signed event chains.
              </p>

              {/* Hash preview box */}
              <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-3 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[10px] text-[#7A7463]">
                  <span>IMMUTABLE LEDGER STREAM</span>
                  <span className="text-[#BF7E27]">SHA-256 Proof</span>
                </div>
                <div className="text-[11px] text-[#1C1A15] bg-[#ECE7DA] p-2 border border-[#D6D0BE] truncate">
                  HASH: 7f8a9e23c04d18bb8476231908bc449ea3b74962c03847b2
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#5C5748]">
                  <span>Inputs verified: 4 of 4</span>
                  <span className="text-[#3E4B22] font-semibold">0 Prohibited Chemicals</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
