import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import about2 from '../assets/images/about-2.jpg';
import about3 from '../assets/images/about-3.jpg';
import howItWorks1 from '../assets/images/how-it-works.jpg';
import howItWorks2 from '../assets/images/how-it-works-2.jpg';
import howItWorks3 from '../assets/images/how-it-works-3.jpg';

const StartTeachingPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-coral selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/5 text-navy font-medium text-sm mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
                {t.startTeachingPage.hero.badge || "Join Our Team"}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.1] mb-6">
                {t.startTeachingPage.hero.title}
              </h1>
              <p className="text-xl text-gray leading-relaxed mb-8 max-w-lg">
                {t.startTeachingPage.hero.subtitle}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-coral rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{t.startTeachingPage.hero.feature1Title}</h3>
                    <p className="text-gray">{t.startTeachingPage.hero.feature1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mint rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{t.startTeachingPage.hero.feature2Title}</h3>
                    <p className="text-gray">{t.startTeachingPage.hero.feature2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-butter rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{t.startTeachingPage.hero.feature3Title}</h3>
                    <p className="text-gray">{t.startTeachingPage.hero.feature3Desc}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate('/apply-tutor')}>
                  {t.startTeachingPage.hero.applyButton}
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/')}>
                  {t.startTeachingPage.hero.homeButton}
                </Button>
              </div>
            </div>

            {/* Right Column - Image Grid */}
            <div className="relative">
              <div className="absolute inset-0 bg-coral/10 blur-3xl rounded-full transform translate-x-10 translate-y-10"></div>
              <div className="relative grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6 mt-12">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg bg-white">
                    <img
                      src={about2}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt="Learning moment"
                    />
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg bg-white">
                    <img
                      src={about3}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt="Teaching moment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cream/30 to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              {t.startTeachingPage.howItWorks.title}
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              {t.startTeachingPage.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="h-full">
              <div className="bg-coral/20 p-6 lg:p-8 xl:p-10 rounded-[2rem] transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:shadow-xl">
                {/* Image Container */}
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-[1.5rem] aspect-[4/3] shadow-sm bg-white/40">
                  <img
                    src={howItWorks1}
                    alt={t.startTeachingPage.howItWorks.step1Title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl lg:text-2xl font-serif font-bold text-navy mb-3 lg:mb-4">
                    {t.startTeachingPage.howItWorks.step1Title}
                  </h3>
                  <p className="text-navy/80 text-base lg:text-lg leading-relaxed font-medium">
                    {t.startTeachingPage.howItWorks.step1Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="h-full">
              <div className="bg-mint/20 p-6 lg:p-8 xl:p-10 rounded-[2rem] transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:shadow-xl">
                {/* Image Container */}
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-[1.5rem] aspect-[4/3] shadow-sm bg-white/40">
                  <img
                    src={howItWorks2}
                    alt={t.startTeachingPage.howItWorks.step2Title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl lg:text-2xl font-serif font-bold text-navy mb-3 lg:mb-4">
                    {t.startTeachingPage.howItWorks.step2Title}
                  </h3>
                  <p className="text-navy/80 text-base lg:text-lg leading-relaxed font-medium">
                    {t.startTeachingPage.howItWorks.step2Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="h-full">
              <div className="bg-sky/20 p-6 lg:p-8 xl:p-10 rounded-[2rem] transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:shadow-xl">
                {/* Image Container */}
                <div className="relative mb-6 lg:mb-8 overflow-hidden rounded-[1.5rem] aspect-[4/3] shadow-sm bg-white/40">
                  <img
                    src={howItWorks3}
                    alt={t.startTeachingPage.howItWorks.step3Title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl lg:text-2xl font-serif font-bold text-navy mb-3 lg:mb-4">
                    {t.startTeachingPage.howItWorks.step3Title}
                  </h3>
                  <p className="text-navy/80 text-base lg:text-lg leading-relaxed font-medium">
                    {t.startTeachingPage.howItWorks.step3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/apply-tutor')}>
              {t.startTeachingPage.howItWorks.ctaButton}
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              {t.startTeachingPage.requirements.title}
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              {t.startTeachingPage.requirements.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-navy/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{t.startTeachingPage.requirements.req1Title}</h3>
                  <p className="text-gray text-lg leading-relaxed">{t.startTeachingPage.requirements.req1Desc}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-navy/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mint rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{t.startTeachingPage.requirements.req2Title}</h3>
                  <p className="text-gray text-lg leading-relaxed">{t.startTeachingPage.requirements.req2Desc}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-navy/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-butter rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{t.startTeachingPage.requirements.req3Title}</h3>
                  <p className="text-gray text-lg leading-relaxed">{t.startTeachingPage.requirements.req3Desc}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-navy/5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sky rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-2">{t.startTeachingPage.requirements.req4Title}</h3>
                  <p className="text-gray text-lg leading-relaxed">{t.startTeachingPage.requirements.req4Desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray text-lg mb-8 max-w-2xl mx-auto">
              {t.startTeachingPage.requirements.footer}
            </p>
            <Button size="lg" onClick={() => navigate('/apply-tutor')}>
              {t.startTeachingPage.requirements.ctaButton}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartTeachingPage;
