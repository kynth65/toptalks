import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Rocket,
  Zap,
  Target,
  Gem,
  Lock,
  TrendingUp,
} from "lucide-react";

// ============================================
// BENEFITS SECTION
// ============================================
const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  // Using the structure you requested.
  // Note: We use 'as any' for items 4-6 because the current LanguageContext
  // only defines types up to benefit3, preventing TypeScript errors while keeping your structure.
  const benefits = [
    {
      id: 1,
      icon: Rocket,
      title: t.benefits?.benefit1Title || "Flexible Scheduling",
      description:
        t.benefits?.benefit1Desc ||
        "Learn at your own pace with 24/7 access to expert tutors around the world.",
      color: "bg-coral",
    },
    {
      id: 2,
      icon: Zap,
      title: t.benefits?.benefit2Title || "Certified Tutors",
      description:
        t.benefits?.benefit2Desc ||
        "Connect with verified, experienced tutors who are passionate about teaching.",
      color: "bg-mint",
    },
    {
      id: 3,
      icon: Target,
      title: t.benefits?.benefit3Title || "Personalized Learning",
      description:
        t.benefits?.benefit3Desc ||
        "Tailored lessons that adapt to your learning style and goals.",
      color: "bg-butter",
    },
    {
      id: 4,
      icon: Gem,
      title: (t.benefits as any)?.benefit4Title || "Affordable Pricing",
      description:
        (t.benefits as any)?.benefit4Desc ||
        "Quality education at competitive rates that fit your budget.",
      color: "bg-sky",
    },
    {
      id: 5,
      icon: Lock,
      title: (t.benefits as any)?.benefit5Title || "Secure Platform",
      description:
        (t.benefits as any)?.benefit5Desc ||
        "Safe and secure environment for learning with built-in payment protection.",
      color: "bg-sage",
    },
    {
      id: 6,
      icon: TrendingUp,
      title: (t.benefits as any)?.benefit6Title || "Progress Tracking",
      description:
        (t.benefits as any)?.benefit6Desc ||
        "Monitor your improvement with detailed progress reports and feedback.",
      color: "bg-coral",
    },
  ];


  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT COLUMN: Sticky Header & Video */}
          <div className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start space-y-8">
            {/* Header Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-serif leading-tight">
                {t.benefits?.heading || "Why Choose TopTalks"}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                {t.benefits?.subheading ||
                  "Discover the benefits that make us the best choice for language learning. We combine technology with human expertise to deliver results."}
              </p>
            </div>

            {/* Video Player Card */}
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy/5 aspect-[4/3] transform transition-all duration-500 hover:scale-[1.02]">
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

          {/* RIGHT COLUMN: Benefits Grid */}
          <div className="lg:w-7/12">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default border border-gray-50"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${benefit.color} rounded-2xl mb-6`}
                  >
                    <benefit.icon
                      className="w-7 h-7 text-navy"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
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
