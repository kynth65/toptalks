import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// ============================================
// HOW IT WORKS SECTION
// ============================================
const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      number: '01',
      title: t.howItWorks?.step1Title || 'Create Your Profile',
      description: t.howItWorks?.step1Desc || 'Sign up and tell us about your learning goals and preferences.',
      color: 'bg-coral',
    },
    {
      id: 2,
      number: '02',
      title: t.howItWorks?.step2Title || 'Find Your Tutor',
      description: t.howItWorks?.step2Desc || 'Browse certified tutors and choose the perfect match for your needs.',
      color: 'bg-mint',
    },
    {
      id: 3,
      number: '03',
      title: t.howItWorks?.step3Title || 'Start Learning',
      description: t.howItWorks?.step3Desc || 'Schedule your first lesson and begin your journey to fluency.',
      color: 'bg-butter',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.howItWorks?.heading || 'How It Works'}
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.howItWorks?.subheading || 'Get started in three simple steps'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray/20 -z-10" />
              )}

              <div className="text-center">
                {/* Step Number Circle */}
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${step.color} text-navy text-4xl font-bold mb-6 relative z-10 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                  {step.number}
                </div>

                {/* Step Content */}
                <h3 className="text-2xl font-semibold text-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
