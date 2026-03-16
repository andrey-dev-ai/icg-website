"use client";

import { useState } from "react";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { DimensionLine } from "@/components/ui/DimensionLine";

const BUSINESS_OPTIONS = [
  { value: "", label: "Оберіть напрямок" },
  { value: "tehmas", label: "TEHMAS — будівництво, техніка, піскоструй" },
  { value: "grand-pellets", label: "Grand Pellets — паливні пелети" },
  { value: "the-roof", label: "The Roof — нерухомість" },
  { value: "zahistbud", label: "Захистбуд — видобуток" },
  { value: "general", label: "Загальне питання до ICG" },
];

const CONTACTS = [
  {
    business: "TEHMAS",
    phone: "+38 (095) 400 70 70",
    email: "info@tehmas.com.ua",
    address: "оф. 9/3",
  },
  {
    business: "Grand Pellets",
    phone: "+38 (068) 400 70 70",
    email: "info@grand-pellets.com",
    address: "оф. 8/3",
  },
  {
    business: "Захистбуд",
    phone: "+38 (095) 556 36 96",
    email: "info@zahbud.com",
    address: "оф. 8/5",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with form handler (n8n webhook, email, etc.)
    alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-bg-primary pb-16 pt-32 md:pb-20 md:pt-40">
        <BlueprintGrid />
        <NoiseOverlay />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted">
            ICG
          </p>
          <h1 className="mt-6 font-display text-4xl text-text-primary md:text-6xl">
            Контакти
          </h1>
          <div className="mt-6 max-w-xs">
            <DimensionLine label="Київ" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-bg-primary pb-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            {/* Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                    Ім&apos;я *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent-primary"
                    placeholder="Ваше ім'я"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent-primary"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full border border-line bg-transparent px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent-primary"
                      placeholder="+38 (0__) ___ __ __"
                    />
                  </div>
                </div>

                {/* Business select */}
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                    Напрямок
                  </label>
                  <select
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    className="w-full border border-line bg-bg-primary px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent-primary"
                  >
                    {BUSINESS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                    Повідомлення *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none border border-line bg-transparent px-4 py-3 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent-primary"
                    placeholder="Розкажіть про ваш проєкт або питання"
                  />
                </div>

                <button
                  type="submit"
                  className="border-2 border-accent-primary px-10 py-3 font-mono text-sm uppercase tracking-wider text-accent-primary transition-all duration-300 hover:bg-accent-primary hover:text-text-primary"
                >
                  Надіслати
                </button>
              </form>
            </div>

            {/* Contact info sidebar */}
            <div className="md:col-span-4 md:col-start-9">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Адреса
                  </p>
                  <p className="mt-3 font-body text-sm text-text-primary">
                    м. Київ, просп. В. Лобановського, 56/21
                  </p>
                </div>

                {/* Business contacts */}
                <div className="border-t border-line pt-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Напрямки
                  </p>
                  <div className="mt-4 space-y-6">
                    {CONTACTS.map((c) => (
                      <div key={c.business}>
                        <p className="font-body text-sm font-medium text-text-primary">
                          {c.business}
                        </p>
                        <p className="mt-1 font-mono text-xs text-text-muted">
                          {c.address}
                        </p>
                        <a
                          href={`tel:${c.phone.replace(/[\s()]/g, "")}`}
                          className="mt-1 block font-mono text-xs text-text-secondary transition-colors hover:text-accent-primary"
                        >
                          {c.phone}
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="block font-mono text-xs text-text-secondary transition-colors hover:text-accent-primary"
                        >
                          {c.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
