import type { CSSProperties } from 'react'

/** Entrance delay for the CSS intro choreography (`.reveal`, `.headline-text`). */
export const delay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` }) as CSSProperties
