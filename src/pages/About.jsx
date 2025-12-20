import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { container, sectionRhythm } from '../shared/layout'

export default function AboutPage() {
  return (
    <main>
      <SectionTitle eyebrow="About us" title="Built by detail-obsessed founders" tone="wide" />
      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} grid md:grid-cols-3 gap-4`}>
          <AboutCard
            title="Brand story"
            text="Started as a two-bay garage in 2020, now a specialist studio trusted by collectors and performance owners."
          />
          <AboutCard
            title="Founders"
            text="Led by Mayur & team—certified detailers, PPF installers, and track-day regulars who know performance cars inside out."
          />
          <AboutCard
            title="Workshop"
            text="Controlled lighting, dust-free bays, climate-managed curing, and OEM-safe chemicals only."
          />
        </div>
      </section>
    </main>
  )
}

function AboutCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-5 shadow-card">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-text-muted leading-relaxed">{text}</p>
    </div>
  )
}
