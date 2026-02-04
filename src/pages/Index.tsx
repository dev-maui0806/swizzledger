import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LedgerInfoSection from "@/components/LedgerInfoSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import YachtSection from "@/components/YachtSection";

import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingTicketButton from "@/components/FloatingTicketButton";
import LeadFormModal from "@/components/LeadFormModal";
import NewsletterModal from "@/components/NewsletterModal";

const Index = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);

  useEffect(() => {
    // Show lead form after a short delay when user enters the site
    const timer = setTimeout(() => {
      const hasSeenForm = sessionStorage.getItem('hasSeenLeadForm');
      if (!hasSeenForm) {
        setShowLeadForm(true);
        sessionStorage.setItem('hasSeenLeadForm', 'true');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openLeadForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowLeadForm(true);
  };

  const handleLeadFormComplete = () => {
    // Show newsletter form after lead form is completed
    setTimeout(() => {
      setShowNewsletterForm(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onTicketClick={openLeadForm} />
      <main>
        <HeroSection onTicketClick={openLeadForm} />
        <LedgerInfoSection />
        <AboutSection onTicketClick={openLeadForm} />
        <SpeakersSection onTicketClick={openLeadForm} />
        <YachtSection onTicketClick={openLeadForm} />
        
        <PartnersSection onTicketClick={openLeadForm} />
        <CtaSection onTicketClick={openLeadForm} />
      </main>
      <Footer onSubscribeClick={openLeadForm} />
      <FloatingTicketButton onTicketClick={openLeadForm} />
      <LeadFormModal 
        isOpen={showLeadForm} 
        onClose={() => setShowLeadForm(false)} 
        onComplete={handleLeadFormComplete}
      />
      <NewsletterModal 
        isOpen={showNewsletterForm} 
        onClose={() => setShowNewsletterForm(false)} 
      />
    </div>
  );
};

export default Index;
