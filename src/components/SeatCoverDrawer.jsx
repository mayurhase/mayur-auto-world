import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { RiCheckFill, RiWhatsappFill } from 'react-icons/ri'
import MagneticButton from './MagneticButton'

export default function SeatCoverDrawer({ product, onClose }) {
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    y.set(0)
  }, [product, y])

  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        className="relative w-full max-w-xl h-full bg-primary border-l border-borderSubtle shadow-2xl overflow-y-auto"
        style={{ y: ySpring }}
      >
        <div className="p-6 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                Seat cover
              </p>
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-text-muted mt-1">{product.line}</p>
            </div>
            <button onClick={onClose} className="text-text-muted hover:text-text">
              Close
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-borderSubtle">
            <img
              src={product.gallery[0].src}
              alt={product.gallery[0].alt}
              className="w-full h-56 object-cover"
              style={{ objectPosition: product.gallery[0].position }}
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Material options
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.materials.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-borderSubtle bg-soft/60 px-3 py-1 text-xs text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Color swatches
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-borderSubtle bg-primary/80 px-3 py-1 text-xs text-text-muted"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-borderSubtle bg-soft/60 p-4 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Compatibility
              </p>
              <p className="text-sm text-text-muted">{product.compatibility}</p>
              <div className="text-xs text-text-muted flex items-start gap-2">
                <RiCheckFill className="text-accent mt-0.5" />
                Airbag-safe stitching and OEM-aligned panels.
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-borderSubtle bg-soft/60 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Warranty
                </p>
                <p className="text-sm text-text-muted">{product.warranty}</p>
              </div>
              <div className="rounded-2xl border border-borderSubtle bg-soft/60 p-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Care
                </p>
                <p className="text-sm text-text-muted">{product.care}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent text-primary px-4 py-2 text-sm font-semibold hover:bg-accentHover transition-colors"
              onClick={() => {
                const text = encodeURIComponent(
                  `Hi Mayur Auto World, I want a quote for ${product.name}. My car: [model]. Preferred color: [color].`,
                )
                window.open(`https://api.whatsapp.com/send?phone=918055464465&text=${text}`, '_blank')
              }}
            >
              Get Quote <RiWhatsappFill className="text-base" />
            </MagneticButton>
            <MagneticButton
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-borderSubtle px-4 py-2 text-sm font-semibold hover:border-accent transition-colors"
              onClick={() => window.open('tel:+918055464465')}
            >
              Talk to us
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
