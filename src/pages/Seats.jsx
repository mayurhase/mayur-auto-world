import React from 'react'
import SectionTitle from '../components/SectionTitle'
import MagneticButton from '../components/MagneticButton'
import { container, sectionRhythm } from '../shared/layout'

const seatHighlights = [
  {
    title: 'Premium seat covers',
    desc: 'Custom stitch lines, snug factory-fit panels, and airbag-safe stitching.',
  },
  {
    title: 'Comfort upgrades',
    desc: 'Breathable materials, ventilated options, and extra lumbar support.',
  },
  {
    title: 'Protection first',
    desc: 'Spill resistance, easy wipe-down surfaces, and UV-safe colors.',
  },
]

const seatTypes = [
  { label: 'Leatherette', note: 'Soft-touch finish with easy care.' },
  { label: 'Genuine leather', note: 'Premium feel and natural grain.' },
  { label: 'Fabric + mesh', note: 'Cooler feel for everyday use.' },
  { label: 'Ventilated seat kits', note: 'Cooling airflow for long drives.' },
]

export default function SeatsPage() {
  return (
    <main className="bg-surface pb-16">
      <section className="relative overflow-hidden border-b border-borderSubtle/70 bg-gradient-to-b from-primary via-surface to-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(201,181,156,0.18),transparent_40%)]" />
        <div className={`${container} grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-center py-12 sm:py-16 relative`}>
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Car seats</p>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-wide text-shadow-soft">
              Premium car seats, in stock and ready to fit
            </h1>
            <p className="text-text text-base sm:text-lg">
              We now offer car seats and seat covers with factory-fit precision. Choose your material,
              color, and stitching, and we will install it cleanly in our studio.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                className="rounded-full border border-accent bg-accent text-primary px-5 py-3 font-semibold hover:bg-accentHover transition-colors"
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20car%20seats%20or%20seat%20covers%20for%20my%20car.%20Please%20share%20options.',
                    '_blank',
                  )
                }
              >
                Get seat options
              </MagneticButton>
              <MagneticButton
                className="rounded-full border border-borderSubtle text-text px-5 py-3 font-semibold hover:border-accent transition-colors"
                onClick={() => window.open('tel:+918055464465')}
              >
                Talk to us
              </MagneticButton>
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-text-muted">
              <span className="rounded-full border border-borderSubtle bg-primary px-3 py-2">OEM fit</span>
              <span className="rounded-full border border-borderSubtle bg-primary px-3 py-2">Custom stitching</span>
              <span className="rounded-full border border-borderSubtle bg-primary px-3 py-2">Fast install</span>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-borderSubtle shadow-card bg-soft">
            <img
              src="/assets/seat-cover.png"
              alt="Premium car seats"
              className="w-full h-full object-cover image-toned"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/55 via-accent/15 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-borderSubtle bg-primary/90 px-4 py-3 text-sm text-text">
              Seats available now. Choose finishes, stitching, and fitment style.
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionRhythm[1]} bg-surface border-b border-borderSubtle/70`}>
        <div className={`${container} grid gap-4 md:grid-cols-3`}>
          {seatHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-borderSubtle bg-soft p-5 shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Highlight</p>
              <h3 className="text-lg font-black mt-2">{item.title}</h3>
              <p className="text-text-muted mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionTitle eyebrow="Seat options" title="Pick your material & finish" tone="wide" />
      <section className={`${sectionRhythm[0]} bg-surface`}>
        <div className={`${container} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {seatTypes.map((seat) => (
            <div key={seat.label} className="rounded-2xl border border-borderSubtle bg-primary px-4 py-4">
              <p className="text-sm font-semibold text-text">{seat.label}</p>
              <p className="text-xs text-text-muted mt-1">{seat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionRhythm[1]} bg-soft border-t border-borderSubtle/70`}>
        <div className={`${container} grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-center`}>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.26em] text-accent">Seat care</p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide">
              Installed with clean lines, kept clean with the right aftercare
            </h2>
            <p className="text-text-muted">
              We use OEM-safe fitting methods and keep sensors/airbags clear. Ask us about cleaning kits and
              care schedules for long-lasting comfort.
            </p>
          </div>
          <div className="rounded-3xl border border-borderSubtle bg-primary p-6 shadow-card space-y-3">
            <p className="text-sm font-semibold text-text">Need a quote fast?</p>
            <p className="text-text-muted text-sm">
              Share your car model and preferred material. We will respond with options and pricing.
            </p>
            <MagneticButton
              className="w-full rounded-full bg-accent text-primary py-3 font-semibold hover:bg-accentHover transition-colors"
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20please%20share%20seat%20options%20and%20pricing%20for%20my%20car.',
                  '_blank',
                )
              }
            >
              WhatsApp seat enquiry
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  )
}
