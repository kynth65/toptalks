import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';

const PricingPage: React.FC = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t.pricingPage.plans.starter.name,
      price: t.pricingPage.plans.starter.price,
      period: t.pricingPage.plans.starter.period,
      description: t.pricingPage.plans.starter.description,
      features: [
        t.pricingPage.plans.starter.feature1,
        t.pricingPage.plans.starter.feature2,
        t.pricingPage.plans.starter.feature3,
        t.pricingPage.plans.starter.feature4,
        t.pricingPage.plans.starter.feature5
      ],
      buttonText: t.pricingPage.plans.starter.button,
      variant: 'outline' as const,
      popular: false
    },
    {
      name: t.pricingPage.plans.professional.name,
      price: t.pricingPage.plans.professional.price,
      period: t.pricingPage.plans.professional.period,
      description: t.pricingPage.plans.professional.description,
      features: [
        t.pricingPage.plans.professional.feature1,
        t.pricingPage.plans.professional.feature2,
        t.pricingPage.plans.professional.feature3,
        t.pricingPage.plans.professional.feature4,
        t.pricingPage.plans.professional.feature5,
        t.pricingPage.plans.professional.feature6,
        t.pricingPage.plans.professional.feature7
      ],
      buttonText: t.pricingPage.plans.professional.button,
      variant: 'primary' as const,
      popular: true
    },
    {
      name: t.pricingPage.plans.enterprise.name,
      price: t.pricingPage.plans.enterprise.price,
      period: t.pricingPage.plans.enterprise.period,
      description: t.pricingPage.plans.enterprise.description,
      features: [
        t.pricingPage.plans.enterprise.feature1,
        t.pricingPage.plans.enterprise.feature2,
        t.pricingPage.plans.enterprise.feature3,
        t.pricingPage.plans.enterprise.feature4,
        t.pricingPage.plans.enterprise.feature5,
        t.pricingPage.plans.enterprise.feature6,
        t.pricingPage.plans.enterprise.feature7,
        t.pricingPage.plans.enterprise.feature8
      ],
      buttonText: t.pricingPage.plans.enterprise.button,
      variant: 'outline' as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            {t.pricingPage.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray max-w-3xl mx-auto mb-8">
            {t.pricingPage.hero.subtitle}
          </p>
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-sm text-gray">{t.pricingPage.hero.monthly}</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-mint transition-colors">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
            </button>
            <span className="text-sm text-gray">
              {t.pricingPage.hero.yearly}
              <span className="ml-2 inline-block px-2 py-1 bg-coral text-white text-xs rounded-full">{t.pricingPage.hero.saveLabel}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 ${
                  plan.popular ? 'border-2 border-coral' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-coral text-white px-4 py-1 rounded-full text-sm font-medium">
                      {t.pricingPage.plans.professional.popular}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">{plan.name}</h3>
                  <p className="text-gray text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-navy">{plan.price}</span>
                    <span className="text-gray ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-mint mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} className="w-full">
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            {t.pricingPage.faq.title}
          </h2>
          <div className="space-y-6">
            {[
              {
                question: t.pricingPage.faq.question1,
                answer: t.pricingPage.faq.answer1
              },
              {
                question: t.pricingPage.faq.question2,
                answer: t.pricingPage.faq.answer2
              },
              {
                question: t.pricingPage.faq.question3,
                answer: t.pricingPage.faq.answer3
              },
              {
                question: t.pricingPage.faq.question4,
                answer: t.pricingPage.faq.answer4
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-navy mb-2">{faq.question}</h3>
                <p className="text-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-navy rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.pricingPage.cta.title}
          </h2>
          <p className="text-cream text-lg mb-8">
            {t.pricingPage.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              {t.pricingPage.cta.trialButton}
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-navy hover:bg-cream">
              {t.pricingPage.cta.demoButton}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
