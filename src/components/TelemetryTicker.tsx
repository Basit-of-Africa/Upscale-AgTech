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
      className="bg-[#ECE7DA] border-b border-[#D6D0BE] text-[12px] font-mono text-[#5C5748] py-2 overflow-x-auto select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 min-w-[760px]">
        {/* Node status */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E4B22] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E4B22]"></span>
          </span>
          <span className="font-semibold text-[#1C1A15] tracking-tight">
            FIELD STATION: ADUBIARO FARMS (OSUN STATE)
          </span>
          <span className="text-[#8B8472]">•</span>
          <span className="text-[#5C5748]">07°46'N 04°34'E</span>
        </div>

        {/* Live values */}
        <div className="flex items-center gap-5 text-[11px]">
          <div className="flex items-center gap-1.5" title="Air Temperature">
            <Thermometer className="w-3.5 h-3.5 text-[#BF7E27]" />
            <span>{telemetry.temp}°C</span>
          </div>

          <div className="flex items-center gap-1.5" title="Atmospheric Relative Humidity">
            <Droplets className="w-3.5 h-3.5 text-[#3E4B22]" />
            <span>RH {telemetry.humidity}%</span>
          </div>

          <div className="flex items-center gap-1.5" title="Root-Zone Soil Moisture (Plot A-1)">
            <Activity className="w-3.5 h-3.5 text-[#3E4B22]" />
            <span className="text-[#1C1A15] font-medium">SM {telemetry.soilMoisture}% (Optimal)</span>
          </div>

          <div className="flex items-center gap-1.5" title="Solar Irradiance (W/m²)">
            <Sun className="w-3.5 h-3.5 text-[#BF7E27]" />
            <span>{telemetry.solar} W/m²</span>
          </div>

          <div className="flex items-center gap-1.5" title="Kulima Early Maize Planting Window Confidence">
            <Satellite className="w-3.5 h-3.5 text-[#3E4B22]" />
            <span>Kulima Index: <strong className="text-[#1C1A15]">{telemetry.confidence}%</strong></span>
          </div>

          <div className="flex items-center gap-1 text-[#3E4B22] font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            <span>Synced {telemetry.syncSecondsAgo}s ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
