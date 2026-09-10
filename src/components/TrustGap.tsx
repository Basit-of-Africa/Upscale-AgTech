import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, FileQuestion, ShieldCheck, XCircle, ArrowRight, TrendingDown, Sparkles } from 'lucide-react';

export const TrustGap: React.FC = () => {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>THE PROBLEM & THE MISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133229] tracking-tight leading-tight">
            African agriculture faces a trust gap, not just a yield gap.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            A commercial farm can run disciplined crop cycles, observe meticulous spray intervals, and hit target volumes — yet remain an unbankable black box to commercial lenders, off-takers, and export auditors.
          </p>
        </div>

        {/* Core Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          
          {/* Left: What farms struggle to show */}
          <div className="lg:col-span-6 card-elevation p-7 sm:p-9 flex flex-col justify-between bg-white border border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/70 mb-4">
                <FileQuestion className="w-4 h-4 text-amber-600" />
                <span>THE UNVERIFIED STATUS QUO</span>
              </div>
              <h3 className="text-2xl text-[#133229] font-extrabold mb-4">
                The fragility of paper notes, chat logs, and memory
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6 font-normal">
                Farm managers can be doing everything right on the field, yet lack cryptographic, auditable records to satisfy institutional capital or grain buyers. Operations rely on handwritten tally sheets, WhatsApp media threads, and unorganized spreadsheets.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100 text-xs text-gray-600">
              <div className="flex items-start gap-3 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-medium text-rose-950">Yield volumes cannot be verified retroactively once grain trucks leave the farm gate</span>
              </div>
              <div className="flex items-start gap-3 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-medium text-rose-950">Zero timestamped telemetry proving chemical inputs were dosed according to safe residue limits</span>
              </div>
              <div className="flex items-start gap-3 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-medium text-rose-950">Agri-lending approvals stall for 6–10 weeks during costly manual on-site inspections</span>
              </div>
            </div>
          </div>

          {/* Right: What we're building instead */}
          <div className="lg:col-span-6 rounded-[28px] bg-[#133229] text-white p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-emerald-950/20 border border-emerald-800/60 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/60 mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>UPSCALE AGRO PROOF ARCHITECTURE</span>
              </div>
              
              <div className="border-l-2 border-emerald-500 pl-4 my-4">
                <blockquote className="text-xl sm:text-2xl font-bold italic text-white leading-snug">
                  "Evidence precedes capital. Every layer of our stack exists to objectively prove ground truth, not to inflate farm marketing."
                </blockquote>
              </div>

              <p className="text-emerald-100/80 text-base leading-relaxed mt-4 font-normal">
                Instead of requiring farmers to assemble synthetic reports, Upscale Agro captures the ground truth at source: capacitive sensor arrays, satellite multispectral passes, and automated weighbridge hashes structured into a bank-ready asset passport.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10 text-xs relative z-10">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium text-emerald-100">Cryptographically signed telemetry logs from authorized agronomy field operators</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium text-emerald-100">Sentinel-2 satellite NDVI canopy validation completely prevents ghost acreage claims</span>
              </div>
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-medium text-emerald-100">Instant machine-verifiable PDF/QR passport for grain aggregators and credit underwriter APIs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Comparison & Ground Truth Evidence Matrix */}
        <div className="card-elevation bg-white overflow-hidden border border-slate-200/80">
          <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-2">
                AUDIT BENCHMARK MATRIX
              </span>
              <h4 className="text-xl text-[#133229] font-extrabold">
                How Claims Turn Into Verifiable Evidence
              </h4>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Upscale Agro Certified Protocol</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-slate-50/70 transition-colors items-center gap-4">
              <div className="md:col-span-3 font-bold text-[#133229]">
                1. Acreage & Parcel Boundaries
              </div>
              <div className="md:col-span-4 text-gray-500 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">UNVERIFIED FARM</span>
                Verbal estimates or hand-drawn sketches. In Nigeria, up to 30% of stated farm size is uncultivated buffer or overstated.
              </div>
              <div className="md:col-span-5 bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">UPSCALE AGRO STACK</span>
                Exact GNSS polygon geofence locked on Day 1. Matched to Sentinel-2 satellite canopy pixels on every 5-day orbital pass.
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-slate-50/70 transition-colors items-center gap-4">
              <div className="md:col-span-3 font-bold text-[#133229]">
                2. Weather & Climate Risk
              </div>
              <div className="md:col-span-4 text-gray-500 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">UNVERIFIED FARM</span>
                Standard weather apps reporting data from an airport 80km away. Misses localized tropical rainfall dry-spells completely.
              </div>
              <div className="md:col-span-5 bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">UPSCALE AGRO STACK</span>
                Kulima in-situ micro-weather stations + capacitive soil moisture probes providing probabilistic planting and dry-spell alerts.
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-slate-50/70 transition-colors items-center gap-4">
              <div className="md:col-span-3 font-bold text-[#133229]">
                3. Fertilizer & Chemical Traceability
              </div>
              <div className="md:col-span-4 text-gray-500 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">UNVERIFIED FARM</span>
                Paper invoice receipts from agro-dealers with zero proof that inputs were properly applied to the targeted crop parcel.
              </div>
              <div className="md:col-span-5 bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">UPSCALE AGRO STACK</span>
                FarmTrace operator barcode sign-in, serial lot numbers, application rate vs parcel size calculation, and agronomist verification sign-off.
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-slate-50/70 transition-colors items-center gap-4">
              <div className="md:col-span-3 font-bold text-[#133229]">
                4. Harvest Weighbridge & Yield
              </div>
              <div className="md:col-span-4 text-gray-500 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">UNVERIFIED FARM</span>
                Bag counts written in chalk or notebook sheets prone to transcription errors, leakage, and tampering.
              </div>
              <div className="md:col-span-5 bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">UPSCALE AGRO STACK</span>
                Direct serial connection to digital weighbridge. Gross and tare weights automatically hashed with certificate QR code for off-taker acceptance.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
