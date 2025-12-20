import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { container } from '../shared/layout'
import { inputClass } from '../shared/constants'
import MagneticButton from '../components/MagneticButton'
import { RiWhatsappFill, RiPhoneFill } from 'react-icons/ri'

export default function ContactPage() {
  return (
    <main>
      <SectionTitle eyebrow="Contact" title="Book a slot or say hello" tone="wide" />
      <section className="pb-20 pt-10">
        <div className={`${container} grid lg:grid-cols-2 gap-6`}>
          <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-6 space-y-4 shadow-card">
            <div className="grid grid-cols-2 gap-3">
              <input className={inputClass} placeholder="Name" />
              <input className={inputClass} placeholder="Phone" />
            </div>
            <input className={inputClass} placeholder="Email" />
            <textarea className={`${inputClass} min-h-[120px]`} placeholder="What do you need? (detailing, PPF, interior...)" />
            <MagneticButton className="w-full rounded-full bg-accent text-primary py-3 font-semibold hover:bg-accentHover transition-colors">
              Submit enquiry
            </MagneticButton>
            
          </div>
          <div className="rounded-3xl overflow-hidden border border-borderSubtle shadow-card">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Mayur%20Auto%20World&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
