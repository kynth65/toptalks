// EmailJS Configuration
// Get your credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Debug: Log configuration on module load
console.log('📧 EmailJS Configuration Loaded:', {
  serviceId: EMAILJS_CONFIG.serviceId || '❌ MISSING',
  templateId: EMAILJS_CONFIG.templateId || '❌ MISSING',
  publicKey: EMAILJS_CONFIG.publicKey || '❌ MISSING',
  envCheck: {
    VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
});
