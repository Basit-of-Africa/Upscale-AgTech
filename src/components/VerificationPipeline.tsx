import React, { useState } from 'react';
import { PIPELINE_STEPS } from '../data/mockData';
import { Check, ShieldCheck, ArrowRight, Radio, Cpu, FileCheck } from 'lucide-react';

export const VerificationPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PIPELINE_STEPS[activeStepIndex];

  return (
    <section id="pipeline" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#ECE7DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>HOW IT FITS TOGETHER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            From field to verified record.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            Each stage feeds the next. Real farm activity and real environmental data compound into something more useful than either on its own.
          </p>
        </div>

        {/* 5-Step Connected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 border border-[#D6D0BE] bg-[#D6D0BE] gap-[1px] mb-8">
          {PIPELINE_STEPS.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-6 sm:p-7 transition-all focus:outline-none ${
                  isSelected
                    ? 'bg-[#FAF8F4] ring-2 ring-inset ring-[#3E4B22]'
                    : 'bg-[#FAF8F4]/80 hover:bg-[#FAF8F4]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-serif text-base font-bold ${
                    isSelected ? 'text-[#3E4B22]' : 'text-[#8B8472]'
                  }`}>
                    {step.num}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#3E4B22]" />
                  )}
                </div>

                <h4 className="font-sans text-base font-semibold text-[#1C1A15] mb-1">
                  {step.title}
                </h4>
                <p className="font-mono text-xs text-[#5C5748] leading-snug">
                  {step.short}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Inspector */}
        <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#3E4B22] font-semibold bg-[#E3E7D3] px-3 py-1 border border-[#CAD0BA]">
                <span>STAGE {currentStep.num} OF 05</span>
                <span>•</span>
                <span>{currentStep.title.toUpperCase()}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1A15]">
                {currentStep.description}
              </h3>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-[#F4F1EA] border border-[#D6D0BE]">
                  <span className="text-[#7A7463] uppercase block mb-1">INSTRUMENTS & SENSORS</span>
                  <p className="text-[#1C1A15] font-medium leading-relaxed">
                    {currentStep.instruments}
                  </p>
                </div>

                <div className="p-4 bg-[#E3E7D3]/60 border border-[#CAD0BA]">
                  <span className="text-[#3E4B22] uppercase block mb-1">EVIDENCE GENERATED</span>
                  <p className="text-[#1C1A15] font-medium leading-relaxed">
                    {currentStep.evidenceGenerated}
                  </p>
                </div>
              </div>
            </div>

            {/* Step Pipeline Visualization Graphic */}
            <div className="lg:col-span-5 bg-[#ECE7DA] border border-[#D6D0BE] p-6 text-center space-y-4 font-mono text-xs">
              <div className="text-[#7A7463] uppercase text-[11px]">
                DATA FLOW CONTINUITY
              </div>

              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1C1A15]">
                <span>Stage {currentStep.num}</span>
                <ArrowRight className="w-4 h-4 text-[#3E4B22]" />
                <span>
                  {activeStepIndex < 4 ? `Stage 0${activeStepIndex + 2}` : 'Bank & Off-taker Gate'}
                </span>
              </div>

              <div className="bg-[#FAF8F4] p-3 border border-[#D6D0BE] text-left text-[11px] text-[#5C5748] space-y-1">
                <div className="flex items-center justify-between text-[#1C1A15] font-semibold">
                  <span>AUDIT READINESS</span>
                  <span className="text-[#3E4B22]">{(activeStepIndex + 1) * 20}%</span>
                </div>
                <div className="w-full bg-[#ECE7DA] h-2">
                  <div
                    className="bg-[#3E4B22] h-2 transition-all duration-300"
                    style={{ width: `${(activeStepIndex + 1) * 20}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#7A7463] block pt-1">
                  Validated against Nigerian commercial agribusiness underwriting rules.
                </span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1 bg-[#FAF8F4] border border-[#D6D0BE] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F4F1EA]"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStepIndex === PIPELINE_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PIPELINE_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1 bg-[#3E4B22] text-[#FAF8F4] border border-[#3E4B22] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2F3918]"
                >
                  Next Stage →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
