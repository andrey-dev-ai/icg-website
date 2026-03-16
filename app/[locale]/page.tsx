import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <HomePageContent params={params} />;
}

async function HomePageContent({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
            ICG GROUP
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            Будуємо.
            <br />
            Захищаємо.
            <br />
            Створюємо.
          </h1>
          <p className="mt-8 max-w-xl font-body text-lg font-light text-text-secondary">
            Інвестиційно-комерційна група ICG — чотири напрямки з єдиним
            стандартом якості.
          </p>
        </div>
      </section>
    </main>
  );
}
