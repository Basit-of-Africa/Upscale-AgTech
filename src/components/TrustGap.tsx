import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, FileQuestion, ShieldCheck, XCircle, ArrowRight } from 'lucide-react';

export const TrustGap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'metrics'>('comparison');

  return (
    <section id="mission" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>THE PROBLEM & THE MISSION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            Nigerian agriculture has a trust gap, not just a productivity gap.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            A commercial farm in Nigeria can run disciplined agronomy, observe tight spray intervals, and hit target yields, yet still be treated as an unbankable black box by lenders, off-takers, and export buyers.
          </p>
        </div>

        {/* Core Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Left: What farms struggle to show */}
          <div className="lg:col-span-6 bg-[#FAF8F4] border border-[#D6D0BE] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#BF7E27] font-semibold uppercase mb-3">
                <FileQuestion className="w-4 h-4" />
                <span>WHAT FARMS STRUGGLE TO SHOW</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C1A15] font-semibold mb-4">
                The fragility of paper, phone galleries, and memory
              </h3>
              <p className="text-[#5C5748] text-base leading-relaxed mb-6">
                A farm can be doing everything right and still have no easy way to prove it to an investor, a commercial bank, an off-taker, or an input funder. Production data lives in handwritten notebooks, WhatsApp group chats, and unorganized photos scattered across staff phones.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#ECE7DA] font-mono text-xs text-[#5C5748]">
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                <span>Yields cannot be verified retroactively once harvest leaves the gate</span>
              </div>
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                <span>Zero timestamped proof that fertilizer was actually applied as claimed</span>
              </div>
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                <span>Agri-loan applications stall for 6–10 weeks during manual inspection</span>
              </div>
            </div>
          </div>

          {/* Right: What we're building instead */}
          <div className="lg:col-span-6 bg-[#E3E7D3] border border-[#CAD0BA] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#3E4B22] font-semibold uppercase mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>WHAT WE ARE BUILDING INSTEAD</span>
              </div>
              
              <div className="border-l-4 border-[#3E4B22] pl-5 my-4">
                <blockquote className="font-serif text-2xl sm:text-[26px] leading-snug italic text-[#1C1A15] font-normal">
                  "Evidence before claims. Every layer of the stack exists to answer 'how do you know?', not to make a farm sound bigger than it is."
                </blockquote>
              </div>

              <p className="text-[#3E4B22] text-base leading-relaxed mt-6">
                Rather than forcing farmers to create synthetic marketing claims, Upscale Agro automatically structures the ground truth as it occurs: telemetry, satellite validation, scale weights, and field actions compiled into an irrefutable audit passport.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#CAD0BA] font-mono text-xs text-[#2F3918]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E4B22] shrink-0 mt-0.5" />
                <span>Cryptographically signed edge logs from verified field operators</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E4B22] shrink-0 mt-0.5" />
                <span>Satellite NDVI multi-spectral cross-validation prevents ghost acres</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E4B22] shrink-0 mt-0.5" />
                <span>Instant machine-readable verification pass for grain off-takers and banks</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Comparison & Ground Truth Evidence Matrix */}
        <div className="bg-[#FAF8F4] border border-[#D6D0BE] overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-[#D6D0BE] bg-[#ECE7DA] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#3E4B22] font-semibold">
                AUDIT BENCHMARK COMPARISON
              </span>
              <h4 className="font-serif text-lg text-[#1C1A15] font-semibold">
                How Claims Turn Into Verifiable Evidence
              </h4>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="inline-block w-3 h-3 bg-[#E3E7D3] border border-[#CAD0BA]" />
              <span className="text-[#5C5748]">Upscale Agro Standard</span>
            </div>
          </div>

          <div className="divide-y divide-[#D6D0BE] text-sm">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 hover:bg-[#F8F6F0] transition-colors items-center gap-4">
              <div className="md:col-span-3 font-medium text-[#1C1A15]">
                1. Acreage & Boundary Claims
              </div>
              <div className="md:col-span-4 text-[#7A7463] text-xs sm:text-sm">
                <span className="font-mono text-rose-800 font-semibold block mb-0.5">UNVERIFIED FARM</span>
                Verbal estimates or hand-drawn sketches. In Nigeria, up to 30% of stated farm size is uncultivated buffer or overstated.
              </div>
              <div className="md:col-span-5 bg-[#E3E7D3]/60 p-3.5 border border-[#CAD0BA] text-[#1C1A15] text-xs sm:text-sm">
                <span className="font-mono text-[#3E4B22] font-semibold block mb-0.5">UPSCALE AGRO STACK</span>
                Exact GNSS polygon geofence locked on Day 1. Matched to Sentinel-2 satellite canopy pixels every 5-day pass.
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 hover:bg-[#F8F6F0] transition-colors items-center gap-4">
              <div className="md:col-span-3 font-medium text-[#1C1A15]">
                2. Weather & Climate Risk
              </div>
              <div className="md:col-span-4 text-[#7A7463] text-xs sm:text-sm">
                <span className="font-mono text-rose-800 font-semibold block mb-0.5">UNVERIFIED FARM</span>
                Regional weather apps reporting data from an airport 80km away. Misses localized rainfall dry-spells completely.
              </div>
              <div className="md:col-span-5 bg-[#E3E7D3]/60 p-3.5 border border-[#CAD0BA] text-[#1C1A15] text-xs sm:text-sm">
                <span className="font-mono text-[#3E4B22] font-semibold block mb-0.5">UPSCALE AGRO STACK</span>
                Kulima in-situ micro-weather stations + capacitive soil moisture probes giving probabilistic planting and dry-spell alerts.
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 hover:bg-[#F8F6F0] transition-colors items-center gap-4">
              <div className="md:col-span-3 font-medium text-[#1C1A15]">
                3. Fertilizer & Chemical Traceability
              </div>
              <div className="md:col-span-4 text-[#7A7463] text-xs sm:text-sm">
                <span className="font-mono text-rose-800 font-semibold block mb-0.5">UNVERIFIED FARM</span>
                Paper invoice receipts from agro-dealers with zero proof that inputs were properly applied to the targeted crop parcel.
              </div>
              <div className="md:col-span-5 bg-[#E3E7D3]/60 p-3.5 border border-[#CAD0BA] text-[#1C1A15] text-xs sm:text-sm">
                <span className="font-mono text-[#3E4B22] font-semibold block mb-0.5">UPSCALE AGRO STACK</span>
                FarmTrace operator barcode sign-in, serial lot numbers, application rate vs parcel size calculation, and agronomist verification sign-off.
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 hover:bg-[#F8F6F0] transition-colors items-center gap-4">
              <div className="md:col-span-3 font-medium text-[#1C1A15]">
                4. Harvest Weighbridge & Yield
              </div>
              <div className="md:col-span-4 text-[#7A7463] text-xs sm:text-sm">
                <span className="font-mono text-rose-800 font-semibold block mb-0.5">UNVERIFIED FARM</span>
                Bag counts written in chalk or notebook sheets prone to transcription errors, leakage, and tampering.
              </div>
              <div className="md:col-span-5 bg-[#E3E7D3]/60 p-3.5 border border-[#CAD0BA] text-[#1C1A15] text-xs sm:text-sm">
                <span className="font-mono text-[#3E4B22] font-semibold block mb-0.5">UPSCALE AGRO STACK</span>
                Direct serial connection to digital weighbridge. Gross and tare weights automatically hashed with certificate QR code for off-taker acceptance.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
