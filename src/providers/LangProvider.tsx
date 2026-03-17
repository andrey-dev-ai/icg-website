"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, type TranslationKey, getTranslations } from "@/lib/i18n";

interface LangContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextType>({
  locale: "uk",
  setLocale: () => {},
  t: (key) => key,
});

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uk");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey) => getTranslations(locale)[key],
    [locale]
  );

  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}
