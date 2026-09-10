import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Send, Sparkles, Building2, Tractor, Landmark, GraduationCap } from 'lucide-react';

interface PartnerCTAProps {
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const PartnerCTA: React.FC<PartnerCTAProps> = ({ isModalOpen, onOpenModal, onCloseModal }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Farm Operator',
    organization: '',
    location: 'Osun / Oyo / Ogun',
    acreage: '50 - 200 ha',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@upscaleagro.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section id="cta" className="py-20 lg:py-28 bg-[#1C1A15] text-[#FAF8F4] relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF8F4_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#BF7E27] tracking-wider uppercase">
                <span className="w-2 h-0.5 bg-[#BF7E27]" />
                <span>EXPANDING PILOT FARMS & OFF-TAKER NETWORKS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-[#FAF8F4]">
                Building or operating a farm that needs to prove its work?
              </h2>

              <p className="text-base sm:text-lg text-[#C4BEAD] font-normal leading-relaxed max-w-2xl">
                We are actively deploying the Upscale Agro stack to selected commercial cropping operations across Nigeria who produce for demanding industrial off-takers and institutional agrifinance facilities.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenModal}
                  id="btn-cta-partner"
                  className="px-6 py-3.5 bg-[#BF7E27] hover:bg-[#D9953B] text-[#1C1A15] font-semibold text-sm tracking-wide transition-colors flex items-center gap-2"
                >
                  <span>Request Stack Deployment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyEmail}
                  id="btn-copy-email"
                  className="px-5 py-3.5 bg-transparent hover:bg-[#FAF8F4]/10 text-[#FAF8F4] font-mono text-xs border border-[#FAF8F4]/30 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#BF7E27]" />
                  <span>{copied ? 'Copied: hello@upscaleagro.com' : 'hello@upscaleagro.com'}</span>
                </button>
              </div>
            </div>

            {/* Quick deployment badges */}
            <div className="lg:col-span-4 bg-[#26231C] border border-[#3E392E] p-6 space-y-4 font-mono text-xs">
              <div className="text-[#BF7E27] font-semibold uppercase text-[11px] pb-2 border-b border-[#3E392E]">
                SUITABLE PARTNER PROFILES
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Tractor className="w-4 h-4 text-[#BF7E27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF8F4] block font-sans">Commercial Producers</strong>
                    <span className="text-[#A69F8B] text-[11px]">20ha+ maize, cassava, soybeans seeking bankability</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#BF7E27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF8F4] block font-sans">Industrial Off-takers</strong>
                    <span className="text-[#A69F8B] text-[11px]">Grain millers & starch processors wanting proof of origin</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 text-[#BF7E27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FAF8F4] block font-sans">Agri-Credit Lenders</strong>
                    <span className="text-[#A69F8B] text-[11px]">Banks looking to eliminate ghost acreage in loan books</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Deployment Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1A15]/75 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#FAF8F4] border-2 border-[#1C1A15] w-full max-w-2xl p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto shadow-2xl">
            
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-[#D6D0BE]">
              <div>
                <span className="font-mono text-[10px] text-[#3E4B22] font-semibold uppercase block">
                  DEPLOYMENT INQUIRY • STACK ACCESS
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1A15]">
                  Connect with Upscale Agro
                </h3>
              </div>
              <button
                onClick={onCloseModal}
                className="px-3 py-1 font-mono text-xs bg-[#ECE7DA] border border-[#D6D0BE] hover:bg-[#1C1A15] hover:text-[#FAF8F4]"
              >
                ✕ Close
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4 font-mono text-sm">
                <div className="w-12 h-12 bg-[#E3E7D3] text-[#3E4B22] mx-auto flex items-center justify-center rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#1C1A15]">
                  Deployment Request Received
                </h4>
                <p className="text-[#5C5748] max-w-md mx-auto text-xs sm:text-sm">
                  Thank you, <strong>{formData.name}</strong>. Our agronomy and technology team will review your operation specifications for <strong>{formData.organization || 'your farm'}</strong> and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onCloseModal();
                    }}
                    className="px-6 py-2.5 bg-[#3E4B22] text-[#FAF8F4] font-semibold text-xs uppercase"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#7A7463] uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A7463] uppercase mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="babatunde@farm.ng"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#7A7463] uppercase mb-1">Organization / Farm Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Adeleke Agri Ventures"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A7463] uppercase mb-1">Primary Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                    >
                      <option>Commercial Farm Operator</option>
                      <option>Industrial Grain Off-taker</option>
                      <option>Commercial Bank / Credit Desk</option>
                      <option>Agronomist / Field Scout</option>
                      <option>Development / Research Partner</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#7A7463] uppercase mb-1">Farm Location / Region</label>
                    <input
                      type="text"
                      placeholder="e.g. Osun, Oyo, Ogun, Kwara"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A7463] uppercase mb-1">Cultivated Acreage</label>
                    <select
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                    >
                      <option>Under 20 Hectares</option>
                      <option>20 - 50 Hectares</option>
                      <option>50 - 200 Hectares</option>
                      <option>200 - 1,000 Hectares</option>
                      <option>1,000+ Hectares</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#7A7463] uppercase mb-1">How can we help your operation?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current record-keeping, off-taker requirements, or climate risks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-[#1C1A15] font-sans focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="px-4 py-2 text-[#5C5748] hover:text-[#1C1A15]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#3E4B22] text-[#FAF8F4] font-semibold tracking-wide hover:bg-[#2F3918] transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
