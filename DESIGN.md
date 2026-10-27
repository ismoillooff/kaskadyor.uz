---
name: Kaskadyor
description: Night-garage motorsport one-sheet for a Tashkent moto equipment shop; the gear indicator is the navigation.
colors:
  obsidian: "#08090C"
  surface: "#181A20"
  redline: "#ED1C24"
  redline-hot: "#FF2B33"
  bone: "#F5F5F5"
  silver: "#969AA3"
  text-soft: "rgba(245, 245, 245, 0.76)"
  hairline: "rgba(150, 154, 163, 0.2)"
  hairline-strong: "rgba(245, 245, 245, 0.3)"
  on-redline: "#FFFFFF"
  shade: "#000000"
  specular: "rgba(255, 255, 255, 0.5)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 15vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  lead-in:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "calc(var(--h1) * 0.36)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  numeral:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "76px"
    fontWeight: 800
    lineHeight: "68px"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.07em"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
  title-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  label-md:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
  label-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.03em"
  body-lg:
    fontFamily: "Manrope Variable, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.62
  body:
    fontFamily: "Manrope Variable, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.62
  body-sm:
    fontFamily: "Manrope Variable, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  pad: "clamp(20px, 4.2vw, 64px)"
  nav-h: "64px"
  nav-h-desktop: "84px"
  gap-sm: "8px"
  gap-md: "12px"
  gap-lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.on-redline}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px 0 26px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.redline-hot}"
    textColor: "{colors.on-redline}"
  button-ghost:
    backgroundColor: "rgba(8, 9, 12, 0.35)"
    textColor: "{colors.bone}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px 0 26px"
    height: "56px"
  button-katalog:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0 16px 0 20px"
    height: "44px"
  nav-link:
    textColor: "{colors.silver}"
    typography: "{typography.label}"
    height: "44px"
  nav-link-active:
    textColor: "{colors.bone}"
  gear-plate:
    backgroundColor: "rgba(24, 26, 32, 0.82)"
    rounded: "{rounded.none}"
    padding: "16px 18px 0"
    width: "392px"
  gear-button:
    textColor: "{colors.silver}"
    height: "56px"
  gear-button-active:
    textColor: "{colors.bone}"
  social-link:
    textColor: "{colors.silver}"
    rounded: "{rounded.none}"
    size: "44px"
  contact-plate:
    backgroundColor: "rgba(24, 26, 32, 0.82)"
    rounded: "{rounded.none}"
    width: "min(38vw, 540px)"
  contact-name:
    textColor: "{colors.bone}"
    typography: "{typography.title}"
    padding: "18px 20px 16px"
  contact-role:
    textColor: "{colors.text-soft}"
    typography: "{typography.body-sm}"
  contact-row:
    textColor: "{colors.bone}"
    padding: "10px 20px"
    height: "60px"
  contact-row-hover:
    backgroundColor: "rgba(245, 245, 245, 0.05)"
    textColor: "{colors.bone}"
  contact-label:
    textColor: "{colors.silver}"
  demo-tag:
    textColor: "{colors.silver}"
    rounded: "{rounded.none}"
    padding: "0 8px 0 calc(8px + 0.18em)"
    height: "26px"
  demo-tag-hover:
    textColor: "{colors.bone}"
---

# Design System: Kaskadyor

## Overview

**Creative North Star: "The Night Garage"**

One machine stands in a single pool of light on wet asphalt; everything else is obsidian. The page is a campaign one-sheet, not a storefront: a huge, tight condensed headline on the left, the motorcycle on the right, and an instrument-panel gear indicator that racks focus from machine to equipment. Density is low and deliberate; the dark does most of the work.

The material vocabulary is motorsport hardware: hairline silver rules at low alpha, square-cornered plates, a faint carbon weave behind the copy, one red rim light. Red is a signal, never a fill colour for the world. Motion is exponential ease-out throughout, so everything arrives fast and settles slowly, like a throttle blip.

**Key Characteristics:**
- Obsidian ground with a single red rim light and a deep vignette toward the copy column.
- Barlow Condensed set huge and tight for display; Manrope for running text.
- Square corners everywhere; structure drawn with 1px hairlines, not boxes or shadows.
- Red reserved for a short, enumerated list of signals.
- A gear-indicator selector (N/1/2/3) as the signature interaction, with a focus-pull between bike and equipment.
- Expo-out motion and a staggered CSS entrance choreography.

## Colors

A near-black, almost monochrome palette where one racing red carries every signal.

