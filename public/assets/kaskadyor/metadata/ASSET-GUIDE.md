# KASKADYOR visual asset integration

All frontend URLs start with `/assets/kaskadyor/`. This package contains visual assets only. No website has been built.

## Delivery files

| Path relative to asset root | Export dimensions | Alpha | Purpose |
|---|---:|---|---|
| hero/hero-motorcycle.png | 2000 × 1500 | Yes | High quality independent motorcycle layer |
| hero/hero-motorcycle.webp | 2000 × 1500 | Yes | Preferred optimized motorcycle layer |
| hero/hero-background.webp | 2560 × 1440 | No | Desktop environment |
| hero/hero-background-mobile.webp | 1080 × 1920 | No | Independently generated mobile environment |
| hero/hero-poster.webp | 1920 × 1080 | No | Static composition reference |
| products/helmet.webp | 1000 × 1000 | Yes | Equipment visual |
| products/gloves.webp | 1000 × 1000 | Yes | Pair of gloves |
| products/racing-suit.webp | 1000 × 1400 | Yes | Invisible mannequin suit |
| effects/racing-overlay.svg | 1920 × 1080 viewBox | Yes | Thin racing lines, animation ready |
| effects/carbon-texture.webp | 1024 × 1024 | No | Seamless low contrast repeat |
| previews/asset-contact-sheet.webp | 1600 × 1420 | No | Review thumbnails, dimensions and status |

`metadata/asset-manifest.json` contains actual byte sizes and SHA-256 hashes. `metadata/qa-report.json` records native source dimensions and checks. The `sources/` directory preserves original PNGs, including the initial motorcycle image and cleaned final variant; it is archival and should not be served as frontend imagery. The initial motorcycle source contains unwanted tiny lettering removed in the final edit.

## Logo status

`branding/kaskadyor-logo.png` is PENDING and does not exist. The repository had no authentic reference. Fetching https://www.instagram.com/_kaskadyor/ failed. Do not invent an emblem or reference a nonexistent image. Obtain the official original before adding the logo to this manifest. Plain HTML brand text may be used while integrating, without representing it as an official logo design.

## Hero layering

1. CSS background `#08090C`.
2. Desktop or mobile cinematic environment.
3. Repeated carbon detail at about 0.02–0.04 opacity, limited to small decorative surfaces.
4. Racing SVG at restrained opacity; omit on small screens if it distracts.
5. Independent transparent motorcycle WebP.
6. HTML navigation, heading, copy and buttons.

Keep typography in HTML. The poster contains no UI and is a reference, not a substitute for the two hero layers. Use either the layered hero or the poster when a static presentation is needed; loading both adds unnecessary transfer.

Desktop: reserve roughly the left 45% for copy and place the motorcycle primarily on the right. The motorcycle cutout includes padding; CSS placement should account for the actual subject occupying about 70% of the canvas width. At 1920 × 1080, the poster uses the trimmed actual motorcycle at approximately x=900, with wheels near y=1000.

Mobile: select the dedicated vertical background with a `picture` source or media query (a 768px breakpoint is a reasonable starting point). Keep the heading above the motorcycle. Scale the entire bike to fit available width beneath the copy; never crop wheels to force a desktop composition into a portrait viewport.

## Scale and animation

Use `object-fit: contain` and proportional width/height for motorcycle and products. Avoid separate arbitrary width and height values that stretch geometry. Backgrounds can use `cover`; control the focal point so the quiet upper area survives on mobile. The suit has a different aspect ratio from the other products; give it a taller presentation area.

Animate motorcycle and product layers with modest `transform` and `opacity` changes. Inline the SVG if independent groups need animation: `speed-lines`, `red-accents`, and `technical-lines`. The overlay has no filters or embedded animation. Animate the entire element when using an SVG as an image. Respect `prefers-reduced-motion`; provide a still composition. Avoid large blur filters and persistent `will-change` on all layers.

## Performance and quality

Prefer WebP delivery; retain PNG for editing. Set intrinsic dimensions to avoid layout shifts. Preload only the selected above-the-fold environment and motorcycle if they are critical; lazy-load product imagery. Do not preload both responsive backgrounds. Do not deliver contact sheet, source PNGs or metadata to the visitor as page decoration.

The source model produced motorcycle at 1448 × 1086, desktop environment at 1672 × 941, and mobile at 941 × 1672. The corresponding required exports are resampled with Lanczos; larger file dimensions do not imply native 2K generation detail. Products are downscaled/padded from native outputs. Background brightness is restrained and edges blend into obsidian. Native alpha is retained, with no background-removal approximation.

These are AI-generated campaign concepts and do not document verified store inventory or certified protective equipment. Their intended role is brand atmosphere and concept equipment presentation.

## Reproduction

Exact prompts and transparency settings: `metadata/image-prompts.md`. The built-in image generation tool does not expose an underlying model identifier. Preserve the saved source PNGs to reproduce the current composition exactly; rerunning generation may yield different details.

Processing script: `metadata/build-assets.py`. Requires Pillow, NumPy and CairoSVG. In this environment run `/root/.codex/kaskadyor-assets-venv/bin/python public/assets/kaskadyor/metadata/build-assets.py` from the project root. This recreates exports, manifest, contact sheet and automated QA report from existing source images; it makes no image-generation API calls.
