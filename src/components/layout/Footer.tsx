"use client";

import { useLang } from "@/providers/LangProvider";
import LangSwitcher from "@/components/ui/LangSwitcher";

export default function Footer() {
  const { t } = useLang();

  return (
    <>
      <footer className="relative flex justify-center" style={{ marginTop: "3.5rem", marginBottom: "2rem" }}>
        {/* Contact button — luxury style */}
        <a
          href="/contacts"
          className="group relative"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textDecoration: "none",
            background: "linear-gradient(135deg, var(--gold-100) 0%, var(--gold-300) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            paddingBottom: "0.3rem",
          }}
        >
          {t("contacts")}
          {/* Animated underline */}
          <span
            className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              background: "linear-gradient(90deg, var(--gold-300), var(--gold-100), var(--gold-300))",
            }}
          />
        </a>
      </footer>

      {/* Contact info */}
      <div className="flex items-center justify-center gap-4 mt-4" style={{ zIndex: 10 }}>
        <a
          href="tel:+380443344744"
          className="transition-colors duration-300 hover:text-[var(--gold-200)]"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-tertiary)", letterSpacing: "0.05em" }}
        >
          +380 44 334 47 44
        </a>
        <span style={{ color: "var(--text-tertiary)", opacity: 0.3 }}>·</span>
        <a
          href="mailto:info@icg.in.ua"
          className="transition-colors duration-300 hover:text-[var(--gold-200)]"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-tertiary)", letterSpacing: "0.05em" }}
        >
          info@icg.in.ua
        </a>
      </div>

      {/* Bottom bar — centered: lang switcher + copyright */}
      <div className="flex flex-col items-center gap-3 mt-6 mb-4" style={{ zIndex: 10 }}>
        <LangSwitcher />
        <span
          className="font-light uppercase"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.725rem",
            letterSpacing: "0.12em",
            color: "var(--text-tertiary)",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} ICG
        </span>
      </div>
    </>
  );
}
