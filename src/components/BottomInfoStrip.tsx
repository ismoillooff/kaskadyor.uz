import { INFO_STRIP } from '../data/brand'
import { SocialLinks } from './SocialLinks'
import { delay } from '../lib/style'

export function BottomInfoStrip() {
  return (
    <div className="info-strip">
      <ul className="info-list" aria-label="Kaskadyor haqida qisqacha">
        {INFO_STRIP.map((item, i) => (
          <li key={item.index} className="info-item reveal" style={delay(1560 + i * 70)}>
            <span className="info-index">{item.index}</span>
            <span className="info-slash" aria-hidden="true">
              /
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <SocialLinks className="reveal" style={delay(1780)} />
    </div>
  )
}
