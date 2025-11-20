import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      quote:
        t.testimonials?.testimonial1Quote ||
        "TopTalks completely transformed my English skills! My tutor was patient, knowledgeable, and made every lesson engaging. I went from struggling with conversations to confidently speaking in business meetings.",
      name: t.testimonials?.testimonial1Name || "Sarah Chen",
      role: t.testimonials?.testimonial1Role || "Marketing Manager, Beijing",
      rating: 5,
      bgColor: "bg-mint/20",
    },
    {
      id: 2,
      quote:
        t.testimonials?.testimonial2Quote ||
        "As a busy professional, I needed flexible scheduling. TopTalks delivered exactly that, plus exceptional tutors who understood my goals. Highly recommended for anyone serious about learning.",
      name: t.testimonials?.testimonial2Name || "Carlos Rodriguez",
      role: t.testimonials?.testimonial2Role || "Software Engineer, Madrid",
      rating: 5,
      bgColor: "bg-butter/20",
    },
    {
      id: 3,
      quote:
        t.testimonials?.testimonial3Quote ||
        "The personalized approach made all the difference. My tutor adapted lessons to my interests and learning pace. Within 6 months, I passed my TOEFL exam with flying colors!",
      name: t.testimonials?.testimonial3Name || "Ji-woo Kim",
      role: t.testimonials?.testimonial3Role || "University Student, Seoul",
      rating: 5,
      bgColor: "bg-sky/20",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.testimonials?.heading || "What Our Students Say"}
          </h2>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.testimonials?.subheading ||
              "Real stories from learners who transformed their English skills"}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} p-8 rounded-[1.5rem] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map(
                  (_: undefined, index: number) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-butter fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-navy mb-6 leading-relaxed text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/50 rounded-full shrink-0 mr-4 flex items-center justify-center">
                  {/* Placeholder for avatar - using initials */}
                  <span className="text-navy font-semibold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
