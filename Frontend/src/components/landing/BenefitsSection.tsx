import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// ============================================
// BENEFITS SECTION
// ============================================
const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      id: 1,
      icon: '🚀',
      title: t.benefits?.benefit1Title || 'Flexible Scheduling',
      description: t.benefits?.benefit1Desc || 'Learn at your own pace with 24/7 access to expert tutors around the world.',
      color: 'bg-coral',
    },
    {
      id: 2,
      icon: '⚡',
      title: t.benefits?.benefit2Title || 'Certified Tutors',
      description: t.benefits?.benefit2Desc || 'Connect with verified, experienced tutors who are passionate about teaching.',
      color: 'bg-mint',
    },
    {
      id: 3,
      icon: '🎯',
      title: t.benefits?.benefit3Title || 'Personalized Learning',
      description: t.benefits?.benefit3Desc || 'Tailored lessons that adapt to your learning style and goals.',
      color: 'bg-butter',
    },
    {
      id: 4,
      icon: '💎',
      title: t.benefits?.benefit4Title || 'Affordable Pricing',
      description: t.benefits?.benefit4Desc || 'Quality education at competitive rates that fit your budget.',
      color: 'bg-sky',
    },
    {
      id: 5,
      icon: '🔒',
      title: t.benefits?.benefit5Title || 'Secure Platform',
      description: t.benefits?.benefit5Desc || 'Safe and secure environment for learning with built-in payment protection.',
      color: 'bg-sage',
    },
    {
      id: 6,
      icon: '🌟',
      title: t.benefits?.benefit6Title || 'Progress Tracking',
      description: t.benefits?.benefit6Desc || 'Monitor your improvement with detailed progress reports and feedback.',
      color: 'bg-coral',
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.benefits?.heading || 'Why Choose TopTalks'}
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.benefits?.subheading || 'Discover the benefits that make us the best choice for language learning'}
          </p>
        </div>

        {/* Benefits Grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-8 rounded-[1.5rem] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.color} rounded-[1.5rem] text-3xl mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
