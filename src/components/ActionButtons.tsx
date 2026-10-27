import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { LINKS, NEW_TAB_HINT } from '../data/brand'
import { delay } from '../lib/style'

export function ActionButtons() {
  return (
    <div className="actions reveal" style={delay(1380)}>
      <a
        className="btn btn-primary"
        href={LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ekipirovkalarni Telegramdagi katalogda ko‘rish ${NEW_TAB_HINT}`}
      >
        <span>EKIPIROVKALARNI KO‘RISH</span>
        <ArrowRight className="btn-arrow" size={20} strokeWidth={2} aria-hidden="true" />
      </a>
      <a
        className="btn btn-ghost"
        href={LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram orqali biz bilan bog‘lanish ${NEW_TAB_HINT}`}
      >
        <span>BIZ BILAN BOG‘LANISH</span>
        <ArrowUpRight className="btn-arrow btn-arrow--diag" size={20} strokeWidth={1.75} aria-hidden="true" />
      </a>
    </div>
  )
}
