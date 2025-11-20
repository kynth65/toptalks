import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Button from "../components/common/Button";
import { Navbar } from "../components";

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

const FindTutorsPage = () => {
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
  };

  const handleBack = () => {
    // Skip step 5 if goal is not "lessonsForKids"
    if (currentStep === 6 && formData.goal !== "lessonsForKids") {
      setCurrentStep(4);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Navigate to results page with query parameters
    const params = new URLSearchParams();
    params.set("data", JSON.stringify(formData));
    navigate(`/tutor-results?${params.toString()}`);
  };

  const handleShowAll = () => {
    // Navigate to results page without any filters
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

  return (
    <div className="min-h-screen bg-cream py-20 px-4 sm:px-6 lg:px-8 pt-42">
      <Navbar />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
            {t.findTutors.heading}
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            {t.findTutors.subheading}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-navy">
              {t.findTutors.step} {currentStep} {t.findTutors.of} {totalSteps}
            </span>
            <span className="text-sm font-semibold text-coral">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-coral to-coral/80 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-[1.5rem] shadow-xl p-8 md:p-12">
          {/* Step 1: Subject Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                {t.findTutors.step1.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <button
                    key={subject}
                    onClick={() => setFormData({ ...formData, subject })}
                    className={`px-6 py-5 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.subject === subject
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step1[
                          subject as keyof typeof t.findTutors.step1
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Goal */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                {t.findTutors.step2.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "careerBusiness",
                  "lessonsForKids",
                  "examsCoursework",
                  "cultureTravel",
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setFormData({ ...formData, goal })}
                    className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.goal === goal
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step2[
                          goal as keyof typeof t.findTutors.step2
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                {t.findTutors.step3.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "oneToFourWeeks",
                  "oneToThreeMonths",
                  "threeToSixMonths",
                  "asLongAsItTakes",
                ].map((timeline) => (
                  <button
                    key={timeline}
                    onClick={() => setFormData({ ...formData, timeline })}
                    className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.timeline === timeline
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step3[
                          timeline as keyof typeof t.findTutors.step3
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Focus Topics */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {t.findTutors.step4.title}
              </h2>
              <p className="text-gray mb-8">Select all that apply</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "noPreference",
                  "beginnerLevel",
                  "conversational",
                  "businessProfessional",
                  "examPreparation",
                  "grammar",
                  "pronunciation",
                ].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => toggleArrayItem("focusTopics", topic)}
                    className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.focusTopics.includes(topic)
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step4[
                          topic as keyof typeof t.findTutors.step4
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Student Level (conditional) */}
          {currentStep === 5 && formData.goal === "lessonsForKids" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                {t.findTutors.step5.title.replace(
                  "{subject}",
                  formData.subject
                )}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "justStarting",
                  "knowsBasics",
                  "conversational",
                  "fluent",
                ].map((level) => (
                  <button
                    key={level}
                    onClick={() =>
                      setFormData({ ...formData, studentLevel: level })
                    }
                    className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.studentLevel === level
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step5[
                          level as keyof typeof t.findTutors.step5
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Tutor Country */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {t.findTutors.step6.title}
              </h2>
              <p className="text-gray mb-8">Select all that apply</p>
              <div className="mb-8 p-5 bg-cream rounded-[1.5rem] border-2 border-gray-200">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.nativeSpeakersOnly}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        nativeSpeakersOnly: e.target.checked,
                      })
                    }
                    className="w-5 h-5 text-coral rounded border-2 border-gray-300 focus:ring-2 focus:ring-coral focus:ring-offset-2 cursor-pointer transition-all duration-200"
                  />
                  <span className="text-lg font-medium text-navy group-hover:text-coral transition-colors duration-200">
                    {t.findTutors.step6.nativeSpeakersOnly}
                  </span>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <button
                    key={country}
                    onClick={() => toggleArrayItem("tutorCountries", country)}
                    className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.tutorCountries.includes(country)
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step6[
                          country as keyof typeof t.findTutors.step6
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Tutor Languages */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {t.findTutors.step7.title}
              </h2>
              <p className="text-gray mb-8">Select all that apply</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "noPreference",
                  "english",
                  "spanish",
                  "chinese",
                  "korean",
                  "japanese",
                  "tagalog",
                ].map((language) => (
                  <button
                    key={language}
                    onClick={() => toggleArrayItem("tutorLanguages", language)}
                    className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                      formData.tutorLanguages.includes(language)
                        ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                        : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <span className="text-lg font-semibold text-navy">
                      {
                        t.findTutors.step7[
                          language as keyof typeof t.findTutors.step7
                        ]
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Availability */}
          {currentStep === 8 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                {t.findTutors.step8.title.replace(
                  "{you}",
                  formData.goal === "lessonsForKids"
                    ? t.findTutors.step8.theChild
                    : t.findTutors.step8.you
                )}
              </h2>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-navy mb-5">
                  {t.findTutors.step8.selectDays}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                      onClick={() => toggleArrayItem("availableDays", day)}
                      className={`px-4 py-5 rounded-[1.5rem] border-2 transition-all duration-300 ${
                        formData.availableDays.includes(day)
                          ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                          : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      <span className="text-base font-semibold text-navy block text-center">
                        {
                          t.findTutors.step8[
                            day as keyof typeof t.findTutors.step8
                          ]
                        }
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-5">
                  {t.findTutors.step8.selectTimes}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["morning", "afternoon", "evening", "night"].map((time) => (
                    <button
                      key={time}
                      onClick={() => toggleArrayItem("availableTimes", time)}
                      className={`px-6 py-6 rounded-[1.5rem] border-2 transition-all duration-300 text-left ${
                        formData.availableTimes.includes(time)
                          ? "border-coral bg-coral/10 shadow-md scale-[1.02]"
                          : "border-gray-200 hover:border-coral hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      <span className="text-lg font-semibold text-navy">
                        {
                          t.findTutors.step8[
                            time as keyof typeof t.findTutors.step8
                          ]
                        }
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 9: Budget */}
          {currentStep === 9 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {t.findTutors.step9.title}
              </h2>
              <p className="text-gray mb-10">{t.findTutors.step9.subtitle}</p>

              <div className="space-y-8">
                <div className="bg-cream rounded-[1.5rem] p-8 border-2 border-gray-200">
                  <div className="flex justify-center items-center mb-8">
                    <span className="text-3xl md:text-4xl font-bold text-coral">
                      ${formData.minPrice} - ${formData.maxPrice}+
                    </span>
                    <span className="text-xl text-gray ml-2">
                      {t.findTutors.step9.perHour}
                    </span>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-base font-semibold text-navy">
                          Minimum Price
                        </label>
                        <span className="text-lg font-bold text-coral">
                          ${formData.minPrice}
                          {t.findTutors.step9.perHour}
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
                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-coral transition-all duration-200 hover:h-4"
                        style={{
                          background: `linear-gradient(to right, #F7A8A0 0%, #F7A8A0 ${
                            ((formData.minPrice - 3) / (50 - 3)) * 100
                          }%, #e5e7eb ${
                            ((formData.minPrice - 3) / (50 - 3)) * 100
                          }%, #e5e7eb 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray mt-2">
                        <span>$3</span>
                        <span>$50</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-base font-semibold text-navy">
                          Maximum Price
                        </label>
                        <span className="text-lg font-bold text-coral">
                          ${formData.maxPrice}+{t.findTutors.step9.perHour}
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
                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-coral transition-all duration-200 hover:h-4"
                        style={{
                          background: `linear-gradient(to right, #F7A8A0 0%, #F7A8A0 ${
                            ((formData.maxPrice - 10) / (100 - 10)) * 100
                          }%, #e5e7eb ${
                            ((formData.maxPrice - 10) / (100 - 10)) * 100
                          }%, #e5e7eb 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray mt-2">
                        <span>$10</span>
                        <span>$100+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-16 pt-8 border-t-2 border-gray-200 space-y-4">
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                {t.findTutors.back}
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                >
                  {t.findTutors.next}
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                >
                  {t.findTutors.submit}
                </Button>
              )}
            </div>

            {/* Show All Button */}
            <div className="flex justify-center">
              <button
                onClick={handleShowAll}
                className="text-coral hover:text-coral/80 font-semibold text-base transition-colors duration-200 underline"
              >
                {t.findTutors.showAll}
              </button>
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-center text-sm text-gray mt-8">
          Your preferences help us find the perfect tutor match for your
          learning journey
        </p>
      </div>
    </div>
  );
};

export default FindTutorsPage;
