// Prerenders every page of the current site mode (src/lib/pages.ts → PAGES) into dist/
// so the H1, copy and images are in the first HTML response (no blank page before JS,
// better LCP/SEO). `/` → dist/index.html, `/demo` → dist/demo/index.html.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, PAGES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<!--app-html-->')) throw new Error('app-html placeholder missing in dist/index.html')

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Replace one required pattern; fail the build if the template drifted. */
function swap(html, pattern, replacement, what) {
  if (!pattern.test(html)) throw new Error(`prerender: ${what} not found in index.html`)
  return html.replace(pattern, replacement)
}

function headFor(html, page) {
  const desc = escapeAttr(page.description)
  const title = escapeAttr(page.title)
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`, '<title>')
  html = swap(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${desc}$2`, 'meta description')
  html = swap(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${title}$2`, 'og:title')
  html = swap(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${desc}$2`, 'og:description')
  html = swap(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${page.canonical}$2`, 'canonical')
  html = swap(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${page.canonical}$2`, 'og:url')
  if (page.noindex) html = html.replace('<meta name="theme-color"', '<meta name="robots" content="noindex" />\n    <meta name="theme-color"')
  html = page.preloadBike
    ? html.replace(/\s*<!--\/?bike-preload-->/g, '')
    : swap(html, /\s*<!--bike-preload-->[\s\S]*?<!--\/bike-preload-->/, '', 'bike preload markers')
  // Pages with the cinematic intro let the inline <head> script skip it on repeat visits
  if (page.page !== 'holding') html = swap(html, /<html lang="uz">/, '<html lang="uz" data-intro>', '<html lang="uz">')
  return html
}

for (const page of PAGES) {
  const html = headFor(template, page).replace('<!--app-html-->', render(page.page))
  const out = page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path.slice(1), 'index.html')
  await mkdir(path.dirname(out), { recursive: true })
  await writeFile(out, html)
  console.log(`prerendered ${page.path} → ${path.relative(root, out)} (${(html.length / 1024).toFixed(1)} kB)`)
}

await rm(ssrDir, { recursive: true, force: true })
