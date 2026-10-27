import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, m } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { BRAND, LINKS, NEW_TAB_HINT, type GearId } from '../data/brand'
import { EASE_OUT_EXPO } from '../config/motion'
import { delay } from '../lib/style'
import { BrandWordmark } from './BrandWordmark'
import { SocialLinks } from './SocialLinks'

interface NavProps {
  activeGear: GearId
  /** Engages the equipment gear and brings the stage into view */
  onShowEquipment: () => void
  /** Served on /demo in development mode: mark the page as a demo next to the wordmark */
  demo?: boolean
}

const EXTERNAL = [
  { label: 'EHTIYOT QISMLAR', href: LINKS.telegram, aria: `Ehtiyot qismlar — Telegramda so‘rash ${NEW_TAB_HINT}` },
  { label: 'ALOQA', href: LINKS.instagram, aria: `Aloqa — Instagram ${NEW_TAB_HINT}` },
] as const

export function SiteNavigation({ activeGear, onShowEquipment, demo = false }: NavProps) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const mounted = useMounted()

  const close = useCallback((restoreFocus = true) => {
    setOpen(false)
    if (restoreFocus) requestAnimationFrame(() => toggleRef.current?.focus())
  }, [])

  return (
    <header className="site-header reveal" style={delay(1120)}>
      {demo ? (
        <div className="brand-cluster">
          <BrandWordmark />
          <a className="demo-tag" href="/" aria-label="Demo — sayt ishlab chiqilmoqda. Bosh sahifaga qaytish">
            DEMO
          </a>
        </div>
      ) : (
        <BrandWordmark />
      )}

      <nav className="nav-desktop" aria-label="Asosiy menyu">
        <ul>
          <li>
            <button type="button" className="nav-link" aria-pressed={activeGear === '3'} onClick={onShowEquipment}>
              EKIPIROVKA
            </button>
          </li>
          {EXTERNAL.map((item) => (
            <li key={item.label}>
              <a className="nav-link" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.aria}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <a
          className="btn-katalog"
          href={LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Katalog — Telegram ${NEW_TAB_HINT}`}
        >
          KATALOG
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={22} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>

      {/* Portalled: the header's entrance transform would otherwise trap position:fixed */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <MobileNavigation
                onClose={close}
                onShowEquipment={() => {
                  close(false)
                  onShowEquipment()
                }}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  )
}

function MobileNavigation({
  onClose,
  onShowEquipment,
}: {
  onClose: (restoreFocus?: boolean) => void
  onShowEquipment: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Focus management, Escape, Tab trap and scroll lock
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const focusables = () =>
      Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
        (el) => el.offsetParent !== null,
      )
    panel.querySelector<HTMLElement>('.mobile-menu-link')?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const root = document.documentElement
    const prevOverflow = root.style.overflow
    root.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      root.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <m.div
      className="mobile-menu-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <m.div
        ref={panelRef}
        id="mobile-menu"
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menyu"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <div className="mobile-menu-top">
          <BrandWordmark />
          <button type="button" className="menu-toggle" aria-label="Menyuni yopish" onClick={() => onClose()}>
            <X size={22} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobil menyu">
          <ol className="mobile-menu-list">
            <MenuItem index={1}>
              <button type="button" className="mobile-menu-link" onClick={onShowEquipment}>
                EKIPIROVKA
              </button>
            </MenuItem>
            {EXTERNAL.map((item, i) => (
              <MenuItem key={item.label} index={i + 2}>
                <a className="mobile-menu-link" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.aria}>
                  {item.label}
                  <ArrowUpRight size={22} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </MenuItem>
            ))}
            <MenuItem index={4}>
              <a
                className="mobile-menu-link"
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Katalog — Telegram ${NEW_TAB_HINT}`}
              >
                KATALOG
                <ArrowUpRight size={22} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </MenuItem>
          </ol>
        </nav>

        <div className="mobile-menu-foot">
          <p>
            {BRAND.location}
            <br />
            Yetkazib berish: {BRAND.delivery}
          </p>
          <SocialLinks />
        </div>
      </m.div>
    </m.div>
  )
}

function MenuItem({ index, children }: { index: number; children: ReactNode }) {
  return (
    <m.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.12 + index * 0.05 }}
    >
      {children}
    </m.li>
  )
}

const noopSubscribe = () => () => {}
/** false during SSR/hydration, true on the client afterwards */
function useMounted() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false)
}
