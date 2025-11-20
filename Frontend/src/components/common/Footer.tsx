import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cream pt-12">
      {/* Unique Curved Top Design */}
      <div className="bg-navy rounded-t-[3rem] md:rounded-t-[5rem] px-4 sm:px-6 lg:px-8 pb-12 pt-20 md:pt-24 relative overflow-hidden">
        {/* Giant Brand Watermark */}
        <div className="absolute -top-12 right-0 pointer-events-none opacity-5 select-none">
          <span className="text-[15rem] font-serif font-black text-white leading-none tracking-tighter">
            Top
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-6">
                <h2 className="text-3xl font-serif font-bold text-white">
                  TopTalks
                  <span className="inline-flex ml-2 gap-1">
                    <span className="w-2 h-2 rounded-full bg-mint"></span>
                    <span className="w-2 h-2 rounded-full bg-coral"></span>
                  </span>
                </h2>
              </Link>
              <p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-xs">
                {t.footer.tagline}
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-coral hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold mb-6 text-lg">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-4">
                {[
                  { name: t.footer.home, path: "/" },
                  { name: t.footer.about, path: "/about" },
                  { name: t.footer.howItWorks, path: "/how-it-works" },
                  { name: t.footer.reviews, path: "/testimonials" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-cream/60 hover:text-mint transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold mb-6 text-lg">
                {t.footer.forUsers}
              </h3>
              <ul className="space-y-4">
                {[
                  { name: t.footer.studentServices, path: "/find-tutors" },
                  { name: t.footer.becomeATutor, path: "/start-teaching" },
                  { name: t.footer.login, path: "/login" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-cream/60 hover:text-mint transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-4 bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-white font-bold mb-4 text-lg">
                Stay Updated
              </h3>
              <p className="text-cream/60 text-sm mb-6">
                Subscribe for latest updates and offers.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-mint transition-colors"
                />
                <button className="bg-mint text-navy font-bold py-3 rounded-xl hover:bg-mint/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              {t.footer.copyright.replace("{year}", currentYear.toString())}
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-cream/40 text-sm hover:text-white transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link
                to="/terms"
                className="text-cream/40 text-sm hover:text-white transition-colors"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
