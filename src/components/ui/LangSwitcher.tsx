"use client";

import { useLang } from "@/providers/LangProvider";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

export default function LangSwitcher() {
  const { locale, setLocale } = useLang();

  return (
    <div className="flex items-center gap-1">
      {locales.map((l: Locale, i: number) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => setLocale(l)}
            className="font-light uppercase transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.725rem",
              letterSpacing: "0.12em",
              color: locale === l ? "var(--gold-200)" : "var(--text-tertiary)",
              opacity: locale === l ? 1 : 0.6,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px 4px",
            }}
          >
            {localeLabels[l]}
          </button>
          {i < locales.length - 1 && (
            <span
              style={{
                color: "var(--text-tertiary)",
                fontSize: "0.45rem",
                opacity: 0.3,
              }}
            >
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
