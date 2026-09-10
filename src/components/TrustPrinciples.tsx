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
    <section id="trust" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>HOW WE THINK ABOUT TRUST</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            Built with a working farm, not around one.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            Technology in African agriculture often fails because software creators confuse pitch decks with harvest realities. Our engineering principles reflect the uncompromising soil of Osun State.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="bg-[#FAF8F4] border border-[#D6D0BE] p-6 sm:p-7 flex flex-col justify-between hover:border-[#3E4B22] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-lg font-bold text-[#3E4B22]">
                      {p.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#7A7463]" />
                  </div>

                  <h4 className="font-serif text-xl font-semibold text-[#1C1A15] mb-3">
                    {p.title}
                  </h4>

                  <p className="text-[#5C5748] text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE7DA] font-mono text-[11px] text-[#3E4B22] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
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
