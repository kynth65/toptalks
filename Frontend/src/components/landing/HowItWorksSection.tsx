import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import howItWorks1 from '../../assets/images/how-it-works.jpg';
import howItWorks2 from '../../assets/images/how-it-works-2.jpg';
import howItWorks3 from '../../assets/images/how-it-works-3.jpg';

// ============================================
// HOW IT WORKS SECTION
// ============================================
const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      image: howItWorks1,
      title: t.howItWorks?.step1Title || 'Create Your Profile',
      description: t.howItWorks?.step1Desc || 'Sign up and tell us about your learning goals and preferences.',
      bgColor: 'bg-coral/20',
      textColor: 'text-navy',
    },
    {
      id: 2,
      image: howItWorks2,
      title: t.howItWorks?.step2Title || 'Find Your Tutor',
      description: t.howItWorks?.step2Desc || 'Browse certified tutors and choose the perfect match for your needs.',
      bgColor: 'bg-mint/30',
      textColor: 'text-navy',
    },
    {
      id: 3,
      image: howItWorks3,
      title: t.howItWorks?.step3Title || 'Start Learning',
      description: t.howItWorks?.step3Desc || 'Schedule your first lesson and begin your journey to fluency.',
      bgColor: 'bg-sky/30',
      textColor: 'text-navy',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} p-6 rounded-[1.5rem] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              {/* Image */}
              <div className="mb-6 overflow-hidden rounded-[1.5rem]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-left">
                <h3 className={`text-2xl font-bold ${step.textColor} mb-4`}>
                  {step.title}
                </h3>
                <p className={`${step.textColor} leading-relaxed opacity-80`}>
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
