import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import '../src/css/css.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
