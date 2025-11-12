import React from 'react';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for beginners starting their language journey',
      features: [
        '4 lessons per month (30 minutes each)',
        'Access to basic learning materials',
        'Email support',
        'Progress tracking dashboard',
        'Schedule flexibility'
      ],
      buttonText: 'Get Started',
      variant: 'outline' as const,
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for serious learners seeking consistent progress',
      features: [
        '12 lessons per month (30 minutes each)',
        'Priority tutor matching',
        'Access to premium learning materials',
        'Homework and assignments',
        '24/7 chat support',
        'Recorded lesson playback',
        'Customized learning path'
      ],
      buttonText: 'Start Learning',
      variant: 'primary' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and organizations with specific needs',
      features: [
        'Unlimited lessons (30 minutes each)',
        'Dedicated account manager',
        'Custom curriculum development',
        'Team progress analytics',
        'Priority support 24/7',
        'Multiple user accounts',
        'Advanced reporting tools',
        'Flexible scheduling options'
      ],
      buttonText: 'Contact Sales',
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
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your learning journey. All plans include access to our global network of certified tutors.
          </p>
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-sm text-gray">Monthly</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-mint transition-colors">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
            </button>
            <span className="text-sm text-gray">
              Yearly
              <span className="ml-2 inline-block px-2 py-1 bg-coral text-white text-xs rounded-full">Save 20%</span>
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
                      Most Popular
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
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan later?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                question: 'What if I miss a lesson?',
                answer: 'You can reschedule lessons up to 24 hours before the scheduled time. Unused lessons roll over to the next month for Professional and Enterprise plans.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 14-day money-back guarantee for all new subscriptions. If you are not satisfied, contact our support team for a full refund.'
              },
              {
                question: 'Can I try before I buy?',
                answer: 'Yes! We offer a free 30-minute trial lesson so you can experience our platform and meet a tutor before committing to a plan.'
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
            Ready to Start Learning?
          </h2>
          <p className="text-cream text-lg mb-8">
            Join thousands of students improving their English skills with TopTalks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-navy hover:bg-cream">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
