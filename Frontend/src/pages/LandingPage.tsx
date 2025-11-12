import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/landing/Hero';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      {/* Future sections can be added here: About, Services, Benefits, Reviews, FAQ, Contact */}
    </div>
  );
};

export default LandingPage;
