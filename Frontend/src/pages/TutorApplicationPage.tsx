import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const TutorApplicationPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            {t.tutorApplication?.title || 'Tutor Position'}
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.tutorApplication?.subtitle || 'Join our community of passionate educators'}
          </p>
        </div>
      </section>

      {/* Job Description Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* About the Role */}
          <div className="bg-white rounded-[1.5rem] shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-navy mb-6 border-b-2 border-coral pb-3">
              {t.tutorApplication?.aboutRole || 'About the Role'}
            </h2>
            <p className="text-gray text-lg leading-relaxed mb-4">
              {t.tutorApplication?.aboutRoleText || 'We are looking for passionate and experienced tutors to join our global teaching community. As a TopTalks tutor, you will have the opportunity to make a meaningful impact on students\' lives while enjoying the flexibility of working from anywhere in the world.'}
            </p>
            <p className="text-gray text-lg leading-relaxed">
              {t.tutorApplication?.aboutRoleText2 || 'You will connect with students from diverse backgrounds, create personalized learning experiences, and help them achieve their educational goals through one-on-one video sessions.'}
            </p>
          </div>

          {/* What You'll Do */}
          <div className="bg-white rounded-[1.5rem] shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-navy mb-6 border-b-2 border-coral pb-3">
              {t.tutorApplication?.responsibilities || 'What You\'ll Do'}
            </h2>
            <ul className="space-y-4">
              {[
                t.tutorApplication?.responsibility1 || 'Conduct engaging one-on-one tutoring sessions via video conferencing',
                t.tutorApplication?.responsibility2 || 'Create personalized lesson plans tailored to each student\'s needs and learning style',
                t.tutorApplication?.responsibility3 || 'Track and assess student progress, providing regular feedback',
                t.tutorApplication?.responsibility4 || 'Maintain professionalism and punctuality for all scheduled sessions',
                t.tutorApplication?.responsibility5 || 'Communicate effectively with students and adapt teaching methods as needed',
                t.tutorApplication?.responsibility6 || 'Stay current with subject matter and teaching best practices'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-coral rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-[1.5rem] shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-navy mb-6 border-b-2 border-coral pb-3">
              {t.tutorApplication?.requirements || 'Requirements'}
            </h2>
            <ul className="space-y-4">
              {[
                t.tutorApplication?.requirement1 || 'Bachelor\'s degree or higher (in relevant field preferred)',
                t.tutorApplication?.requirement2 || 'Minimum 1-2 years of teaching or tutoring experience',
                t.tutorApplication?.requirement3 || 'Native or near-native proficiency in the language you will teach',
                t.tutorApplication?.requirement4 || 'Strong communication and interpersonal skills',
                t.tutorApplication?.requirement5 || 'Reliable internet connection and appropriate technology setup',
                t.tutorApplication?.requirement6 || 'Passion for teaching and helping students succeed',
                t.tutorApplication?.requirement7 || 'Flexibility and adaptability in teaching methods'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mint rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Qualifications */}
          <div className="bg-white rounded-[1.5rem] shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-navy mb-6 border-b-2 border-coral pb-3">
              {t.tutorApplication?.preferred || 'Preferred Qualifications'}
            </h2>
            <ul className="space-y-4">
              {[
                t.tutorApplication?.preferred1 || 'Teaching certification or relevant credentials',
                t.tutorApplication?.preferred2 || 'Experience with online teaching platforms',
                t.tutorApplication?.preferred3 || 'Specialization in test preparation (TOEFL, IELTS, etc.)',
                t.tutorApplication?.preferred4 || 'Multiple language proficiency',
                t.tutorApplication?.preferred5 || 'Experience working with diverse student populations'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-butter rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="text-gray text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-[1.5rem] shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-navy mb-6 border-b-2 border-coral pb-3">
              {t.tutorApplication?.whatWeOffer || 'What We Offer'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: t.tutorApplication?.offer1 || 'Competitive Compensation',
                  desc: t.tutorApplication?.offer1Text || 'Set your own rates and earn 80% of your session fees'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: t.tutorApplication?.offer2 || 'Flexible Schedule',
                  desc: t.tutorApplication?.offer2Text || 'Work when you want, from wherever you want'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-butter" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: t.tutorApplication?.offer3 || 'Global Student Base',
                  desc: t.tutorApplication?.offer3Text || 'Connect with motivated students from around the world'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: t.tutorApplication?.offer4 || 'Support & Resources',
                  desc: t.tutorApplication?.offer4Text || 'Access to teaching materials and dedicated support team'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: t.tutorApplication?.offer5 || 'Professional Growth',
                  desc: t.tutorApplication?.offer5Text || 'Opportunities to develop your teaching skills and expand your expertise'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: t.tutorApplication?.offer6 || 'Supportive Community',
                  desc: t.tutorApplication?.offer6Text || 'Join a network of passionate educators worldwide'
                }
              ].map((offer, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-cream/50 rounded-[1.5rem]">
                  <div className="flex-shrink-0">
                    {offer.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">{offer.title}</h3>
                    <p className="text-gray">{offer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-gradient-to-br from-coral/10 to-mint/10 rounded-[1.5rem] shadow-lg p-8 md:p-12 border-2 border-coral/20">
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">
              {t.tutorApplication?.howToApply || 'How to Apply'}
            </h2>
            <div className="text-center space-y-4">
              <p className="text-gray text-lg leading-relaxed max-w-2xl mx-auto">
                {t.tutorApplication?.applyInstructions || 'If you are passionate about teaching and meet the qualifications above, we would love to hear from you! Please send your application including your resume, teaching credentials, and a brief cover letter explaining why you would be a great fit for TopTalks.'}
              </p>

              <div className="bg-white rounded-[1.5rem] p-6 max-w-xl mx-auto mt-6">
                <p className="text-navy font-semibold text-lg mb-3">
                  {t.tutorApplication?.sendApplication || 'Send your application to:'}
                </p>
                <a
                  href="mailto:tutors@toptalks.com"
                  className="text-2xl md:text-3xl font-bold text-coral hover:text-coral/80 transition-colors break-all"
                >
                  tutors@toptalks.com
                </a>
              </div>

              <p className="text-gray text-sm pt-4">
                {t.tutorApplication?.reviewNote || 'We review applications on a rolling basis and will contact qualified candidates within 48 hours.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TutorApplicationPage;
