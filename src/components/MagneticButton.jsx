import React from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className, type = 'button', onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`${className} touch-manipulation`}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
