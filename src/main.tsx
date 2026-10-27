import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/barlow-condensed/latin-600.css'
import '@fontsource/barlow-condensed/latin-700.css'
import '@fontsource/barlow-condensed/latin-800.css'
import '@fontsource/barlow-condensed/latin-800-italic.css'
import '@fontsource-variable/manrope/wght.css'
import './styles/index.css'
import App from './App'
import { pageForPath } from './lib/pages'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App page={pageForPath(window.location.pathname)} />
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs); dev serves an empty shell.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
