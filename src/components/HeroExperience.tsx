import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { GEARS, type GearId } from '../data/brand'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePointerParallax } from '../hooks/usePointerParallax'
import { ActionButtons } from './ActionButtons'
import { BottomInfoStrip } from './BottomInfoStrip'
import { CinematicIntro } from './CinematicIntro'
import { GearSelector } from './GearSelector'
import { HeroBackground } from './HeroBackground'
import { HeroDescription, HeroTitle } from './HeroTypography'
import { MotorcycleStage } from './MotorcycleStage'
import { SiteNavigation } from './SiteNavigation'

const WIDE = '(min-width: 1024px)'

/** `demo`: the hero is served on /demo while the site is in development mode (adds a DEMO tag). */
export function HeroExperience({ demo = false }: { demo?: boolean }) {
  const heroRef = useRef<HTMLElement>(null)
  const [gear, setGear] = useState<GearId>('N')
  const reduced = useReducedMotion()
  const isWide = useMediaQuery(WIDE)
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const parallax = usePointerParallax(heroRef, isWide && finePointer && !reduced)

  usePrefetchEquipment()

  const showEquipment = useCallback(() => {
    setGear('3')
    if (!window.matchMedia(WIDE).matches) {
      document.getElementById('gear-stage')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' })
    }
  }, [reduced])

  return (
    <section ref={heroRef} className={demo ? 'hero hero--demo' : 'hero'} aria-labelledby="hero-heading">
      <CinematicIntro />
      <HeroBackground parallax={parallax} />
      <SiteNavigation activeGear={gear} onShowEquipment={showEquipment} demo={demo} />

      <div className="hero-main">
        <HeroTitle />
        <MotorcycleStage gear={gear} parallax={parallax} allowBlur={isWide && !reduced} />
        <div className="hero-body">
          <HeroDescription />
          <ActionButtons />
        </div>
        <GearSelector active={gear} onSelect={setGear} />
      </div>

      <BottomInfoStrip />
    </section>
  )
}

/** Warm the equipment images once the page is idle so the first gear change is instant. */
function usePrefetchEquipment() {
  useEffect(() => {
    let idle = 0
    let timer = 0
    const run = () => {
      for (const gear of GEARS) {
        if (!gear.product) continue
        const img = new Image()
        img.decoding = 'async'
        img.sizes = '(min-width: 1024px) 26vw, 62vw'
        img.srcset = gear.product.srcSet
        img.src = gear.product.src
      }
    }
    const schedule = () => {
      timer = window.setTimeout(() => {
        if ('requestIdleCallback' in window) idle = window.requestIdleCallback(run, { timeout: 3000 })
        else run()
      }, 2200)
    }
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
    return () => {
      window.removeEventListener('load', schedule)
      window.clearTimeout(timer)
      if (idle && 'cancelIdleCallback' in window) window.cancelIdleCallback(idle)
    }
  }, [])
}
