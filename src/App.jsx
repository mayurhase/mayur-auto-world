import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import BodyCoverPage from './pages/BodyCover'
import ServicesPage from './pages/Services'
import GalleryPage from './pages/Gallery'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import JoinPage from './pages/Join'
import { navLinks, social } from './data/content'
import { container } from './shared/layout'
import { RiArrowRightUpLine, RiMailFill, RiMapPin2Fill, RiPhoneFill, RiWhatsappFill } from 'react-icons/ri'

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
      <div className="relative min-h-[100svh] bg-primary text-text">
        <div className="grain" />
        <NavBar navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/body-cover" element={<BodyCoverPage />} />
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
        <footer className="relative mt-10 overflow-hidden border-t border-borderSubtle/70 bg-[#000000]">
          <div className={`${container} relative py-8`}>
            <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] items-start">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-borderSubtle/80 bg-primary/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted shadow-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
                  Detail | Protect | Restore
                </div>
                <div className="space-y-2">
                  <div className="text-xl sm:text-2xl font-black uppercase tracking-[0.24em] text-text">
                    <span className="text-[#ff3b30] font-black">Mayur</span> Auto World
                  </div>
                </div>
                <p className="text-sm font-semibold text-text-muted">
                  Where your car feels brand new every day
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text">Quick Links</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.label}
                        to={link.path}
                        className="group inline-flex items-center gap-2 font-semibold text-text-muted transition hover:text-text"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/70 transition group-hover:bg-accent" />
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text">Social</p>
                  <div className="flex flex-wrap gap-2">
                    {social.map((item) => (
                      <a
                        key={item.platform}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-borderSubtle bg-soft/80 px-3 py-1.5 text-xs font-semibold transition hover:border-accent/70 hover:bg-soft/90"
                      >
                        <span className="text-accent text-sm transition group-hover:scale-105">{item.icon}</span>
                        <span className="font-semibold text-text">{item.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-borderSubtle/70 pt-5 text-center text-xs font-semibold text-text-muted">
              <p>© 2025 Mayur Auto World.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