### Primary
- **Redline** (redline): the only chromatic voice. Active gear numeral and indicator bar, the primary CTA fill, the third headline line, the info strip's 40px micro-accent, the KATALOG hover border and 14% tint, the intro curtain line, and `::selection`. Also the source of the ambient glow and floor rim light at 5–16% alpha.
- **Redline Hot** (redline-hot): hover state of the primary CTA only.
- **On-Redline White** (on-redline): label colour on Redline and Redline Hot fills only (primary CTA, `::selection` text). Pure white is reserved for text set on red; it qualifies only as large text (19px/700 condensed, about 4.4:1 on Redline and 3.7:1 on Redline Hot, above the 3:1 large-text floor), so it never sets small text on red.

### Neutral
- **Obsidian** (obsidian): page ground, intro curtain, mobile menu sheet, vignette gradients.
- **Shade** (shade): black as a shading tone, never a surface or text colour. Bike contact shadow on the floor (88% falling to 45%), equipment floor ellipse and menu-sheet shadow (80%), equipment drop shadow (70%), and the opaque stop inside mask-image gradients.
- **Specular** (specular): the single 50% white highlight in the one-pass light sweep across the bike, blended soft-light and masked to the bike's own alpha. Nowhere else.
- **Plate Surface** (surface): the gear plate and the contact plate, always at 82% alpha over the scene so the environment reads through.
- **Bone** (bone): headline, active/hover text, focus outline, wordmark and nav underlines.
- **Silver** (silver): inactive nav and gear labels, lead-in line, info strip text, social icons, and the contact plate's resting icons, labels and arrows.
- **Soft Bone** (text-soft): body paragraphs, gear captions and the contact plate's role sentence.
- **Hairline** (hairline): every structural rule (plate borders, gear track dividers, contact row rules, strip top rule, menu dividers, social link frames). **Hairline Strong** (hairline-strong) frames ghost and KATALOG buttons.

### Named Rules
**The Redline Rule.** Red appears only in the enumerated signal roles above. If a new element wants red, it must replace one of those signals, not join them.

**The Single Light Rule.** The scene has one red light source (the glow behind the bike and its floor rim). Do not add second coloured light sources or gradients in other hues.

## Typography

**Display Font:** Barlow Condensed 600/700/800 (with Arial Narrow)
**Body Font:** Manrope Variable (with Manrope, system-ui)

**Character:** Race-livery condensed capitals against a calm, rounded grotesque for reading. The display face carries every label, button, numeral and heading; Manrope only ever sets sentences.

### Hierarchy
- **Display** (800, `--h1` clamp, 0.9, -0.01em): the three-line H1. `--h1` is re-clamped per breakpoint: base `clamp(3.25rem, 15vw, 6rem)`; ≥1024 `clamp(3.5rem, min(6.5vw, 11.6svh), 6rem)`; 1024–1279 `clamp(3.25rem, min(6.2vw, 11svh), 5rem)`. Balanced wrap, each line in its own overflow mask.
- **Lead-in** (700, 0.36 × H1, 1.0, silver): the client's setup line, set as the headline's first beat, scaling with it. It is part of the headline group, not a label.
- **Numeral** (800, 76px / 68px): the gear readout digit. Gear track numerals use 800 at 22px.
- **Title** (700, 26px): gear caption titles and the contact plate's name. **Title Small** (22px) is the same role in the flat laptop plate.
- **Button** (700, 19px, 0.07em): primary and ghost CTAs; 19px bold keeps white-on-red within WCAG large-text contrast.
- **Label** (600, 15px, 0.16em): nav links. Smaller steps of the same role: 13–14px for info strip and caption links; **Label Medium** (12px) for gear labels, and for the info strip at 1024–1279; **Label Small** (11px, tracking tightened to 0.02–0.03em) for gear labels on phones under 480px and in the flat plate, plus the 11px instrument label. Copy is authored in uppercase. Contact row labels are the Label role at 12px with its full 0.16em tracking, in Silver; the DEMO tag is 700, 12px, 0.18em.
- **Body** (Manrope 400, 16px, 1.62, max 40ch): hero description. On ≥1024 it is fluid, `clamp(15px, 1.15vw, 17px)`, topping out at **Body Large** (17px). **Body Small** (13.5px, 1.5, max 36ch): gear captions and the contact plate's role sentence. Contact values are Manrope at 15px, 1.3, with tabular numerals so phone numbers and handles align.

