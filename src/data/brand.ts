// Static brand facts and copy. Only verified channels — no invented contacts.

export const LINKS = {
  // Telegram group "Kaskadyor moto shop" (the double "ka" in the handle is correct, verified 2026-10-12)
  telegram: 'https://t.me/kaskakadyor',
  instagram: 'https://www.instagram.com/_kaskadyor/',
} as const

export const BRAND = {
  name: 'KASKADYOR',
  location: 'Toshkent, Sabzazor ko‘chasi',
  delivery: 'O‘zbekiston bo‘ylab',
} as const

export const HERO_COPY = {
  leadIn: 'BU SHUNCHAKI HAYDASH EMAS.',
  headline: ['TEZLIKNI', 'HIS QIL.', 'HIMOYANI TANLA.'] as const,
  description:
    'Kaskadyor — haqiqiy mototsiklchilar uchun sifatli ekipirovka, motoshlemlar va ehtiyot qismlar. O‘zbekiston bo‘ylab yetkazib berish.',
} as const

export const NEW_TAB_HINT = '(yangi oynada ochiladi)'

/** Development mode (src/lib/pages.ts): the holding page on `/` — the notice plus the developer's contacts. */
export const HOLDING_COPY = {
  headline: ['SAYT', 'ISHLAB', 'CHIQILMOQDA.'] as const,
} as const

export type DeveloperContactId = 'telegram' | 'whatsapp' | 'site' | 'instagram' | 'linkedin' | 'github'

/**
 * Developer contacts, requested by the owner (2026-10-12). Every link and handle is the one
 * published on https://ismoillooff.uz (llms.txt "Official links", read 2026-10-12);
 * Telegram is the preferred contact there, so it leads.
 */
export const DEVELOPER = {
  brand: 'Ismoillooff',
  name: 'Hayotbek Ismoilov',
  role: 'Full-Stack dasturchi',
  contacts: [
    { id: 'telegram', label: 'TELEGRAM', value: '@ismoillooff', href: 'https://t.me/ismoillooff' },
    { id: 'whatsapp', label: 'WHATSAPP', value: '+998 95 005 15 45', href: 'https://wa.me/998950051545' },
    { id: 'site', label: 'SAYT', value: 'ismoillooff.uz', href: 'https://ismoillooff.uz/uz' },
    { id: 'instagram', label: 'INSTAGRAM', value: '@ismoillooff', href: 'https://instagram.com/ismoillooff' },
    { id: 'linkedin', label: 'LINKEDIN', value: 'in/ismoillooff', href: 'https://www.linkedin.com/in/ismoillooff/' },
    { id: 'github', label: 'GITHUB', value: 'ismoillooff', href: 'https://github.com/ismoillooff' },
  ] as const satisfies readonly { id: DeveloperContactId; label: string; value: string; href: string }[],
} as const

const ASSETS = '/assets/kaskadyor'

export interface ResponsiveImage {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
}

export const MOTORCYCLE: ResponsiveImage = {
  src: `${ASSETS}/hero/hero-motorcycle.webp`,
  srcSet: [
    `${ASSETS}/responsive/hero-motorcycle-960w.webp 960w`,
    `${ASSETS}/responsive/hero-motorcycle-1400w.webp 1400w`,
    `${ASSETS}/hero/hero-motorcycle.webp 2000w`,
  ].join(', '),
  width: 2000,
  height: 1500,
  alt: 'Qora-qizil sport mototsikl qorong‘i garajda',
}

export const BACKGROUND = {
  desktop: `${ASSETS}/hero/hero-background.webp`,
  mobile: `${ASSETS}/hero/hero-background-mobile.webp`,
  carbon: `${ASSETS}/effects/carbon-texture.webp`,
} as const

export type GearId = 'N' | '1' | '2' | '3'

export interface Gear {
  id: GearId
  /** Label under the numeral in the selector */
  label: string
  title: string
  description: string
  cta: { label: string; href: string; ariaLabel: string }
  /** Equipment visual; neutral gear shows the motorcycle only */
  product?: ResponsiveImage & { shape: 'square' | 'tall' }
}

const product = (file: string, width: number, height: number, alt: string, shape: 'square' | 'tall') => ({
  src: `${ASSETS}/products/${file}.webp`,
  srcSet: `${ASSETS}/responsive/${file}-640w.webp 640w, ${ASSETS}/products/${file}.webp 1000w`,
  width,
  height,
  alt,
  shape,
})

export const GEARS: readonly Gear[] = [
  {
    id: 'N',
    label: 'MOTO',
    title: 'NEYTRAL',
    description: 'Uzatmani almashtiring: 1 — motoshlem, 2 — qo‘lqop, 3 — ekipirovka.',
    cta: {
      label: 'Katalog Telegramda',
      href: LINKS.telegram,
      ariaLabel: `Kaskadyor katalogini Telegramda ochish ${NEW_TAB_HINT}`,
    },
  },
  {
    id: '1',
    label: 'MOTOSHLEMLAR',
    title: 'MOTOSHLEMLAR',
    description: 'Yo‘ldagi eng muhim himoya to‘g‘ri tanlangan shlemdan boshlanadi.',
    cta: {
      label: 'Telegramda so‘rash',
      href: LINKS.telegram,
      ariaLabel: `Motoshlemlar haqida Telegramda so‘rash ${NEW_TAB_HINT}`,
    },
    product: product('helmet', 1000, 1000, 'Qora karbon va qizil chiziqli motoshlem', 'square'),
  },
  {
    id: '2',
    label: 'QO‘LQOPLAR',
    title: 'QO‘LQOPLAR',
    description: 'Rulni ishonchli boshqarish va qo‘llarni himoyalash uchun.',
    cta: {
      label: 'Telegramda so‘rash',
      href: LINKS.telegram,
      ariaLabel: `Moto qo‘lqoplar haqida Telegramda so‘rash ${NEW_TAB_HINT}`,
    },
    product: product('gloves', 1000, 1000, 'Bir juft qora-qizil himoyali moto qo‘lqop', 'square'),
  },
  {
    id: '3',
    label: 'EKIPIROVKALAR',
    title: 'EKIPIROVKALAR',
    description: 'Himoyali moto kiyim — har bir safar uchun.',
    cta: {
      label: 'Telegramda so‘rash',
      href: LINKS.telegram,
      ariaLabel: `Moto ekipirovkalar haqida Telegramda so‘rash ${NEW_TAB_HINT}`,
    },
    product: product('racing-suit', 1000, 1400, 'Qora-qizil charm moto kombinezon', 'tall'),
  },
]

export const INFO_STRIP = [
  { index: '01', text: 'PREMIUM EKIPIROVKA' },
  { index: '02', text: 'O‘ZBEKISTON BO‘YLAB YETKAZISH' },
  { index: '03', text: 'KASKADYOR — TOSHKENT' },
] as const
