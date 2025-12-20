import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import GalleryPage from './pages/Gallery'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import JoinPage from './pages/Join'
import { navLinks, social } from './data/content'
import { container } from './shared/layout'
import { RiWhatsappFill } from 'react-icons/ri'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-primary text-text">
        <div className="grain" />
        <NavBar navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
        <a
          href="https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%27d%20like%20more%20information%20about%20your%20services%20and%20products%20and%20to%20schedule%20an%20appointment."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-accent/80 bg-primary/75 px-4 py-3 text-xs sm:text-sm font-semibold text-accent shadow-[0_14px_44px_rgba(0,0,0,0.35)] backdrop-blur hover:bg-accent/20 hover:text-accent hover:translate-y-[-2px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition max-w-[calc(100%-24px)] whitespace-nowrap"
        >
          <RiWhatsappFill className="text-base sm:text-lg" />
          WhatsApp
        </a>
        <footer className="border-t border-borderSubtle bg-soft/80 py-6 mt-10">
          <div className={`${container} flex flex-col gap-4 text-text-muted text-sm`}>
            <div className="flex flex-wrap gap-3">
              {social.map((item) => (
                <a
                  key={item.platform}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-borderSubtle bg-soft/70 px-4 py-3 hover:border-accent transition"
                >
                  <span className="text-accent text-lg">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-text">{item.platform}</p>
                    <p className="text-text-muted text-sm">{item.handle}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p>c {new Date().getFullYear()} Mayur Auto World. Crafted for owners who care.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
