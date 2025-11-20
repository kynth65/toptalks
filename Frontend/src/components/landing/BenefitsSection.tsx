import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Rocket, Zap, Target, Gem, Lock, TrendingUp } from "lucide-react";
import teachingVideo from "../../assets/videos/teaching-video.mp4";

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const benefits = [
    {
      id: 1,
      icon: Rocket,
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Desc,
      color: "bg-coral/20 text-coral",
    },
    {
      id: 2,
      icon: Zap,
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Desc,
      color: "bg-mint/20 text-mint",
    },
    {
      id: 3,
      icon: Target,
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Desc,
      color: "bg-butter/40 text-yellow-700",
    },
    {
      id: 4,
      icon: Gem,
      title: "Affordable",
      description: "Quality that fits your budget.",
      color: "bg-sky/20 text-sky",
    },
    {
      id: 5,
      icon: Lock,
      title: "Secure",
      description: "Safe payments and protection.",
      color: "bg-sage/30 text-green-700",
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Progress",
      description: "Track your improvement daily.",
      color: "bg-navy/10 text-navy",
    },
  ];

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before component is visible
      }
    );

    const container = videoContainerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [shouldLoadVideo]);

  // Handle video playback once loaded
  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const video = videoRef.current;

      // Handle video loaded event
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      video.addEventListener("loadeddata", handleLoadedData);

      // Load and play the video
      video.load();

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay was prevented:", error);
        });
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [shouldLoadVideo]);

  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sticky Content */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
              {t.benefits.heading}
            </h2>
            <p className="text-lg text-gray leading-relaxed">
              {t.benefits.subheading} We combine cutting-edge technology with
              human connection to deliver the most effective learning experience
              possible.
            </p>

            <div ref={videoContainerRef} className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-navy/5 group bg-navy/5">
              {/* Loading placeholder */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-coral/10 to-sky/10 animate-pulse">
                  <div className="text-navy/20">
                    <svg
                      className="w-16 h-16 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </div>
                </div>
              )}

              {shouldLoadVideo && (
                <video
                  ref={videoRef}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isVideoLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                >
                  <source src={teachingVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-7/12">
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/50"
                >
                  <div
                    className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <benefit.icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
