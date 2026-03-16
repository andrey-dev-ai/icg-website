"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: "ua" | "en") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
      <button
        onClick={() => switchLocale("ua")}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "ua"
            ? "text-accent-primary"
            : "text-text-muted hover:text-text-secondary"
        }`}
        aria-label="Українська"
      >
        UA
      </button>
      <span className="text-line">/</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "en"
            ? "text-accent-primary"
            : "text-text-muted hover:text-text-secondary"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
