import { HERO_COPY } from '../data/brand'
import { delay } from '../lib/style'

export function HeroTitle() {
  return (
    <hgroup className="hero-title">
      <p className="lead-in reveal" style={delay(900)}>
        {HERO_COPY.leadIn}
      </p>
      <h1 id="hero-heading" className="headline">
        {HERO_COPY.headline.map((line, i) => (
          <span key={line} className={`headline-line${i === 2 ? ' headline-line--accent' : ''}`}>
            <span className="headline-mask">
              <span className="headline-text" style={delay(960 + i * 90)}>
                {line}
              </span>
            </span>
          </span>
        ))}
      </h1>
    </hgroup>
  )
}

export function HeroDescription() {
  return (
    <p className="hero-description reveal" style={delay(1260)}>
      {HERO_COPY.description}
    </p>
  )
}
