import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import aboutHero from "../assets/images/about.jpg";
import about2 from "../assets/images/about-2.jpg";
import about3 from "../assets/images/about-3.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-coral selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/5 text-navy font-medium text-sm mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse"></span>
                Our Mission
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-[1.1] mb-6">
                Connecting worlds through{" "}
                <span className="text-coral italic">language.</span>
              </h1>
              <p className="text-xl text-gray leading-relaxed mb-8 max-w-lg">
                We believe fluency is more than just vocabulary. It's about
                connection, culture, and the confidence to speak up.
              </p>
              <Link to="/find-tutors">
                <Button size="lg" variant="primary">
                  Start Your Journey
                </Button>
              </Link>
            </div>

            {/* Large Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-coral/10 blur-3xl rounded-full transform translate-x-10 translate-y-10"></div>
              <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-navy/10 border border-white/50">
                <img
                  src={aboutHero}
                  alt="Students connecting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY - Immersive Container */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-cream rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mint/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row gap-16 relative z-10 items-center">
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-4 md:space-y-6 mt-12">
                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg bg-white">
                      <img
                        src={about2}
                        className="w-full h-full object-cover"
                        alt="Learning moment"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg bg-white">
                      <img
                        src={about3}
                        className="w-full h-full object-cover"
                        alt="Teaching moment"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy leading-tight">
                  From a classroom idea to a{" "}
                  <span className="text-mint">global community.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray/90 leading-relaxed">
                  <p>
                    TopTalks started in 2023 with a simple question: Why is
                    learning a language so lonely? We wanted to change that by
                    putting human connection at the center of the experience.
                  </p>
                  <p>
                    Today, we are a thriving network of learners and educators
                    from 120+ countries, united by the belief that understanding
                    each other is the first step to a better world.
                  </p>
                </div>

                <div className="flex gap-12 pt-4">
                  <div>
                    <div className="text-4xl font-serif font-bold text-navy">
                      10k+
                    </div>
                    <div className="text-sm text-gray font-medium uppercase tracking-wider mt-1">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-bold text-navy">
                      120+
                    </div>
                    <div className="text-sm text-gray font-medium uppercase tracking-wider mt-1">
                      Countries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - Concise Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Our core values shape every lesson, every connection, and every
              line of code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Quality First",
                desc: "We rigorously vet every tutor to ensure you learn from the best.",
                color: "bg-white",
              },
              {
                title: "Inclusivity",
                desc: "Education is for everyone. We keep learning accessible and affordable.",
                color: "bg-white",
              },
              {
                title: "Growth",
                desc: "We celebrate every milestone, from your first word to fluency.",
                color: "bg-white",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`${card.color} p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-navy/5`}
              >
                <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                  {card.title}
                </h3>
                <p className="text-gray text-lg leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
