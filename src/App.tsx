/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TelemetryTicker } from './components/TelemetryTicker';
import { Hero } from './components/Hero';
import { TrustGap } from './components/TrustGap';
import { TechStack } from './components/TechStack';
import { VerificationPipeline } from './components/VerificationPipeline';
import { FoundingFarm } from './components/FoundingFarm';
import { CertificateVerifier } from './components/CertificateVerifier';
import { ImpactCalculator } from './components/ImpactCalculator';
import { TrustPrinciples } from './components/TrustPrinciples';
import { PartnerCTA } from './components/PartnerCTA';
import { Footer } from './components/Footer';
import { FarmPlot } from './types';

export default function App() {
  const [verifierModalOpen, setVerifierModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [activeCertQuery, setActiveCertQuery] = useState<string>('AF-2026-MZ-098');

  const handleOpenVerifierWithPlot = (plot: FarmPlot) => {
    setActiveCertQuery(plot.id === 'plot-a1' ? 'AF-2026-MZ-098' : 'AF-2026-CS-041');
    setVerifierModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#1C1A15] selection:bg-[#3E4B22] selection:text-[#FAF8F4]">
      {/* Real-time Field Telemetry Stream */}
      <TelemetryTicker />

      {/* Main Navigation Header */}
      <Navbar
        onOpenVerifier={() => setVerifierModalOpen(true)}
        onOpenContact={() => setPartnerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero with Interactive Cadastral Radar */}
        <Hero
          onOpenVerifierWithPlot={handleOpenVerifierWithPlot}
          onOpenContact={() => setPartnerModalOpen(true)}
        />

        {/* 02. The Mission & Problem: The Trust Gap */}
        <TrustGap />

        {/* 03. The Integrated Stack: Kulima, Farms Portal, FarmTrace */}
        <TechStack />

        {/* 04. How It Fits Together: 5-Step Process Pipeline */}
        <VerificationPipeline />

        {/* 05. Founding Farm: Adubiaro Farms in Osun State */}
        <FoundingFarm />

        {/* 06. Public Evidence Engine: Live Audit Certificate Inspection */}
        <CertificateVerifier />

        {/* 07. Economic Model & Risk Assessment Calculator */}
        <ImpactCalculator onOpenContact={() => setPartnerModalOpen(true)} />

        {/* 08. How We Think About Trust: Core Engineering Principles */}
        <TrustPrinciples />

        {/* 09. Deployment Inquiry & Partnership Call to Action */}
        <PartnerCTA
          isModalOpen={partnerModalOpen}
          onOpenModal={() => setPartnerModalOpen(true)}
          onCloseModal={() => setPartnerModalOpen(false)}
        />
      </main>

      {/* Footer with Site Directory and Metadata */}
      <Footer
        onOpenVerifier={() => setVerifierModalOpen(true)}
        onOpenContact={() => setPartnerModalOpen(true)}
      />

      {/* Modal Inspector for Batch Audit Proofs */}
      {verifierModalOpen && (
        <CertificateVerifier
          initialCertId={activeCertQuery}
          isModal={true}
          onClose={() => setVerifierModalOpen(false)}
        />
      )}
    </div>
  );
}
