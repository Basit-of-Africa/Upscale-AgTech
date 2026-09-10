import React, { useState } from 'react';
import { AUDIT_CERTIFICATES } from '../data/mockData';
import { AuditCertificate } from '../types';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  FileText, 
  QrCode, 
  Download, 
  Share2, 
  ExternalLink,
  Calendar,
  Layers,
  Scale,
  X
} from 'lucide-react';

interface CertificateVerifierProps {
  initialCertId?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const CertificateVerifier: React.FC<CertificateVerifierProps> = ({
  initialCertId,
  isModal = false,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialCertId || AUDIT_CERTIFICATES[0].batchCode);
  const [selectedCert, setSelectedCert] = useState<AuditCertificate>(
    AUDIT_CERTIFICATES.find((c) => c.batchCode === searchQuery) || AUDIT_CERTIFICATES[0]
  );
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = AUDIT_CERTIFICATES.find(
      (c) => c.batchCode.toLowerCase() === searchQuery.trim().toLowerCase()
    );
    if (found) {
      setSelectedCert(found);
    } else {
      alert(`Certificate with batch code "${searchQuery}" not found in index. Try "AF-2026-MZ-098" or "AF-2026-CS-041".`);
    }
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const content = (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="card-elevation p-6 sm:p-7 bg-white">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
          IMMUTABLE HARVEST PASSPORT LEDGER • VERIFICATION ENGINE
        </div>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Batch Code (e.g., AF-2026-MZ-098)"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase rounded-full shadow-sm transition-all"
          >
            Query Ledger
          </button>
        </form>
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-gray-500">
          <span>Sample batch passports:</span>
          {AUDIT_CERTIFICATES.map((c) => (
            <button
              key={c.batchCode}
              type="button"
              onClick={() => {
                setSearchQuery(c.batchCode);
                setSelectedCert(c);
              }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-emerald-800 font-mono text-[11px] font-semibold transition-colors"
            >
              {c.batchCode}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Sheet (Elevated Card Style) */}
      <div className="card-elevation p-6 sm:p-9 bg-white border border-slate-200/80 relative">
        
        {/* Verification Watermark */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 uppercase tracking-wider mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>OFFICIAL AUDIT PASSPORT • PROVENANCE VERIFIED</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#133229]">
                {selectedCert.batchCode}
              </h3>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full font-bold text-xs">
              Status: Bank & Off-taker Cleared
            </span>
            <div className="text-xs text-gray-400 mt-1 font-mono">
              Verified: {selectedCert.verificationDate}
            </div>
          </div>
        </div>

        {/* Certificate Body Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-100 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-gray-400 font-bold uppercase block text-[10px] tracking-wider mb-1">FARM & PRODUCER</span>
            <strong className="text-[#133229] text-sm block font-bold">{selectedCert.farmName}</strong>
            <span className="block text-gray-500 mt-0.5">{selectedCert.location}</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-gray-400 font-bold uppercase block text-[10px] tracking-wider mb-1">CROP & VARIETY</span>
            <strong className="text-[#133229] text-sm block font-bold">{selectedCert.crop}</strong>
            <span className="block text-gray-500 mt-0.5">{selectedCert.variety}</span>
          </div>
          <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-100">
            <span className="text-emerald-700 font-bold uppercase block text-[10px] tracking-wider mb-1">VERIFIED YIELD</span>
            <strong className="text-emerald-900 text-sm block font-bold">{selectedCert.totalYieldMT} Metric Tonnes</strong>
            <span className="block text-emerald-700/80 mt-0.5">{selectedCert.hectares} Hectares</span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-gray-400 font-bold uppercase block text-[10px] tracking-wider mb-1">PRIMARY OFF-TAKER</span>
            <strong className="text-[#133229] text-sm block font-bold">{selectedCert.offTaker}</strong>
            <span className="block text-gray-500 mt-0.5">Commercial Delivery Contract</span>
          </div>
        </div>

        {/* Compliance Checks Matrix */}
        <div className="py-6 border-b border-slate-100">
          <h4 className="text-xs uppercase font-extrabold text-[#133229] mb-3 tracking-wider">
            AUTOMATED UNDERWRITING COMPLIANCE VERIFICATIONS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedCert.complianceChecks.map((chk, i) => (
              <div key={i} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#133229]">{chk.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{chk.evidence}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Logbook Records */}
        <div className="py-6 border-b border-slate-100">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="uppercase font-extrabold text-[#133229] tracking-wider">
              INPUT APPLICATION AUDIT TRAIL (FARMTRACE NODE)
            </span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 text-[11px]">
              All 4 Stages Attested
            </span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-gray-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 font-semibold">Date</th>
                  <th className="p-3 font-semibold">Material / Intervention</th>
                  <th className="p-3 font-semibold">Quantity</th>
                  <th className="p-3 font-semibold">Audited By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {selectedCert.inputsRecorded.map((inp, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3 text-gray-500 font-mono text-[11px]">{inp.date}</td>
                    <td className="p-3 font-bold text-[#133229]">{inp.type}</td>
                    <td className="p-3 text-gray-600">{inp.quantity}</td>
                    <td className="p-3 text-emerald-700 font-medium">{inp.verifiedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cryptographic Hash & Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="max-w-md">
            <span className="text-gray-400 font-bold text-[10px] block uppercase tracking-wider">CRYPTOGRAPHIC EVIDENCE PROOF HASH</span>
            <div className="text-[11px] text-[#133229] font-mono break-all bg-slate-50 p-2.5 rounded-xl border border-slate-200 mt-1">
              {selectedCert.hash}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#133229] text-white text-xs font-bold rounded-full hover:bg-emerald-900 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Export Bank PDF'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
        <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-4xl p-6 sm:p-9 max-h-[90vh] overflow-y-auto relative shadow-2xl">
          <div className="flex justify-between items-center pb-4 mb-5 border-b border-slate-100">
            <h3 className="text-2xl font-extrabold text-[#133229]">
              Upscale Agro — Production Evidence Inspector
            </h3>
            {onClose && (
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="proof" className="py-20 lg:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>PUBLIC EVIDENCE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133229] tracking-tight leading-tight">
            Verify an actual harvest record.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            See what commercial lenders and grain off-takers see. Every batch produced with the Upscale Agro stack carries an open, tamper-evident audit trail from foundation seed to weighbridge.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};
