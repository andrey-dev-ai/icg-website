import Link from "next/link";

export default function RealEstatePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1
        className="font-[family-name:var(--font-display)] font-light"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          letterSpacing: "0.2em",
          background: "linear-gradient(135deg, var(--gold-100), var(--gold-300))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        THE ROOF
      </h1>
      <p style={{ color: "var(--text-secondary)", letterSpacing: "0.2em", fontSize: "0.75rem" }}>
        НЕРУХОМІСТЬ — СКОРО
      </p>
      <Link
        href="/"
        className="mt-4 text-sm font-light uppercase tracking-widest transition-colors hover:text-gold-200"
        style={{ color: "var(--text-tertiary)" }}
      >
        ← На головну
      </Link>
    </main>
  );
}
