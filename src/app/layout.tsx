import type { Metadata } from "next";
import { Cormorant, Raleway } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import StarfieldCanvas from "@/components/ui/StarfieldCanvas";

const cormorant = Cormorant({
  variable: "--font-display",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["100", "200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICG — Інвестиції & Промисловість",
  description:
    "Інвестиційно-комерційна група — будівництво, нерухомість, виробництво, видобуток корисних копалин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="dark">
      <body
        className={`${cormorant.variable} ${raleway.variable} antialiased`}
      >
        <StarfieldCanvas />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
