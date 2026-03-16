import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Businesses } from "@/components/sections/Businesses";
import { GateOneShowcase } from "@/components/sections/GateOneShowcase";
import { Scale } from "@/components/sections/Scale";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Geography } from "@/components/sections/Geography";
import { CTA } from "@/components/sections/CTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Businesses />
      <GateOneShowcase />
      <Scale />
      <About />
      <Approach />
      <Geography />
      <CTA />
    </main>
  );
}
