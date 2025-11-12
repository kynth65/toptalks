import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// ============================================
// PARTNERS / TRUSTED BY SECTION
// ============================================
const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
