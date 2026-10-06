import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AiVideoSection } from './components/AiVideoSection';
import { MetaAdsSection } from './components/MetaAdsSection';
import { WebsiteSection } from './components/WebsiteSection';
import { ComputerServiceSection } from './components/ComputerServiceSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string>('AI Video with Model (₹1,700)');

  const handleOpenBookingModal = (serviceName?: string) => {
    if (serviceName) {
      setModalService(serviceName);
    }
    setBookingModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBookingModal={handleOpenBookingModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. AI Video Production Section */}
        <AiVideoSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 3. Website Creation Section */}
        <WebsiteSection />

        {/* 4. Meta Ads & Social Media Assistance Section */}
        <MetaAdsSection />

        {/* 5. Computer Sales & Repair Section */}
        <ComputerServiceSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 6. Why Choose Divine Animation? */}
        <WhyChooseUs />

        {/* 7. Visually Attractive Pricing Section */}
        <PricingSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 8. Interactive Cost Estimator & Quote Calculator */}
        <QuoteCalculator />

        {/* 9. Final CTA Section */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bar (capped <= 15% height, mobile only) */}
      <StickyMobileBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Booking & Quote Request Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={modalService}
      />
    </div>
  );
}
