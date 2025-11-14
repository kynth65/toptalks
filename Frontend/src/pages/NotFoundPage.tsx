import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import { useLanguage } from "../contexts/LanguageContext";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      <main className="relative flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-40 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-butter/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-sky/20 rounded-full blur-3xl animate-blob animation-delay-6000"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Number with gradient effect */}
            <div className="mb-12 animate-fade-in">
              <h1 className="text-[10rem] md:text-[14rem] lg:text-[16rem] font-bold text-coral leading-none opacity-20 select-none">
                404
              </h1>
            </div>

            {/* Message */}
            <div className="space-y-6 mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
                {t.notFound?.title || "Page Not Found"}
              </h2>

              <p className="text-xl md:text-2xl text-gray max-w-2xl mx-auto">
                {t.notFound?.subtitle || "This page is not created yet."}
              </p>

              <p className="text-lg md:text-xl text-gray max-w-xl mx-auto">
                {t.notFound?.building ||
                  "We're still building this feature! Check back soon."}
              </p>
            </div>

            {/* Countdown Box */}
            <div className="mb-12 inline-block animate-fade-in-up">
              <div className="p-8 md:p-10 bg-white rounded-[1.5rem] shadow-lg hover:shadow-xl transition-all duration-300 border border-coral/10">
                <p className="text-gray text-base md:text-lg mb-3 font-medium">
                  {t.notFound?.redirecting || "Redirecting to homepage in"}
                </p>
                <div className="relative inline-block">
                  <div className="text-6xl md:text-7xl font-bold text-coral mb-3 tabular-nums">
                    {countdown}
                  </div>
                  {/* Decorative ring around countdown */}
                  <div className="absolute -inset-4 border-4 border-coral/20 rounded-[1.5rem] -z-10"></div>
                </div>
                <p className="text-sm md:text-base text-gray mt-3 font-medium">
                  {t.notFound?.seconds || "seconds"}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center animate-fade-in-up">
              <Button onClick={handleGoHome} variant="primary" size="lg">
                {t.notFound?.goHome || "Go to Homepage Now"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
