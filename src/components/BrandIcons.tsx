import type { SVGProps } from 'react'

// Brand glyphs drawn in the same 24px / 1.75 stroke grammar as the Lucide icons used elsewhere.
// (Lucide 1.x no longer ships brand marks.)

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
})

export function InstagramIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.35" cy="6.65" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M3.6 20.4 4.9 16A8.6 8.6 0 1 1 8 19.1Z" />
      <path d="M9.2 8.4c.2-.4.6-.5.9-.4l.8.3c.3.1.4.4.3.7l-.5 1.3c.5 1.2 1.4 2.1 2.6 2.6l1.3-.5c.3-.1.6 0 .7.3l.3.8c.1.3 0 .7-.4.9-1 .6-2.3.5-3.6-.3a7.6 7.6 0 0 1-2.7-2.7c-.8-1.3-.9-2.6-.3-3.6Z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function GitHubIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function TelegramIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M21.3 3.6 2.9 10.8c-.62.24-.6 1.12.03 1.32l4.7 1.5 1.8 5.7c.17.53.84.69 1.23.3l2.6-2.55 4.8 3.55c.49.36 1.18.09 1.3-.5l2.95-15.2c.12-.62-.48-1.12-1.06-.9Z" />
      <path d="m7.6 13.6 10.1-6.6-7.4 7.9-.6 4.3" />
    </svg>
  )
}
