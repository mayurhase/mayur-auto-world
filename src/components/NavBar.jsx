import React from 'react'
import { motion, AnimatePresence, color } from 'framer-motion'
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
          <p className="text-sm uppercase tracking-[0.24em] text-text"> <span style={color}>Mayur</span> Auto World</p>
        </div>
        <nav className="hidden lg:flex items-center gap-4 text-sm font-semibold text-text-muted">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors px-2.5 py-1.5 rounded-full text-sm ${
                  isActive ? 'text-accent bg-soft/60 border border-borderSubtle' : 'hover:text-accent'
                }`
              }
              style={{ whiteSpace: 'nowrap' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex gap-2">
          <MagneticButton className="flex items-center gap-2 rounded-full border border-accent bg-accent text-primary px-3.5 py-2 text-sm font-semibold hover:bg-accentHover transition-colors">
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
                    `block text-sm uppercase tracking-[0.2em] transition-colors ${
                      isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-3 pt-2">
                <MagneticButton className="flex items-center gap-2 rounded-full border border-accent bg-accent text-primary px-4 py-2 text-sm font-semibold hover:bg-accentHover transition-colors">
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
