import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import SeatsPage from './pages/Seats'
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
      <div className="relative min-h-screen bg-primary text-text">
        <div className="grain" />
        <NavBar navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seats" element={<SeatsPage />} />
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
        <footer className="relative mt-16 overflow-hidden border-t border-borderSubtle/70 bg-gradient-to-b from-soft/90 via-soft/80 to-primary/80">
          <div className="absolute inset-0 pointer-events-none opacity-70 bg-[radial-gradient(circle_at_16%_18%,rgba(243,192,65,0.14),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,59,48,0.12),transparent_42%)]" />
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className={`${container} relative py-12`}>
            <div className="grid gap-10 lg:grid-cols-[1.25fr,1fr,1fr] items-start">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-borderSubtle/80 bg-primary/85 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-text-muted shadow-glow">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse-slow" />
                  Detail | Protect | Restore
                </div>
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-black uppercase tracking-[0.24em] text-text">
                    <span className="text-[#ff3b30] font-black">Mayur</span> Auto World
                  </div>
                  <p className="max-w-xl text-text-muted">where your car feels brand new every day</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['PPF & coatings', 'Body shop refresh', 'Detailing lounge'].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-borderSubtle/70 bg-soft/70 px-3 py-2 text-xs text-text-muted"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text">Quick Links</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className="group flex items-center justify-between rounded-2xl border border-borderSubtle/70 bg-primary/85 px-4 py-3 text-sm text-text-muted transition hover:-translate-y-0.5 hover:border-accent/70 hover:text-text hover:shadow-card"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <span>{link.label}</span>
                      <RiArrowRightUpLine className="text-base text-text-muted transition group-hover:text-accent" />
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text">Contact</p>
                <div className="space-y-2 text-sm text-text-muted">
                  <a
                    href="tel:+918055464465"
                    className="flex items-center gap-2 rounded-xl border border-borderSubtle/70 bg-primary/85 px-4 py-3 transition hover:border-accent/70 hover:text-text"
                  >
                    <RiPhoneFill className="text-accent" /> +91 80554 64465
                  </a>
                  <a
                    href="mailto:mayurautoworld01@gmail.com"
                    className="flex items-center gap-2 rounded-xl border border-borderSubtle/70 bg-primary/85 px-4 py-3 transition hover:border-accent/70 hover:text-text"
                  >
                    <RiMailFill className="text-accent" /> mayurautoworld01@gmail.com
                  </a>
                  <div className="flex items-start gap-2 rounded-xl border border-borderSubtle/70 bg-primary/85 px-4 py-3">
                    <RiMapPin2Fill className="mt-0.5 text-accent" />
                    <div>
                      <p>Pune, Maharashtra</p>
                      <p className="text-xs text-text-muted">Visit the bay for a walkaround & coffee.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-borderSubtle/70 pt-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
              <p>(c) {new Date().getFullYear()} Mayur Auto World - crafted for owners who care.</p>
              <div className="flex flex-wrap justify-start gap-3 md:justify-end">
                {social.map((item) => (
                  <a
                    key={item.platform}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-borderSubtle bg-soft/80 px-4 py-3 transition hover:border-accent/70 hover:bg-soft/90 hover:-translate-y-0.5"
                  >
                    <span className="text-accent text-lg transition group-hover:scale-105">{item.icon}</span>
                    <div className="text-left">
                      <p className="font-semibold text-text">{item.platform}</p>
                      <p className="text-text-muted text-xs">{item.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
