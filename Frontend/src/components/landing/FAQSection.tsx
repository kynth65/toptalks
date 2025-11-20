import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Helper to convert object into array for mapping
  const faqList = Object.values(t.faq.questions);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cream relative">
      {/* Background Blob */}
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-gray">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-6">
          {faqList.map((faq: any, index: number) => (
            <div
              key={index}
              className={`bg-white rounded-[2rem] transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "shadow-xl scale-[1.01]"
                  : "shadow-sm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-navy" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-navy text-white rotate-180"
                      : "bg-cream text-navy"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 pb-8 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
