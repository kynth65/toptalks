import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { useLanguage } from "../../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-42 pb-28 md:pb-36 lg:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-butter/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-sky/20 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-gray max-w-xl">{t.hero.subheading}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/student-services">
                <Button size="lg">{t.hero.cta_student}</Button>
              </Link>
              <Link to="/start-teaching">
                <Button size="lg" variant="outline">
                  {t.hero.cta_tutor}
                </Button>
              </Link>
            </div>

            {/* Encouragement Text */}
            <p className="text-lg text-gray max-w-xl pt-2">
              {t.hero.encouragement}
            </p>

            {/* Social Proof Badge */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src="/images/student_asian_wearing_white_shirt.png"
                  alt="Student 1"
                  className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                />
                <img
                  src="/images/student_wearing_denimandwhite_shirt.png"
                  alt="Student 2"
                  className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                />
                <img
                  src="/images/student_asian_wearing_white_shirt.png"
                  alt="Student 3"
                  className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                />
                <img
                  src="/images/student_wearing_denimandwhite_shirt.png"
                  alt="Student 4"
                  className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                />
              </div>
              <div className="text-sm text-gray">
                <div className="font-semibold">10,000+ Students</div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span>4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Teacher Image */}
          <div className="relative h-[500px] flex justify-center items-center animate-fade-in-right">
            {/* Teacher Image */}
            <div className="relative w-full max-w-md">
              <img
                src="/images/teacher_wearing_denim.png"
                alt="Teacher"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
