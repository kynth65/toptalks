import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionnaireData {
  subject: string;
  goal: string;
  timeline: string;
  focusTopics: string[];
  studentLevel?: string;
  tutorCountries: string[];
  nativeSpeakersOnly: boolean;
  tutorLanguages: string[];
  availableDays: string[];
  availableTimes: string[];
  minPrice: number;
  maxPrice: number;
}

const FindTutorsPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;

  const [formData, setFormData] = useState<QuestionnaireData>({
    subject: "",
    goal: "",
    timeline: "",
    focusTopics: [],
    tutorCountries: [],
    nativeSpeakersOnly: false,
    tutorLanguages: [],
    availableDays: [],
    availableTimes: [],
    minPrice: 3,
    maxPrice: 40,
  });

  const handleNext = () => {
    // Skip step 5 if goal is not "lessonsForKids"
    if (currentStep === 4 && formData.goal !== "lessonsForKids") {
      setCurrentStep(6);
    } else {
      setCurrentStep(currentStep + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    // Skip step 5 if goal is not "lessonsForKids"
    if (currentStep === 6 && formData.goal !== "lessonsForKids") {
      setCurrentStep(4);
    } else {
      setCurrentStep(currentStep - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    // Navigate to results page with query parameters
    const params = new URLSearchParams();
    params.set("data", JSON.stringify(formData));
    navigate(`/tutor-results?${params.toString()}`);
  };

  const handleShowAll = () => {
    navigate("/tutor-results");
  };

  const toggleArrayItem = (key: keyof QuestionnaireData, value: string) => {
    const currentArray = formData[key] as string[];
    if (currentArray.includes(value)) {
      setFormData({
        ...formData,
        [key]: currentArray.filter((item) => item !== value),
      });
    } else {
      setFormData({ ...formData, [key]: [...currentArray, value] });
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.subject !== "";
      case 2:
        return formData.goal !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.focusTopics.length > 0;
      case 5:
        return (
          formData.studentLevel !== undefined && formData.studentLevel !== ""
        );
      case 6:
        return formData.tutorCountries.length > 0;
      case 7:
        return formData.tutorLanguages.length > 0;
      case 8:
        return (
          formData.availableDays.length > 0 &&
          formData.availableTimes.length > 0
        );
      case 9:
        return true;
      default:
        return false;
    }
  };

  // Option Button Component for consistency
  const OptionButton = ({
    selected,
    onClick,
    children,
    className = "",
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={`
        relative w-full p-6 rounded-[2rem] text-left transition-all duration-300 group overflow-hidden
        ${
          selected
            ? "bg-navy text-white shadow-xl shadow-navy/20 scale-[1.02]"
            : "bg-cream hover:bg-white border border-transparent hover:border-coral/30 hover:shadow-lg hover:-translate-y-1"
        }
        ${className}
      `}
    >
      <div className="flex items-center justify-between relative z-10">
        <span
          className={`text-lg font-medium ${
            selected ? "text-white" : "text-navy"
          }`}
        >
          {children}
        </span>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center text-navy">
            <Check size={14} strokeWidth={3} />
          </div>
        )}
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-coral selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl animate-blob mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-mint/10 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-navy/5 text-navy/60 text-xs font-bold uppercase tracking-wider mb-4">
              Matchmaking
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              {t.findTutors.heading}
            </h1>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              {t.findTutors.subheading}
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-navy/5 border border-white/50 p-8 md:p-12 lg:p-16 relative overflow-hidden animate-fade-in-up">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="text-sm font-semibold text-navy/50">
                  {t.findTutors.step} {currentStep} {t.findTutors.of}{" "}
                  {totalSteps}
                </span>
                <span className="text-sm font-bold text-coral">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 bg-cream-dark rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-coral to-mint transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px]">
              {/* Step 1: Subject Selection */}
              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-8 text-center">
                    {t.findTutors.step1.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "english",
                      "spanish",
                      "french",
                      "german",
                      "chinese",
                      "japanese",
                      "korean",
                      "tagalog",
                    ].map((subject) => (
                      <OptionButton
                        key={subject}
                        selected={formData.subject === subject}
                        onClick={() => setFormData({ ...formData, subject })}
                      >
                        {(t.findTutors.step1 as any)[subject]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Goal */}
              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-8 text-center">
                    {t.findTutors.step2.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "careerBusiness",
                      "lessonsForKids",
                      "examsCoursework",
                      "cultureTravel",
                    ].map((goal) => (
                      <OptionButton
                        key={goal}
                        selected={formData.goal === goal}
                        onClick={() => setFormData({ ...formData, goal })}
                      >
                        {(t.findTutors.step2 as any)[goal]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-8 text-center">
                    {t.findTutors.step3.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "oneToFourWeeks",
                      "oneToThreeMonths",
                      "threeToSixMonths",
                      "asLongAsItTakes",
                    ].map((timeline) => (
                      <OptionButton
                        key={timeline}
                        selected={formData.timeline === timeline}
                        onClick={() => setFormData({ ...formData, timeline })}
                      >
                        {(t.findTutors.step3 as any)[timeline]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Focus Topics */}
              {currentStep === 4 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-2 text-center">
                    {t.findTutors.step4.title}
                  </h2>
                  <p className="text-center text-gray mb-8 text-sm">
                    Select all that apply
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "noPreference",
                      "beginnerLevel",
                      "conversational",
                      "businessProfessional",
                      "examPreparation",
                      "grammar",
                      "pronunciation",
                    ].map((topic) => (
                      <OptionButton
                        key={topic}
                        selected={formData.focusTopics.includes(topic)}
                        onClick={() => toggleArrayItem("focusTopics", topic)}
                      >
                        {(t.findTutors.step4 as any)[topic]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Student Level (conditional) */}
              {currentStep === 5 && formData.goal === "lessonsForKids" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-8 text-center">
                    {t.findTutors.step5.title.replace(
                      "{subject}",
                      formData.subject
                    )}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "justStarting",
                      "knowsBasics",
                      "conversational",
                      "fluent",
                    ].map((level) => (
                      <OptionButton
                        key={level}
                        selected={formData.studentLevel === level}
                        onClick={() =>
                          setFormData({ ...formData, studentLevel: level })
                        }
                      >
                        {(t.findTutors.step5 as any)[level]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Tutor Country */}
              {currentStep === 6 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-2 text-center">
                    {t.findTutors.step6.title}
                  </h2>
                  <p className="text-center text-gray mb-8 text-sm">
                    Select all that apply
                  </p>

                  <div className="mb-8">
                    <label
                      className={`flex items-center justify-between p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 ${
                        formData.nativeSpeakersOnly
                          ? "border-coral bg-coral/5"
                          : "border-cream-dark bg-cream"
                      }`}
                    >
                      <span className="text-lg font-semibold text-navy">
                        {t.findTutors.step6.nativeSpeakersOnly}
                      </span>
                      <div
                        className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${
                          formData.nativeSpeakersOnly
                            ? "bg-coral"
                            : "bg-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={formData.nativeSpeakersOnly}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              nativeSpeakersOnly: e.target.checked,
                            })
                          }
                        />
                        <div
                          className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-300 ${
                            formData.nativeSpeakersOnly ? "left-7" : "left-1"
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "anyCountry",
                      "philippines",
                      "canada",
                      "usa",
                      "uk",
                      "australia",
                      "newZealand",
                      "ireland",
                      "southAfrica",
                    ].map((country) => (
                      <OptionButton
                        key={country}
                        selected={formData.tutorCountries.includes(country)}
                        onClick={() =>
                          toggleArrayItem("tutorCountries", country)
                        }
                      >
                        {(t.findTutors.step6 as any)[country]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Tutor Languages */}
              {currentStep === 7 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-2 text-center">
                    {t.findTutors.step7.title}
                  </h2>
                  <p className="text-center text-gray mb-8 text-sm">
                    Select all that apply
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "noPreference",
                      "english",
                      "spanish",
                      "chinese",
                      "korean",
                      "japanese",
                      "tagalog",
                    ].map((language) => (
                      <OptionButton
                        key={language}
                        selected={formData.tutorLanguages.includes(language)}
                        onClick={() =>
                          toggleArrayItem("tutorLanguages", language)
                        }
                      >
                        {(t.findTutors.step7 as any)[language]}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 8: Availability */}
              {currentStep === 8 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-8 text-center">
                    {t.findTutors.step8.title.replace(
                      "{you}",
                      formData.goal === "lessonsForKids"
                        ? t.findTutors.step8.theChild
                        : t.findTutors.step8.you
                    )}
                  </h2>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-4 uppercase tracking-wider text-center">
                        {t.findTutors.step8.selectDays}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          "sunday",
                          "monday",
                          "tuesday",
                          "wednesday",
                          "thursday",
                          "friday",
                          "saturday",
                        ].map((day) => (
                          <button
                            key={day}
                            onClick={() =>
                              toggleArrayItem("availableDays", day)
                            }
                            className={`
                               py-3 rounded-2xl font-medium transition-all duration-200
                               ${
                                 formData.availableDays.includes(day)
                                   ? "bg-navy text-white shadow-lg transform scale-105"
                                   : "bg-cream text-gray hover:bg-cream-dark"
                               }
                            `}
                          >
                            {(t.findTutors.step8 as any)[day]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-navy mb-4 uppercase tracking-wider text-center">
                        {t.findTutors.step8.selectTimes}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["morning", "afternoon", "evening", "night"].map(
                          (time) => (
                            <OptionButton
                              key={time}
                              selected={formData.availableTimes.includes(time)}
                              onClick={() =>
                                toggleArrayItem("availableTimes", time)
                              }
                            >
                              {(t.findTutors.step8 as any)[time]}
                            </OptionButton>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 9: Budget */}
              {currentStep === 9 && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif font-bold text-navy mb-2 text-center">
                    {t.findTutors.step9.title}
                  </h2>
                  <p className="text-center text-gray mb-12">
                    {t.findTutors.step9.subtitle}
                  </p>

                  <div className="bg-cream rounded-[2.5rem] p-8 md:p-12 border border-navy/5">
                    <div className="flex justify-center items-center mb-12">
                      <div className="bg-white px-8 py-4 rounded-2xl shadow-sm border border-coral/20">
                        <span className="text-4xl md:text-5xl font-bold text-navy">
                          ${formData.minPrice} - ${formData.maxPrice}
                          <span className="text-coral">+</span>
                        </span>
                        <span className="text-lg text-gray ml-2 font-medium">
                          {t.findTutors.step9.perHour}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-8 max-w-lg mx-auto">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <label className="font-semibold text-navy">
                            Min Price
                          </label>
                          <span className="font-bold text-coral">
                            ${formData.minPrice}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="3"
                          max="50"
                          value={formData.minPrice}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              minPrice: Number(e.target.value),
                            })
                          }
                          className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-coral"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <label className="font-semibold text-navy">
                            Max Price
                          </label>
                          <span className="font-bold text-coral">
                            ${formData.maxPrice}+
                          </span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={formData.maxPrice}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              maxPrice: Number(e.target.value),
                            })
                          }
                          className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-coral"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-16 pt-8 border-t border-cream-dark flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`
                    flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
                    ${
                      currentStep === 1
                        ? "opacity-0 pointer-events-none"
                        : "text-gray hover:text-navy hover:bg-cream"
                    }
                 `}
              >
                <ChevronLeft size={20} />
                {t.findTutors.back}
              </button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="pl-8 pr-6 flex items-center gap-2"
                >
                  {t.findTutors.next}
                  <ChevronRight size={20} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="bg-coral text-navy hover:bg-coral/90 border-none"
                >
                  {t.findTutors.submit}
                </Button>
              )}
            </div>

            {/* Skip Link */}
            <div className="text-center mt-6">
              <button
                onClick={handleShowAll}
                className="text-sm text-gray hover:text-coral underline decoration-1 underline-offset-4 transition-colors"
              >
                {t.findTutors.showAll}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindTutorsPage;
