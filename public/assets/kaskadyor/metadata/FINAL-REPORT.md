# KASKADYOR final delivery report

Asset root: `/root/Project/Kaskadyor.uz/public/assets/kaskadyor/`

11 verified delivery files, seven archived source PNGs. Website not built.

| Relative path | Dimensions | Bytes | Alpha |
|---|---:|---:|---|
| hero/hero-motorcycle.png | 2000 × 1500 | 1856797 | Yes |
| hero/hero-motorcycle.webp | 2000 × 1500 | 278202 | Yes |
| hero/hero-background.webp | 2560 × 1440 | 124094 | No |
| hero/hero-background-mobile.webp | 1080 × 1920 | 93154 | No |
| products/helmet.webp | 1000 × 1000 | 123150 | Yes |
| products/gloves.webp | 1000 × 1000 | 233926 | Yes |
| products/racing-suit.webp | 1000 × 1400 | 148480 | Yes |
| effects/racing-overlay.svg | 1920 × 1080 | 492 | Yes |
| effects/carbon-texture.webp | 1024 × 1024 | 790 | No |
| hero/hero-poster.webp | 1920 × 1080 | 181014 | No |
| previews/asset-contact-sheet.webp | 1600 × 1420 | 105896 | No |

Pending: official `branding/kaskadyor-logo.png`; no authentic local reference and Instagram fetch failed. No replacement emblem fabricated.

QA: file existence, decode, format, dimensions, native alpha, lossless WebP alpha, byte sizes, SHA-256 manifest consistency and periodic carbon supercells pass. Sources, compressed exports, gray-background cutouts, poster and repeated carbon preview visually inspected. No obvious delivery-scale geometry defects, cropped subject edges, white halos, watermarks or final lettering. Exactly two five-finger gloves.

Tools: built-in image_gen (six generation calls and one motorcycle cleanup edit; underlying model identifier unavailable), Pillow, NumPy, CairoSVG, Python, programmatic SVG. No stock images.

Claude integration: ready for layered desktop/mobile hero and product visuals. Exact prompts, manifest, QA report and ASSET-GUIDE.md included. Logo integration remains pending. Motorcycle/background exports exceed native generation sizes through documented resampling; source resolutions are recorded in qa-report.json. Optimized WebPs satisfy all stated file budgets.
