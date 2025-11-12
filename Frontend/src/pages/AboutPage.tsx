import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
            Breaking Down Language Barriers,
            <span className="text-coral"> One Conversation at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-gray max-w-3xl mx-auto leading-relaxed">
            TopTalks is the world's leading platform connecting English learners with expert tutors for personalized, one-on-one lessons that fit your schedule and learning style.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray">
            <p className="mb-8 text-lg leading-relaxed">
              Founded in 2020, TopTalks was born from a simple observation: the best way to learn a language is through genuine conversation with real people. Traditional classroom settings and one-size-fits-all apps weren't giving learners the personalized attention they needed to truly excel.
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              We created TopTalks to bridge this gap—a platform where passionate educators and motivated learners could connect across borders and time zones. What started as a small community of 50 tutors has grown into a thriving global network of over 1,000 certified professionals teaching students in more than 120 countries.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to facilitate thousands of conversations every day, helping students achieve their dreams—whether that's landing their dream job, studying abroad, or simply connecting with people around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">Our Mission & Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray text-base leading-relaxed">
                To make quality English education accessible to everyone, everywhere, by connecting learners with the perfect tutor for their unique needs.
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Global Accessibility</h3>
              <p className="text-gray text-base leading-relaxed">
                We believe language learning should transcend borders, budgets, and time zones. Our platform is available 24/7 with tutors from around the world.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Quality First</h3>
              <p className="text-gray text-base leading-relaxed">
                Every tutor is thoroughly vetted, certified, and continuously evaluated to ensure the highest teaching standards and student satisfaction.
              </p>
            </div>

            {/* Personalization */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Personalized Learning</h3>
              <p className="text-gray text-base leading-relaxed">
                We recognize that every learner is unique. Our platform empowers students to find tutors who match their learning style, goals, and interests.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Strong Community</h3>
              <p className="text-gray text-base leading-relaxed">
                We foster a supportive community where learners and educators can connect, share experiences, and grow together.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-10 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Continuous Innovation</h3>
              <p className="text-gray text-base leading-relaxed">
                We're constantly improving our platform with new features, better matching algorithms, and enhanced learning tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">TopTalks by the Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint mb-4">1,000+</div>
              <div className="text-cream text-sm md:text-base lg:text-lg">Certified Tutors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-coral mb-4">10,000+</div>
              <div className="text-cream text-sm md:text-base lg:text-lg">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-mint mb-4">120+</div>
              <div className="text-cream text-sm md:text-base lg:text-lg">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-coral mb-4">4.9/5</div>
              <div className="text-cream text-sm md:text-base lg:text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">What Makes Us Different</h2>

          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-mint rounded-full flex items-center justify-center text-navy font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Rigorous Tutor Selection</h3>
                <p className="text-gray text-base leading-relaxed">
                  We accept less than 10% of tutor applicants. Each undergoes credential verification, background checks, demo lessons, and continuous performance monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Smart Matching Technology</h3>
                <p className="text-gray text-base leading-relaxed">
                  Our advanced algorithm considers learning goals, personality, teaching style, and schedule to help you find the perfect tutor match.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-mint rounded-full flex items-center justify-center text-navy font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Flexible & Affordable</h3>
                <p className="text-gray text-base leading-relaxed">
                  No subscriptions or hidden fees. Pay as you go with tutors at various price points. Cancel or reschedule lessons with ease.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Built-in Learning Tools</h3>
                <p className="text-gray text-base leading-relaxed">
                  Integrated video conferencing, interactive whiteboard, lesson notes, progress tracking, and resource library—all in one platform.
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
            Join the TopTalks Community Today
          </h2>
          <p className="text-lg md:text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to learn English or share your expertise as a tutor, TopTalks is your platform for meaningful connections and real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/student-services">
              <Button size="lg">Find Your Tutor</Button>
            </Link>
            <Link to="/start-teaching">
              <Button size="lg" variant="outline">Become a Tutor</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
