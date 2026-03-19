"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useLang } from "@/providers/LangProvider";
import { easings } from "@/lib/animations";
import LangSwitcher from "@/components/ui/LangSwitcher";

/* ── Data ── */

const icg = {
  address: "м. Київ, проспект Валерія Лобановського, 56",
  floor: "9 поверх, офіс 8/3",
  email: "info@icg.in.ua",
  mainPhone: "044 334 47 44",
  departments: [
    { key: "reception", label: "Приймальна", phone: "044 334 47 44" },
    { key: "org", label: "Організаційний відділ", phone: "044 334 44 07" },
    { key: "accounting", label: "Бухгалтерія", phone: "044 334 43 07" },
  ],
  mapsUrl: "https://maps.google.com/?q=50.4225,30.4414",
};

const ease = easings.smooth;

const tl = {
  title: 0.3,
  divider: 0.6,
  address: 0.8,
  contacts: 1.0,
  footer: 1.4,
};

/* ── Page ── */

export default function ContactsPage() {
  const { t } = useLang();

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Ambient ── */}
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
      <motion.div
        animate={{ opacity: [0, 0.5, 0.25, 0.5], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "50%", transform: "translateX(-50%)",
          width: "80%", height: "50%",
          background: "radial-gradient(ellipse at center, rgba(164,136,74,0.06) 0%, transparent 65%)",
        }}
      />

      <LangSwitcher />

      {/* ── Content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-20 md:py-28 min-h-screen">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <Link href="/" className="inline-block mb-12 transition-opacity hover:opacity-80">
            <Image
              src="/images/icg-logo.png"
              alt="ICG — Investment Commercial Group"
              width={120}
              height={120}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              priority
            />
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: tl.title, ease }}
          className="text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "var(--text-primary)",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {t("contactsTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: tl.title + 0.15, ease }}
          className="text-center"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "var(--text-tertiary)",
            textTransform: "uppercase",
          }}
        >
          {t("contactsSubtitle")}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tl.divider, duration: 1, ease }}
          className="flex items-center gap-3 my-12 md:my-16"
        >
          <motion.div
            initial={{ width: 0 }} animate={{ width: 56 }}
            transition={{ delay: tl.divider + 0.2, duration: 0.8, ease }}
            className="h-px overflow-hidden"
            style={{ background: "linear-gradient(90deg, transparent, var(--gold-300))" }}
          />
          <div className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ background: "var(--gold-300)", opacity: 0.5 }} />
          <motion.div
            initial={{ width: 0 }} animate={{ width: 56 }}
            transition={{ delay: tl.divider + 0.2, duration: 0.8, ease }}
            className="h-px overflow-hidden"
            style={{ background: "linear-gradient(90deg, var(--gold-300), transparent)" }}
          />
        </motion.div>

        {/* ── Address Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: tl.address, ease }}
          className="text-center mb-14 md:mb-16"
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.6,
              letterSpacing: "0.02em",
            }}
          >
            {icg.address}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 300,
              color: "var(--text-secondary)",
              marginTop: 4,
              lineHeight: 1.6,
            }}
          >
            {icg.floor}
          </p>

          <a
            href={icg.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 uppercase hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.2em",
              color: "var(--gold-300)",
            }}
          >
            {t("contactsRoute")} &rarr;
          </a>
        </motion.div>

        {/* ── Contact Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: tl.contacts, ease }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center max-w-[800px] w-full"
        >
          {/* Phones */}
          {icg.departments.map((dept, i) => (
            <motion.div
              key={dept.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tl.contacts + 0.1 * i, ease }}
            >
              <span
                className="block uppercase mb-3"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "var(--gold-300)",
                  opacity: 0.7,
                }}
              >
                {dept.label}
              </span>
              <a
                href={`tel:${dept.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-[var(--gold-200)]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  letterSpacing: "0.05em",
                }}
              >
                {dept.phone}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: tl.contacts + 0.4, ease }}
          className="mt-12 md:mt-14 text-center"
        >
          <a
            href={`mailto:${icg.email}`}
            className="transition-colors hover:text-[var(--gold-200)]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              letterSpacing: "0.1em",
            }}
          >
            {icg.email}
          </a>
        </motion.div>

        {/* Schedule */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: tl.contacts + 0.5, ease }}
          className="mt-4 text-center"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 300,
            color: "var(--text-tertiary)",
            letterSpacing: "0.08em",
          }}
        >
          {t("contactsScheduleValue")}
        </motion.p>

        {/* Back home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: tl.footer, ease }}
          className="mt-16 md:mt-20"
        >
          <Link
            href="/"
            className="uppercase hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: "0.2em",
              color: "var(--text-tertiary)",
            }}
          >
            &larr; {t("contactsBackHome")}
          </Link>
        </motion.div>
      </div>

      {/* Copyright */}
      <span
        className="text-center pb-6 font-light uppercase"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.725rem",
          letterSpacing: "0.12em",
          color: "var(--text-tertiary)",
          opacity: 0.4,
        }}
      >
        &copy; {new Date().getFullYear()} ICG
      </span>

      {/* Mobile call button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4" style={{ background: "linear-gradient(to top, var(--bg-deep) 60%, transparent)" }}>
        <a
          href={`tel:${icg.mainPhone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-3 w-full py-4 uppercase transition-all duration-300"
          style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400,
            letterSpacing: "0.15em", borderRadius: 12,
            border: "1px solid rgba(184, 154, 90, 0.4)",
            background: "rgba(184, 154, 90, 0.08)",
            backdropFilter: "blur(20px)",
            color: "var(--gold-100)",
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
