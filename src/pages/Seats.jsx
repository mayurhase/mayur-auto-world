import React, { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ReactCompareImage from 'react-compare-image'
import { RiArrowRightUpLine, RiWhatsappFill } from 'react-icons/ri'
import SectionTitle from '../components/SectionTitle'
import SeatCoverDrawer from '../components/SeatCoverDrawer'
import { beforeAfter } from '../data/content'
import { container, sectionRhythm } from '../shared/layout'

const materialFilters = ['All', 'Leatherette', 'Nappa', 'Fabric', 'Custom']

const seatProducts = [
  {
    id: 'leatherette-classic',
    name: 'Leatherette Classic',
    material: 'Leatherette',
    image: '/assets/seat-cover.png',
    imagePosition: 'center 20%',
    badges: ['Hand-stitched', 'Airbag-safe', 'Custom fit'],
    gallery: [
      { src: '/assets/seat-cover.png', alt: 'Leatherette stitching', position: 'center 18%' },
      { src: '/assets/seat-cover.png', alt: 'Leatherette texture', position: 'center 40%' },
      { src: '/assets/seat-cover.png', alt: 'Seat bolsters', position: 'center 65%' },
    ],
    materials: ['Leatherette', 'Perforated leatherette'],
    colors: ['Charcoal', 'Cocoa', 'Sand', 'Black/Red'],
    compatibility: 'Fits most hatchback, sedan, and SUV seats with airbag-safe seams.',
    warranty: '2-year stitching + fitment warranty.',
    care: 'Wipe with a damp microfiber; avoid harsh solvents.',
    lifestyle: '/assets/seat-cover.png',
  },
  {
    id: 'nappa-luxe',
    name: 'Nappa Luxe',
    material: 'Nappa',
    image: '/assets/seat-cover.png',
    imagePosition: 'center 30%',
    badges: ['Soft-touch', 'Airbag-safe', 'Custom fit'],
    gallery: [
      { src: '/assets/seat-cover.png', alt: 'Nappa grain', position: 'center 25%' },
      { src: '/assets/seat-cover.png', alt: 'Nappa stitching', position: 'center 50%' },
      { src: '/assets/seat-cover.png', alt: 'Seat contours', position: 'center 70%' },
      { src: '/assets/seat-cover.png', alt: 'Nappa paneling', position: 'center 10%' },
    ],
    materials: ['Nappa leatherette', 'Quilted Nappa'],
    colors: ['Onyx', 'Mocha', 'Pebble', 'Black/Tan'],
    compatibility: 'Best for sedans and luxury SUVs; compatible with side airbags.',
    warranty: '3-year material + stitch warranty.',
    care: 'Use leather-safe cleaner; condition quarterly.',
    lifestyle: '/assets/seat-cover.png',
  },
  {
    id: 'fabric-weave',
    name: 'Fabric Weave',
    material: 'Fabric',
    image: '/assets/seat-cover.png',
    imagePosition: 'center 15%',
    badges: ['Breathable', 'Airbag-safe', 'Custom fit'],
    gallery: [
      { src: '/assets/seat-cover.png', alt: 'Fabric weave', position: 'center 22%' },
      { src: '/assets/seat-cover.png', alt: 'Fabric stitching', position: 'center 55%' },
      { src: '/assets/seat-cover.png', alt: 'Seat panels', position: 'center 72%' },
    ],
    materials: ['Fabric weave', 'Mesh insert'],
    colors: ['Slate', 'Graphite', 'Ash', 'Black/Grey'],
    compatibility: 'Ideal for daily drivers and taxi fleets; side-airbag safe.',
    warranty: '18-month fabric + fitment warranty.',
    care: 'Vacuum regularly and spot clean with mild soap.',
    lifestyle: '/assets/seat-cover.png',
  },
  {
    id: 'perforated-cool',
    name: 'Perforated Cool',
    material: 'Leatherette',
    image: '/assets/seat-cover.png',
    imagePosition: 'center 42%',
    badges: ['Vent-ready', 'Airbag-safe', 'Custom fit'],
    gallery: [
      { src: '/assets/seat-cover.png', alt: 'Perforated texture', position: 'center 35%' },
      { src: '/assets/seat-cover.png', alt: 'Perforated stitching', position: 'center 55%' },
      { src: '/assets/seat-cover.png', alt: 'Vent panel', position: 'center 72%' },
    ],
    materials: ['Perforated leatherette', 'Micro-perf insert'],
    colors: ['Jet Black', 'Smoke', 'Walnut', 'Black/Beige'],
    compatibility: 'Works with ventilated seat kits; airbags remain unobstructed.',
    warranty: '2-year perforation + stitch warranty.',
    care: 'Blow out perforations; wipe with non-abrasive cloth.',
    lifestyle: '/assets/seat-cover.png',
  },
  {
    id: 'quilted-sport',
    name: 'Quilted Sport',
    material: 'Custom',
    image: '/assets/seat-cover.png',
    imagePosition: 'center 55%',
    badges: ['Quilted', 'Airbag-safe', 'Custom fit'],
    gallery: [
      { src: '/assets/seat-cover.png', alt: 'Quilted pattern', position: 'center 48%' },
      { src: '/assets/seat-cover.png', alt: 'Quilted stitching', position: 'center 70%' },
      { src: '/assets/seat-cover.png', alt: 'Seat bolsters', position: 'center 20%' },
    ],
    materials: ['Quilted leatherette', 'Contrast piping'],
    colors: ['Black/Red', 'Black/Blue', 'Tan/Chocolate', 'Grey/Black'],
    compatibility: 'Recommended for sporty trims; side-airbag safe.',
    warranty: '2-year quilting + fitment warranty.',
    care: 'Wipe gently; avoid sharp objects on quilted panels.',
    lifestyle: '/assets/seat-cover.png',
  },
  {
    id: 'two-tone-custom',
    name: 'Two-Tone Custom',
    material: 'Custom',
    image: '/assets/seat-cover.png',
    imagePosition: 'center 70%',
    badges: ['Hand-stitched', 'Airbag-safe', 'Custom fit'],
    gallery: [
      { src: '/assets/seat-cover.png', alt: 'Two-tone split', position: 'center 62%' },
      { src: '/assets/seat-cover.png', alt: 'Contrast stitch', position: 'center 40%' },
      { src: '/assets/seat-cover.png', alt: 'Seat accents', position: 'center 20%' },
      { src: '/assets/seat-cover.png', alt: 'Two-tone panels', position: 'center 80%' },
    ],
    materials: ['Custom palette', 'Embossed logo option'],
    colors: ['Any OEM match', 'Black/Caramel', 'Ivory/Tan', 'Graphite/Red'],
    compatibility: 'Built for most vehicles; custom templates for rare models.',
    warranty: '3-year custom stitch warranty.',
    care: 'Clean with neutral pH cleaner; protect stitching.',
    lifestyle: '/assets/seat-cover.png',
  },
]

const seatSteps = [
  {
    title: 'Measure + match',
    desc: 'We confirm your exact model and layout before cutting.',
  },
  {
    title: 'Tailor + stitch',
    desc: 'Panels are stitched to factory lines with airbag-safe seams.',
  },
  {
    title: 'Fit + finish',
    desc: 'Tight fitment, trim re-checks, and a final quality sweep.',
  },
]

export default function SeatsPage() {
  const [activeMaterial, setActiveMaterial] = useState('All')
  const [activeProduct, setActiveProduct] = useState(null)

  const filteredProducts = useMemo(() => {
    if (activeMaterial === 'All') return seatProducts
    return seatProducts.filter((product) => product.material === activeMaterial)
  }, [activeMaterial])

  return (
    <main className="bg-[#070707] pb-20">
      <section className="relative overflow-hidden border-b border-borderSubtle/70 bg-[#050505]">
        <div className="absolute inset-0 fabric-texture opacity-70" />
        <div className={`${container} relative py-12 sm:py-16`}>
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Seat Covers
            </p>
            <h1 className="text-3xl sm:text-5xl font-black tracking-wide">
              Seat Covers, Tailored to Your Drive
            </h1>
            <p className="text-text-muted text-base sm:text-lg">
              Premium materials, stitched to factory lines. Designed to upgrade
              comfort and protect your interior without looking aftermarket.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} space-y-6`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-accent">
                Material selector
              </p>
              <p className="text-lg font-semibold text-text">
                Choose your base feel
              </p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {materialFilters.map((material) => (
                <button
                  key={material}
                  type="button"
                  onClick={() => setActiveMaterial(material)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                    activeMaterial === material
                      ? 'border-accent bg-accent text-primary'
                      : 'border-borderSubtle text-text-muted hover:text-text hover:border-accent/70'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border border-borderSubtle bg-soft/80 shadow-card overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: product.imagePosition }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">
                    {product.material}
                  </p>
                  <h3 className="text-xl font-black">{product.name}</h3>
                </div>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918055464465&text=${encodeURIComponent(
                        `Hi Mayur Auto World, I want a quote for ${product.name}. My car: [model]. Preferred color: [color].`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary transition hover:bg-accentHover"
                    >
                      Get Quote <RiWhatsappFill />
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProduct(product)}
                      className="inline-flex items-center gap-2 rounded-full border border-borderSubtle px-4 py-2 text-xs font-semibold text-text transition hover:border-accent/70 hover:text-accent"
                    >
                      View Details <RiArrowRightUpLine />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionTitle
        eyebrow="Before / After"
        title="See the interior upgrade"
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
              Interior impact
            </p>
            <h3 className="text-2xl sm:text-3xl font-black">
              Cleaner lines, richer texture, and a more premium cabin feel.
            </h3>
            <p className="text-text-muted">
              This is the finish you can feel — tight fitment and a factory
              silhouette with upgraded materials.
            </p>
          </div>
        </div>
      </section>

      <SectionTitle
        eyebrow="How we fit it"
        title="A precise, three-step install"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} border-b border-borderSubtle/60`}>
        <div className={`${container} grid gap-4 md:grid-cols-3`}>
          {seatSteps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-3xl border border-borderSubtle bg-soft/80 p-5 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-accent text-primary flex items-center justify-center font-black">
                  {`0${idx + 1}`}
                </span>
                <h3 className="text-lg font-black">{step.title}</h3>
              </div>
              <p className="text-text-muted mt-3">{step.desc}</p>
            </div>
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
                Share your model and interior photos. We will recommend the
                right fit, finish, and color.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%20need%20help%20choosing%20the%20right%20seat%20cover%20for%20my%20car.%20Please%20advise."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accentHover"
            >
              Talk to us <RiWhatsappFill />
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProduct && (
          <SeatCoverDrawer
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
            key={activeProduct.id}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
