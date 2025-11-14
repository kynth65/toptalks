import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// ============================================
// PRICING SECTION
// ============================================
const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      id: 1,
      name: t.pricing?.tier1Name || "Starter",
      price: "$15",
      period: t.pricing?.period || "/hour",
      description: t.pricing?.tier1Desc || "Perfect for casual learners",
      features: [
        t.pricing?.tier1Feature1 || "1-on-1 tutoring sessions",
        t.pricing?.tier1Feature2 || "Flexible scheduling",
        t.pricing?.tier1Feature3 || "Basic learning materials",
        t.pricing?.tier1Feature4 || "Email support",
        t.pricing?.tier1Feature5 || "Progress tracking",
      ],
      cta: t.pricing?.tier1CTA || "Get Started",
      highlighted: false,
      bgColor: "bg-white",
    },
    {
      id: 2,
      name: t.pricing?.tier2Name || "Professional",
      price: "$25",
      period: t.pricing?.period || "/hour",
      description: t.pricing?.tier2Desc || "Best for serious learners",
      features: [
        t.pricing?.tier2Feature1 || "Everything in Starter",
        t.pricing?.tier2Feature2 || "Advanced learning materials",
        t.pricing?.tier2Feature3 || "Customized lesson plans",
        t.pricing?.tier2Feature4 || "Priority scheduling",
        t.pricing?.tier2Feature5 || "Priority support",
        t.pricing?.tier2Feature6 || "Monthly progress reports",
      ],
      cta: t.pricing?.tier2CTA || "Start Learning",
      highlighted: true,
      bgColor: "bg-coral",
    },
    {
      id: 3,
      name: t.pricing?.tier3Name || "Premium",
      price: "$40",
      period: t.pricing?.period || "/hour",
      description: t.pricing?.tier3Desc || "For intensive learning",
      features: [
        t.pricing?.tier3Feature1 || "Everything in Professional",
        t.pricing?.tier3Feature2 || "Premium certified tutors",
        t.pricing?.tier3Feature3 || "Specialized exam preparation",
        t.pricing?.tier3Feature4 || "Business English focus",
        t.pricing?.tier3Feature5 || "24/7 priority support",
        t.pricing?.tier3Feature6 || "Unlimited materials access",
      ],
      cta: t.pricing?.tier3CTA || "Go Premium",
      highlighted: false,
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.pricing?.heading || "Simple, Transparent Pricing"}
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.pricing?.subheading ||
              "Choose the perfect plan for your learning journey. No hidden fees."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-[1.5rem] ${
                tier.highlighted
                  ? "bg-coral text-white shadow-2xl scale-105 z-10"
                  : "bg-white text-navy shadow-lg"
              } p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-butter text-navy px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {t.pricing?.popularBadge || "Most Popular"}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  tier.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {tier.name}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 ${
                  tier.highlighted ? "text-white/90" : "text-gray"
                }`}
              >
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">{tier.price}</span>
                <span
                  className={`text-lg ${
                    tier.highlighted ? "text-white/90" : "text-gray"
                  }`}
                >
                  {tier.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? "text-white" : "text-mint"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-white/95" : "text-gray"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-[1.5rem] font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  tier.highlighted
                    ? "bg-white text-coral hover:shadow-lg"
                    : "bg-coral text-white hover:shadow-lg"
                }`}
                aria-label={`Select ${tier.name} plan`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
