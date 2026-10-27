# Exact image generation prompts

Tool: built-in `image_gen.imagegen`; underlying model name and native size controls are not exposed. Each distinct asset used a separate call. `transparent_background` was explicitly set as below. Source PNGs are preserved; target sizes are exports, not claims of native generation resolution. No external stock imagery was used.

## hero-motorcycle

transparent_background: true

```text
Use case: product-mockup. Create a standalone transparent alpha PNG asset for KASKADYOR premium motorsport campaign. Ultra-photorealistic premium black superbike motorcycle, aggressive modern sport motorcycle design, front three-quarter view, facing left. Realistic mechanical engineering and wheel alignment, aerodynamic black metallic fairings, subtle deep crimson red racing accents, detailed front suspension, tires and brake discs. Controlled white studio key light upper left and restrained red rim light rear right, deep cinematic shadows, 85mm commercial photography aesthetic. Entire motorcycle visible with generous padding, no cropped wheels, no rider, no text, no logos, no watermark, no duplicate handlebars, no distorted forks or impossible mechanical connections. Clean silhouette and fine alpha edges without white halos. Transparent background, no floor or cast shadow. Target canvas 2000x1500 or higher, 4:3.
```

## hero-background

transparent_background: false

```text
Use case: ads-marketing. Cinematic premium motorsport website hero background, 16:9 landscape target 2560x1440. Nearly black luxury automotive studio, obsidian #08090C, subtle dark asphalt floor and faint carbon material detail, extremely soft crimson #ED1C24 atmospheric lighting concentrated on right, delicate red ambient reflections, minimal haze and deep elegant shadows. Left 45 percent clean quiet negative space for HTML typography, right restrained atmospheric depth. Photorealistic commercial photography. No motorcycles, people, products, text, signs, logos or watermarks. No bright fixtures, smoke clouds, neon overload. Match controlled white upper-left key light and soft rear-right crimson campaign lighting. Edges blend into obsidian black.
```

## hero-background-mobile

transparent_background: false

```text
Use case: ads-marketing. Dedicated vertical 9:16 composition target 1080x1920 for KASKADYOR premium motorsport background. Obsidian #08090C automotive studio, subtle dark asphalt ground toward bottom, soft crimson #ED1C24 light in lower middle and right, elegant restrained racing atmosphere, upper 60 percent clean dark negative space for navigation and heading. Photorealistic material texture, controlled shadows and minimal atmospheric depth. White key light upper left extremely restrained, red rim ambience lower right. No motorcycles, humans, products, typography, logos, signs, watermarks, neon or excessive smoke.
```

## helmet

transparent_background: true

```text
Use case: product-mockup. Transparent alpha background. Photorealistic premium full-face motorcycle racing helmet, matte black carbon fiber shell, subtle deep crimson #ED1C24 aerodynamic accents, closed dark tinted visor, realistic refined ventilation, front three-quarter view facing left. Entire helmet visible centered with 12 percent padding on square canvas target 1000x1000. Premium commercial photography, controlled white studio key light upper left, crimson rim light rear right, crisp fine carbon weave. Realistic visor and proportions. Isolated product with clean alpha edges, no floor or shadow, no text at any size, no branding, logos or watermark.
```

## gloves

transparent_background: true

```text
Use case: product-mockup. Transparent alpha background. Exactly two premium professional motorcycle racing gloves, one left and one right, five fingers each with clearly separated natural fingers and thumbs. Black protective leather, carbon knuckle armor, subtle crimson #ED1C24 stitching, reinforced palms and ergonomic gauntlets. Beautiful arranged pair three-quarter view with dorsal armor visible and partly visible palm on second glove, full gloves with 12 percent padding square target 1000x1000. Commercial photorealistic studio product photography, white upper-left key and red rear-right rim light, fine leather details. No logos, text, watermark, additional gloves, duplicated or melted fingers. No floor or shadow, clean transparent alpha edges.
```

## racing-suit

transparent_background: true

```text
Use case: product-mockup. Transparent alpha background. Professional one-piece motorcycle racing leather suit on invisible mannequin, full suit visible front three-quarter view, black premium leather and subtle deep crimson #ED1C24 racing panels. Anatomical padding shoulders elbows knees and back, realistic seams, reinforced construction and natural human garment proportions, two sleeves two legs, no body visible. Portrait target 1000x1400 with generous padding. Luxury commercial product photography, controlled white upper-left key light, restrained crimson rear-right rim light, sharp leather texture. No face, hands, feet, hanger, floor, cast shadow, logos, text or watermarks. Clean alpha edges.
```

## hero-motorcycle-clean

transparent_background: true
Reference / edit target: sources/hero-motorcycle.png

```text
Edit target: the supplied motorcycle image. Preserve exact motorcycle geometry, two wheels, viewpoint, black and crimson materials, studio lighting and transparent alpha background. Remove ALL lettering, logos and embossed text at every size, including red lettering on front brake caliper and any molded lettering along tire sidewalls. Replace only these marks with clean matching unmarked material. No new details or branding. Keep entire bike visible and add transparent breathing room so all sides have at least 8 percent margin. No floor or shadow.
```

Carbon texture is procedural NumPy 2x2 twill with periodic microfibers, not AI-generated. Racing overlay is hand-authored SVG. Poster and contact sheet are Pillow compositions of actual assets. See build-assets.py for exact processing.

