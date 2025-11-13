import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                {t.contact.getInTouch}
              </h3>
              <p className="text-gray mb-8">
                {t.contact.description}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-coral/10 rounded-[1.5rem] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{t.contact.email}</h4>
                  <a href="mailto:support@toptalks.com" className="text-gray hover:text-coral transition-colors">
                    support@toptalks.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-mint/10 rounded-[1.5rem] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{t.contact.phone}</h4>
                  <a href="tel:+1234567890" className="text-gray hover:text-mint transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-sky/10 rounded-[1.5rem] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">{t.contact.hours}</h4>
                  <p className="text-gray">{t.contact.hoursText}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-navy mb-4">{t.contact.followUs}</h4>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray hover:text-coral hover:scale-110 hover:shadow-lg transition-all duration-300"
                    aria-label={social}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-[1.5rem] shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                  {t.contact.form.subject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all"
                >
                  <option value="">{t.contact.form.selectSubject}</option>
                  <option value="student">{t.contact.form.studentInquiry}</option>
                  <option value="tutor">{t.contact.form.tutorInquiry}</option>
                  <option value="technical">{t.contact.form.technicalSupport}</option>
                  <option value="billing">{t.contact.form.billing}</option>
                  <option value="other">{t.contact.form.other}</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.sendMessage}
              </Button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-mint/10 border border-mint rounded-[1.5rem] text-navy text-center">
                  {t.contact.form.successMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-300 rounded-[1.5rem] text-red-700 text-center">
                  {t.contact.form.errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
