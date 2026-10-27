// Site mode and the pages each mode prerenders. One switch: flip UNDER_DEVELOPMENT to
// false and `/` serves the full hero again (no /demo page is built).

export const UNDER_DEVELOPMENT = true

export const DEMO_PATH = '/demo'

/** holding = "sayt ishlab chiqilmoqda" page · demo = current hero under /demo · live = hero on / */
export type PageId = 'holding' | 'demo' | 'live'

export function pageForPath(pathname: string): PageId {
  if (!UNDER_DEVELOPMENT) return 'live'
  return pathname === DEMO_PATH ? 'demo' : 'holding'
}

const SITE = 'https://kaskadyor.uz'
const LIVE_TITLE = 'Kaskadyor — Moto Ekipirovka va Ehtiyot Qismlar'
const LIVE_DESCRIPTION =
  'Kaskadyor — mototsiklchilar uchun sifatli motoshlemlar, ekipirovkalar, aksessuarlar va ehtiyot qismlar. Toshkent va O‘zbekiston bo‘ylab yetkazib berish.'

export interface PageHead {
  /** URL path the prerendered file is served at */
  path: string
  page: PageId
  title: string
  description: string
  canonical: string
  noindex: boolean
  /** The hero motorcycle preload only pays off where the bike is shown */
  preloadBike: boolean
}

export const PAGES: readonly PageHead[] = UNDER_DEVELOPMENT
  ? [
      {
        path: '/',
        page: 'holding',
        title: 'Kaskadyor — sayt ishlab chiqilmoqda',
        description:
          'Kaskadyor — moto ekipirovka, motoshlemlar va ehtiyot qismlar. Sayt ishlab chiqilmoqda. Dasturchi: Hayotbek Ismoilov (Ismoillooff).',
        canonical: `${SITE}/`,
        noindex: false,
        preloadBike: false,
      },
      {
        path: DEMO_PATH,
        page: 'demo',
        title: 'Kaskadyor — demo',
        description: LIVE_DESCRIPTION,
        canonical: `${SITE}${DEMO_PATH}`,
        noindex: true,
        preloadBike: true,
      },
    ]
  : [
      {
        path: '/',
        page: 'live',
        title: LIVE_TITLE,
        description: LIVE_DESCRIPTION,
        canonical: `${SITE}/`,
        noindex: false,
        preloadBike: true,
      },
    ]