### Named Rules
**The Display Does the Talking Rule.** Every non-sentence string (buttons, nav, numerals, labels) is Barlow Condensed in capitals with positive tracking; every sentence is Manrope in sentence case. Never mix within a role.

**The Scale With H1 Rule.** Headline-adjacent display text derives from `--h1` rather than its own fixed size, so the headline group keeps its proportions at every breakpoint.

## Layout

A full-viewport hero on a three-row grid (header, main, info strip). Horizontal margin is a single fluid gutter, `--pad`. A barely visible six-column hairline grid (four columns below 1024px) sits behind the composition and fades top and bottom.

- **Desktop (≥1024):** hero locks to 100svh (min 640px; grows below 640px tall). Copy column at `min(46vw, 760px)` on the left; the bike stage is absolutely placed bottom-right, its width solved from viewport height so the wheels clear the strip and the tail clears the gear plate (`--bike-max` 52vw, 48vw at 1024–1279). The gear plate (392px; 360px at 1024–1279) floats top-right.
- **Laptop heights (≥1280 wide, ≤820 tall):** the gear plate lies flat in one row (caption left, 296px gear track right, 128px tall), the readout numeral is dropped, and the bike keeps its scale.
- **Tablet (640–1023):** single column centred at 640px max.
- **Mobile (<1024):** order is title → bike → description and CTAs → gear plate → strip. The environment image holds the first screen then fades to obsidian. CTAs stack full-width below 480px.
- **Development mode (`UNDER_DEVELOPMENT`):** `/` serves the holding page and the full hero moves to `/demo` (noindex, with the DEMO tag); nothing on `/` links to `/demo`. The holding page keeps the hero's background stack and three-line headline (no lead-in, no description) with a single primary CTA beneath it; the header is the wordmark alone (no nav, no KATALOG, no menu toggle), and there is no bike stage, gear plate or info strip. Desktop is two columns, H1 and CTA in `1fr` against the contact plate at `min(38vw, 540px)`, both vertically centred on one axis with a `clamp(40px, 6vw, 112px)` gap; the section grows past 100svh rather than clipping (min `max(100svh, 640px)`). Tablet centres copy and plate at 640px max. Phones stack wordmark → H1 → full-width CTA → plate with a 40px gap. On `/demo` under 480px, KATALOG leaves the header row to make room for the DEMO tag; it stays in the menu and the CTAs.
- Rhythm is tight and mechanical: 8/12px within controls, 24px between header groups, 22–44px between hero blocks, with svh-based clamps on desktop.

## Elevation & Depth

Flat surfaces in a lit scene. Depth comes from photography, vignettes, focus (blur and dimming), and alpha layering, not from UI shadows. The gear plate and the contact plate are translucent surfaces over the scene with a hairline border.

### Shadow Vocabulary
- **Product drop** (`filter: drop-shadow(0 26px 30px rgba(0,0,0,0.7))`): equipment cutouts only, to seat them on the floor.
- **Menu sheet** (`box-shadow: 0 30px 60px -20px rgba(0,0,0,0.8)`): the mobile menu sheet over the page.

### Named Rules
**The Lit Scene Rule.** Controls and plates never cast shadows; only physical objects in the scene (bike, equipment) and the overlay sheet carry depth.

## Shapes

Square corners throughout (0px radius): buttons, plates, icon frames, menu sheet. Lines are 1px hairlines; the only 2px strokes are signal strokes (active gear indicator, intro line, wordmark underline). Underlines draw in from the left on `scaleX` rather than appearing.

## Components

### Buttons
Heavy, square, confident; the arrow moves, the button barely does.
- **Shape:** square (0px), 56px minimum height, label left and arrow right.
- **Primary:** Redline fill, white condensed capitals. Hover shifts to Redline Hot and lifts 2px; active returns to 0.
- **Ghost:** 35% obsidian fill with a Hairline Strong frame. Hover brightens the frame to 70% bone and adds a 6% bone wash, lifting 2px.
- **Arrow:** a 16–18px line icon that slides 5px right (or 3px diagonally for external links) on hover/focus.
- **KATALOG (header):** 40px (44px desktop) Hairline Strong frame; hover/focus takes a Redline border and 14% red tint.

