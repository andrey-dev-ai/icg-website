import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { instrumentSerif, ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "ICG — Інвестиційно-комерційна група",
  description:
    "Промислове будівництво, логістика, енергетика, нерухомість та видобуток — чотири напрямки з єдиним стандартом якості.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === "ua" ? "uk" : locale}>
      <body
        className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
