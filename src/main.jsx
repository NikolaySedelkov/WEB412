import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MapRouting } from './routing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MapRouting/>
    </BrowserRouter>
  </StrictMode>,
)
