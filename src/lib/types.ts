export interface Metric {
  value: number;
  suffix?: string;
  label: string;
}

export interface Business {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  website?: string;
  tagline: string;
  description: string;
  metrics: Metric[];
  services: { title: string; description: string }[];
  contacts: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  businesses: string[];
}
