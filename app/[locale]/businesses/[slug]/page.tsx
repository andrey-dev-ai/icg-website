import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { businesses, businessSlugs } from "@/content/businesses";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessAbout } from "@/components/business/BusinessAbout";
import { BusinessServices } from "@/components/business/BusinessServices";
import { BusinessCTA } from "@/components/business/BusinessCTA";

export function generateStaticParams() {
  return businessSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const biz = businesses[slug];
  if (!biz) return {};

  return {
    title: `${biz.name} — ${biz.tagline} | ICG`,
    description: biz.description[0],
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const business = businesses[slug];
  if (!business) {
    notFound();
  }

  return (
    <main>
      <BusinessHero business={business} />
      <BusinessAbout business={business} />
      <BusinessServices business={business} />
      <BusinessCTA business={business} />
    </main>
  );
}
