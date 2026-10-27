import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import type { PageId } from './lib/pages'

export { PAGES } from './lib/pages'

export function render(page: PageId): string {
  return renderToString(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  )
}
