import { BRAND } from '../data/brand'

/**
 * Typographic wordmark. The official Kaskadyor logo is pending — this is plain
 * set text, not a logo design, and should be swapped for the verified asset.
 */
export function BrandWordmark({ className = '' }: { className?: string }) {
  return (
    <a href="/" className={`wordmark ${className}`} aria-label="Kaskadyor — bosh sahifa">
      <span aria-hidden="true">{BRAND.name}</span>
    </a>
  )
}
