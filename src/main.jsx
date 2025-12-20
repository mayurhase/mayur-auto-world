import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// react-image-lightbox expects a global in the browser.
if (typeof window !== 'undefined' && !window.global) {
  window.global = window
}
import './index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'react-image-lightbox/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
