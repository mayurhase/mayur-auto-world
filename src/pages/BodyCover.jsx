import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RiArrowRightUpLine, RiWhatsappFill } from 'react-icons/ri'
import SectionTitle from '../components/SectionTitle'
import { container, sectionRhythm } from '../shared/layout'

const vehicleTypes = [
  { label: 'Hatchback', detail: 'compact hatchback' },
  { label: 'Sedan', detail: 'sedan' },
  { label: 'SUV', detail: 'SUV' },
  { label: 'Custom', detail: 'custom vehicle' },
]

export default function BodyCoverPage() {
  const coverImageRef = useRef(null)
  const rafRef = useRef(null)
  const [activeHotspot, setActiveHotspot] = useState(null)

  useEffect(() => {
    const imageEl = coverImageRef.current
    if (!imageEl) return

    const update = () => {
      if (!imageEl) return
      const rect = imageEl.getBoundingClientRect()
      const viewport = window.innerHeight || 0
      const progress = Math.min(
        1,
        Math.max(0, (viewport - rect.top) / (viewport + rect.height)),
      )
      const translate = (0.5 - progress) * 16
      imageEl.style.transform = `translateY(${translate}px) scale(1.04)`
      rafRef.current = null
    }

    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="relative bg-[#070707] pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#050505] to-black" />
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#050505] to-black/80" />
        <div className="absolute inset-0 fabric-texture opacity-50" />
        <div className={`${container} relative pt-14 sm:pt-20 pb-0`}>
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Car Cover
            </p>
            <h1 className="text-3xl sm:text-5xl font-black tracking-wide">
              Premium Car Covers That Actually Protect Your Car
            </h1>
            <p className="text-text-muted text-base sm:text-lg">
              Shield your vehicle from sun, dust, scratches, fading, and rain
              with durable, all-weather car covers designed for Indian
              conditions.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://api.whatsapp.com/send?phone=919404984040&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20a%20car%20cover%20for%20my%20car.%20Please%20share%20sizes%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accentHover"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                Get Quote <RiWhatsappFill />
              </motion.a>
              <motion.a
                href="https://api.whatsapp.com/send?phone=919404984040&text=Hi%20Mayur%20Auto%20World%2C%20I%20need%20expert%20advice%20for%20a%20car%20cover%20for%20my%20car.%20Please%20guide%20me."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-borderSubtle bg-soft/70 px-5 py-3 text-sm font-semibold text-text transition hover:border-accent/70 hover:text-accent"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                Get Expert Advice
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionRhythm[0]} pt-0 border-b border-borderSubtle/60`}>
        <div className="relative mt-0">
          <div className="cover-bleed tilt-card relative overflow-hidden border-y border-borderSubtle/70 bg-soft/80 shadow-card aspect-[16/9]">
            <img
              ref={coverImageRef}
              src="/assets/car-cover.jpeg"
              alt="Premium car cover"
              className="cover-parallax h-full w-full object-cover"
              loading="lazy"
            />
            <div className="sheen-once" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
            {[
              {
                id: "sun",
                text: "Sun Damage - Prevents paint fade and dashboard cracks",
                style: "left-[20%] top-[40%]",
              },
              {
                id: "scratches",
                text: "Scratches & Scuffs - Reduces minor surface damage",
                style: "left-[34%] top-[40%]",
              },
              {
                id: "oxidation",
                text: "Oxidation & Fading - Keeps paint looking newer for longer",
                style: "left-[50%] top-[40%]",
                className: "cover-hotspot-down",
              },
              {
                id: "dust",
                text: "Dust & Dirt - Saves washing time and maintenance cost",
                style: "left-[64%] top-[40%]",
                className: "cover-hotspot-left",
              },
              {
                id: "water",
                text: "Water Damage - Protects during rain and moisture exposure",
                style: "left-[78%] top-[40%]",
                className: "cover-hotspot-left",
              },
            ].map((spot) => {
              const isActive = activeHotspot === spot.id
              return (
                <button
                  key={spot.id}
                  type="button"
                  className={`cover-hotspot ${spot.style} ${spot.className ?? ""} ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() =>
                    setActiveHotspot((prev) => (prev === spot.id ? null : prev))
                  }
                  aria-label={spot.text}
                >
                  <span className="cover-hotspot-dot" />
                  <span className={`cover-hotspot-card ${isActive ? 'is-active' : ''}`}>
                    {spot.text}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className={`${container} mt-8 space-y-6`}>
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              Real protection
            </p>
            <h2 className="text-2xl sm:text-3xl font-black">
              Most car covers look good in photos and fail in real life.
            </h2>
            <p className="text-text-muted">
              Ours are built to handle heat, dust, pollution, and rain - the
              things that actually damage your car every day.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-text-muted">
              {[
                "Heavy-duty fabric for long-term use",
                "Protects paint, polish, and interior",
                "Easy to fit, remove, and store",
                "Suitable for daily outdoor parking",
                "Tested for Indian weather, not showroom conditions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-soft/70 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionTitle
        eyebrow="Choose your vehicle"
        title="Get a tailored car cover quote"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {vehicleTypes.map((type) => (
            <a
              key={type.label}
              href={`https://api.whatsapp.com/send?phone=919404984040&text=${encodeURIComponent(
                `Hi Mayur Auto World, I want a car cover for my ${type.detail}. Please share sizing and pricing.`,
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

    </main>
  )
}
