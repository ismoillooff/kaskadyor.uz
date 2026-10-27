// Shared motion grammar. Exponential ease-out everywhere; springs only for pointer-driven values.

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

/** Gear change: focus racks from the machine to the equipment */
export const FOCUS_PULL = {
  duration: 0.7,
  ease: EASE_OUT_EXPO,
} as const

export const BIKE_FOCUS = {
  engaged: { opacity: 0.3, scale: 0.965, filter: 'blur(5px)' },
  neutral: { opacity: 1, scale: 1, filter: 'blur(0px)' },
} as const

export const PRODUCT_ENTER = {
  initial: { opacity: 0, y: 28, scale: 0.94, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, scale: 1.02, filter: 'blur(8px)' },
} as const

/** Pointer parallax: small travel, soft spring */
export const PARALLAX = {
  bike: { x: 12, y: 7 },
  glow: { x: -36, y: -18 },
  spring: { stiffness: 55, damping: 18, mass: 0.9 },
} as const
