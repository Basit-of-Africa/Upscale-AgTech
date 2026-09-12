import React, { useState, useEffect } from 'react';
import { Activity, Droplets, Thermometer, Sun, Satellite, CheckCircle2 } from 'lucide-react';

export const TelemetryTicker: React.FC = () => {
  const [telemetry, setTelemetry] = useState({
    temp: 29.8,
    humidity: 71,
    soilMoisture: 25.6,
    solar: 742,
    confidence: 91.2,
    syncSecondsAgo: 14,
  });

  // Micro fluctuation to show live telemetry feed
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        temp: Number((prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1)),
        humidity: Math.min(85, Math.max(60, Math.round(prev.humidity + (Math.random() * 2 - 1)))),
        soilMoisture: Number((prev.soilMoisture + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        solar: Math.round(prev.solar + (Math.random() * 10 - 5)),
        confidence: Number((91 + Math.random() * 0.5).toFixed(1)),
        syncSecondsAgo: (prev.syncSecondsAgo + 2) % 60,
      }));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="telemetry-bar"
      className="bg-[#0B1E19] border-b border-emerald-900/30 text-[11.5px] font-montserrat text-emerald-100/80 py-2.5 overflow-x-auto select-none"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 min-w-[800px] font-montserrat"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Node status */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
          </span>
          <span className="font-semibold text-white tracking-tight flex items-center gap-1.5">
            <span>LIVE LAB SENSOR MESH</span>
            <span className="text-emerald-400/60">•</span>
            <span className="text-emerald-300">ADUBIARO FARMS (OSUN, NG)</span>
          </span>
          <span className="text-emerald-600/80">•</span>
          <span className="text-emerald-400/70 text-[10.5px]">07°46'N 04°34'E</span>
        </div>

        {/* Live values */}
        <div className="flex items-center gap-5 text-[11px]">
          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10" title="Air Temperature">
            <Thermometer className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-200">{telemetry.temp}°C</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10" title="Atmospheric Relative Humidity">
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-200">RH {telemetry.humidity}%</span>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30" title="Root-Zone Soil Moisture (Plot A-1)">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-300 font-medium">SM {telemetry.soilMoisture}% (Optimal)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10" title="Solar Irradiance (W/m²)">
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-slate-200">{telemetry.solar} W/m²</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10" title="Kulima Early Maize Planting Window Confidence">
            <Satellite className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">Kulima AI: <strong className="text-emerald-300">{telemetry.confidence}%</strong></span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[10.5px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Synced {telemetry.syncSecondsAgo}s ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
