import React from 'react';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-butter/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-sky/20 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-gray max-w-xl">
              {t.hero.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={() => window.location.href = '/student-services'}>
                {t.hero.cta_student}
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/start-teaching'}>
                {t.hero.cta_tutor}
              </Button>
            </div>

            {/* Encouragement Text */}
            <p className="text-lg text-gray max-w-xl pt-2">
              {t.hero.encouragement}
            </p>
          </div>

          {/* Right Column - Teacher Image */}
          <div className="relative h-[500px] flex justify-center items-center animate-fade-in-right">
            {/* Teacher Image */}
            <div className="relative w-full max-w-md">
              <img
                src="/images/teacher_wearing_denim.png"
                alt="Teacher"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
