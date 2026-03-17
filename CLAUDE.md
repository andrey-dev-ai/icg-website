# ICG Corporate Website

## Проект
Корпоративный сайт ICG (Інвестиційно-комерційна група) — icg.in.ua

## Стек
- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4 + CSS variables
- shadcn/ui
- GSAP + ScrollTrigger (счётчики, scroll-анимации)
- Framer Motion / `motion` (load-анимации, hover, transitions)
- Lenis (smooth scroll)
- Fonts: Cormorant Garamond (display) + Outfit (body)
- Icons: Lucide React

## Деплой
- Vercel (автодеплой при push в main)
- GitHub: andrey-dev-ai/icg-website

## Команды
- `npm run dev` — dev-сервер
- `npm run build` — production build
- `npm run lint` — линтинг

## Дизайн-система
- Тёмная тема (всегда), золотые акценты
- CSS переменные: --bg-deep, --gold-100..400, --text-primary/secondary/tertiary
- Glassmorphism: `.glass-card` класс
- Шрифты: `font-[family-name:var(--font-display)]` для заголовков

## Структура
- `src/components/home/` — секции главной
- `src/components/ui/` — переиспользуемые компоненты
- `src/lib/data.ts` — все данные бизнесов
- `src/lib/animations.ts` — конфигурация анимаций
- `src/providers/LenisProvider.tsx` — smooth scroll
