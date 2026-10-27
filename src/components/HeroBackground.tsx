import { m, useTransform } from 'motion/react'
import { BACKGROUND } from '../data/brand'
import { PARALLAX } from '../config/motion'
import type { ParallaxValues } from '../hooks/usePointerParallax'

/**
 * Layer stack (back → front): obsidian fill (section bg) · environment photo ·
 * carbon weave · racing line overlay · red ambient light · legibility vignettes.
 * The motorcycle is a separate layer in MotorcycleStage.
 */
export function HeroBackground({ parallax }: { parallax: ParallaxValues }) {
  const glowX = useTransform(parallax.nx, (v) => v * PARALLAX.glow.x)
  const glowY = useTransform(parallax.ny, (v) => v * PARALLAX.glow.y)

  return (
    <div className="hero-bg" aria-hidden="true">
      <picture className="hero-bg-env">
        <source media="(max-aspect-ratio: 1/1)" srcSet={BACKGROUND.mobile} width={1080} height={1920} />
        <img src={BACKGROUND.desktop} width={2560} height={1440} alt="" decoding="async" fetchPriority="high" />
      </picture>

      <div className="hero-bg-carbon" />

      {/* Inlined from effects/racing-overlay.svg so its groups can draw in independently */}
      <svg className="hero-bg-lines" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none">
        <g className="lines-speed" stroke="#969AA3" strokeWidth="1" opacity="0.16">
          <path pathLength={1} d="M1250 80 1560 390" />
          <path pathLength={1} d="M1370 80 1680 390" />
          <path pathLength={1} d="M1440 620 1760 940" />
        </g>
        <g className="lines-red" stroke="#ED1C24" strokeWidth="2" opacity="0.32">
          <path pathLength={1} d="M1610 170 1730 290" />
          <path pathLength={1} d="M1570 730 1650 810" />
        </g>
        <g className="lines-tech" stroke="#969AA3" strokeWidth="1" opacity="0.10">
          <path pathLength={1} d="M1140 950h160l60-60h100" />
          <path pathLength={1} d="M1720 480h120" />
        </g>
      </svg>

      <m.div className="hero-bg-glow" style={{ x: glowX, y: glowY }} />
      <div className="hero-bg-vignette" />
      <div className="hero-bg-guides" />
    </div>
  )
}
