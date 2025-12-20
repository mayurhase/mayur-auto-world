import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { container, sectionRhythm } from '../shared/layout'
import MagneticButton from '../components/MagneticButton'

export default function JoinPage() {
  return (
    <main>
      <SectionTitle eyebrow="Join us" title="Build with the studio" tone="tight" />
      <section className={`${sectionRhythm[1]} border-y border-borderSubtle/60`}>
        <div className={`${container} grid md:grid-cols-2 gap-6 items-center`}>
          <div className="space-y-3">
            <p className="text-text-muted">
              We're always looking for detailers, installers, and car lovers who obsess over the finish.
            </p>
            <MagneticButton className="rounded-full border border-accent text-text px-5 py-3 font-semibold hover:bg-accent/10 transition-colors">
              View openings
            </MagneticButton>
          </div>
          <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-accent">Roles</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-text-muted">
              <span className="rounded-full border border-borderSubtle px-3 py-1">PPF Installer</span>
              <span className="rounded-full border border-borderSubtle px-3 py-1">Detailing Lead</span>
              <span className="rounded-full border border-borderSubtle px-3 py-1">Interior Specialist</span>
              <span className="rounded-full border border-borderSubtle px-3 py-1">Customer Experience</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
