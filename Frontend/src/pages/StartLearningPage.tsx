import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

const StartLearningPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    level: '',
    schedule: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        level: '',
        schedule: '',
        goals: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            {t.startLearning?.heading || 'Start Your Learning Journey'}
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto mb-8">
            {t.startLearning?.subheading || 'Tell us about your learning goals and we\'ll match you with the perfect tutor. Start your personalized learning experience today.'}
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-navy shadow-sm">
              ✓ {t.startLearning?.benefit1 || 'Expert Tutors'}
            </div>
            <div className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-navy shadow-sm">
              ✓ {t.startLearning?.benefit2 || 'Flexible Schedule'}
            </div>
            <div className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-navy shadow-sm">
              ✓ {t.startLearning?.benefit3 || 'Personalized Learning'}
            </div>
            <div className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-navy shadow-sm">
              ✓ {t.startLearning?.benefit4 || 'Affordable Pricing'}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[1.5rem] shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">
                {t.startLearning?.formHeading || 'Tell Us About Yourself'}
              </h2>
              <p className="text-gray">
                {t.startLearning?.formSubheading || 'Fill out this quick form and we\'ll connect you with a tutor within 24 hours.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.name || 'Full Name'} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  placeholder={t.startLearning?.form?.namePlaceholder || 'Enter your full name'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.email || 'Email Address'} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  placeholder={t.startLearning?.form?.emailPlaceholder || 'your.email@example.com'}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.phone || 'Phone Number'} (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  placeholder={t.startLearning?.form?.phonePlaceholder || '+1 (234) 567-8900'}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.subject || 'What subject do you want to learn?'} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                >
                  <option value="">{t.startLearning?.form?.selectSubject || 'Select a subject'}</option>
                  <option value="mathematics">{t.startLearning?.form?.mathematics || 'Mathematics'}</option>
                  <option value="science">{t.startLearning?.form?.science || 'Science'}</option>
                  <option value="language">{t.startLearning?.form?.language || 'Language Learning'}</option>
                  <option value="programming">{t.startLearning?.form?.programming || 'Programming'}</option>
                  <option value="business">{t.startLearning?.form?.business || 'Business & Economics'}</option>
                  <option value="test-prep">{t.startLearning?.form?.testPrep || 'Test Preparation'}</option>
                  <option value="arts">{t.startLearning?.form?.arts || 'Arts & Music'}</option>
                  <option value="other">{t.startLearning?.form?.other || 'Other'}</option>
                </select>
              </div>

              {/* Level Field */}
              <div>
                <label htmlFor="level" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.level || 'Current Level'} *
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                >
                  <option value="">{t.startLearning?.form?.selectLevel || 'Select your level'}</option>
                  <option value="beginner">{t.startLearning?.form?.beginner || 'Beginner'}</option>
                  <option value="intermediate">{t.startLearning?.form?.intermediate || 'Intermediate'}</option>
                  <option value="advanced">{t.startLearning?.form?.advanced || 'Advanced'}</option>
                  <option value="not-sure">{t.startLearning?.form?.notSure || 'Not Sure'}</option>
                </select>
              </div>

              {/* Schedule Preference */}
              <div>
                <label htmlFor="schedule" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.schedule || 'Preferred Schedule'} *
                </label>
                <select
                  id="schedule"
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                >
                  <option value="">{t.startLearning?.form?.selectSchedule || 'Select preferred time'}</option>
                  <option value="weekday-morning">{t.startLearning?.form?.weekdayMorning || 'Weekday Mornings'}</option>
                  <option value="weekday-afternoon">{t.startLearning?.form?.weekdayAfternoon || 'Weekday Afternoons'}</option>
                  <option value="weekday-evening">{t.startLearning?.form?.weekdayEvening || 'Weekday Evenings'}</option>
                  <option value="weekend">{t.startLearning?.form?.weekend || 'Weekends'}</option>
                  <option value="flexible">{t.startLearning?.form?.flexible || 'Flexible'}</option>
                </select>
              </div>

              {/* Goals/Notes Field */}
              <div>
                <label htmlFor="goals" className="block text-sm font-semibold text-navy mb-2">
                  {t.startLearning?.form?.goals || 'Learning Goals & Notes'}
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all resize-none"
                  placeholder={t.startLearning?.form?.goalsPlaceholder || 'Tell us about your learning goals, timeline, or any specific requirements...'}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting
                  ? (t.startLearning?.form?.submitting || 'Submitting...')
                  : (t.startLearning?.form?.submit || 'Get Matched with a Tutor')}
              </Button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-mint/10 border border-mint rounded-[1.5rem] text-navy text-center">
                  <p className="font-semibold mb-1">
                    {t.startLearning?.form?.successTitle || 'Success!'}
                  </p>
                  <p className="text-sm">
                    {t.startLearning?.form?.successMessage || 'Thank you for your interest! Our team will contact you within 24 hours to match you with the perfect tutor.'}
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-300 rounded-[1.5rem] text-red-700 text-center">
                  {t.startLearning?.form?.errorMessage || 'Something went wrong. Please try again.'}
                </div>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray mb-4">
              {t.startLearning?.footer?.text || 'Have questions before getting started?'}
            </p>
            <a
              href="/contact"
              className="text-coral font-semibold hover:underline"
            >
              {t.startLearning?.footer?.contactLink || 'Contact our support team'}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-coral">500+</div>
              <p className="text-navy font-semibold">
                {t.startLearning?.stats?.tutors || 'Expert Tutors'}
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-mint">10,000+</div>
              <p className="text-navy font-semibold">
                {t.startLearning?.stats?.students || 'Happy Students'}
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky">4.9/5</div>
              <p className="text-navy font-semibold">
                {t.startLearning?.stats?.rating || 'Average Rating'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartLearningPage;
