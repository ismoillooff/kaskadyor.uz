import { BRAND } from '../data/brand'

/**
 * Phase 1–2 of the entrance: wordmark + expanding redline over black, then the
 * curtain lifts. Pure CSS (see `.intro` in index.css) so it runs before
 * hydration, never blocks input (pointer-events: none) and is skipped for
 * reduced motion and on repeat visits within a session.
 */
export function CinematicIntro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-inner">
        <span className="intro-mark">{BRAND.name}</span>
        <span className="intro-line" />
      </div>
    </div>
  )
}
