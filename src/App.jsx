import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import ReactCompareImage from 'react-compare-image'
import Lightbox from 'react-image-lightbox'
import {
  RiSparkling2Fill,
  RiShieldStarFill,
  RiTimer2Line,
  RiWhatsappFill,
  RiPhoneFill,
  RiStarSmileFill,
  RiBrushFill,
  RiCarFill,
  RiFlashlightFill,
} from 'react-icons/ri'

const services = [
  {
    title: 'Detailing & Ceramic',
    desc: 'Multi-layer ceramic, gloss enhancement, hydrophobic protection.',
    icon: <RiSparkling2Fill className="text-accent text-3xl" />,
    image:
      'https://images.unsplash.com/photo-1614200179365-a07fe85b79d4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'PPF & Wraps',
    desc: 'Self-healing films, stealth or gloss finishes, precision edges.',
    icon: <RiShieldStarFill className="text-accent text-3xl" />,
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Alloy & Caliper Styling',
    desc: 'OEM-correct restoration or bold custom finishes.',
    icon: <RiBrushFill className="text-accent text-3xl" />,
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Interior Revival',
    desc: 'Steam clean, leather restoration, odor removal, anti-microbial.',
    icon: <RiFlashlightFill className="text-accent text-3xl" />,
    image:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
  },
]

const trustMetrics = [
  { label: 'Vehicles Protected', value: '2,400+', detail: 'Across supercars, classics, and daily drivers.' },
  { label: 'Avg. Turnaround', value: '48 hrs', detail: 'Lean process without cutting corners.' },
  { label: 'Client Satisfaction', value: '4.9/5', detail: 'Reviews from repeat owners & fleets.' },
]

const processSteps = [
  { title: 'Inspect', text: 'Paint scan, swirl mapping, and film layout planning.' },
  { title: 'Prep', text: 'Decon wash, clay, panel wipe, masking, and edge clearing.' },
  { title: 'Protect', text: 'Ceramic or PPF install with heat-set edges and badge-out detail.' },
  { title: 'Deliver', text: 'Lighting bay check, aftercare briefing, and maintenance kit.' },
]

