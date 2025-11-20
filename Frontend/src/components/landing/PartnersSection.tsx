import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// ============================================
// PARTNERS / TRUSTED BY SECTION
// ============================================
const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray uppercase tracking-wide">
            {t.partners?.heading || 'Trusted by Leading Companies'}
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {/* Placeholder Logos */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="w-32 h-16 bg-white/50 rounded-[1.5rem] flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span className="text-gray/50 text-xs font-medium">Logo {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
