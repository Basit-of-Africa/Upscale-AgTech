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
  Scale
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
      alert(`Certificate with batch code "${searchQuery}" not found in test index. Try "AF-2026-MZ-098" or "AF-2026-CS-041".`);
    }
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const content = (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="bg-[#FAF8F4] border border-[#D6D0BE] p-4 sm:p-6">
        <div className="text-xs font-mono text-[#7A7463] uppercase mb-2">
          IMMUTABLE PRODUCTION LEDGER • PUBLIC QUERY
        </div>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#7A7463] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Batch Code (e.g., AF-2026-MZ-098)"
              className="w-full pl-9 pr-4 py-2.5 bg-[#F4F1EA] border border-[#D6D0BE] text-sm font-mono focus:outline-none focus:ring-1 focus:ring-[#3E4B22]"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#3E4B22] text-[#FAF8F4] text-xs font-mono font-semibold uppercase hover:bg-[#2F3918] transition-colors"
          >
            Query Ledger
          </button>
        </form>
        <div className="flex items-center gap-2 mt-2 font-mono text-[11px] text-[#7A7463]">
          <span>Sample batches:</span>
          {AUDIT_CERTIFICATES.map((c) => (
            <button
              key={c.batchCode}
              type="button"
              onClick={() => {
                setSearchQuery(c.batchCode);
                setSelectedCert(c);
              }}
              className="underline hover:text-[#1C1A15] text-[#3E4B22]"
            >
              {c.batchCode}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Sheet (Editorial Style) */}
      <div className="bg-[#FAF8F4] border-2 border-[#1C1A15] p-6 sm:p-8 relative">
        
        {/* Verification Watermark */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D6D0BE] flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3E4B22] text-[#FAF8F4] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#3E4B22] font-semibold tracking-wider uppercase block">
                OFFICIAL AUDIT PASSPORT • PROVENANCE VERIFIED
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C1A15]">
                {selectedCert.batchCode}
              </h3>
            </div>
          </div>

          <div className="text-right font-mono text-xs">
            <span className="inline-block px-2.5 py-1 bg-[#E3E7D3] text-[#3E4B22] border border-[#CAD0BA] font-semibold">
              Status: Bank & Off-taker Cleared
            </span>
            <div className="text-[11px] text-[#7A7463] mt-1">
              Verified: {selectedCert.verificationDate}
            </div>
          </div>
        </div>

        {/* Certificate Body Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-[#D6D0BE] font-mono text-xs">
          <div>
            <span className="text-[#7A7463] block text-[10px]">FARM & PRODUCER</span>
            <strong className="text-[#1C1A15] text-sm">{selectedCert.farmName}</strong>
            <span className="block text-[11px] text-[#5C5748]">{selectedCert.location}</span>
          </div>
          <div>
            <span className="text-[#7A7463] block text-[10px]">CROP & VARIETY</span>
            <strong className="text-[#1C1A15] text-sm">{selectedCert.crop}</strong>
            <span className="block text-[11px] text-[#5C5748]">{selectedCert.variety}</span>
          </div>
          <div>
            <span className="text-[#7A7463] block text-[10px]">TOTAL YIELD VERIFIED</span>
            <strong className="text-[#3E4B22] text-sm">{selectedCert.totalYieldMT} Metric Tonnes</strong>
            <span className="block text-[11px] text-[#5C5748]">{selectedCert.hectares} Hectares</span>
          </div>
          <div>
            <span className="text-[#7A7463] block text-[10px]">PRIMARY OFF-TAKER</span>
            <strong className="text-[#1C1A15] text-sm">{selectedCert.offTaker}</strong>
            <span className="block text-[11px] text-[#5C5748]">Direct Commercial Contract</span>
          </div>
        </div>

        {/* Compliance Checks Matrix */}
        <div className="py-6 border-b border-[#D6D0BE]">
          <h4 className="font-mono text-xs uppercase font-semibold text-[#1C1A15] mb-3">
            AUTOMATED UNDERWRITING COMPLIANCE VERIFICATIONS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedCert.complianceChecks.map((chk, i) => (
              <div key={i} className="p-3 bg-[#F4F1EA] border border-[#D6D0BE] text-xs font-mono flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3E4B22] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1C1A15]">{chk.name}</div>
                  <div className="text-[11px] text-[#7A7463] mt-0.5">{chk.evidence}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Logbook Records */}
        <div className="py-6 border-b border-[#D6D0BE]">
          <div className="flex items-center justify-between mb-3 font-mono text-xs">
            <span className="uppercase font-semibold text-[#1C1A15]">
              INPUT APPLICATION AUDIT TRAIL (FARMTRACE NODE)
            </span>
            <span className="text-[#7A7463]">All 4 Stages Verified</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border border-[#D6D0BE]">
              <thead className="bg-[#ECE7DA] text-[#5C5748]">
                <tr>
                  <th className="p-2 border-b border-r border-[#D6D0BE]">Date</th>
                  <th className="p-2 border-b border-r border-[#D6D0BE]">Material / Intervention</th>
                  <th className="p-2 border-b border-r border-[#D6D0BE]">Quantity</th>
                  <th className="p-2 border-b border-[#D6D0BE]">Audited By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D6D0BE] bg-[#FAF8F4]">
                {selectedCert.inputsRecorded.map((inp, idx) => (
                  <tr key={idx} className="hover:bg-[#F4F1EA]">
                    <td className="p-2 border-r border-[#D6D0BE]">{inp.date}</td>
                    <td className="p-2 border-r border-[#D6D0BE] font-semibold text-[#1C1A15]">{inp.type}</td>
                    <td className="p-2 border-r border-[#D6D0BE]">{inp.quantity}</td>
                    <td className="p-2 text-[#3E4B22]">{inp.verifiedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cryptographic Hash & Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="max-w-md">
            <span className="text-[#7A7463] text-[10px] block uppercase">CRYPTOGRAPHIC EVIDENCE PROOF HASH</span>
            <div className="text-[11px] text-[#1C1A15] font-semibold break-all bg-[#ECE7DA] p-2 border border-[#D6D0BE] mt-1">
              {selectedCert.hash}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1C1A15] text-[#FAF8F4] text-xs font-semibold hover:bg-[#3E4B22] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Export Bank PDF'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1A15]/60 backdrop-blur-xs p-4 overflow-y-auto">
        <div className="bg-[#FAF8F4] border-2 border-[#1C1A15] w-full max-w-4xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#D6D0BE]">
            <h3 className="font-serif text-xl font-bold text-[#1C1A15]">
              Upscale Agro — Production Evidence Inspector
            </h3>
            {onClose && (
              <button
                onClick={onClose}
                className="px-3 py-1 font-mono text-xs bg-[#ECE7DA] border border-[#D6D0BE] hover:bg-[#1C1A15] hover:text-[#FAF8F4]"
              >
                ✕ Close
              </button>
            )}
          </div>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="proof" className="py-20 lg:py-28 border-b border-[#D6D0BE] bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#3E4B22] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#3E4B22]" />
            <span>PUBLIC EVIDENCE ENGINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium text-[#1C1A15] tracking-tight">
            Verify an actual harvest record.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C5748] leading-relaxed">
            See what commercial lenders and grain off-takers see. Every batch produced with the Upscale Agro stack carries an open, tamper-evident audit trail from foundation seed to weighbridge.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};
