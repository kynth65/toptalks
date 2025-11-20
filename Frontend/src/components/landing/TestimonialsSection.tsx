import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      quote: t.testimonials.testimonial1Quote,
      name: t.testimonials.testimonial1Name,
      role: t.testimonials.testimonial1Role,
      bg: "bg-mint/10",
    },
    {
      id: 2,
      quote: t.testimonials.testimonial2Quote,
      name: t.testimonials.testimonial2Name,
      role: t.testimonials.testimonial2Role,
      bg: "bg-butter/20",
    },
    {
      id: 3,
      quote: t.testimonials.testimonial3Quote,
      name: t.testimonials.testimonial3Name,
      role: t.testimonials.testimonial3Role,
      bg: "bg-sky/10",
    },
  ];

  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              {t.testimonials.heading}
            </h2>
            <p className="text-xl text-gray">{t.testimonials.subheading}</p>
          </div>
          <div className="flex gap-2">
            {/* Decorative buttons simulating slide controls */}
            <button className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors">
              ←
            </button>
            <button className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-[2.5rem] ${item.bg} hover:scale-[1.02] transition-transform duration-300 cursor-default`}
            >
              <div className="flex mb-6 text-yellow-500 gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg font-medium text-navy mb-8 leading-relaxed">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-serif font-bold text-navy shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy">{item.name}</div>
                  <div className="text-sm text-gray opacity-80">
                    {item.role}
                  </div>
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
