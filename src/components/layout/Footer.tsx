"use client";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center py-10">
      {/* Contact pill button */}
      <a
        href="/contacts"
        className="font-light uppercase rounded-full transition-all duration-400 hover:border-[rgba(184,154,90,0.35)] hover:text-[var(--gold-200)]"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          color: "var(--text-tertiary)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 28px",
        }}
      >
        Контакти
      </a>

      {/* Copyright */}
      <span
        className="mt-6 font-light"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.58rem",
          letterSpacing: "0.08em",
          color: "var(--text-tertiary)",
          opacity: 0.5,
        }}
      >
        © {new Date().getFullYear()} ICG
      </span>
    </footer>
  );
}
