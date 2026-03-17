export type Locale = "uk" | "ru" | "en";

export const locales: Locale[] = ["uk", "ru", "en"];

export const localeLabels: Record<Locale, string> = {
  uk: "UA",
  ru: "RU",
  en: "EN",
};

const translations = {
  uk: {
    tagline: "Інвестиційно-комерційна група",
    slogan: "Ресурси стають активами. Ідеї — працюючим бізнесом.",
    sectionTitle: "Напрямки бізнесу",
    contacts: "Контакти",
    metricsYears: "Років досвіду",
    metricsDirections: "Напрямків бізнесу",
    metricsProjects: "Завершених проєктів",
    metricsSpecialists: "Спеціалістів",
    cardConstruction: "Будівництво",
    cardConstructionDesc: "Власна техніка, команда та повний цикл будівництва",
    cardRealestate: "Нерухомість",
    cardRealestateDesc: "Консалтинг, управління та інвестиції в комерційну та житлову нерухомість",
    cardProduction: "Виробництво",
    cardProductionDesc: "Створення продуктів, що змінюють ринок",
    cardMining: "Корисні копалини",
    cardMiningDesc: "Розвідка, видобуток та реалізація природних ресурсів",
    cardProjects: "Реалізовані проєкти",
    cardProjectsDesc: "Портфоліо, яке говорить за нас",
  },
  ru: {
    tagline: "Инвестиционно-коммерческая группа",
    slogan: "Ресурсы становятся активами. Идеи — работающим бизнесом.",
    sectionTitle: "Направления бизнеса",
    contacts: "Контакты",
    metricsYears: "Лет опыта",
    metricsDirections: "Направлений бизнеса",
    metricsProjects: "Завершённых проектов",
    metricsSpecialists: "Специалистов",
    cardConstruction: "Строительство",
    cardConstructionDesc: "Собственная техника, команда и полный цикл строительства",
    cardRealestate: "Недвижимость",
    cardRealestateDesc: "Консалтинг, управление и инвестиции в коммерческую и жилую недвижимость",
    cardProduction: "Производство",
    cardProductionDesc: "Создание продуктов, меняющих рынок",
    cardMining: "Полезные ископаемые",
    cardMiningDesc: "Разведка, добыча и реализация природных ресурсов",
    cardProjects: "Реализованные проекты",
    cardProjectsDesc: "Портфолио, которое говорит за нас",
  },
  en: {
    tagline: "Investment & Commercial Group",
    slogan: "Resources become assets. Ideas become working businesses.",
    sectionTitle: "Business directions",
    contacts: "Contacts",
    metricsYears: "Years of experience",
    metricsDirections: "Business directions",
    metricsProjects: "Completed projects",
    metricsSpecialists: "Specialists",
    cardConstruction: "Construction",
    cardConstructionDesc: "Own equipment, team and full construction cycle",
    cardRealestate: "Real Estate",
    cardRealestateDesc: "Consulting, management and investment in commercial and residential real estate",
    cardProduction: "Production",
    cardProductionDesc: "Creating products that change the market",
    cardMining: "Mining",
    cardMiningDesc: "Exploration, extraction and sale of natural resources",
    cardProjects: "Completed Projects",
    cardProjectsDesc: "A portfolio that speaks for itself",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["uk"];

export function getTranslations(locale: Locale) {
  return translations[locale];
}
