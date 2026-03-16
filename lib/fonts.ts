import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "600"],
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});
