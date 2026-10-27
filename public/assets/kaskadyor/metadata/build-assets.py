from pathlib import Path
import json, hashlib, io, xml.etree.ElementTree as ET
import numpy as np
from PIL import Image, ImageOps, ImageDraw, ImageFont, ImageEnhance
import cairosvg

ROOT = Path(__file__).resolve().parents[1]
L = Image.Resampling.LANCZOS
records = []

def export(im, rel, use, origin, quality=88, budget=None):
    path = ROOT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.suffix == '.png':
        im.save(path, optimize=True)
    else:
        for q in range(quality, 71, -2):
            im.save(path, 'WEBP', quality=q, method=6, exact=True)
            if budget is None or path.stat().st_size <= budget:
                break
    with Image.open(path) as check:
        check.load()
        assert check.size == im.size
        alpha = check.getchannel('A') if 'A' in check.getbands() else None
        transparent = bool(alpha and alpha.getextrema()[0] < 255)
        if 'A' in im.getbands():
            assert transparent and alpha.getextrema()[1] == 255
            assert np.array_equal(np.array(alpha), np.array(im.getchannel('A')))
    records.append(dict(name=path.name, relative_path=rel, type=path.suffix[1:], width=im.width,
                        height=im.height, file_size_bytes=path.stat().st_size, transparency=transparent,
                        intended_use=use, generation_status='created', provenance=origin,
                        optimization_status='optimized', sha256=hashlib.sha256(path.read_bytes()).hexdigest()))