const testimonials = [
  {
    name: 'Rohit P.',
    role: '911 Carrera Owner',
    quote: 'They treated the car like their own. Zero lift lines on the PPF and the gloss is unreal.',
  },
  {
    name: 'Sana M.',
    role: 'GLE 53 Owner',
    quote: 'Interior detox + ceramic made the SUV feel new again. Transparent updates all through.',
  },
  {
    name: 'Vikram S.',
    role: 'Fleet Ops, logistics',
    quote: 'Process-driven and on-time. Great for our premium fleet—consistent quality every visit.',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80&sat=-15',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80&sat=10',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80&hue=10',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80&exp=10',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80&sat=20',
]

const beforeAfter = {
  before: 'https://images.unsplash.com/photo-1441148345475-03a2e82f9719?auto=format&fit=crop&w=1400&q=80',
  after: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80',
}

const container = 'max-w-6xl mx-auto px-5 sm:px-8'
const inputClass =
  'w-full rounded-2xl border border-borderSubtle bg-primary px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent outline-none transition-colors'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
}

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const heroStats = useMemo(
    () => [
      { label: 'Premium Detailing', icon: <RiSparkling2Fill className="text-text" /> },
      { label: 'Certified PPF Installers', icon: <RiShieldStarFill className="text-text" /> },
      { label: 'Same-day Slots', icon: <RiTimer2Line className="text-text" /> },
    ],
    [],
  )

  return (
    <div className="relative min-h-screen bg-primary text-text">
      <div className="grain" />
      <header className={`${container} pt-10 pb-6 flex items-center justify-between relative z-10`}>
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-soft flex items-center justify-center border border-borderSubtle shadow-glow">
            <RiCarFill className="text-accent text-xl" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-text-muted">Mayur Auto World</p>
            <p className="font-semibold text-lg">Detailing & Protection Studio</p>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-2 text-sm font-semibold hover:bg-accentHover transition-colors"
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
      </header>

      <main className="relative z-10">
        <section
          className="relative min-h-screen flex items-center py-16 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.68) 40%, rgba(0,0,0,0.4) 100%), url('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#0b0b0b',
          }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
          <div className="relative w-full">
            <div className={`${container} space-y-6`}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Precision studio</p>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Bold finishes. Invisible <span className="text-accent">protection</span>.
                </h1>
                <div className="h-0.5 w-16 bg-accent" />
                <p className="text-text-muted text-lg">
                  Ceramic, self-healing PPF, and deep interior revival built for performance and luxury owners who demand no-compromise work.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-full border border-accent text-text px-5 py-3 font-semibold hover:bg-accent/10 transition-colors">
                    Book a slot
                  </button>
                  <button className="rounded-full border border-borderSubtle px-5 py-3 font-semibold hover:border-text transition-colors">
                    View gallery
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl"
              >
                {heroStats.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-soft/80 border border-borderSubtle/80 px-4 py-3 flex items-center gap-3 backdrop-blur"
                  >
                    <div className="text-text">{item.icon}</div>
                    <p className="text-sm text-text-muted">{item.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <SectionTitle eyebrow="Services" title="What we do" />
        <section className="pb-14">
          <div className={`${container} grid md:grid-cols-2 gap-6`}>
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-borderSubtle bg-soft/70 shadow-card"
              >
                <img src={service.image} alt={service.title} className="h-56 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-primary border border-borderSubtle flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-text-muted">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionTitle eyebrow="Why us" title="Trust the studio owners rely on" />
        <section className="pb-14">
          <div className={`${container} grid md:grid-cols-3 gap-4`}>
            {trustMetrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl border border-borderSubtle bg-soft/70 px-5 py-6 shadow-card"
              >
                <p className="text-text-muted text-sm">{metric.label}</p>
                <p className="text-3xl font-bold text-accent mt-1">{metric.value}</p>
                <p className="text-text-muted mt-2">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionTitle eyebrow="Before / After" title="Visible transformation" />
        <section className="pb-14">
          <div className={`${container} rounded-3xl border border-borderSubtle bg-soft/70 p-4 shadow-card`}>
            <ReactCompareImage
              leftImage={beforeAfter.before}
              rightImage={beforeAfter.after}
              sliderLineColor="#F5C518"
              handleSize={38}
              hover={true}
              leftImageLabel="Before"
              rightImageLabel="After"
            />
          </div>
        </section>

        <SectionTitle eyebrow="Process" title="Tight workflow, zero guesswork" />
        <section className="pb-14">
          <div className={`${container} grid md:grid-cols-4 gap-4`}>
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: idx * 0.04 }}
                className="rounded-3xl border border-borderSubtle bg-soft/70 p-5 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <p className="text-text-muted text-sm">Step {idx + 1}</p>
                  <div className="h-9 w-9 rounded-2xl bg-primary border border-borderSubtle flex items-center justify-center text-accent font-semibold">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-text-muted">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <SectionTitle eyebrow="Testimonials" title="Owners who trust our bay" />
        <section className="pb-14">
          <div className={`${container} rounded-3xl border border-borderSubtle bg-soft/70 p-6 shadow-card`}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3800 }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary border border-borderSubtle flex items-center justify-center">
                        <RiStarSmileFill className="text-accent text-xl" />
                      </div>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-text-muted text-sm">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-xl font-semibold leading-relaxed">“{t.quote}”</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <SectionTitle eyebrow="Gallery" title="Recent bays & finishes" />
        <section className="pb-14">
          <div className={`${container} rounded-3xl border border-borderSubtle bg-soft/70 p-5 shadow-card`}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1.05}
              breakpoints={{
                640: { slidesPerView: 1.6 },
                900: { slidesPerView: 2.2 },
                1200: { slidesPerView: 3.1 },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4200 }}
            >
              {galleryImages.map((src, idx) => (
                <SwiperSlide key={`slider-${idx}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setLightboxIndex(idx)
                      setIsLightboxOpen(true)
                    }}
                    className="group relative block overflow-hidden rounded-2xl border border-borderSubtle"
                  >
                    <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {isLightboxOpen && (
            <Lightbox
              mainSrc={galleryImages[lightboxIndex]}
              nextSrc={galleryImages[(lightboxIndex + 1) % galleryImages.length]}
              prevSrc={galleryImages[(lightboxIndex + galleryImages.length - 1) % galleryImages.length]}
              onCloseRequest={() => setIsLightboxOpen(false)}
              onMovePrevRequest={() =>
                setLightboxIndex((lightboxIndex + galleryImages.length - 1) % galleryImages.length)
              }
              onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
            />
          )}
        </section>

        <SectionTitle eyebrow="About" title="Built by detail-obsessed founders" />
        <section className="pb-14">
          <div className={`${container} grid md:grid-cols-3 gap-4`}>
            <AboutCard
              title="Brand story"
              text="Started as a two-bay garage in 2012, now a specialist studio trusted by collectors and performance owners."
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

        <SectionTitle eyebrow="Contact" title="Book a slot or say hello" />
        <section className="pb-16">
          <div className={`${container} grid lg:grid-cols-2 gap-6`}>
            <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-6 space-y-4 shadow-card">
              <div className="grid grid-cols-2 gap-3">
                <input className={inputClass} placeholder="Name" />
                <input className={inputClass} placeholder="Phone" />
              </div>
              <input className={inputClass} placeholder="Email" />
              <textarea
                className={`${inputClass} min-h-[120px]`}
                placeholder="What do you need? (detailing, PPF, interior...)"
              />
              <button className="w-full rounded-full bg-accent text-primary py-3 font-semibold hover:bg-accentHover transition-colors">
                Submit enquiry
              </button>
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

      <footer className="border-t border-borderSubtle bg-soft/80 py-6">
        <div className={`${container} flex flex-col sm:flex-row justify-between items-center gap-3 text-text-muted text-sm`}>
          <p>© {new Date().getFullYear()} Mayur Auto World. Crafted for owners who care.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <RiWhatsappFill className="text-accent" /> +91 12345 67890
            </span>
            <span className="flex items-center gap-2">
              <RiPhoneFill className="text-accent" /> +91 98765 43210
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className={`${container} pb-6`}>
      <p className="text-xs uppercase tracking-[0.24em] text-text-muted mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
    </div>
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
