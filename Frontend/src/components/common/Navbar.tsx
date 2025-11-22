import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../translations";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const { language: selectedLanguage, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { nameKey: "home", path: "/", sectionId: null },
    { nameKey: "about", path: "/about", sectionId: null },
    { nameKey: "findTutor", path: "/find-tutors", sectionId: null },
    { nameKey: "apply", path: "/start-teaching", sectionId: null },
    { nameKey: "contact", path: "/contact", sectionId: "contact" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as Language);
    setIsLanguageDropdownOpen(false);
  };

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof navLinks)[0]
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (link.sectionId && location.pathname === link.path) {
      scrollToSection(link.sectionId);
    } else if (link.sectionId && location.pathname !== link.path) {
      navigate(link.path);
      setTimeout(() => scrollToSection(link.sectionId), 100);
    } else {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };
    if (isLanguageDropdownOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLanguageDropdownOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="group">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-navy cursor-pointer tracking-tight">
                TopTalks
                <span className="inline-flex ml-1 gap-1 transform group-hover:scale-110 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-mint"></span>
                  <span className="w-2 h-2 rounded-full bg-coral"></span>
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.nameKey}
                href={link.sectionId ? `#${link.sectionId}` : link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="text-navy/70 hover:text-navy transition-colors duration-200 text-sm font-medium cursor-pointer hover:underline decoration-mint decoration-2 underline-offset-4"
              >
                {t.navbar[link.nameKey as keyof typeof t.navbar]}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-2 text-navy/70 hover:text-navy transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-full hover:bg-white/50"
              >
                <span className="text-lg">
                  {
                    languages.find((lang) => lang.code === selectedLanguage)
                      ?.flag
                  }
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-cream-dark py-2 overflow-hidden animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-cream transition-colors ${
                        selectedLanguage === lang.code
                          ? "bg-cream text-navy font-semibold"
                          : "text-gray"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link to="/login">
              <Button size="sm" variant="primary">
                {t.navbar.login}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-navy focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl animate-fade-in px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.nameKey}
                  href={link.sectionId ? `#${link.sectionId}` : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-navy hover:text-coral transition-colors duration-200 text-base font-medium py-2 border-b border-cream-dark"
                >
                  {t.navbar[link.nameKey as keyof typeof t.navbar]}
                </a>
              ))}

              <div className="pt-2">
                <p className="text-xs text-gray mb-2 font-medium uppercase tracking-wider">
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm transition-colors ${
                        selectedLanguage === lang.code
                          ? "bg-navy text-white"
                          : "bg-cream text-gray hover:bg-cream-dark"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link to="/login" className="block pt-2">
                <Button size="md" variant="primary" className="w-full">
                  {t.navbar.login}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
