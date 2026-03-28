"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useLang } from "@/providers/LangProvider";
import { easings } from "@/lib/animations";
import LangSwitcher from "@/components/ui/LangSwitcher";

const icg = {
  address: "м. Київ, просп. В. Лобановського, 56",
  floor: "9 поверх, оф. 8/3",
  email: "info@icg.in.ua",
  mainPhone: "044 334 47 44",
  phones: [
    { label: "Приймальна", phone: "044 334 47 44" },
    { label: "Орг. відділ", phone: "044 334 44 07" },
    { label: "Бухгалтерія", phone: "044 334 43 07" },
  ],
  schedule: "Пн–Пт 9:00–18:00",
  mapsUrl: "https://maps.google.com/?q=50.4225,30.4414",
};

const ease = easings.smooth;

const inputStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(200, 168, 78, 0.15)",
  borderRadius: 10,
  padding: "13px 16px",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: 14,
  width: "100%",
  transition: "border-color 0.3s, box-shadow 0.3s",
  outline: "none",
};

export default function ContactsPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(200, 168, 78, 0.5)";
    e.target.style.boxShadow = "0 0 0 3px rgba(200, 168, 78, 0.08)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(200, 168, 78, 0.15)";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setError(t("contactsFormError"));
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(194,158,97,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(194,158,97,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/images/icg-logo-v2.png"
            alt="ICG"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12"
            style={{ filter: "brightness(0.8)" }}
          />
        </Link>
        <Link
          href="/"
          className="transition-colors hover:text-[var(--gold-200)]"
          style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-tertiary)", letterSpacing: "0.1em" }}
        >
          ← {t("contactsBackHome")}
        </Link>
      </header>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center px-6 py-8 md:py-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
            background: "linear-gradient(135deg, var(--gold-100) 0%, var(--gold-300) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 32,
          }}
        >
          {t("contactsTitle")}
        </motion.h1>

        {/* Contact info — compact horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="w-full max-w-3xl mb-12 md:mb-16 rounded-xl p-6 md:p-8"
          style={{ border: "1px solid rgba(200, 168, 78, 0.1)", background: "rgba(255,255,255,0.015)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Address */}
            <div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gold-300)", letterSpacing: "0.15em", opacity: 0.7 }}>
                {t("contactsAddress")}
              </span>
              <p className="mt-1.5" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)", lineHeight: 1.6 }}>
                {icg.address}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-secondary)" }}>
                {icg.floor}
              </p>
              <a
                href={icg.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--gold-300)", letterSpacing: "0.1em" }}
              >
                {t("contactsRoute")} →
              </a>
            </div>

            {/* Phones */}
            <div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gold-300)", letterSpacing: "0.15em", opacity: 0.7 }}>
                {t("contactsPhone")}
              </span>
              <div className="mt-1.5 space-y-1.5">
                {icg.phones.map((p) => (
                  <div key={p.phone} className="flex items-baseline gap-2">
                    <a
                      href={`tel:${p.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-[var(--gold-200)]"
                      style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}
                    >
                      {p.phone}
                    </a>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-tertiary)" }}>
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email + Schedule */}
            <div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gold-300)", letterSpacing: "0.15em", opacity: 0.7 }}>
                {t("contactsEmail")}
              </span>
              <a
                href={`mailto:${icg.email}`}
                className="block mt-1.5 transition-colors hover:text-[var(--gold-200)]"
                style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}
              >
                {icg.email}
              </a>
              <div className="mt-4">
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gold-300)", letterSpacing: "0.15em", opacity: 0.7 }}>
                  {t("contactsSchedule")}
                </span>
                <p className="mt-1.5" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-primary)" }}>
                  {t("contactsScheduleValue")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="w-full max-w-xl"
        >
          {success ? (
            <div className="flex flex-col items-center text-center py-12">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-300)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h2 className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "var(--text-primary)" }}>
                {t("contactsConfirmTitle")}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", marginBottom: 20 }}>
                {t("contactsConfirmText")}
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="transition-colors hover:text-[var(--gold-200)]"
                style={{
                  fontFamily: "var(--font-body)", fontSize: 13, color: "var(--gold-300)",
                  background: "none", border: "1px solid rgba(200, 168, 78, 0.25)",
                  borderRadius: 8, padding: "10px 24px", cursor: "pointer", letterSpacing: "0.08em",
                }}
              >
                {t("contactsFormSendAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 4, display: "block" }}>
                    {t("contactsFormName")} <span style={{ color: "rgba(200, 168, 78, 0.7)" }}>*</span>
                  </label>
                  <input name="name" value={form.name} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required minLength={2} style={inputStyle} placeholder={t("contactsFormName")} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 4, display: "block" }}>
                    {t("contactsFormPhone")} <span style={{ color: "rgba(200, 168, 78, 0.7)" }}>*</span>
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required style={inputStyle} placeholder="+380" />
                </div>
              </div>

              <div className="mb-4">
                <label style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 4, display: "block" }}>
                  {t("contactsFormEmail")}
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} style={inputStyle} placeholder="email@example.com" />
              </div>

              <div className="mb-5">
                <label style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 4, display: "block" }}>
                  {t("contactsFormMessage")} <span style={{ color: "rgba(200, 168, 78, 0.7)" }}>*</span>
                </label>
                <textarea name="message" value={form.message} onChange={handleChange} onFocus={onFocus} onBlur={onBlur} required minLength={10} rows={4} style={{ ...inputStyle, resize: "vertical" as const }} placeholder={t("contactsFormMessage")} />
              </div>

              {error && (
                <p className="mb-4" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#e87461" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="group relative w-full overflow-hidden transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 400,
                  letterSpacing: "0.12em", padding: "14px 0", borderRadius: 10,
                  border: "1px solid rgba(184, 154, 90, 0.4)", background: "transparent",
                  color: "var(--gold-100)", cursor: "pointer",
                }}
              >
                <span
                  className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "rgba(184, 154, 90, 0.1)", zIndex: 0 }}
                />
                <span className="relative z-10">
                  {sending ? t("contactsFormSending") : t("contactsFormSend")}
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col items-center gap-3 py-6">
        <LangSwitcher />
        <span className="font-light" style={{ fontFamily: "var(--font-body)", fontSize: "0.725rem", letterSpacing: "0.12em", color: "var(--text-tertiary)", opacity: 0.6 }}>
          © {new Date().getFullYear()} ICG
        </span>
      </div>

      {/* Mobile call button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4" style={{ background: "linear-gradient(to top, var(--bg-deep) 60%, transparent)" }}>
        <a
          href={`tel:${icg.mainPhone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-3 w-full py-4 transition-all duration-300"
          style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400, letterSpacing: "0.15em",
            borderRadius: 12, border: "1px solid rgba(184, 154, 90, 0.4)",
            background: "rgba(184, 154, 90, 0.08)", backdropFilter: "blur(20px)", color: "var(--gold-100)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          {t("contactsCallUs")}
        </a>
      </div>
    </main>
  );
}
