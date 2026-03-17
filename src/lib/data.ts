import type { Business, Category, Metric } from "./types";

export const homeMetrics: Metric[] = [
  { value: 15, suffix: "+", label: "Років досвіду" },
  { value: 5, label: "Напрямків бізнесу" },
  { value: 30, suffix: "+", label: "Завершених проєктів" },
  { value: 80, suffix: "+", label: "Спеціалістів" },
];

export const categories: Category[] = [
  {
    slug: "construction",
    name: "Будівництво",
    icon: "Building2",
    businesses: ["tehmas"],
  },
  {
    slug: "realestate",
    name: "Нерухомість",
    icon: "LayoutGrid",
    businesses: ["the-roof"],
  },
  {
    slug: "production",
    name: "Виробництво",
    icon: "Factory",
    businesses: ["grand-pellets"],
  },
  {
    slug: "projects",
    name: "Реалізовані проєкти",
    icon: "Layers",
    businesses: ["gate-one"],
  },
  {
    slug: "mining",
    name: "Корисні копалини",
    icon: "Globe",
    businesses: ["zahistbud"],
  },
];

export const businesses: Business[] = [
  {
    id: "tehmas",
    name: "TEHMAS",
    slug: "construction",
    categorySlug: "construction",
    website: "tehmas.com.ua",
    tagline: "Ваш об'єкт — наша відповідальність",
    description:
      "Промислове будівництво від фундаменту до введення в експлуатацію. Генпідряд, оренда спецтехніки, піскоструйна обробка та антикорозійний захист.",
    metrics: [
      { value: 15, suffix: "+", label: "Років на ринку" },
      { value: 30, suffix: "+", label: "Об'єктів здано" },
      { value: 40, suffix: "+", label: "Одиниць техніки" },
      { value: 80, suffix: "+", label: "Спеціалістів" },
    ],
    services: [
      {
        title: "Промислове будівництво",
        description:
          "Генпідряд: виробничі цехи, складські комплекси, логістичні термінали — від проєктування до введення в експлуатацію.",
      },
      {
        title: "Оренда спецтехніки",
        description:
          "Власний парк 40+ одиниць: крани, екскаватори, самоскиди, автовишки, бульдозери. З оператором або без.",
      },
      {
        title: "Піскоструйна обробка та АКЗ",
        description:
          "Мобільна обробка по всій Україні. ISO 8501, Sa 2.5–Sa 3. Антикорозійний захист ISO 12944, гарантія від 2 років.",
      },
    ],
    contacts: {
      address: "м. Київ, просп. В. Лобановського, 56/21, оф. 9/3",
      phone: "+38 (095) 400 70 70",
      email: "info@tehmas.com.ua",
    },
  },
  {
    id: "the-roof",
    name: "THE ROOF",
    slug: "realestate",
    categorySlug: "realestate",
    tagline: "Ексклюзивний брокеридж та управління нерухомістю",
    description:
      "Брокеридж логістичних та офісних об'єктів, управління комерційною нерухомістю, інвестиційний консалтинг.",
    metrics: [],
    services: [
      {
        title: "Ексклюзивний брокеридж",
        description:
          "Логістичні та офісні об'єкти найвищого класу.",
      },
      {
        title: "Управління нерухомістю",
        description:
          "Професійне управління комерційною нерухомістю.",
      },
      {
        title: "Інвестиційний консалтинг",
        description:
          "Супровід інвестиційних рішень у сфері нерухомості.",
      },
    ],
    contacts: {
      address: "м. Київ, просп. В. Лобановського, 56/21",
      phone: "+38 (095) 400 70 70",
      email: "info@icg.in.ua",
    },
  },
  {
    id: "grand-pellets",
    name: "GRAND PELLETS",
    slug: "production",
    categorySlug: "production",
    website: "grand-pellets.com",
    tagline: "Європейська якість деревних пелет",
    description:
      "Виробництво паливних пелет з деревини — сертифікація ENplus A1/A2, FSC, DIN. Експорт до Європи.",
    metrics: [
      { value: 8, suffix: "+", label: "Років у галузі" },
      { value: 205, label: "€/т від" },
      { value: 5, label: "Країн експорту" },
    ],
    services: [
      {
        title: "Пелети з твердих порід",
        description: "Hardwood pellets — від 205 €/т. ENplus A1/A2.",
      },
      {
        title: "Пелети з хвойних порід",
        description: "Softwood pellets — від 205 €/т.",
      },
      {
        title: "Ялинові пелети",
        description: "Spruce pellets — від 250 €/т. Преміум якість.",
      },
    ],
    contacts: {
      address: "м. Київ, просп. В. Лобановського, 56/21, оф. 8/3",
      phone: "+38 (068) 400 70 70",
      email: "info@grand-pellets.com",
    },
  },
  {
    id: "gate-one",
    name: "GATE ONE",
    slug: "projects",
    categorySlug: "projects",
    website: "tehmas.com.ua/uk/projects/gate-one-brovary-2024",
    tagline: "Логістичний комплекс класу A+",
    description:
      "Логістичний комплекс Gate One Brovary — 7 000 м², клас A+, Бровари, траса E95.",
    metrics: [
      { value: 7000, label: "м² площі" },
      { value: 36, label: "Місяців будівництва" },
    ],
    services: [
      {
        title: "Логістичний комплекс",
        description:
          "Клас A+, 7 000 м², стратегічне розташування на трасі E95 (Київ–Чернігів).",
      },
    ],
    contacts: {
      address: "м. Бровари, Київська обл., траса E95",
      phone: "+38 (095) 400 70 70",
      email: "info@tehmas.com.ua",
    },
  },
  {
    id: "zahistbud",
    name: "ЗАХИСТБУД",
    slug: "mining",
    categorySlug: "mining",
    website: "zahbud.com",
    tagline: "Видобуток та постачання будівельної сировини",
    description:
      "Видобуток піску, глини, щебеню, каоліну. Кар'єрний спосіб, сертифікована продукція, постачання по Україні та Європі.",
    metrics: [
      { value: 2.2, label: "Млн т/рік потужності" },
      { value: 600, label: "Тис. т запас" },
      { value: 200, suffix: "+", label: "Підприємств-клієнтів" },
    ],
    services: [
      {
        title: "Пісок",
        description:
          "Будівельний та кварцовий пісок для будівництва, виробництва скла, металургії.",
      },
      {
        title: "Глина та каолін",
        description:
          "Для хімічної промисловості, машинобудування, керамічного виробництва.",
      },
      {
        title: "Щебінь",
        description:
          "Для будівництва доріг, фундаментів, ландшафтного дизайну.",
      },
    ],
    contacts: {
      address: "м. Київ, просп. В. Лобановського, 56/21, оф. 8/5",
      phone: "+38 (095) 556 36 96",
      email: "info@zahbud.com",
    },
  },
];
