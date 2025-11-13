import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';

const StudentServicesPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-sky/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-butter/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
                Start Your Learning Journey
              </h1>
              <p className="text-xl text-gray max-w-xl">
                Connect with expert tutors tailored to your learning style and goals. Get personalized lessons that fit your schedule and budget.
              </p>

              {/* Features List */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-mint rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Choose Your Tutor</h3>
                    <p className="text-gray">Browse profiles, reviews, and specialties to find your perfect match</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-coral rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Flexible Scheduling</h3>
                    <p className="text-gray">Book lessons at times that work for you, from anywhere in the world</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">Affordable Pricing</h3>
                    <p className="text-gray">Quality education accessible to everyone with transparent pricing</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/start-learning">
                  <Button size="lg">
                    Start Learning
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Student Image */}
            <div className="relative h-[500px] flex justify-center items-center animate-fade-in-right">
              <div className="relative w-full max-w-md">
                <img
                  src="/images/student_wearing_denimandwhite_shirt.png"
                  alt="Student learning with TopTalks"
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
              Getting started is simple. Follow these three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-navy">Create Your Profile</h3>
              <p className="text-gray">
                Sign up and tell us about your learning goals, preferred languages, and schedule
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coral rounded-full text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-navy">Find Your Tutor</h3>
              <p className="text-gray">
                Browse our community of certified tutors and book a trial lesson with your top choice
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky rounded-full text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-navy">Start Learning</h3>
              <p className="text-gray">
                Begin your personalized learning journey and track your progress along the way
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/start-learning">
              <Button size="lg">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto mb-8">
            Choose from flexible pricing options that suit your budget
          </p>
          <Link to="/pricing">
            <Button size="lg" variant="outline">
              View All Pricing Plans
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentServicesPage;
