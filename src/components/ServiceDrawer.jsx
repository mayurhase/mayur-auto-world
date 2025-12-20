import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { RiCheckFill } from 'react-icons/ri'
import MagneticButton from './MagneticButton'

export default function ServiceDrawer({ service, onClose }) {
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    y.set(0)
  }, [service, y])

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="relative w-full max-w-lg h-full bg-primary border-l border-borderSubtle shadow-2xl overflow-y-auto"
        style={{ y: ySpring }}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Service</p>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-text-muted mt-1">{service.desc}</p>
            </div>
            <button onClick={onClose} className="text-text-muted hover:text-text">
              Close
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden border border-borderSubtle">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-4 space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-text-muted">Inclusions</p>
              <ul className="space-y-2 text-text-muted">
                {service.inclusions.map((inc) => (
                  <li key={inc} className="flex items-center gap-2">
                    <RiCheckFill className="text-accent" /> {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-3">
            <MagneticButton className="flex-1 rounded-full border border-accent text-text px-4 py-3 font-semibold hover:bg-accent/10 transition-colors">
              Book this
            </MagneticButton>
            <MagneticButton className="flex-1 rounded-full border border-borderSubtle px-4 py-3 font-semibold hover:border-accent transition-colors">
              Talk to us
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
