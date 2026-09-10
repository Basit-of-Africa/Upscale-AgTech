import React, { useState } from 'react';
import { FIELD_LOGS } from '../data/mockData';
import { MapPin, Compass, BookOpen, Cpu, Calendar, CheckCircle2, User, FileText } from 'lucide-react';

export const FoundingFarm: React.FC = () => {
  const [activeLog, setActiveLog] = useState<string>(FIELD_LOGS[0].id);
  const selectedLog = FIELD_LOGS.find((l) => l.id === activeLog) || FIELD_LOGS[0];

  return (
    <section id="farm" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>FOUNDING FARM PARTNER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            Adubiaro Farms — Our Living Laboratory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            Adubiaro Farms is where the stack gets built, tested, and proven before it ever reaches another operation. Real fields, real seasons, real reporting requirements, not a simulated pilot.
          </p>
        </div>

        {/* Founding Farm Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left: Schematic Farm Illustration & Visual */}
          <div className="lg:col-span-5 bg-[#E3E7D3] border border-[#CAD0BA] p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-3 left-3 font-mono text-[10px] text-[#3E4B22] uppercase font-semibold">
              STATION #01 • EDE CORRIDOR
            </div>

            {/* Farm Contour & Sensor SVG */}
            <div className="w-full max-w-[280px] aspect-4/3 my-6">
              <svg viewBox="0 0 240 180" fill="none" className="w-full h-full">
                {/* Elevation topography lines */}
                <path d="M10 160 Q80 140 140 155 T230 140" stroke="#CAD0BA" strokeWidth="1.5" fill="none" />
                <path d="M10 130 Q70 105 130 120 T230 100" stroke="#CAD0BA" strokeWidth="1.5" fill="none" />
                <path d="M10 90 Q60 65 120 75 T230 55" stroke="#CAD0BA" strokeWidth="1.5" fill="none" />

                {/* Primary farm crop boundary */}
                <polygon
                  points="25,145 75,35 150,25 215,95 190,155 85,165"
                  fill="#FAF8F4"
                  fillOpacity="0.8"
                  stroke="#3E4B22"
                  strokeWidth="2"
                />

                {/* Internal sub-plots */}
                <line x1="75" y1="35" x2="190" y2="155" stroke="#D6D0BE" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="25" y1="145" x2="150" y2="25" stroke="#D6D0BE" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* IoT Probes & Mast */}
                <circle cx="75" cy="35" r="4" fill="#BF7E27" />
                <circle cx="150" cy="25" r="4" fill="#BF7E27" />
                <circle cx="115" cy="95" r="6" fill="#3E4B22" stroke="#FAF8F4" strokeWidth="2" />
                <circle cx="190" cy="155" r="4" fill="#BF7E27" />
              </svg>
            </div>

            <div className="w-full font-mono text-xs bg-[#FAF8F4] p-3 border border-[#CAD0BA] text-[#5C5748] space-y-1">
              <div className="flex justify-between text-[#1C1A15] font-semibold">
                <span>ACTIVE CULTIVATION</span>
                <span>180 HECTARES</span>
              </div>
              <div className="flex justify-between">
                <span>Agro-Ecological Zone</span>
                <span className="text-[#3E4B22]">Transition Forest/Savanna</span>
              </div>
              <div className="flex justify-between">
                <span>Active Telemetry Nodes</span>
                <span>6 Masts / 24 Soil Probes</span>
              </div>
            </div>
          </div>

          {/* Right: Partnership Details & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-[#1C1A15]">
              Real seasons, not laboratory conditions.
            </h3>
            
            <p className="text-[#5C5748] text-base sm:text-lg leading-relaxed">
              Adubiaro Farms is not an academic demonstration plot. It is a commercial production outfit operating under the real constraints of Nigerian agriculture: erratic rainfall onsets, power unreliability, high input volatility, and strict grain buyer quality specs.
            </p>

            <p className="text-[#5C5748] text-base leading-relaxed">
              Every sensor design, mobile interface, and prediction algorithm is vetted directly by Adubiaro's field scouts and farm managers under mid-day heat and tropical rainstorms. If a feature fails here, it doesn't leave the gate.
            </p>

            {/* Farm Meta Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono">
              <div className="border-t-2 border-[#3E4B22] pt-2">
                <span className="text-[11px] text-[#7A7463] block uppercase">LOCATION</span>
                <strong className="text-sm text-[#1C1A15]">Osun State, NG</strong>
              </div>
              <div className="border-t-2 border-[#3E4B22] pt-2">
                <span className="text-[11px] text-[#7A7463] block uppercase">ROLE</span>
                <strong className="text-sm text-[#1C1A15]">Living Laboratory</strong>
              </div>
              <div className="border-t-2 border-[#3E4B22] pt-2">
                <span className="text-[11px] text-[#3E4B22] block uppercase">PARTNERSHIP</span>
                <strong className="text-sm text-[#1C1A15]">Founding Co-builder</strong>
              </div>
              <div className="border-t-2 border-[#3E4B22] pt-2">
                <span className="text-[11px] text-[#7A7463] block uppercase">SEASONS LOGGED</span>
                <strong className="text-sm text-[#1C1A15]">4 Cropping Cycles</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Real Field Scout & Agronomist Journal */}
        <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D6D0BE] flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#3E4B22]" />
              <h4 className="font-serif text-xl font-semibold text-[#1C1A15]">
                Live Field Dispatch Logbook
              </h4>
            </div>
            <span className="font-mono text-xs text-[#7A7463]">
              UNEDITED ENTRIES FROM ADUBIARO OPERATORS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Log picker */}
            <div className="lg:col-span-4 space-y-2">
              {FIELD_LOGS.map((log) => (
                <button
                  key={log.id}
                  onClick={() => setActiveLog(log.id)}
                  className={`w-full text-left p-3.5 border transition-all text-xs font-mono ${
                    log.id === activeLog
                      ? 'bg-[#E3E7D3] border-[#3E4B22] text-[#1C1A15] shadow-xs'
                      : 'bg-[#ECE7DA] border-[#D6D0BE] text-[#5C5748] hover:bg-[#FAF8F4]'
                  }`}
                >
                  <div className="flex justify-between items-center text-[10px] text-[#7A7463] mb-1">
                    <span>{log.date.split('•')[0]}</span>
                    <span className="font-semibold text-[#3E4B22]">{log.tag}</span>
                  </div>
                  <div className="font-sans font-semibold text-sm line-clamp-1 mb-1 text-[#1C1A15]">
                    {log.title}
                  </div>
                  <div className="text-[11px] text-[#5C5748] truncate">
                    By {log.author}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Log Reader */}
            <div className="lg:col-span-8 bg-[#F4F1EA] border border-[#D6D0BE] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#7A7463] border-b border-[#D6D0BE] pb-3 mb-4">
                  <span className="flex items-center gap-1.5 text-[#1C1A15] font-semibold">
                    <User className="w-3.5 h-3.5 text-[#3E4B22]" />
                    {selectedLog.author} — <span className="text-[#5C5748] font-normal">{selectedLog.role}</span>
                  </span>
                  <span>{selectedLog.date}</span>
                </div>

                <h5 className="font-serif text-xl font-semibold text-[#1C1A15] mb-3">
                  "{selectedLog.title}"
                </h5>

                <p className="text-[#5C5748] text-base leading-relaxed font-sans">
                  {selectedLog.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D6D0BE] flex items-center justify-between text-xs font-mono text-[#7A7463]">
                <span>Attached Plot: {selectedLog.plotId.toUpperCase()}</span>
                <span className="text-[#3E4B22] flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Cryptographically Signed & Timestamped
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
