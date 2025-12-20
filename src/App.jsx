import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import GalleryPage from './pages/Gallery'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import JoinPage from './pages/Join'
import { navLinks } from './data/content'
import { container } from './shared/layout'
import { RiWhatsappFill, RiPhoneFill } from 'react-icons/ri'

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
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-accent/80 bg-primary/70 px-4 py-3 text-xs sm:text-sm font-semibold text-accent shadow-[0_14px_44px_rgba(0,0,0,0.35)] backdrop-blur hover:bg-accent/20 hover:text-accent hover:translate-y-[-2px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition max-w-[calc(100%-24px)] whitespace-nowrap"
        >
          <RiWhatsappFill className="text-base sm:text-lg" />
          WhatsApp
        </a>
        <footer className="border-t border-borderSubtle bg-soft/80 py-6 mt-10">
          <div className={`${container} flex flex-col sm:flex-row justify-between items-center gap-3 text-text-muted text-sm`}>
            <p>© {new Date().getFullYear()} Mayur Auto World. Crafted for owners who care.</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <RiWhatsappFill className="text-accent" /> +91 12345 67890
              </span>
              <span className="flex items-center gap-2">
                <RiPhoneFill className="text-accent" /> +91 98765 43210
              </span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
