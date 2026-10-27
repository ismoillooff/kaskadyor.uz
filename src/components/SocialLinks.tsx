import type { CSSProperties } from 'react'
import { LINKS, NEW_TAB_HINT } from '../data/brand'
import { InstagramIcon, TelegramIcon } from './BrandIcons'

const SOCIALS = [
  { href: LINKS.instagram, label: 'Instagram', handle: '@_kaskadyor', Icon: InstagramIcon },
  { href: LINKS.telegram, label: 'Telegram', handle: 'Kaskadyor moto shop', Icon: TelegramIcon },
] as const

export function SocialLinks({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <ul className={`socials ${className}`} style={style} aria-label="Ijtimoiy tarmoqlar">
      {SOCIALS.map(({ href, label, handle, Icon }) => (
        <li key={label}>
          <a
            className="social-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kaskadyor ${label}: ${handle} ${NEW_TAB_HINT}`}
            title={`${label} — ${handle}`}
          >
            <Icon size={19} />
          </a>
        </li>
      ))}
    </ul>
  )
}
