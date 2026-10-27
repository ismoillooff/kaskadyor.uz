# Usage (from project root): /root/.codex/kaskadyor-assets-venv/bin/python -I scripts/derive-images.py "$PWD"
"""Resampled delivery derivatives of the existing Codex assets (no new artwork)."""
import os, sys
from PIL import Image

root = sys.argv[1]
src = os.path.join(root, "public/assets/kaskadyor")
out = os.path.join(src, "responsive")
os.makedirs(out, exist_ok=True)

def save_webp(im, path, quality=84):
    # alpha kept losslessly-ish via alpha_quality=100; colour lossy
    im.save(path, "WEBP", quality=quality, alpha_quality=100, method=6)
    print(os.path.relpath(path, root), im.size, os.path.getsize(path))

bike = Image.open(os.path.join(src, "hero/hero-motorcycle.webp")).convert("RGBA")
for w in (1400, 960):
    h = round(bike.height * w / bike.width)
    save_webp(bike.resize((w, h), Image.LANCZOS), os.path.join(out, f"hero-motorcycle-{w}w.webp"))

for name in ("helmet", "gloves", "racing-suit"):
    im = Image.open(os.path.join(src, f"products/{name}.webp")).convert("RGBA")
    w = 640
    h = round(im.height * w / im.width)
    save_webp(im.resize((w, h), Image.LANCZOS), os.path.join(out, f"{name}-640w.webp"))

# Open Graph card: crop of the existing poster composite to 1.905:1, JPEG for broad crawler support
poster = Image.open(os.path.join(src, "hero/hero-poster.webp")).convert("RGB")
W, H = poster.size  # 1920x1080
ch = round(W / (1200 / 630))
top = (H - ch) // 2 + 20
og = poster.crop((0, top, W, top + ch)).resize((1200, 630), Image.LANCZOS)
p = os.path.join(root, "public/og-image.jpg")
og.save(p, "JPEG", quality=86, optimize=True, progressive=True)
print("public/og-image.jpg", og.size, os.path.getsize(p))
