"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/businesses", key: "businesses" },
  { href: "/contact", key: "contact" },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");

  return (
    <div
      className={`fixed inset-0 top-16 z-40 bg-bg-primary transition-all duration-500 md:hidden ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="flex flex-col px-6 pt-12" aria-label="Mobile navigation">
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={onClose}
            className="border-b border-line py-6 font-display text-2xl text-text-primary transition-colors hover:text-accent-primary"
            style={{
              transitionDelay: isOpen ? `${i * 0.08}s` : "0s",
              transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isOpen ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="mr-4 font-mono text-xs text-text-muted">
              0{i + 1}
            </span>
            {t(item.key)}
          </Link>
        ))}
      </nav>
    </div>
  );
}
