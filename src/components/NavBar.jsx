import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { RiPhoneFill } from 'react-icons/ri'
import MagneticButton from './MagneticButton'
import { container } from '../shared/layout'

export default function NavBar({ navLinks, isMenuOpen, setIsMenuOpen }) {
  const { pathname } = useLocation()
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const productLinks = [
    { label: 'Body Cover', path: '/body-cover' },
    { label: 'Seat Cover', path: '/seat-cover' },
  ]
  const isProductsActive = ['/body-cover', '/seat-cover', '/accessories'].includes(pathname)

  return (
    <div className="sticky top-0 z-40 relative bg-primary/85 backdrop-blur-xl border-b border-borderSubtle/70 shadow-lg shadow-black/30">
      <header className={`${container} pt-5 pb-4 flex items-center justify-between relative z-10`}>
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-3 text-base sm:text-lg font-black uppercase tracking-[0.24em] text-text hover:text-accent transition"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-borderSubtle/70 bg-primary/80 shadow-card">
              <img
                src="/assets/tab-logo.PNG"
                alt="Mayur Auto World logo"
                className="h-6 w-6 object-contain"
              />
            </span>
            <span className="text-[#ff3b30] font-black">Mayur</span> Auto World
          </NavLink>
        </div>
        <nav className="hidden lg:flex items-center gap-4 text-sm font-semibold text-text-muted">
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors px-2.5 py-1.5 rounded-full text-sm ${
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
              {link.label === 'Home' && (
                <div className="relative group">
                  <button
                    type="button"
                    className={`transition-colors px-2.5 py-1.5 rounded-full text-sm ${
                      isProductsActive
                        ? 'text-accent bg-soft/60 border border-borderSubtle'
                        : 'hover:text-accent'
                    }`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Products
                  </button>
                  <div className="absolute left-0 right-0 top-full h-2" />
                  <div className="absolute left-0 top-full mt-1 min-w-[200px] rounded-2xl border border-borderSubtle/80 bg-gradient-to-b from-primary/95 to-primary/90 backdrop-blur shadow-2xl opacity-0 pointer-events-none translate-y-2 transition group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                    <div className="p-2 flex flex-col gap-1">
                      {productLinks.map((item) => (
                        <NavLink
                          key={item.label}
                          to={item.path}
                          className={({ isActive }) =>
                            `px-3 py-2 rounded-xl text-sm transition ${
                              isActive
                                ? 'text-accent bg-soft/70'
                                : 'text-text-muted hover:text-accent hover:bg-soft/50'
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className="hidden lg:flex gap-2">
          <MagneticButton
            type="button"
            className="flex items-center gap-2 rounded-full border border-accent bg-accent text-primary px-3.5 py-2 text-sm font-semibold hover:bg-accentHover transition-colors"
            onClick={() => window.open('tel:+919404984040')}
          >
            <RiPhoneFill /> Call
          </MagneticButton>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((prev) => {
                if (prev) setIsProductsOpen(false)
                return !prev
              })
            }
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
            className="lg:hidden absolute left-0 right-0 top-full border-t border-borderSubtle bg-primary/95 backdrop-blur-sm shadow-xl"
          >
            <div className={`${container} py-4 flex flex-col gap-4`}>
              {navLinks.map((link) => (
                <React.Fragment key={link.label}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-sm uppercase tracking-[0.2em] transition-colors ${
                        isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                      }`
                    }
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsProductsOpen(false)
                      if (link.path === pathname) {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.label}
                  </NavLink>
                  {link.label === 'Home' && (
                    <div className="space-y-2">
                      <button
                        type="button"
                        className={`flex items-center justify-between w-full text-sm uppercase tracking-[0.2em] transition-colors ${
                          isProductsActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                        }`}
                        onClick={() => setIsProductsOpen((prev) => !prev)}
                      >
                        Products
                        <span className={`text-xs transition ${isProductsOpen ? 'text-accent' : 'text-text-muted'}`}>
                          {isProductsOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isProductsOpen && (
                        <div className="pl-3 flex flex-col gap-2">
                          {productLinks.map((item) => (
                            <NavLink
                              key={item.label}
                              to={item.path}
                              className={({ isActive }) =>
                                `block text-xs uppercase tracking-[0.2em] transition-colors ${
                                  isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                                }`
                              }
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsProductsOpen(false)
                              }}
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="flex gap-3 pt-2">
                <MagneticButton
                  type="button"
                  className="flex items-center gap-2 rounded-full border border-accent bg-accent text-primary px-4 py-2 text-sm font-semibold hover:bg-accentHover transition-colors"
                  onClick={() => window.open('tel:+919404984040')}
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
