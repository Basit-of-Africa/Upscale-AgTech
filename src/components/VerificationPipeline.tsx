import React, { useState } from 'react';
import { PIPELINE_STEPS } from '../data/mockData';
import { Check, ShieldCheck, ArrowRight, Radio, Cpu, FileCheck, ChevronRight } from 'lucide-react';

export const VerificationPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PIPELINE_STEPS[activeStepIndex];

  return (
    <section id="pipeline" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>CONTINUOUS ASSURANCE PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#133229] tracking-tight leading-tight">
            From ground sensors to verified market certificates.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Every operational milestone feeds the next. Real-time field telemetry and satellite observations compound into tamper-evident proof that unlocks credit and premium buyers.
          </p>
        </div>

        {/* 5-Step Connected Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {PIPELINE_STEPS.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-2xl transition-all border ${
                  isSelected
                    ? 'bg-[#133229] text-white border-[#133229] shadow-lg shadow-emerald-950/20 ring-2 ring-emerald-500/40 -translate-y-1'
                    : 'bg-white text-gray-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black font-mono px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-100 text-gray-500'
                  }`}>
                    {step.num}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                <h4 className={`text-sm font-extrabold mb-1 line-clamp-1 ${
                  isSelected ? 'text-white' : 'text-[#133229]'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-xs leading-snug line-clamp-2 ${
                  isSelected ? 'text-emerald-100/70' : 'text-gray-500'
                }`}>
                  {step.short}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Inspector */}
        <div className="card-elevation p-7 sm:p-10 bg-white border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
                <span>STAGE {currentStep.num} OF 05</span>
                <span>•</span>
                <span>{currentStep.title.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#133229] leading-snug">
                {currentStep.description}
              </h3>

              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-gray-400 font-bold uppercase tracking-wider block mb-1.5 text-[10.5px]">
                    INSTRUMENTS & SENSORS
                  </span>
                  <p className="text-[#133229] font-medium leading-relaxed">
                    {currentStep.instruments}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80">
                  <span className="text-emerald-800 font-bold uppercase tracking-wider block mb-1.5 text-[10.5px]">
                    EVIDENCE GENERATED
                  </span>
                  <p className="text-emerald-950 font-medium leading-relaxed">
                    {currentStep.evidenceGenerated}
                  </p>
                </div>
              </div>
            </div>

            {/* Step Pipeline Visualization Graphic */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200/80 p-6 text-center space-y-5">
              <div className="text-gray-400 font-bold uppercase text-[11px] tracking-wider">
                ASSURANCE STAGE TRANSITION
              </div>

              <div className="flex items-center justify-center gap-3 text-sm font-bold text-[#133229] bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-emerald-700">Stage {currentStep.num}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span>
                  {activeStepIndex < 4 ? `Stage 0${activeStepIndex + 2}` : 'Audit Verification Clearance'}
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 text-left text-xs text-gray-600 space-y-2">
                <div className="flex items-center justify-between text-[#133229] font-bold">
                  <span>AUDIT READINESS SCORE</span>
                  <span className="text-emerald-600">{(activeStepIndex + 1) * 20}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                    style={{ width: `${(activeStepIndex + 1) * 20}%` }}
                  />
                </div>
                <span className="text-[11px] text-gray-400 block pt-1">
                  Cross-checked against institutional agribusiness credit underwriting rules.
                </span>
              </div>

              <div className="flex justify-between items-center pt-2 gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition-all flex-1"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStepIndex === PIPELINE_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PIPELINE_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-full text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-500 shadow-sm transition-all flex-1"
                >
                  Next Step →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
