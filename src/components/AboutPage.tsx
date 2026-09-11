import React from 'react';
import {
  Sprout,
  ShieldCheck,
  Droplets,
  Award,
  Users,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Leaf,
  Layers,
  MapPin,
  Calendar,
  ChevronRight
} from 'lucide-react';

interface AboutPageProps {
  onOpenContact: () => void;
  onOpenVerifier: () => void;
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenContact,
  onOpenVerifier,
  onNavigateHome
}) => {
  const stats = [
    {
      value: '90%',
      label: 'Less Water Consumed',
      desc: 'Closed-loop hydroponic recirculation compared to traditional flood irrigation',
      icon: Droplets,
    },
    {
      value: '70 / 30',
      label: 'Farmer Revenue Model',
      desc: 'Smallholder partners retain 70% of proceeds, ensuring dignified rural livelihoods',
      icon: HeartHandshake,
    },
    {
      value: '180 Ha',
      label: 'Living Lab Ground Truth',
      desc: 'Calibrated continuously at Adubiaro Farms in Osun State, Nigeria',
      icon: MapPin,
    },
    {
      value: '2026',
      label: '.ORG Impact Finalist',
      desc: 'Recognized globally in the Rising Star category for climate resilience & biodiversity',
      icon: Award,
    },
  ];

  const pillars = [
    {
      icon: Droplets,
      tag: 'CLOSED-LOOP AG',
      title: 'Soil-Free Hydroponic Systems',
      description:
        'By delivering vital nutrient solutions directly through oxygenated water rather than depleted topsoil, our systems cut water consumption by up to 90% while accelerating crop harvest cycles in arid and drought-prone regions.',
      highlights: ['Zero chemical pesticide runoff', 'Up to 3-5x higher yield per square meter', 'Solar-powered aeration & circulation'],
    },
    {
      icon: Layers,
      tag: 'PRECISION TELEMETRY',
      title: 'Commercial Field Intelligence',
      description:
        'We bridge the gap between speculative claims and institutional proof. Every stage—from seed germination to root-zone moisture, electrical conductivity, and final weighbridge off-take—is auditable and tamper-proof.',
      highlights: ['Calibrated on 180 hectares', 'Continuous IoT in-situ sensors', 'SHA-256 verifiable harvest passports'],
    },
    {
      icon: Users,
      tag: 'ECONOMIC JUSTICE',
      title: 'The 70/30 Farmer Empowerment Engine',
      description:
        'We don’t just deploy technology; we transform smallholder economics. Local growers manage decentralized hydroponic and precision clusters, retaining 70% of harvest revenues with direct guaranteed off-taker agreements.',
      highlights: ['Dignified youth & women employment', 'Guaranteed commercial off-take contracts', 'Elimination of exploitative middlemen'],
    },
    {
      icon: Leaf,
      tag: 'BIODIVERSITY',
      title: 'Land Restoration & Clean Ecology',
      description:
        'By lifting intensive food production into clean, vertical and soil-free modules, we alleviate deforestation pressure on native African biomes and allow depleted soils to naturally regenerate.',
      highlights: ['Protecting indigenous watersheds', 'Zero soil erosion or salt buildup', 'Organic-grade nutrient profiles'],
    },
  ];

  const sdgs = [
    {
      number: 'SDG 2',
      title: 'Zero Hunger',
      impact: 'Dramatically expanding local food supply in climate-stressed regions by delivering higher, season-independent vegetable and grain yields.',
      stat: '3.5x average yield multiplier',
    },
    {
      number: 'SDG 6',
      title: 'Clean Water & Sanitation',
      impact: 'Using up to 90% less water than conventional flood irrigation through closed-loop recirculation that recycles every unevaporated drop.',
      stat: '90% freshwater saved',
    },
    {
      number: 'SDG 8',
      title: 'Decent Work & Economic Growth',
      impact: 'Creating sustainable, high-income green agricultural jobs for rural African youth and women via our 70/30 cooperative partnership model.',
      stat: '70% retained farmer margin',
    },
    {
      number: 'SDG 12',
      title: 'Responsible Consumption & Production',
      impact: 'Zero pesticide runoff, minimal post-harvest transit losses via decentralized local clusters, and full circular nutrient management.',
      stat: '0% chemical runoff',
    },
    {
      number: 'SDG 13',
      title: 'Climate Action',
      impact: 'Building drought-proof, solar-powered agricultural infrastructure resilient to erratic rainfall, desertification, and heat spikes.',
      stat: '100% solar-compatible',
    },
    {
      number: 'SDG 15',
      title: 'Life on Land',
      impact: 'Restoring degraded soils and halting agricultural deforestation by moving yield-intensive farming into compact, soil-free spaces.',
      stat: 'Land footprint cut by 75%',
    },
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Foundation in Nigeria',
      description: 'Israel Smart founded Smartel to tackle recurring crop failures and climate vulnerability with decentralized, solar-powered hydroponic test rigs.',
    },
    {
      year: '2023',
      title: '70/30 Cooperative Model Launch',
      description: 'Introduced our pioneering revenue-sharing agreement, providing smallholder farmers with turnkey hardware, nutrients, and guaranteed off-take.',
    },
    {
      year: '2024',
      title: 'Adubiaro Living Lab Integration',
      description: 'Partnered with the 180-hectare commercial farm in Osun State to calibrate soil-free arrays alongside real open-field maize, cassava, and soya blocks.',
    },
    {
      year: '2025',
      title: 'Automated Ledger & IoT Telemetry',
      description: 'Deployed real-time root-zone sensor mesh and cryptographic batch passport verification for commercial agricultural lenders and food processors.',
    },
    {
      year: '2026',
      title: '.ORG Impact Awards Finalist',
      description: 'Honored globally in the Rising Star category for pioneering climate-resilient food security and biodiversity preservation across Africa.',
    },
  ];

  return (
    <div className="bg-[#F8FAF9] text-[#133229]">
      {/* Breadcrumb Bar */}
      <div className="bg-white/80 border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-500">
            <button
              onClick={onNavigateHome}
              className="hover:text-emerald-700 font-medium transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#133229] font-bold">About Us</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 font-mono text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Smartelco Agri-Tech • Living Lab Protocol</span>
          </div>
        </div>
      </div>

      {/* Hero Banner Section (Smartelco Style) */}
      <section className="pt-8 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#133229] text-white p-8 sm:p-14 lg:p-20 shadow-2xl shadow-emerald-950/20 border border-emerald-800/40">
            
            {/* Background Graphic Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/30 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-400/20 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>ABOUT SMARTEL AGRI-TECH & UPSCALE AGRO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
                Building climate-resilient food systems for a changing Africa.
              </h1>

              <p className="text-base sm:text-xl text-emerald-100/80 font-normal leading-relaxed">
                Founded in Nigeria by social innovator Israel Smart, we engineer sustainable soil-free hydroponic systems and tamper-evident production intelligence to conquer food scarcity, protect freshwater, and elevate smallholder livelihoods.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B1E19] font-bold text-sm rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-200"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenVerifier}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
                >
                  <span>Inspect Audit Proofs</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

            </div>

          </div>

          {/* Stats Bar (Smartelco Style Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-8 sm:-mt-12 relative z-20 px-4 sm:px-6">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-elevation p-6 bg-white rounded-3xl border border-slate-100/90 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#133229]">
                      {item.value}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#133229] mb-1">
                      {item.label}
                    </h3>
                    <p className="text-xs text-gray-500 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Strategic Pillars of Innovation */}
      <section className="py-20 lg:py-28 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>CORE SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#133229] tracking-tight">
              Four pillars powering our agricultural revolution.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We merge biological resilience with digital verification to create an unbreakable chain of food production and farmer dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="card-elevation p-8 sm:p-9 bg-white rounded-3xl border border-slate-200/80 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-gray-600">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#133229]">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-[#133229]">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Sustainable Development Goals Alignment */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>GLOBAL IMPACT COMMITMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#133229] tracking-tight">
              Aligned with the United Nations SDGs.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Every facility, sensor probe, and cooperative contract is engineered to drive concrete, quantifiable progress toward key sustainable development benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="card-elevation p-7 bg-[#F8FAF9] rounded-3xl border border-slate-200/70 hover:border-emerald-300 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-lg text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full font-mono">
                    {sdg.number}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {sdg.stat}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#133229]">
                  {sdg.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {sdg.impact}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Journey & Milestones */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#133229] tracking-tight">
              Milestones on our path to resilient agriculture.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From an initial garage prototype in Nigeria to a recognized living laboratory powering hundreds of hectares.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-200 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-emerald-600 group-hover:scale-125 transition-transform" />
                
                <div className="card-elevation p-6 sm:p-7 bg-[#F8FAF9] rounded-2xl border border-slate-200/70 max-w-3xl space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-bold text-[#133229]">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 lg:py-24 bg-[#133229] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>JOIN THE AGRICULTURAL REVOLUTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal max-w-2xl mx-auto tracking-tight">
            Ready to partner or deploy with Smartel Agri-Tech?
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/80 max-w-xl mx-auto leading-relaxed">
            Whether you are a commercial food off-taker, agricultural bank, or cooperative leader, let’s build verifiable, drought-resistant supply chains together.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B1E19] font-bold text-sm rounded-full shadow-lg shadow-emerald-500/25 transition-all"
            >
              Request Partnership Pilot
            </button>
            <button
              onClick={onNavigateHome}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full backdrop-blur-md border border-white/20 transition-all"
            >
              Back to Home Overview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
