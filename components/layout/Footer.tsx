import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const BUSINESSES = [
  { name: "TEHMAS", href: "/businesses/tehmas" },
  { name: "Grand Pellets", href: "/businesses/grand-pellets" },
  { name: "The Roof", href: "/businesses/the-roof" },
  { name: "Захистбуд", href: "/businesses/zahistbud" },
];

const CONTACTS = [
  { label: "TEHMAS", phone: "+38 (095) 400 70 70" },
  { label: "Grand Pellets", phone: "+38 (068) 400 70 70" },
  { label: "Захистбуд", phone: "+38 (095) 556 36 96" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-primary">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-text-primary">
              ICG
            </p>
            <p className="mt-3 font-mono text-xs text-text-muted">
              Інвестиційно-комерційна група
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {tNav("home")}
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="/about"
                className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {tNav("about")}
              </Link>
              <Link
                href="/businesses"
                className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {tNav("businesses")}
              </Link>
              <Link
                href="/contact"
                className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {tNav("contact")}
              </Link>
            </nav>
          </div>

          {/* Businesses */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {tNav("businesses")}
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {BUSINESSES.map((b) => (
                <Link
                  key={b.name}
                  href={b.href}
                  className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {b.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {tNav("contact")}
            </p>
            <p className="mt-4 font-body text-sm text-text-secondary">
              {tContact("address")}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={`tel:${c.phone.replace(/[\s()]/g, "")}`}
                  className="font-mono text-xs text-text-muted transition-colors hover:text-accent-primary"
                >
                  {c.label}: {c.phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 md:flex-row">
          <p className="font-mono text-xs text-text-muted">
            {t("rights", { year })}
          </p>
          <Link
            href="/privacy"
            className="font-mono text-xs text-text-muted transition-colors hover:text-text-secondary"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
