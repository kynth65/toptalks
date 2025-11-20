import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

// ============================================
// FINAL CTA SECTION
// ============================================
const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 lg:py-48 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
          Join the TopTalks Community Today
        </h2>
        <p className="text-lg md:text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you're looking to learn English or share your expertise as a tutor, TopTalks is your platform for meaningful connections and real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/find-tutors">
            <Button size="lg">Find Your Tutor</Button>
          </Link>
          <Link to="/start-teaching">
            <Button size="lg" variant="outline">Become a Tutor</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
