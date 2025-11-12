import React from 'react';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';

const StartTeachingPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-butter/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
                Teach & Inspire Worldwide
              </h1>
              <p className="text-xl text-gray max-w-xl">
                Share your expertise with students around the globe. Set your own schedule, rates, and teaching style while making a meaningful impact.
              </p>

              {/* Features List */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-coral rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Work From Anywhere</h3>
                    <p className="text-gray">Teach from the comfort of your home or while traveling the world</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mint rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Set Your Own Schedule</h3>
                    <p className="text-gray">Choose when you want to teach and how many hours you work</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-butter rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Earn Competitive Income</h3>
                    <p className="text-gray">Set your own rates and keep 80% of your earnings</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg">
                  Apply to Teach
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
                  Back to Home
                </Button>
              </div>
            </div>

            {/* Right Column - Teacher Image */}
            <div className="relative h-[500px] flex justify-center items-center animate-fade-in-right">
              <div className="relative w-full max-w-md">
                <img
                  src="/images/teacher_wearing_denim.png"
                  alt="Tutor teaching with TopTalks"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Join our community of tutors in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coral rounded-full text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-navy">Apply to Teach</h3>
              <p className="text-gray">
                Submit your application with your teaching credentials and experience. We'll review it within 48 hours
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-navy">Set Your Schedule</h3>
              <p className="text-gray">
                Create your profile, set your rates, and choose your available teaching hours
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-butter rounded-full text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-navy">Start Teaching</h3>
              <p className="text-gray">
                Connect with students worldwide and start earning while making a difference
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              What You Need
            </h2>
            <p className="text-xl text-gray">
              Basic requirements to become a TopTalks tutor
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">Teaching Experience</h3>
                  <p className="text-gray">At least 1 year of teaching or tutoring experience</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-mint rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">Language Proficiency</h3>
                  <p className="text-gray">Native or near-native proficiency in your teaching language</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-butter rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">Reliable Technology</h3>
                  <p className="text-gray">Stable internet connection, webcam, and microphone</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-sky rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">Passion for Teaching</h3>
                  <p className="text-gray">Enthusiasm for helping students achieve their goals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray mb-6">
              Ready to join our community of passionate educators?
            </p>
            <Button size="lg">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartTeachingPage;
