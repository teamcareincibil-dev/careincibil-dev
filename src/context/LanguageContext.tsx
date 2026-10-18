import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from '../data/translations';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('careincibil_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('careincibil_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: TranslationKey): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // fallback to English
    return translations['en'][key] || (key as string);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
