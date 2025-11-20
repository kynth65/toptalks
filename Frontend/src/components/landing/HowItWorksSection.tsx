import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import howItWorks1 from "../../assets/images/how-it-works.jpg";
import howItWorks2 from "../../assets/images/how-it-works-2.jpg";
import howItWorks3 from "../../assets/images/how-it-works-3.jpg";

const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      details: t.howItWorks.step1Details,
      image: howItWorks1,
      bgColor: "bg-coral/20", // Pinkish tone
    },
    {
      id: 2,
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      details: t.howItWorks.step2Details,
      image: howItWorks2,
      bgColor: "bg-mint/20", // Greenish tone
    },
    {
      id: 3,
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      details: t.howItWorks.step3Details,
      image: howItWorks3,
      bgColor: "bg-sky/20", // Blueish tone
    },
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Soft gradient to separate visually without lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white/50 to-cream pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            {t.howItWorks.heading}
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.howItWorks.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div key={step.id} className="h-full">
              <div
                className={`${step.bgColor} p-6 lg:p-8 xl:p-10 rounded-[2rem] transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:shadow-xl cursor-default`}
              >
                {/* Image Container */}
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-[1.5rem] aspect-[4/3]  shadow-sm bg-white/40">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl lg:text-2xl font-serif font-bold text-navy mb-3 lg:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-navy/80 text-base lg:text-lg leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
