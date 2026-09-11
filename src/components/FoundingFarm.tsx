import React, { useState } from 'react';
import { FIELD_LOGS } from '../data/mockData';
import { MapPin, Compass, BookOpen, Cpu, Calendar, CheckCircle2, User, FileText, Check } from 'lucide-react';

export const FoundingFarm: React.FC = () => {
  const [activeLog, setActiveLog] = useState<string>(FIELD_LOGS[0].id);
  const selectedLog = FIELD_LOGS.find((l) => l.id === activeLog) || FIELD_LOGS[0];

  return (
    <section id="farm" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>FOUNDING LIVING LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#133229] tracking-tight leading-tight">
            Adubiaro Farms — Our Living Agritech Laboratory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Adubiaro Farms is where the stack is engineered, pressure-tested, and audited before any external deployment. Operating on real tropical soil with commercial off-taker commitments.
          </p>
        </div>

        {/* Founding Farm Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left: Schematic Farm Illustration & Visual */}
          <div className="lg:col-span-5 card-elevation p-8 flex flex-col items-center justify-center relative overflow-hidden bg-white">
            <div className="w-full flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                STATION #01 • EDE CORRIDOR
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Telemetry
              </span>
            </div>

            {/* Farm Contour & Sensor SVG */}
            <div className="w-full max-w-[300px] aspect-4/3 my-4 bg-slate-900 rounded-2xl p-4 shadow-inner relative overflow-hidden border border-slate-800">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px]" />
              <svg viewBox="0 0 240 180" fill="none" className="w-full h-full relative z-10">
                {/* Elevation topography lines */}
                <path d="M10 160 Q80 140 140 155 T230 140" stroke="#047857" strokeWidth="1.2" opacity="0.6" fill="none" />
                <path d="M10 130 Q70 105 130 120 T230 100" stroke="#047857" strokeWidth="1.2" opacity="0.6" fill="none" />
                <path d="M10 90 Q60 65 120 75 T230 55" stroke="#047857" strokeWidth="1.2" opacity="0.6" fill="none" />

                {/* Primary farm crop boundary */}
                <polygon
                  points="25,145 75,35 150,25 215,95 190,155 85,165"
                  fill="#064e3b"
                  fillOpacity="0.75"
                  stroke="#10b981"
                  strokeWidth="2"
                />

                {/* Internal sub-plots */}
                <line x1="75" y1="35" x2="190" y2="155" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
                <line x1="25" y1="145" x2="150" y2="25" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />

                {/* IoT Probes & Mast */}
                <circle cx="75" cy="35" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                <circle cx="150" cy="25" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
                <circle cx="115" cy="95" r="6.5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                <circle cx="190" cy="155" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>

            <div className="w-full text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 text-gray-600 space-y-2">
              <div className="flex justify-between text-[#133229] font-bold">
                <span>ACTIVE CULTIVATION</span>
                <span>180 HECTARES</span>
              </div>
              <div className="flex justify-between">
                <span>Agro-Ecological Zone</span>
                <span className="text-emerald-700 font-semibold">Transition Forest/Savanna</span>
              </div>
              <div className="flex justify-between">
                <span>Active Telemetry Nodes</span>
                <span className="font-mono">6 Masts / 24 Soil Probes</span>
              </div>
            </div>
          </div>

          {/* Right: Partnership Details & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-normal text-[#133229]">
              Real commercial seasons, never synthetic proxies.
            </h3>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Adubiaro Farms is not an artificial sandbox. It is an active commercial enterprise navigating the rigorous challenges of modern African agriculture: unpredictable precipitation onsets, grid intermittency, input cost surges, and stringent buyer moisture metrics.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Every capacitive moisture sensor, cloud ledger sync protocol, and Kulima predictive model is evaluated on-site with commercial operators in the field. When an anomaly arises, it is resolved on real acreage.
            </p>

            {/* Farm Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[10.5px] text-gray-400 block uppercase font-bold tracking-wider">LOCATION</span>
                <strong className="text-base text-[#133229] font-extrabold block mt-1">Osun State, NG</strong>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[10.5px] text-gray-400 block uppercase font-bold tracking-wider">FACILITY TYPE</span>
                <strong className="text-base text-[#133229] font-extrabold block mt-1">Living Agritech Lab</strong>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[10.5px] text-emerald-600 block uppercase font-bold tracking-wider">PARTNERSHIP</span>
                <strong className="text-base text-emerald-800 font-extrabold block mt-1">Founding Partner</strong>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[10.5px] text-gray-400 block uppercase font-bold tracking-wider">CROPPING CYCLES</span>
                <strong className="text-base text-[#133229] font-extrabold block mt-1">4 Continuous Cycles</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Real Field Scout & Agronomist Journal */}
        <div className="card-elevation p-7 sm:p-9 bg-white">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-extrabold text-[#133229]">
                Live Field Dispatch Logbook
              </h4>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              UNFILTERED OPERATOR DISPATCHES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Log picker */}
            <div className="lg:col-span-4 space-y-2.5">
              {FIELD_LOGS.map((log) => (
                <button
                  key={log.id}
                  onClick={() => setActiveLog(log.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs ${
                    log.id === activeLog
                      ? 'bg-emerald-50/80 border-emerald-500 text-emerald-950 shadow-sm ring-1 ring-emerald-500/20'
                      : 'bg-slate-50 border-slate-200 text-gray-600 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex justify-between items-center text-[10.5px] text-gray-400 font-semibold mb-1">
                    <span>{log.date.split('•')[0]}</span>
                    <span className="font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-slate-200">{log.tag}</span>
                  </div>
                  <div className="font-bold text-sm line-clamp-1 mb-1 text-[#133229]">
                    {log.title}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    By {log.author}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Log Reader */}
            <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 border-b border-slate-200 pb-3 mb-4">
                  <span className="flex items-center gap-2 text-[#133229] font-bold">
                    <User className="w-4 h-4 text-emerald-600" />
                    {selectedLog.author} — <span className="text-gray-500 font-normal">{selectedLog.role}</span>
                  </span>
                  <span className="font-mono text-[11px]">{selectedLog.date}</span>
                </div>

                <h5 className="text-xl font-extrabold text-[#133229] mb-3">
                  "{selectedLog.title}"
                </h5>

                <p className="text-gray-600 text-base leading-relaxed">
                  {selectedLog.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-gray-500">
                <span className="font-mono font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-md">
                  BLOCK: {selectedLog.plotId.toUpperCase()}
                </span>
                <span className="text-emerald-700 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  SHA-256 Operator Signed & Stamped
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
