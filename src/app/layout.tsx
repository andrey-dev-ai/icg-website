import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import LangProvider from "@/providers/LangProvider";
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
        className="antialiased"
      >
        <LangProvider>
          <LenisProvider>{children}</LenisProvider>
        </LangProvider>
      </body>
    </html>
  );
}
