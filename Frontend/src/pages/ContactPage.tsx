import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Contact from '../components/landing/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
