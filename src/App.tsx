import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhySixAbs } from './components/WhySixAbs';
import { MembershipPlans } from './components/MembershipPlans';
import { Supplements } from './components/Supplements';
import { TransformationSection } from './components/TransformationSection';
import { InclusiveSection } from './components/InclusiveSection';
import { OpeningHours } from './components/OpeningHours';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { FloatingContacts } from './components/FloatingContacts';
import { JoinModal } from './components/JoinModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('Transform');

  const handleOpenJoinModal = (planName?: string) => {
    if (planName) {
      setSelectedPlanForModal(planName);
    }
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col selection:bg-[#A80710] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal('Transform')} />

        {/* 2. Why SIX ABS? */}
        <WhySixAbs />

        {/* 3. Membership Plans */}
        <MembershipPlans onSelectPlan={(plan) => handleOpenJoinModal(plan)} />

        {/* 4. Supplements */}
        <Supplements onEnquireProduct={() => handleOpenJoinModal('Supplements')} />

        {/* 5. Transformation Section */}
        <TransformationSection />

        {/* 6. Gym For Men & Women */}
        <InclusiveSection />

        {/* 7. Opening Hours */}
        <OpeningHours />

        {/* 8. Location & Map */}
        <LocationSection />

        {/* 9. FAQ Accordion */}
        <FaqSection />

        {/* 10. Final CTA */}
        <FinalCta onOpenJoinModal={() => handleOpenJoinModal('Transform')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 12. Floating Quick Contact Buttons */}
      <FloatingContacts />

      {/* Interactive Join / Trial Booking Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        initialPlan={selectedPlanForModal}
      />
    </div>
  );
}