### Navigation
- Desktop: condensed 600 capitals in Silver, 0.16em tracking, 44px targets. Hover, focus and current state turn Bone and draw a 1px Bone underline in from the left.
- Mobile: 44px menu toggle opens a full-width obsidian sheet with 800-weight 30–44px links separated by hairlines.
- **Wordmark:** a placeholder typographic setting (Barlow Condensed 800 italic) while the official logo is pending. It is not a logo and must not be treated as brand identity.
- **DEMO tag (/demo only):** sits 12px beside the wordmark as a link back to the holding page. A 26px-tall Hairline Strong square frame with Silver condensed capitals; hover/focus turns the text Bone and the frame 70% bone. It is a navigation control, not a label above a heading, and it never takes red.

### Gear Selector (signature)
An instrument plate, not a card.
- **Plate:** Plate Surface at 82% alpha, Hairline border, square corners.
- **Readout:** a 76px numeral in a fixed window that rolls vertically on change; it turns Redline when a gear is engaged (1–3) and stays Bone in N. A tiny tracked "UZATMA" instrument label sits above it.
- **Captions:** all captions share one grid cell so switching never shifts layout; the active one fades and rises 8px in.
- **Track:** four equal cells divided by hairlines; inactive Silver, active Bone with a Redline numeral; a 2px Redline indicator bar slides along the top edge (520ms expo-out). Radiogroup semantics with arrow, Home and End keys.
- **Focus pull:** engaging a gear dims the bike to 0.3 opacity at 0.965 scale with a 5px blur (blur on ≥1024 only); equipment enters from 10px blur, 0.94 scale and 28px below, exiting upward into 8px blur. 700ms expo-out.

### Info Strip
A hairline-topped bottom rule with a 40px Redline micro-accent at its left end. Three tracked condensed items, each a Bone tabular index, a dim slash and Silver text, plus 44px square social icon frames on the right.

### Contact Plate (development mode)
An instrument plate listing the developer's lines on the holding page; it reads as a ruled ledger, not a card.
- **Plate:** Plate Surface at 82% alpha, Hairline border, square corners, no shadow.
- **Head:** the name in Title (Barlow Condensed 700, 26px, capitals, Bone) over a Body Small role sentence in Soft Bone, closed by a Hairline rule.
- **Rows:** Hairline-ruled, about 60px tall (58px on desktop), each a full-row link: a 20px Silver stroke icon (1.75 stroke, the BrandIcons grammar), the condensed label, the Manrope value in Bone, and an 18px diagonal arrow in Silver. Rows rise in on the shared entrance with a 60ms stagger.
- **States:** hover and focus add a 5% bone wash over 300ms, turn icon and arrow Bone, and nudge the arrow 2px diagonally (400ms expo-out). The focus outline is inset (offset -2px) so it stays inside the plate's rules.
- **Responsive:** on desktop label and value share one line, the label in a 112px column; under 1024px the label stacks over the value.
- **No red:** the plate never takes red; on the holding page red is only the last headline line, the primary CTA and selection.

### Entrance & Motion
- Easing: expo-out `cubic-bezier(0.16, 1, 0.3, 1)` for all movement; plain `ease` for colour fades.
- Choreography is CSS: elements rise 18px over 1000ms with per-element `--d` delays; headline lines slide up out of masks with a 90ms stagger. The first visit plays an intro curtain (italic wordmark tightening from 0.32em, a red line drawing out); repeat visits in a session skip it and pull every delay forward by `--intro-shift` (780ms).
- Pointer parallax is small and spring-damped (bike 12/7px, glow -36/-18px).
- Reduced motion shows the final still composition, with no curtain and no sweep.

## Do's and Don'ts

### Do:
- **Do** keep red in its enumerated signal roles (active gear, primary CTA, one headline line, strip micro-accent, KATALOG hover, intro line, selection).
- **Do** draw structure with 1px Hairline rules and keep every corner square.
- **Do** set every non-sentence string in Barlow Condensed capitals and every sentence in Manrope.
- **Do** derive headline-group sizes from `--h1` and re-clamp `--h1` per breakpoint.
- **Do** use expo-out easing for movement and let focus (blur, dim, scale) express state changes in the scene.
- **Do** keep text layouts stable during state changes (stacked captions in one cell, fixed numeral window).

### Don't:
- **Don't** add rounded corners, pill buttons or soft cards; the world is square-cut hardware.
- **Don't** put shadows on controls or plates; depth belongs to the scene's objects.
- **Don't** introduce a second accent hue or a second coloured light source.
- **Don't** treat the italic typographic wordmark as the logo or derive an emblem from it; it is a placeholder until the official logo arrives.
- **Don't** add small tracked labels above headings; the lead-in is part of the headline at 0.36×H1, and the "UZATMA" label belongs only to the gear instrument.
