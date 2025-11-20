import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blobs - Positioned to flow into next section */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-mint/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-butter/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-cream-dark shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-coral mr-2 animate-pulse"></span>
              <span className="text-xs font-semibold text-navy tracking-wide uppercase">
                #1 Language Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-gray leading-relaxed max-w-lg">
              {t.hero.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/find-tutors">
                <Button size="lg" variant="primary">
                  {t.hero.cta_student}
                </Button>
              </Link>
              <Link to="/start-teaching">
                <Button size="lg" variant="outline">
                  {t.hero.cta_tutor}
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 flex items-center gap-6 border-t border-navy/5">
              <div
                className="flex -space-x-4"
                role="img"
                aria-label="Happy students"
              >
                <picture>
                  <source
                    srcSet="/images/student_asian_wearing_white_shirt.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/student_asian_wearing_white_shirt.png"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-cream object-cover"
                    loading="lazy"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="/images/student_wearing_denimandwhite_shirt.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/student_wearing_denimandwhite_shirt.png"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-cream object-cover"
                    loading="lazy"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="/images/student_asian_wearing_white_shirt.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/student_asian_wearing_white_shirt.png"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-cream object-cover"
                    loading="lazy"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="/images/student_wearing_denimandwhite_shirt.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/student_wearing_denimandwhite_shirt.png"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-cream object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-sm text-gray font-medium">
                  Trusted by{" "}
                  <span className="text-navy font-bold">10,000+</span> students
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-navy/10 aspect-[4/5] lg:aspect-square transform hover:scale-[1.02] transition-transform duration-500">
              <picture>
                <source
                  srcSet="/images/teacher_wearing_denim.webp"
                  type="image/webp"
                />
                <img
                  src="/images/teacher_wearing_denim.png"
                  alt="Professional teacher ready to help students learn"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-mint-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-navy text-lg">
                      Verified Tutors
                    </p>
                    <p className="text-sm text-gray">
                      Expert-led learning path
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
