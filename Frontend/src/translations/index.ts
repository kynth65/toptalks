import { en } from './en';
import { es } from './es';
import { zh } from './zh';
import { ko } from './ko';

export type Language = 'en' | 'es' | 'zh' | 'ko';

export const translations = {
  en,
  es,
  zh,
  ko
};

export type TranslationKeys = typeof en;
