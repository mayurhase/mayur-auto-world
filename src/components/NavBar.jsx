import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { RiPhoneFill } from 'react-icons/ri'
import MagneticButton from './MagneticButton'
import { container } from '../shared/layout'

export default function NavBar({ navLinks, isMenuOpen, setIsMenuOpen }) {
  const { pathname } = useLocation()

  return (
    <div className="sticky top-0 z-40 bg-primary/85 backdrop-blur-xl border-b border-borderSubtle/70 shadow-lg shadow-black/30">
      <header className={`${container} pt-5 pb-4 flex items-center justify-between relative z-10`}>
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base sm:text-lg font-black uppercase tracking-[0.24em] text-text hover:text-accent transition"
          >
            <span className="text-[#ff3b30] font-black">Mayur</span> Auto World
          </NavLink>
        </div>
        <nav className="hidden lg:flex items-center gap-4 text-sm font-semibold text-text-muted">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                link.label === 'Seat Covers'
                  ? `px-3.5 py-1.5 rounded-full text-sm font-semibold border border-accent/70 text-accent transition transform hover:-translate-y-0.5 hover:bg-accent/90 hover:text-primary hover:shadow-[0_16px_40px_rgba(243,192,65,0.35)] active:translate-y-0 ${
                      isActive ? 'bg-accent/90 text-primary shadow-[0_12px_30px_rgba(243,192,65,0.4)]' : 'bg-transparent'
                    }`
                  : `transition-colors px-2.5 py-1.5 rounded-full text-sm ${
                      isActive ? 'text-accent bg-soft/60 border border-borderSubtle' : 'hover:text-accent'
                    }`
              }
              style={{ whiteSpace: 'nowrap' }}
              onClick={() => {
                if (link.path === pathname) {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex gap-2">
          <MagneticButton
            type="button"
            className="flex items-center gap-2 rounded-full border border-accent bg-accent text-primary px-3.5 py-2 text-sm font-semibold hover:bg-accentHover transition-colors"
            onClick={() => window.open('tel:+918055464465')}
          >
            <RiPhoneFill /> Call
          </MagneticButton>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative h-11 w-11 rounded-full border border-borderSubtle flex flex-col items-center justify-center gap-1.5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-text transition-transform duration-200 ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-text transition-opacity duration-200 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-text transition-transform duration-200 ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="lg:hidden border-t border-borderSubtle bg-primary/95 backdrop-blur-sm"
          >
            <div className={`${container} py-4 flex flex-col gap-4`}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    link.label === 'Seat Covers'
                      ? `inline-flex w-fit items-center rounded-full border border-accent/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent transition ${
                          isActive
                            ? 'bg-accent/90 text-primary shadow-[0_10px_30px_rgba(243,192,65,0.4)]'
                            : 'bg-transparent hover:bg-accent/90 hover:text-primary'
                        }`
                      : `block text-sm uppercase tracking-[0.2em] transition-colors ${
                          isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                        }`
                  }
                  onClick={() => {
                    setIsMenuOpen(false)
                    if (link.path === pathname) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-3 pt-2">
                <MagneticButton
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-accent bg-accent text-primary px-4 py-2 text-sm font-semibold hover:bg-accentHover transition-colors"
                  onClick={() => window.open('tel:+918055464465')}
                >
                  <RiPhoneFill /> Call
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
