import React from 'react'
import ReactCompareImage from 'react-compare-image'
import { RiArrowRightUpLine, RiWhatsappFill } from 'react-icons/ri'
import SectionTitle from '../components/SectionTitle'
import { beforeAfter } from '../data/content'
import { container, sectionRhythm } from '../shared/layout'

const useCases = [
  {
    title: 'Indoor',
    desc: 'Dust protection with a soft liner that keeps paint safe.',
  },
  {
    title: 'Outdoor',
    desc: 'UV and dust resistance for daily parked vehicles.',
  },
  {
    title: 'All-weather',
    desc: 'Breathable fabric that avoids moisture traps.',
  },
  {
    title: 'Long-term storage',
    desc: 'Keeps the cabin and paint protected for extended stays.',
  },
]

const features = [
  'Paint-safe inner lining',
  'Breathable fabric',
  'UV + dust resistance',
  'Mirror pockets',
  'Elastic hem with buckle',
  'Easy fold + storage bag',
]

const fitSteps = [
  'Vehicle measurement',
  'Tailored fit',
  'QC check',
  'Delivery',
]

const vehicleTypes = [
  { label: 'Hatchback', detail: 'compact hatchback' },
  { label: 'Sedan', detail: 'sedan' },
  { label: 'SUV', detail: 'SUV' },
  { label: 'Custom', detail: 'custom vehicle' },
]

export default function BodyCoverPage() {
  return (
    <main className="relative bg-[#070707] pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#050505] to-black/80" />
        <div className="absolute inset-0 fabric-texture opacity-50" />
        <div className={`${container} relative py-14 sm:py-20`}>
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Body Cover
            </p>
            <h1 className="text-3xl sm:text-5xl font-black tracking-wide">
              Protection when your car is parked
            </h1>
            <p className="text-text-muted text-base sm:text-lg">
              One premium cover, tailored to your vehicle. Built for daily
              protection with a soft liner, breathable fabric, and secure fit.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20a%20body%20cover%20for%20my%20car.%20Please%20share%20sizes%20and%20pricing."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accentHover"
            >
              Get Quote <RiWhatsappFill />
            </a>
          </div>
        </div>
      </section>

      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-start`}>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              The value
            </p>
            <h2 className="text-2xl sm:text-3xl font-black">
              One clean solution that fits right and protects longer.
            </h2>
            <p className="text-text-muted">
              We focus on a single premium body cover because it does the job:
              protects paint, keeps dust off, and stays in place. Choose your
              vehicle type and we tailor the sizing accordingly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-borderSubtle bg-soft/80 p-5 shadow-card"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {item.title}
                </p>
                <p className="text-text-muted mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionTitle
        eyebrow="Features"
        title="Built for real-world protection"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-borderSubtle bg-soft/70 px-4 py-4 text-sm text-text-muted"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Fit & process"
        title="Measured once, fit just right"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} flex flex-col md:flex-row md:flex-wrap items-center md:items-center gap-3`}>
          {fitSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <div className="fit-step flex items-center gap-3 rounded-full border border-borderSubtle bg-soft/70 px-5 py-3 text-sm text-text-muted">
                <span className="h-7 w-7 rounded-full bg-accent text-primary flex items-center justify-center text-xs font-semibold">
                  {idx + 1}
                </span>
                {step}
              </div>
              {idx < fitSteps.length - 1 && (
                <>
                  <span className="fit-arrow fit-arrow-vertical inline-flex items-center justify-center md:hidden text-accent/60 text-lg">
                    ↓
                  </span>
                  <span className="fit-arrow fit-arrow-horizontal hidden md:inline-flex items-center justify-center text-accent/60 text-lg">
                    ›
                  </span>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Before / After"
        title="See the difference in care"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} grid lg:grid-cols-[1.1fr,0.9fr] gap-6 items-center`}>
          <div className="rounded-3xl border border-borderSubtle bg-soft/70 shadow-card overflow-hidden">
            <ReactCompareImage
              leftImage={beforeAfter.before}
              rightImage={beforeAfter.after}
              sliderLineColor="#F3C041"
              handleSize={44}
              leftImageLabel="Before"
              rightImageLabel="After"
              hover={true}
            />
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Protection matters
            </p>
            <h3 className="text-2xl sm:text-3xl font-black">
              Cleaner paint, less dust, and fewer micro-scratches.
            </h3>
            <p className="text-text-muted">
              A quality cover keeps the finish clean and the cabin cooler,
              especially for vehicles parked outdoors.
            </p>
          </div>
        </div>
      </section>

      <SectionTitle
        eyebrow="Choose your vehicle"
        title="Get a tailored body cover quote"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {vehicleTypes.map((type) => (
            <a
              key={type.label}
              href={`https://api.whatsapp.com/send?phone=918055464465&text=${encodeURIComponent(
                `Hi Mayur Auto World, I want a body cover for my ${type.detail}. Please share sizing and pricing.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-borderSubtle bg-soft/80 p-5 shadow-card transition hover:border-accent/70"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {type.label}
              </p>
              <p className="text-text-muted mt-2 text-sm">
                Get quote tailored to your {type.detail}.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Get Quote <RiArrowRightUpLine />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={`${sectionRhythm[1]}`}>
        <div className={`${container}`}>
          <div className="rounded-3xl border border-borderSubtle bg-soft/80 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-card">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                Need guidance
              </p>
              <h3 className="text-xl sm:text-2xl font-black">
                Not sure which suits your car? Talk to us.
              </h3>
              <p className="text-text-muted mt-2">
                Share your model and parking conditions. We will recommend the
                right fit.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%20need%20help%20choosing%20the%20right%20body%20cover%20for%20my%20car.%20Please%20advise."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accentHover"
            >
              Talk to us <RiWhatsappFill />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
