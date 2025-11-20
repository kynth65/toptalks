import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// ============================================
// FAQ SECTION
// ============================================
const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: t.faq.questions.whatIsPlatform.question,
      answer: t.faq.questions.whatIsPlatform.answer,
    },
    {
      id: 2,
      question: t.faq.questions.howMuchCost.question,
      answer: t.faq.questions.howMuchCost.answer,
    },
    {
      id: 3,
      question: t.faq.questions.becomeTeacher.question,
      answer: t.faq.questions.becomeTeacher.answer,
    },
    {
      id: 4,
      question: t.faq.questions.safetyQuality.question,
      answer: t.faq.questions.safetyQuality.answer,
    },
    {
      id: 5,
      question: t.faq.questions.cancelReschedule.question,
      answer: t.faq.questions.cancelReschedule.answer,
    },
    {
      id: 6,
      question: t.faq.questions.freeTrialDemo.question,
      answer: t.faq.questions.freeTrialDemo.answer,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray">{t.faq.subtitle}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-[1.5rem] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 rounded-[1.5rem]"
              >
                <h3 className="text-lg font-semibold text-navy pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-coral flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  className="px-6 pb-6 text-gray leading-relaxed animate-fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
