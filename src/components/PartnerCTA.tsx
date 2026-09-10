import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Send, Sparkles, Building2, Tractor, Landmark, GraduationCap, X } from 'lucide-react';

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
      <section id="cta" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Smartelco-styled Banner Container */}
          <div className="rounded-[32px] bg-[#133229] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl shadow-emerald-950/20 border border-emerald-800/60">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>EXPANDING PILOT FARMS & OFF-TAKER NETWORKS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  Building or operating an agricultural enterprise that needs verified certainty?
                </h2>

                <p className="text-base sm:text-lg text-emerald-100/80 font-normal leading-relaxed max-w-2xl">
                  We are actively onboarding commercial cropping operations across Nigeria who supply industrial millers, grain processors, and bank-financed schemes.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenModal}
                    id="btn-cta-partner"
                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B1E19] font-extrabold text-sm rounded-full shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center gap-2.5"
                  >
                    <span>Request Stack Deployment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleCopyEmail}
                    id="btn-copy-email"
                    className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-full border border-white/15 transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <Mail className="w-4 h-4 text-emerald-300" />
                    <span>{copied ? 'Copied: hello@upscaleagro.com' : 'hello@upscaleagro.com'}</span>
                  </button>
                </div>
              </div>

              {/* Quick deployment badges */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-6 sm:p-7 space-y-4">
                <div className="text-emerald-300 font-extrabold uppercase text-[11px] tracking-wider pb-3 border-b border-white/15">
                  SUITABLE PARTNER PROFILES
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                      <Tractor className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-bold text-sm">Commercial Producers</strong>
                      <span className="text-emerald-100/70 text-xs">20ha+ maize, cassava, soybeans seeking bankability</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-bold text-sm">Industrial Off-takers</strong>
                      <span className="text-emerald-100/70 text-xs">Grain millers & processors requiring proof of origin</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-bold text-sm">Agri-Credit Lenders</strong>
                      <span className="text-emerald-100/70 text-xs">Banks looking to eliminate ghost acreage in loan books</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Deployment Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-2xl p-6 sm:p-9 relative max-h-[92vh] overflow-y-auto shadow-2xl">
            
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-1">
                  DEPLOYMENT INQUIRY • STACK ACCESS
                </span>
                <h3 className="text-2xl font-extrabold text-[#133229]">
                  Connect with Upscale Agro
                </h3>
              </div>
              <button
                onClick={onCloseModal}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-700 border border-emerald-200/80 mx-auto flex items-center justify-center rounded-2xl">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-extrabold text-[#133229]">
                  Deployment Request Received
                </h4>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our agronomic engineering team will review your operation specifications for <strong>{formData.organization || 'your farm'}</strong> and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onCloseModal();
                    }}
                    className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="babatunde@farm.ng"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">Organization / Farm Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Adeleke Agri Ventures"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">Primary Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
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
                    <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">Farm Location / Region</label>
                    <input
                      type="text"
                      placeholder="e.g. Osun, Oyo, Ogun, Kwara"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">Cultivated Acreage</label>
                    <select
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
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
                  <label className="block text-gray-500 font-bold uppercase tracking-wider mb-1.5 text-[10.5px]">How can we help your operation?</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current production volume, certification requirements, or lender needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="px-5 py-2.5 rounded-full text-gray-600 hover:bg-slate-100 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-7 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
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
