/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { FarmPlot } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [verifierModalOpen, setVerifierModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [activeCertQuery, setActiveCertQuery] = useState<string>('AF-2026-MZ-098');

  // Check URL hash or path on mount
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || window.location.pathname.endsWith('/about')) {
        setCurrentView('about');
      } else if (hash === '#home' || hash === '') {
        // stay or switch to home if explicitly requested
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleNavigateAbout = () => {
    setCurrentView('about');
    window.location.hash = 'about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#about') {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVerifierWithPlot = (plot: FarmPlot) => {
    setActiveCertQuery(plot.id === 'plot-a1' ? 'AF-2026-MZ-098' : 'AF-2026-CS-041');
    setVerifierModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#133229] selection:bg-emerald-600 selection:text-white font-sans">
      {/* Main Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateAbout={handleNavigateAbout}
        onOpenVerifier={() => setVerifierModalOpen(true)}
        onOpenContact={() => setPartnerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {currentView === 'about' ? (
          <AboutPage
            onOpenContact={() => setPartnerModalOpen(true)}
            onOpenVerifier={() => setVerifierModalOpen(true)}
            onNavigateHome={handleNavigateHome}
          />
        ) : (
          <>
            {/* 01. Hero Section */}
            <Hero
              onOpenVerifierWithPlot={handleOpenVerifierWithPlot}
              onOpenContact={() => setPartnerModalOpen(true)}
            />

            {/* Real-time Field Telemetry Stream */}
            <TelemetryTicker />

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
          </>
        )}
      </main>

      {/* Footer with Site Directory and Metadata */}
      <Footer
        onOpenVerifier={() => setVerifierModalOpen(true)}
        onOpenContact={() => setPartnerModalOpen(true)}
        onNavigateAbout={handleNavigateAbout}
        onNavigateHome={handleNavigateHome}
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
