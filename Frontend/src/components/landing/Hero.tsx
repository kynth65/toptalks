import React from 'react';
import Button from '../common/Button';
import TutorCard from './TutorCard';

const Hero: React.FC = () => {
  const tutors = [
    { id: 1, name: 'Sarah', image: '👩', bgColor: 'bg-coral' },
    { id: 2, name: 'James', image: '👨', bgColor: 'bg-mint' },
    { id: 3, name: 'Maria', image: '👩', bgColor: 'bg-butter' },
    { id: 4, name: 'David', image: '👨', bgColor: 'bg-sky' },
  ];

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
            <p className="text-gray text-lg font-medium">Welcome to</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
              TopTalks
            </h1>
            <p className="text-xl text-gray max-w-xl">
              Education Landing Page powered by TheSprkl UI Kit.
            </p>
            <p className="text-lg text-gray max-w-xl">
              Make English learning fun and accessible with our qualified tutors.
              Build friendships while mastering a new language through interactive
              games and activities.
            </p>
            <div className="pt-4">
              <Button size="lg">Sign up for a free trial class</Button>
            </div>
          </div>

          {/* Right Column - Tutor Cards Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-fade-in-right">
            {tutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                image={tutor.image}
                name={tutor.name}
                bgColor={tutor.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
