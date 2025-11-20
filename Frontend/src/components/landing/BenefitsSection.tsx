import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Rocket, Zap, Target, Gem, Lock, TrendingUp } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      id: 1,
      icon: Rocket,
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Desc,
      color: "bg-coral/20 text-coral",
    },
    {
      id: 2,
      icon: Zap,
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Desc,
      color: "bg-mint/20 text-mint",
    },
    {
      id: 3,
      icon: Target,
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Desc,
      color: "bg-butter/40 text-yellow-700",
    },
    {
      id: 4,
      icon: Gem,
      title: "Affordable",
      description: "Quality that fits your budget.",
      color: "bg-sky/20 text-sky",
    },
    {
      id: 5,
      icon: Lock,
      title: "Secure",
      description: "Safe payments and protection.",
      color: "bg-sage/30 text-green-700",
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Progress",
      description: "Track your improvement daily.",
      color: "bg-navy/10 text-navy",
    },
  ];

  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sticky Content */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
              {t.benefits.heading}
            </h2>
            <p className="text-lg text-gray leading-relaxed">
              {t.benefits.subheading} We combine cutting-edge technology with
              human connection to deliver the most effective learning experience
              possible.
            </p>

            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-navy/5 group">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/src/assets/videos/teaching-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-7/12">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/50"
                >
                  <div
                    className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <benefit.icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
