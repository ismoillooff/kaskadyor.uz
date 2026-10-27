import type { ComponentType } from 'react'
import { ArrowUpRight, Globe } from 'lucide-react'
import { BACKGROUND, DEVELOPER, HOLDING_COPY, NEW_TAB_HINT, type DeveloperContactId } from '../data/brand'
import { delay } from '../lib/style'
import { BrandWordmark } from './BrandWordmark'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TelegramIcon, WhatsAppIcon } from './BrandIcons'

const ICONS: Record<DeveloperContactId, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
  site: Globe,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
}

const telegram = DEVELOPER.contacts[0]

/**
 * Development-mode `/`: only the notice and the developer's contacts, in the night garage.
 * Entrance is the hero's CSS choreography (`.reveal`, `.headline-text`), so it runs before hydration.
 */
export function UnderDevelopment() {
  return (
    <section className="hero holding" aria-labelledby="holding-heading">
      <div className="hero-bg" aria-hidden="true">
        <picture className="hero-bg-env">
          <source media="(max-aspect-ratio: 1/1)" srcSet={BACKGROUND.mobile} width={1080} height={1920} />
          <img src={BACKGROUND.desktop} width={2560} height={1440} alt="" decoding="async" fetchPriority="high" />
        </picture>
        <div className="hero-bg-carbon" />
        <div className="hero-bg-glow" />
        <div className="hero-bg-vignette" />
        <div className="hero-bg-guides" />
      </div>

      <header className="site-header reveal" style={delay(60)}>
        <BrandWordmark />
      </header>

      <div className="holding-main">
        <div className="holding-copy">
          <h1 id="holding-heading" className="headline">
            {HOLDING_COPY.headline.map((line, i) => (
              <span key={line} className={`headline-line${i === 2 ? ' headline-line--accent' : ''}`}>
                <span className="headline-mask">
                  <span className="headline-text" style={delay(160 + i * 90)}>
                    {line}
                  </span>
                </span>
              </span>
            ))}
          </h1>

          <div className="actions reveal" style={delay(520)}>
            <a
              className="btn btn-primary"
              href={telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Dasturchi ${DEVELOPER.brand}ga Telegramda yozish ${NEW_TAB_HINT}`}
            >
              <span>DASTURCHIGA YOZISH</span>
              <ArrowUpRight className="btn-arrow btn-arrow--diag" size={20} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <article className="contact-plate reveal" style={delay(600)} aria-labelledby="contact-title">
          <div className="contact-head">
            <h2 id="contact-title" className="contact-name">
              {DEVELOPER.brand.toUpperCase()}
            </h2>
            <p className="contact-role">
              {DEVELOPER.name} — {DEVELOPER.role}
            </p>
          </div>

          <ul className="contact-list" aria-label={`${DEVELOPER.brand} bilan bog‘lanish`}>
            {DEVELOPER.contacts.map((contact, i) => {
              const Icon = ICONS[contact.id]
              return (
                <li key={contact.id} className="reveal" style={delay(680 + i * 60)}>
                  <a
                    className="contact-row"
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${contact.label}: ${contact.value} ${NEW_TAB_HINT}`}
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="contact-text">
                      <span className="contact-label">{contact.label}</span>
                      <span className="contact-value">{contact.value}</span>
                    </span>
                    <ArrowUpRight className="contact-arrow" size={18} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </article>
      </div>
    </section>
  )
}
