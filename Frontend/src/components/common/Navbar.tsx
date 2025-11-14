import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../translations";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const { language: selectedLanguage, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", sectionId: null },
    { name: "About", path: "/about", sectionId: null },
    { name: "Find Tutor", path: "/student-services", sectionId: null },
    { name: "Apply", path: "/start-teaching", sectionId: null },
    { name: "Contact", path: "/contact", sectionId: null },
    { name: "Pricing", path: "/pricing", sectionId: null },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as Language);
    setIsLanguageDropdownOpen(false);
  };

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof navLinks)[0]
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If link has a section ID and we're already on the target page
    if (link.sectionId && location.pathname === link.path) {
      scrollToSection(link.sectionId);
    }
    // If link has a section ID but we're on a different page
    else if (link.sectionId && location.pathname !== link.path) {
      navigate(link.path);
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(link.sectionId);
      }, 100);
    }
    // If it's just a regular page navigation
    else {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold text-navy cursor-pointer">
                TopTalks
                <span className="inline-flex ml-1 gap-1">
                  <span className="w-2 h-2 rounded-full bg-mint"></span>
                  <span className="w-2 h-2 rounded-full bg-coral"></span>
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.sectionId ? `#${link.sectionId}` : link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="text-gray hover:text-navy transition-colors duration-200 text-sm font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            {/* Language Selector Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-2 text-gray hover:text-navy transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-md hover:bg-cream-dark"
              >
                <span>
                  {
                    languages.find((lang) => lang.code === selectedLanguage)
                      ?.flag
                  }
                </span>
                <span>
                  {
                    languages.find((lang) => lang.code === selectedLanguage)
                      ?.name
                  }
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
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
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-cream transition-colors ${
                        selectedLanguage === lang.code
                          ? "bg-cream text-navy font-medium"
                          : "text-gray"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link to="/login">
              <Button size="sm" variant="outline">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray hover:text-navy focus:outline-none"
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
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.sectionId ? `#${link.sectionId}` : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray hover:text-navy transition-colors duration-200 text-sm font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Language Selector */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-gray mb-2 font-medium">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedLanguage === lang.code
                          ? "bg-coral text-navy"
                          : "bg-white text-gray hover:bg-cream"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Login Button */}
              <Link to="/login" className="block">
                <Button size="sm" variant="outline" className="w-full">
                  Login
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
