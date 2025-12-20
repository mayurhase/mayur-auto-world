import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { servicesPageServices } from '../data/content'
import { container, sectionRhythm } from '../shared/layout'
import { RiCheckFill } from 'react-icons/ri'
import MagneticButton from '../components/MagneticButton'

export default function ServicesPage() {
  return (
    <main className="pb-12">
      <SectionTitle eyebrow="Services" title="Everything your build needs" tone="wide" />
      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} grid md:grid-cols-2 gap-6`}>
          {servicesPageServices.map((service) => (
            <div key={service.title} className="rounded-3xl border border-borderSubtle bg-soft/70 shadow-card overflow-hidden">
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {service.title} <span className="h-0.5 w-6 bg-accent inline-block" />
                </h3>
                <p className="text-text-muted">{service.desc}</p>
                <div className="space-y-2 text-text-muted text-sm">
                  {service.inclusions.map((inc) => (
                    <div key={inc} className="flex items-center gap-2">
                      <RiCheckFill className="text-accent" /> {inc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
