import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// ============================================
// FAQ SECTION
// ============================================
const FAQSection: React.FC = () => {
  const { t } = useLanguage();

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray">{t.faq.subtitle}</p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-navy mb-2">
                {faq.question}
              </h3>
              <p className="text-gray">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
