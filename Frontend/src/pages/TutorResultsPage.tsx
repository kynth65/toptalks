import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { mockTutors, type Tutor } from "../data/mockTutors";
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

const TutorResultsPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [filteredTutors, setFilteredTutors] = useState<Tutor[]>([]);
  const [originalData, setOriginalData] = useState<QuestionnaireData | null>(
    null
  );
  const [currentFilters, setCurrentFilters] =
    useState<QuestionnaireData | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 10;

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const data: QuestionnaireData = JSON.parse(dataParam);
        setOriginalData(data);
        setCurrentFilters(data);
        filterTutors(data);
      } catch (error) {
        console.error("Error parsing questionnaire data:", error);
        // Show all tutors if parsing fails
        showAllTutors();
      }
    } else {
      // No filters - show all tutors
      showAllTutors();
    }
  }, [searchParams]);

  const getDefaultFilters = (): QuestionnaireData => {
    return {
      subject: "",
      goal: "",
      timeline: "",
      focusTopics: [],
      tutorCountries: [],
      nativeSpeakersOnly: false,
      tutorLanguages: [],
      availableDays: [],
      availableTimes: [],
      minPrice: 0,
      maxPrice: 1000,
    };
  };

  const showAllTutors = () => {
    // Set default filters
    const defaultFilters = getDefaultFilters();
    setOriginalData(defaultFilters);
    setCurrentFilters(defaultFilters);

    // Show all tutors sorted by rating
    const results = [...mockTutors].sort((a, b) => b.rating - a.rating);
    setFilteredTutors(results);
    setCurrentPage(1);
  };

  const filterTutors = (data: QuestionnaireData) => {
    let results = [...mockTutors];

    // Filter by subject
    if (data.subject) {
      results = results.filter((tutor) =>
        tutor.subjects.includes(data.subject)
      );
    }

    // Filter by goal
    if (data.goal) {
      results = results.filter((tutor) => tutor.goals.includes(data.goal));
    }

    // Filter by focus topics
    if (
      data.focusTopics.length > 0 &&
      !data.focusTopics.includes("noPreference")
    ) {
      results = results.filter((tutor) =>
        data.focusTopics.some((topic) => tutor.specialties.includes(topic))
      );
    }

    // Filter by student level (if applicable)
    if (data.studentLevel) {
      results = results.filter((tutor) =>
        tutor.levels.includes(data.studentLevel!)
      );
    }

    // Filter by tutor country
    if (
      data.tutorCountries.length > 0 &&
      !data.tutorCountries.includes("anyCountry")
    ) {
      results = results.filter((tutor) =>
        data.tutorCountries.includes(tutor.country)
      );
    }

    // Filter by native speakers only
    if (data.nativeSpeakersOnly) {
      results = results.filter((tutor) => tutor.isNativeSpeaker);
    }

    // Filter by tutor languages
    if (
      data.tutorLanguages.length > 0 &&
      !data.tutorLanguages.includes("noPreference")
    ) {
      results = results.filter((tutor) =>
        data.tutorLanguages.some((lang) => tutor.languages.includes(lang))
      );
    }

    // Filter by availability days
    if (data.availableDays.length > 0) {
      results = results.filter((tutor) =>
        data.availableDays.some((day) => tutor.availability.days.includes(day))
      );
    }

    // Filter by availability times
    if (data.availableTimes.length > 0) {
      results = results.filter((tutor) =>
        data.availableTimes.some((time) =>
          tutor.availability.times.includes(time)
        )
      );
    }

    // Filter by price range (only if not default max)
    if (data.maxPrice < 1000) {
      results = results.filter(
        (tutor) =>
          tutor.hourlyRate >= data.minPrice && tutor.hourlyRate <= data.maxPrice
      );
    } else if (data.minPrice > 0) {
      results = results.filter((tutor) => tutor.hourlyRate >= data.minPrice);
    }

    // Sort by rating (highest first)
    results.sort((a, b) => b.rating - a.rating);

    setFilteredTutors(results);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleBookLesson = (tutorId: string) => {
    // In a real app, this would navigate to booking page
    console.log("Booking lesson with tutor:", tutorId);
    alert("Booking feature coming soon!");
  };

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      usa: "🇺🇸",
      uk: "🇬🇧",
      canada: "🇨🇦",
      australia: "🇦🇺",
      philippines: "🇵🇭",
      ireland: "🇮🇪",
      newZealand: "🇳🇿",
      southAfrica: "🇿🇦",
    };
    return flags[country] || "🌍";
  };

  const handleApplyFilters = () => {
    if (currentFilters) {
      filterTutors(currentFilters);
      setIsFilterOpen(false);
      setCurrentPage(1); // Reset to first page
    }
  };

  const handleResetFilters = () => {
    if (originalData) {
      setCurrentFilters(originalData);
      filterTutors(originalData);
      setIsFilterOpen(false);
    }
  };

  const updateFilter = <K extends keyof QuestionnaireData>(
    key: K,
    value: QuestionnaireData[K]
  ) => {
    if (currentFilters) {
      const updated = { ...currentFilters, [key]: value };
      setCurrentFilters(updated);
    }
  };

  const toggleArrayFilter = (key: keyof QuestionnaireData, value: string) => {
    if (currentFilters) {
      const currentArray = currentFilters[key] as string[];
      const updated = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      updateFilter(key, updated as any);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-20 px-4 sm:px-6 lg:px-8 pt-42">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.findTutors.results.title}
          </h1>
          <p className="text-xl text-gray-600">
            {t.findTutors.results.subtitle.replace(
              "{count}",
              filteredTutors.length.toString()
            )}
          </p>
        </div>

        {/* Filter Panel */}
        {currentFilters && (
          <div className="mb-8">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full bg-white rounded-[1.5rem] shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <h2 className="text-xl font-bold text-navy">
                  {t.findTutors.results.filters.title}
                </h2>
              </div>
              <svg
                className={`w-6 h-6 text-navy transform transition-transform duration-300 ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isFilterOpen && (
              <div className="bg-white rounded-[1.5rem] shadow-lg p-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Subject Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step1.title}
                    </label>
                    <select
                      value={currentFilters.subject}
                      onChange={(e) => updateFilter("subject", e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-coral focus:outline-none"
                    >
                      <option value="">All Subjects</option>
                      <option value="english">
                        {t.findTutors.step1.english}
                      </option>
                      <option value="spanish">
                        {t.findTutors.step1.spanish}
                      </option>
                      <option value="french">
                        {t.findTutors.step1.french}
                      </option>
                      <option value="german">
                        {t.findTutors.step1.german}
                      </option>
                      <option value="chinese">
                        {t.findTutors.step1.chinese}
                      </option>
                      <option value="japanese">
                        {t.findTutors.step1.japanese}
                      </option>
                      <option value="korean">
                        {t.findTutors.step1.korean}
                      </option>
                      <option value="tagalog">
                        {t.findTutors.step1.tagalog}
                      </option>
                    </select>
                  </div>

                  {/* Goal Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step2.title}
                    </label>
                    <select
                      value={currentFilters.goal}
                      onChange={(e) => updateFilter("goal", e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-coral focus:outline-none"
                    >
                      <option value="">All Goals</option>
                      <option value="careerBusiness">
                        {t.findTutors.step2.careerBusiness}
                      </option>
                      <option value="lessonsForKids">
                        {t.findTutors.step2.lessonsForKids}
                      </option>
                      <option value="examsCoursework">
                        {t.findTutors.step2.examsCoursework}
                      </option>
                      <option value="cultureTravel">
                        {t.findTutors.step2.cultureTravel}
                      </option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step9.title}
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        value={currentFilters.minPrice}
                        onChange={(e) =>
                          updateFilter("minPrice", Number(e.target.value))
                        }
                        className="w-20 px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-coral focus:outline-none"
                        min="0"
                      />
                      <span className="text-gray-600">-</span>
                      <input
                        type="number"
                        value={currentFilters.maxPrice}
                        onChange={(e) =>
                          updateFilter("maxPrice", Number(e.target.value))
                        }
                        className="w-20 px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-coral focus:outline-none"
                        min="0"
                      />
                      <span className="text-sm text-gray-600">
                        {t.findTutors.step9.perHour}
                      </span>
                    </div>
                  </div>

                  {/* Focus Topics */}
                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step4.title}
                    </label>
                    <div className="flex flex-wrap gap-2">
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
                          onClick={() =>
                            toggleArrayFilter("focusTopics", topic)
                          }
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            currentFilters.focusTopics.includes(topic)
                              ? "bg-coral text-white"
                              : "bg-gray-100 text-navy hover:bg-gray-200"
                          }`}
                        >
                          {
                            t.findTutors.step4[
                              topic as keyof typeof t.findTutors.step4
                            ]
                          }
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tutor Countries */}
                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step6.title}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "anyCountry",
                        "usa",
                        "uk",
                        "canada",
                        "australia",
                        "philippines",
                        "ireland",
                        "newZealand",
                        "southAfrica",
                      ].map((country) => (
                        <button
                          key={country}
                          onClick={() =>
                            toggleArrayFilter("tutorCountries", country)
                          }
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            currentFilters.tutorCountries.includes(country)
                              ? "bg-coral text-white"
                              : "bg-gray-100 text-navy hover:bg-gray-200"
                          }`}
                        >
                          {country !== "anyCountry" && getCountryFlag(country)}{" "}
                          {
                            t.findTutors.step6[
                              country as keyof typeof t.findTutors.step6
                            ]
                          }
                        </button>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={currentFilters.nativeSpeakersOnly}
                          onChange={(e) =>
                            updateFilter("nativeSpeakersOnly", e.target.checked)
                          }
                          className="w-5 h-5 text-coral border-gray-300 rounded focus:ring-coral"
                        />
                        <span className="text-sm text-navy">
                          {t.findTutors.step6.nativeSpeakersOnly}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Tutor Languages */}
                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step7.title}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "noPreference",
                        "english",
                        "spanish",
                        "chinese",
                        "korean",
                        "japanese",
                        "tagalog",
                      ].map((lang) => (
                        <button
                          key={lang}
                          onClick={() =>
                            toggleArrayFilter("tutorLanguages", lang)
                          }
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            currentFilters.tutorLanguages.includes(lang)
                              ? "bg-coral text-white"
                              : "bg-gray-100 text-navy hover:bg-gray-200"
                          }`}
                        >
                          {
                            t.findTutors.step7[
                              lang as keyof typeof t.findTutors.step7
                            ]
                          }
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Available Days */}
                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step8.selectDays}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "monday",
                        "tuesday",
                        "wednesday",
                        "thursday",
                        "friday",
                        "saturday",
                        "sunday",
                      ].map((day) => (
                        <button
                          key={day}
                          onClick={() =>
                            toggleArrayFilter("availableDays", day)
                          }
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            currentFilters.availableDays.includes(day)
                              ? "bg-coral text-white"
                              : "bg-gray-100 text-navy hover:bg-gray-200"
                          }`}
                        >
                          {
                            t.findTutors.step8[
                              day as keyof typeof t.findTutors.step8
                            ]
                          }
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Available Times */}
                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-navy mb-2">
                      {t.findTutors.step8.selectTimes}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["morning", "afternoon", "evening", "night"].map(
                        (time) => (
                          <button
                            key={time}
                            onClick={() =>
                              toggleArrayFilter("availableTimes", time)
                            }
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                              currentFilters.availableTimes.includes(time)
                                ? "bg-coral text-white"
                                : "bg-gray-100 text-navy hover:bg-gray-200"
                            }`}
                          >
                            {
                              t.findTutors.step8[
                                time as keyof typeof t.findTutors.step8
                              ]
                            }
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Filter Actions */}
                <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleResetFilters}
                  >
                    {t.findTutors.results.filters.reset}
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleApplyFilters}
                  >
                    {t.findTutors.results.filters.apply}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Results */}
        {filteredTutors.length > 0 ? (
          <>
            <div className="space-y-6">
              {filteredTutors
                .slice(
                  (currentPage - 1) * tutorsPerPage,
                  currentPage * tutorsPerPage
                )
                .map((tutor) => (
                  <div
                    key={tutor.id}
                    className="bg-white rounded-[1.5rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row"
                  >
                    {/* Tutor Photo - Large */}
                    <div className="relative lg:w-2/5 xl:w-1/3 flex-shrink-0">
                      <img
                        src={tutor.photo}
                        alt={tutor.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md">
                        <span className="text-3xl">
                          {getCountryFlag(tutor.country)}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-md">
                        <span className="text-lg font-bold text-navy">
                          ⭐ {tutor.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* Tutor Info */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-navy mb-2">
                              {tutor.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="font-semibold">
                                {t.findTutors.results.tutorCard.from}:
                              </span>
                              <span>
                                {t.findTutors.step6[
                                  tutor.country as keyof typeof t.findTutors.step6
                                ] || tutor.country}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-coral">
                              ${tutor.hourlyRate}
                            </div>
                            <div className="text-sm text-gray-600">
                              {t.findTutors.results.tutorCard.perHour}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-2">
                              <span className="font-semibold">
                                {t.findTutors.results.tutorCard.speaks}:
                              </span>{" "}
                              {tutor.languages
                                .map(
                                  (lang) =>
                                    t.findTutors.step7[
                                      lang as keyof typeof t.findTutors.step7
                                    ] || lang
                                )
                                .join(", ")}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">
                                {t.findTutors.results.tutorCard.teaches}:
                              </span>{" "}
                              {tutor.subjects
                                .map(
                                  (subj) =>
                                    t.findTutors.step1[
                                      subj as keyof typeof t.findTutors.step1
                                    ] || subj
                                )
                                .join(", ")}
                            </p>
                          </div>

                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <span>
                              <span className="font-semibold">
                                {tutor.totalStudents}
                              </span>{" "}
                              {t.findTutors.results.tutorCard.students}
                            </span>
                            <span>
                              <span className="font-semibold">
                                {tutor.totalLessons}
                              </span>{" "}
                              {t.findTutors.results.tutorCard.lessons}
                            </span>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">
                            {t.findTutors.results.tutorCard.specialties}:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {tutor.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 bg-sage bg-opacity-20 text-navy text-sm rounded-full font-medium"
                              >
                                {t.findTutors.step4[
                                  specialty as keyof typeof t.findTutors.step4
                                ] || specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {tutor.bio}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={() => handleBookLesson(tutor.id)}
                          className="w-full md:w-auto"
                        >
                          {t.findTutors.results.tutorCard.bookLesson}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pagination */}
            {filteredTutors.length > tutorsPerPage && (
              <div className="mt-12 flex justify-center items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-navy border-2 border-gray-200 hover:border-coral hover:text-coral hover:shadow-lg"
                  }`}
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                {Array.from(
                  { length: Math.ceil(filteredTutors.length / tutorsPerPage) },
                  (_, i) => i + 1
                ).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
                      currentPage === pageNum
                        ? "bg-coral text-white shadow-lg scale-110"
                        : "bg-white text-navy border-2 border-gray-200 hover:border-coral hover:text-coral hover:shadow-lg"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(
                        Math.ceil(filteredTutors.length / tutorsPerPage),
                        prev + 1
                      )
                    )
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(filteredTutors.length / tutorsPerPage)
                  }
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage ===
                    Math.ceil(filteredTutors.length / tutorsPerPage)
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-navy border-2 border-gray-200 hover:border-coral hover:text-coral hover:shadow-lg"
                  }`}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="mb-8">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">
              {t.findTutors.results.noResults}
            </h3>
            <p className="text-gray-600 mb-8">
              {t.findTutors.results.noResultsMessage}
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.history.back()}
            >
              {t.findTutors.back}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorResultsPage;
