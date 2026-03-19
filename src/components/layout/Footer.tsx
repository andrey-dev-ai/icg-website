"use client";

import { useLang } from "@/providers/LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <>
      <footer className="relative flex justify-center" style={{ marginTop: "3.5rem", marginBottom: "2rem" }}>
        {/* Contact button — luxury style */}
        <a
          href="/contacts"
          className="group relative inline-flex items-center justify-center overflow-hidden uppercase transition-all duration-500"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "5px",
            color: "var(--gold-300)",
            border: "1px solid rgba(184, 154, 90, 0.4)",
            borderRadius: 14,
            padding: "16px 48px",
            textDecoration: "none",
            background: "transparent",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(184, 154, 90, 0.7)";
            e.currentTarget.style.color = "var(--gold-200)";
            e.currentTarget.style.letterSpacing = "4px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(184, 154, 90, 0.4)";
            e.currentTarget.style.color = "var(--gold-300)";
            e.currentTarget.style.letterSpacing = "3px";
          }}
        >
          {/* Hover fill — left to right */}
          <span
            className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-500"
            style={{ background: "rgba(184, 154, 90, 0.12)", zIndex: 0 }}
          />
          <span className="relative z-10">{t("contacts")}</span>
        </a>
      </footer>

      {/* Copyright — fixed bottom-right, LangSwitcher style */}
      <span
        className="font-light uppercase mt-6 md:fixed md:bottom-5 md:right-7 md:mt-0"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.725rem",
          letterSpacing: "0.12em",
          color: "var(--text-tertiary)",
          opacity: 0.6,
          zIndex: 10,
        }}
      >
        © {new Date().getFullYear()} ICG
      </span>
    </>
  );
}
