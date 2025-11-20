import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
            {t.aboutPage.hero.title1}
            <span className="text-coral">{t.aboutPage.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray max-w-3xl mx-auto leading-relaxed">
            {t.aboutPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            {t.aboutPage.story.title}
          </h2>
          <div className="prose prose-lg max-w-none text-gray">
            <p className="mb-8 text-lg leading-relaxed">
              {t.aboutPage.story.paragraph1}
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              {t.aboutPage.story.paragraph2}
            </p>
            <p className="text-lg leading-relaxed">
              {t.aboutPage.story.paragraph3}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">
            {t.aboutPage.mission.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {t.aboutPage.mission.missionTitle}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t.aboutPage.mission.missionText}
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {t.aboutPage.mission.accessibility}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t.aboutPage.mission.accessibilityText}
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-navy"
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
              <h3 className="text-xl font-bold text-navy mb-4">
                {t.aboutPage.mission.quality}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t.aboutPage.mission.qualityText}
              </p>
            </div>

            {/* Personalization */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {t.aboutPage.mission.personalization}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t.aboutPage.mission.personalizationText}
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {t.aboutPage.mission.community}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t.aboutPage.mission.communityText}
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {t.aboutPage.mission.innovation}
              </h3>
              <p className="text-gray text-base leading-relaxed">
                {t.aboutPage.mission.innovationText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
            {t.aboutPage.stats.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint mb-4">
                1,000+
              </div>
              <div className="text-cream text-sm md:text-base lg:text-lg">
                {t.aboutPage.stats.tutors}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-coral mb-4">
                10,000+
              </div>
              <div className="text-cream text-sm md:text-base lg:text-lg">
                {t.aboutPage.stats.students}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint mb-4">
                120+
              </div>
              <div className="text-cream text-sm md:text-base lg:text-lg">
                {t.aboutPage.stats.countries}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-coral mb-4">
                4.9/5
              </div>
              <div className="text-cream text-sm md:text-base lg:text-lg">
                {t.aboutPage.stats.rating}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">
            {t.aboutPage.different.title}
          </h2>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-mint rounded-full flex items-center justify-center text-navy font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {t.aboutPage.different.item1Title}
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  {t.aboutPage.different.item1Text}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {t.aboutPage.different.item2Title}
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  {t.aboutPage.different.item2Text}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-mint rounded-full flex items-center justify-center text-navy font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {t.aboutPage.different.item3Title}
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  {t.aboutPage.different.item3Text}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {t.aboutPage.different.item4Title}
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  {t.aboutPage.different.item4Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            {t.aboutPage.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.aboutPage.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/find-tutors">
              <Button size="lg">{t.aboutPage.cta.studentButton}</Button>
            </Link>
            <Link to="/start-teaching">
              <Button size="lg" variant="outline">
                {t.aboutPage.cta.tutorButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
