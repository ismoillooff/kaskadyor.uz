// Vite copies all of public/ into dist/. The Codex asset package also holds archival
// material that must not be served to visitors (ASSET-GUIDE.md: sources, metadata,
// contact sheet, editing PNG). They stay in public/ for the team; only dist is pruned.
import { rm, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const NOT_FOR_DELIVERY = [
  'assets/kaskadyor/sources',
  'assets/kaskadyor/metadata',
  'assets/kaskadyor/previews',
  'assets/kaskadyor/branding',
  'assets/kaskadyor/hero/hero-motorcycle.png',
]

for (const rel of NOT_FOR_DELIVERY) {
  const target = path.join(dist, rel)
  const exists = await stat(target).then(() => true, () => false)
  if (!exists) continue
  await rm(target, { recursive: true, force: true })
  console.log(`pruned dist/${rel}`)
}
