import React from 'react';
import { Shield, Sparkles, Sprout, WifiOff, CheckCircle2 } from 'lucide-react';

export const TrustPrinciples: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Real production first',
      description:
        'Every tool exists to document or support production that is actually happening, not to make a story sound more advanced than the underlying farm.',
      subtext: 'No synthetic mock yields. No phantom acreage.',
      icon: Sprout,
    },
    {
      num: '02',
      title: 'No manufactured certainty',
      description:
        'Recommendations come with confidence scores, not guarantees. Agriculture carries real biological and weather risks, and the tools say so plainly.',
      subtext: 'Transparent uncertainty intervals over false promises.',
      icon: Shield,
    },
    {
      num: '03',
      title: 'One farm before many',
      description:
        'The stack earns its way to a second and third farm partner by proving itself on the first one, not the other way around.',
      subtext: 'Deep operational integration over superficial scale.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Offline-first African resilience',
      description:
        'Built for intermittent power, carrier network outages, and rural humidity. Every sensor and mobile terminal logs to edge storage and syncs when reconnected.',
      subtext: 'Zero data drops across 180 hectares in Osun State.',
      icon: WifiOff,
    },
  ];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>HOW WE THINK ABOUT TRUST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133229] tracking-tight leading-tight">
            Built with a working farm, not around one.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Technology in African agriculture often fails because creators confuse pitch decks with harvest realities. Our engineering principles reflect the uncompromising soil of Osun State.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="card-elevation p-7 flex flex-col justify-between hover:-translate-y-1 hover:border-emerald-300 transition-all bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xl font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200/60 font-mono">
                      {p.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-gray-500">
                      <Icon className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>

                  <h4 className="text-xl font-extrabold text-[#133229] mb-3">
                    {p.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-emerald-800 flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{p.subtext}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
