import { useRef, type CSSProperties, type KeyboardEvent } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { GEARS, type GearId } from '../data/brand'
import { EASE_OUT_EXPO } from '../config/motion'
import { delay } from '../lib/style'

interface GearSelectorProps {
  active: GearId
  onSelect: (id: GearId) => void
}

/**
 * The equipment selector, built as a motorcycle gear indicator:
 * N returns to the machine, 1–3 shift focus to the equipment.
 * Radiogroup semantics with roving tabindex and arrow-key shifting.
 */
export function GearSelector({ active, onSelect }: GearSelectorProps) {
  const buttons = useRef<Array<HTMLButtonElement | null>>([])
  const activeIndex = Math.max(0, GEARS.findIndex((g) => g.id === active))
  const activeGear = GEARS[activeIndex]
  const engaged = active !== 'N'

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = GEARS.length - 1
    let next = -1
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    if (next < 0) return
    event.preventDefault()
    onSelect(GEARS[next].id)
    buttons.current[next]?.focus()
  }

  return (
    <div className="gear-plate reveal" style={delay(1500)}>
      <div className="gear-head">
        <div className={`gear-readout${engaged ? ' is-engaged' : ''}`} aria-hidden="true">
          <span className="gear-readout-label">UZATMA</span>
          <span className="gear-readout-window">
            <AnimatePresence mode="popLayout" initial={false}>
              <m.span
                key={active}
                className="gear-readout-digit"
                initial={{ y: '90%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-90%', opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              >
                {active}
              </m.span>
            </AnimatePresence>
          </span>
        </div>

        {/* All captions share one grid cell: height is fixed by the tallest, so switching never shifts layout */}
        <div className="gear-captions">
          {GEARS.map((gear) => {
            const isActive = gear.id === active
            return (
              <div key={gear.id} className={`gear-caption${isActive ? ' is-active' : ''}`} aria-hidden={!isActive} inert={!isActive}>
                <h2 className="gear-caption-title">{gear.title}</h2>
                <p className="gear-caption-text">{gear.description}</p>
                <a
                  className="gear-caption-cta"
                  href={gear.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={gear.cta.ariaLabel}
                >
                  {gear.cta.label}
                  <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <div
        className="gear-track"
        role="radiogroup"
        aria-label="Uzatma: ekipirovka toifasini tanlang"
        style={{ '--gear-index': activeIndex } as CSSProperties}
      >
        <span className="gear-indicator" aria-hidden="true" />
        {GEARS.map((gear, index) => {
          const isActive = gear.id === active
          return (
            <button
              key={gear.id}
              ref={(el) => {
                buttons.current[index] = el
              }}
              type="button"
              role="radio"
              aria-checked={isActive}
              aria-label={gear.id === 'N' ? 'N — mototsikl' : `${gear.id} — ${gear.label}`}
              tabIndex={isActive ? 0 : -1}
              className={`gear-btn${isActive ? ' is-active' : ''}`}
              onClick={() => onSelect(gear.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className="gear-num" aria-hidden="true">
                {gear.id}
              </span>
              <span className="gear-label" aria-hidden="true">
                {gear.label}
              </span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {engaged ? `${activeGear.title}. ${activeGear.description}` : 'Mototsikl ko‘rinishi.'}
      </p>
    </div>
  )
}
