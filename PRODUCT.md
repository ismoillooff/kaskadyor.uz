# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript, Tailwind CSS, Motion (Framer Motion), Lucide React — specified in the client brief (2026-10-12). Static build served by nginx at kaskadyor.uz behind Cloudflare; no backend, database, auth or admin.

## Users

Motorcyclists in Uzbekistan (primarily Tashkent) looking for riding gear — helmets, gloves, suits — and motorcycle spare parts. They arrive from Instagram/Telegram or search, usually on a phone, and want to judge in seconds whether this is a serious moto shop and how to reach it.

## Product Purpose

A one-screen brand site for Kaskadyor, a motorcycle equipment and spare-parts shop. Its job is to present the shop as a premium motorsport identity and route visitors to the real sales/contact channels (Telegram group, Instagram). Success: a visitor taps through to Telegram or Instagram.

## Positioning

A local Tashkent moto shop (Sabzazor ko‘chasi) that sells equipment and spare parts and delivers across Uzbekistan. Ordering and catalog live in Telegram, not on the site.

## Operating Context

- Sales and catalog happen in the Telegram group "Kaskadyor moto shop": https://t.me/kaskakadyor (verified 2026-10-12; the double "ka" is correct).
- Instagram: https://www.instagram.com/_kaskadyor/
- Location: Toshkent, Sabzazor ko‘chasi. Delivery: O‘zbekiston bo‘ylab.
- Site language: Uzbek (Latin), `lang="uz"`.

## Capabilities and Constraints

- Exactly one page, one hero section. No about, grid, testimonials, FAQ, blog, contact form or footer section. (In development mode the public page is the holding page; `/demo` is a noindex preview of the hero, not a second page of the site.)
- Development mode (owner request, 2026-10-12; `UNDER_DEVELOPMENT` in `src/lib/pages.ts`): `/` shows only the "Sayt ishlab chiqilmoqda" notice and the developer's contacts — Hayotbek Ismoilov (Ismoillooff): Telegram @ismoillooff, WhatsApp +998 95 005 15 45, ismoillooff.uz, Instagram, LinkedIn, GitHub, exactly as published on https://ismoillooff.uz. The hero lives on `/demo` (noindex, not linked from `/`).
- Every control must have a real destination; no invented catalog URLs or section anchors.
- api.kaskadyor.uz redirects to kaskadyor.uz (no API exists).

## Brand Commitments

- Name: KASKADYOR. Official logo is PENDING — use a plain typographic wordmark; never fabricate an emblem.
- Client-specified palette: #08090C background, #181A20 surface, #ED1C24 racing red, #F5F5F5 white, #969AA3 muted silver.
- Copy supplied by client (headline "TEZLIKNI / HIS QIL. / HIMOYANI TANLA.", description, CTA labels, info strip).

## Evidence on Hand

- Visual assets: `public/assets/kaskadyor/` (AI-generated campaign concepts — motorcycle, desktop/mobile environments, helmet, gloves, racing suit, carbon texture, racing overlay). See `metadata/ASSET-GUIDE.md`.
- These images are atmosphere/concept, not photos of verified inventory or certified protective equipment.
- Absent for the shop, must not be fabricated: Kaskadyor phone numbers, other Kaskadyor social accounts, exact address/house number, delivery speeds or guarantees, prices, certifications, reviews, structured business data.
- The developer's contacts on the holding page are a separate, sourced fact: copied from the "Official links" in https://ismoillooff.uz/llms.txt (read 2026-10-12) and shown at the owner's request. They are not the shop's contacts and must not be presented as such.

## Product Principles

1. Route to the real channel — Telegram is the catalog and the checkout.
2. The motorcycle is the brand symbol; equipment supports it, never replaces it.
3. Say only what is true: no invented claims, contacts or logo.
4. Phone-first: most visitors arrive from social apps on mobile.

## Accessibility & Inclusion

WCAG AA contrast, full keyboard operation, visible focus, reduced-motion support, content usable if animations fail.
