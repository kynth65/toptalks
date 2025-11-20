import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden">
      {/* Big text watermark in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] font-serif font-black text-navy leading-none">
          START
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy mb-8 leading-tight">
          Ready to master a{" "}
          <span className="text-coral italic">new language?</span>
        </h2>
        <p className="text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of students and tutors on TopTalks. Your journey to
          fluency begins with a single lesson.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/find-tutors">
            <Button size="lg" variant="primary">
              Find Your Tutor
            </Button>
          </Link>
          <Link to="/start-teaching">
            <Button size="lg" variant="outline">
              Become a Tutor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
