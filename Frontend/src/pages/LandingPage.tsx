import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import BenefitsSection from "../components/landing/BenefitsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FAQSection from "../components/landing/FAQSection";
import Contact from "../components/landing/Contact";
import FinalCTASection from "../components/landing/FinalCTASection";
import Footer from "../components/common/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* ============================================ */}
      {/* STICKY NAVBAR */}
      {/* ============================================ */}
      <Navbar />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <Hero />

      {/* ============================================ */}
      {/* PARTNERS SECTION */}
      {/* ============================================ */}
      {/* <PartnersSection /> */}

      {/* ============================================ */}
      {/* BENEFITS SECTION */}
      {/* ============================================ */}
      <BenefitsSection />

      {/* ============================================ */}
      {/* HOW IT WORKS SECTION */}
      {/* ============================================ */}
      <HowItWorksSection />

      {/* ============================================ */}
      {/* PRICING SECTION */}
      {/* ============================================ */}
      <PricingSection />

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <TestimonialsSection />

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <FAQSection />

      {/* ============================================ */}
      {/* CONTACT SECTION */}
      {/* ============================================ */}
      <Contact />

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <FinalCTASection />

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Footer />
    </div>
  );
};

export default LandingPage;
