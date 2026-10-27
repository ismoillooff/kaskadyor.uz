import { useEffect, type RefObject } from 'react'
import { useMotionValue, useSpring, type MotionValue } from 'motion/react'
import { PARALLAX } from '../config/motion'

export interface ParallaxValues {
  /** Normalised pointer position, -1…1, sprung */
  nx: MotionValue<number>
  ny: MotionValue<number>
}

/**
 * Tracks the pointer inside `target` on fine-pointer devices only.
 * Writes motion values directly — no React state, no re-render per event.
 */
export function usePointerParallax(target: RefObject<HTMLElement | null>, enabled: boolean): ParallaxValues {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const nx = useSpring(rawX, PARALLAX.spring)
  const ny = useSpring(rawY, PARALLAX.spring)

  useEffect(() => {
    const el = target.current
    if (!el || !enabled) {
      rawX.set(0)
      rawY.set(0)
      return
    }

    let frame = 0
    let lastX = 0
    let lastY = 0

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const rect = el.getBoundingClientRect()
      lastX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      lastY = ((event.clientY - rect.top) / rect.height) * 2 - 1
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        rawX.set(Math.max(-1, Math.min(1, lastX)))
        rawY.set(Math.max(-1, Math.min(1, lastY)))
      })
    }
    const onLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [target, enabled, rawX, rawY])

  return { nx, ny }
}
