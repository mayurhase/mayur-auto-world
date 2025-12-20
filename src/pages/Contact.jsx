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
            <div className="flex flex-wrap gap-2">
              <a
                href="https://wa.me/1234567890"
                className="flex items-center gap-2 rounded-full border border-borderSubtle px-4 py-2 text-sm font-semibold hover:border-accent transition-colors"
              >
                <RiWhatsappFill /> WhatsApp
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 rounded-full border border-borderSubtle px-4 py-2 text-sm font-semibold hover:border-accent transition-colors"
              >
                <RiPhoneFill /> Call
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-borderSubtle shadow-card">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509597!2d144.9537353153167!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAxLjkiUyAxNDTCsDU3JzE2LjQiRQ!5e0!3m2!1sen!2sin!4v1614642321000!5m2!1sen!2sin"
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
