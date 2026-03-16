import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export const metadata: Metadata = {
  title: "Політика конфіденційності — ICG",
  description: "Політика конфіденційності Інвестиційно-комерційної групи ICG.",
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="relative bg-bg-primary pb-24 pt-32 md:pt-40">
        <BlueprintGrid />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            ICG
          </p>
          <h1 className="mt-6 font-display text-4xl text-text-primary md:text-5xl">
            Політика конфіденційності
          </h1>

          <div className="mt-12 max-w-3xl space-y-8">
            <Section title="1. Загальні положення">
              Ця політика конфіденційності описує порядок збору, використання та
              захисту персональних даних, які ви надаєте при використанні сайту
              icg.in.ua (далі — Сайт), що належить Інвестиційно-комерційній
              групі ICG.
            </Section>

            <Section title="2. Збір інформації">
              Ми збираємо інформацію, яку ви добровільно надаєте через
              контактну форму: ім&apos;я, email, телефон та зміст повідомлення.
              Ми також автоматично збираємо технічну інформацію (IP-адреса, тип
              браузера, час візиту) для покращення роботи Сайту.
            </Section>

            <Section title="3. Використання інформації">
              Зібрана інформація використовується виключно для: відповіді на
              ваші запити, покращення якості обслуговування, аналітики
              відвідуваності Сайту. Ми не передаємо ваші дані третім особам без
              вашої згоди, окрім випадків, передбачених законодавством України.
            </Section>

            <Section title="4. Захист даних">
              Ми вживаємо розумних заходів для захисту ваших персональних даних
              від несанкціонованого доступу, зміни, розголошення або знищення.
            </Section>

            <Section title="5. Файли cookie">
              Сайт може використовувати файли cookie для забезпечення коректної
              роботи та збору аналітики. Ви можете налаштувати ваш браузер для
              відхилення cookie.
            </Section>

            <Section title="6. Контакти">
              З питань конфіденційності звертайтесь: м. Київ, просп. В.
              Лобановського, 56/21. Email: info@tehmas.com.ua
            </Section>

            <p className="font-mono text-xs text-text-muted">
              Останнє оновлення: березень 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line pt-6">
      <h2 className="font-display text-lg text-text-primary">{title}</h2>
      <p className="mt-3 font-body text-sm font-light leading-relaxed text-text-secondary">
        {children}
      </p>
    </div>
  );
}
