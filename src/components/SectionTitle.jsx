import React from 'react'
import { container } from '../shared/layout'

export default function SectionTitle({ eyebrow, title, tone = 'wide' }) {
  return (
    <div className={`${container} ${tone === 'wide' ? 'pt-20 pb-6' : 'pt-12 pb-4'}`}>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-text-muted">
        <span className="h-[1px] w-8 bg-accent" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mt-2">{title}</h2>
    </div>
  )
}
