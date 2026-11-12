import { ptBR } from './languages/language-pt-br';
import { enUS } from './languages/language-en';

const TRANSLATIONS = {
  PT: ptBR,
  EN: enUS
};

export const getStoredLang = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const cached = localStorage.getItem('portfolio_lang');
    if (cached === 'PT' || cached === 'EN') return cached;
  }
  return 'PT';
};

export const setStoredLang = (lang) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('portfolio_lang', lang);
    window.dispatchEvent(new Event('languageChange'));
  }
};

export const getToken = (key) => {
  const currentLang = getStoredLang();
  const dictionary = TRANSLATIONS[currentLang] || TRANSLATIONS.PT;
  return dictionary[key] || `[Token ${key}]`;
};