def cutout(name, size, fraction=.84):
    im = Image.open(ROOT / 'sources' / (name+'.png')).convert('RGBA')
    a = im.getchannel('A')
    assert a.getextrema() == (0,255), f'{name}: missing alpha'
    bbox = a.point(lambda x: 255 if x > 8 else 0).getbbox()
    assert bbox[0] > 0 and bbox[1] > 0 and bbox[2] < im.width and bbox[3] < im.height, f'{name}: cropped subject'
    subject=im.crop(im.getbbox())
    subject.thumbnail((int(size[0]*fraction),int(size[1]*fraction)),L)
    out=Image.new('RGBA',size)
    out.alpha_composite(subject,((size[0]-subject.width)//2,(size[1]-subject.height)//2))
    return out

bike=cutout('hero-motorcycle-clean',(2000,1500))
export(bike,'hero/hero-motorcycle.png','Independent animated motorcycle layer','image_gen edit + padded export')
export(bike,'hero/hero-motorcycle.webp','Optimized independent motorcycle layer','image_gen edit + padded export',budget=1200000)
for name,size,budget in [('hero-background',(2560,1440),700000),('hero-background-mobile',(1080,1920),450000)]:
    im=Image.open(ROOT/'sources'/(name+'.png')).convert('RGB').resize(size,L)
    # Restrain photographic floor highlights and blend all edges into the brand background.
    im=ImageEnhance.Brightness(im).enhance(.58)
    pix=np.array(im).astype(float)
    y,x=np.mgrid[0:size[1],0:size[0]]
    edge=np.minimum.reduce([x/(size[0]*.06),(size[0]-1-x)/(size[0]*.06),y/(size[1]*.06),(size[1]-1-y)/(size[1]*.06)])
    blend=np.clip(edge,0,1)[...,None]
    im=Image.fromarray(np.uint8(pix*blend+np.array([8,9,12])*(1-blend)))
    export(im,'hero/'+name+'.webp','Desktop hero background' if 'mobile' not in name else 'Dedicated mobile hero background','image_gen + restrained brightness and edge blend',budget=budget)
for name,size in [('helmet',(1000,1000)),('gloves',(1000,1000)),('racing-suit',(1000,1400))]:
    export(cutout(name,size),'products/'+name+'.webp','Transparent equipment presentation','image_gen + padded export',budget=350000)

svg='''<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none"><g id="speed-lines" stroke="#969AA3" stroke-width="1" opacity="0.16"><path d="M1250 80 1560 390M1370 80 1680 390M1440 620 1760 940"/></g><g id="red-accents" stroke="#ED1C24" stroke-width="2" opacity="0.32"><path d="M1610 170 1730 290M1570 730 1650 810"/></g><g id="technical-lines" stroke="#969AA3" stroke-width="1" opacity="0.10"><path d="M1140 950h160l60-60h100M1720 480h120"/></g></svg>'''
sp=ROOT/'effects/racing-overlay.svg';sp.write_text(svg)
ET.parse(sp)
records.append(dict(name=sp.name,relative_path='effects/racing-overlay.svg',type='svg',width=1920,height=1080,file_size_bytes=sp.stat().st_size,transparency=True,intended_use='CSS animated decorative overlay',generation_status='created',provenance='programmatic SVG',optimization_status='minimal paths, no filters',sha256=hashlib.sha256(sp.read_bytes()).hexdigest()))

# Periodic fine 2x2 twill: 32px supercell divides 1024 exactly.
y,x=np.mgrid[0:1024,0:1024]
cx,cy=x//8,y//8
over=((cx-cy)%4)<2
cross=np.where(over,y%8,x%8)
along=np.where(over,x,y)
bundle=np.sin(np.pi*(cross+.5)/8)**.65
fibers=np.cos(2*np.pi*cross/2)*1.2+np.sin(2*np.pi*along/32)*.45
value=14+bundle*6+fibers
arr=np.stack([value,value+1,value+3],-1).astype('uint8')
texture=Image.fromarray(arr)
export(texture,'effects/carbon-texture.webp','Very low opacity seamless carbon detail','procedural periodic twill',quality=90)
# Lossless ensures compression cannot introduce mismatch between repeated supercells.
tp=ROOT/'effects/carbon-texture.webp';texture.save(tp,'WEBP',lossless=True,method=6)
records[-1].update(file_size_bytes=tp.stat().st_size,sha256=hashlib.sha256(tp.read_bytes()).hexdigest(),optimization_status='lossless periodic tile')
ta=np.array(Image.open(tp));assert np.array_equal(ta[:128,:128],ta[128:256,128:256])

poster=Image.open(ROOT/'hero/hero-background.webp').convert('RGBA').resize((1920,1080),L)
trim=bike.crop(bike.getbbox());trim.thumbnail((1000,790),L)
poster.alpha_composite(trim,(900,1000-trim.height))
export(poster.convert('RGB'),'hero/hero-poster.webp','Composition reference; no UI baked in','Pillow composite of actual generated layers',budget=700000)

font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
f=ImageFont.truetype(font,20);small=ImageFont.truetype(font,16);title=ImageFont.truetype(font,30)
sheet=Image.new('RGB',(1600,1420),(8,9,12));d=ImageDraw.Draw(sheet)
d.text((40,24),'KASKADYOR / MOTORSPORT ASSET LIBRARY',font=title,fill='#F5F5F5')
d.text((40,70),'Verified exports / transparent cutouts / dedicated desktop and mobile environments',font=small,fill='#969AA3')
for i,r in enumerate(records):
    col,row=i%3,i//3;ox,oy=40+col*520,120+row*315
    d.rounded_rectangle((ox,oy,ox+500,oy+295),12,fill='#181A20')
    if r['type']=='svg':
        im=Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg.encode(),output_width=440,output_height=200))).convert('RGBA')
    else: im=Image.open(ROOT/r['relative_path']).convert('RGBA')
    im.thumbnail((450,205),L)
    sheet.paste(im,(ox+(500-im.width)//2,oy+12+(205-im.height)//2),im)
    d.text((ox+18,oy+227),r['name'],font=f,fill='#F5F5F5')
    d.text((ox+18,oy+258),f"{r['width']} x {r['height']}  |  VERIFIED  |  {r['file_size_bytes']/1024:.0f} KiB",font=small,fill='#969AA3')
d.text((40,1390),'Official logo: PENDING authentic source. No fabricated mark included.',font=small,fill='#969AA3')
export(sheet,'previews/asset-contact-sheet.webp','Labeled preview of ten delivery image/vector exports','Pillow contact sheet',quality=90)

manifest=dict(brand='KASKADYOR',path_base='/assets/kaskadyor/',assets=records,
              pending=[dict(name='kaskadyor-logo.png',reason='No authentic reference in repository; Instagram fetch failed. Not created and not listed as an asset.')],
              notes=['AI concept imagery, not photographs of verified store inventory.','Some exports upscale native generation; inspect source dimensions in QA report.','Sources are archival, not frontend delivery assets.'])
(ROOT/'metadata/asset-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
for r in records:
    p=ROOT/r['relative_path'];assert p.is_file() and p.stat().st_size==r['file_size_bytes']
source_info={p.name:Image.open(p).size for p in (ROOT/'sources').glob('*.png')}
report=dict(automated_checks='PASS',delivery_asset_count=len(records),source_dimensions=source_info,
            alpha='Native alpha confirmed; lossless alpha preserved in WebP; padded exports have clear borders.',
            texture='128px periodic supercells identical after lossless WebP decode; no unique edge or hotspot.',
            visual_review='Reviewed generated sources, compressed contact sheet, poster, gray-background alpha sheet and repeated texture. Full motorcycle and products visible; two five-finger gloves; no visible final text, logos, watermarks or white halos; coherent white upper-left and red rear-right lighting. No obvious mechanical or garment geometry defects at delivery viewing size.',exports=records)
(ROOT/'metadata/qa-report.json').write_text(json.dumps(report,indent=2)+'\n')
for r in records:print(f"{r['relative_path']:42} {r['width']}x{r['height']} {r['file_size_bytes']/1024:.1f} KiB alpha={r['transparency']}")
