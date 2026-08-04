import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGES, type Language, type Localized } from '@/types';
import { translations, type Dictionary } from './translations';

const STORAGE_KEY = 'portfolio-lang';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  /** Dictionnaire de l'interface dans la langue courante */
  t: Dictionary;
  /** Résout une chaîne traduite issue de src/data */
  loc: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value !== null && (LANGUAGES as readonly string[]).includes(value);
}

function detectLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) return stored;
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((current) => {
      const next: Language = current === 'fr' ? 'en' : 'fr';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  // Synchronise <html lang>, le titre et la meta description
  useEffect(() => {
    const { title, description } = translations[lang].meta;
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: translations[lang],
      loc: (localized: Localized) => localized[lang],
    }),
    [lang, setLang, toggleLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useI18n doit être utilisé à l\'intérieur de <LanguageProvider>');
  }
  return context;
}
