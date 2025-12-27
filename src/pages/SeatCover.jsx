import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { container, sectionRhythm } from '../shared/layout'

export default function SeatCoverPage() {
  return (
    <main className="bg-[#070707] pb-20">
      <section className="relative overflow-hidden border-b border-borderSubtle/60 bg-gradient-to-b from-black via-[#050505] to-black">
        <div className={`${container} pt-14 sm:pt-20 pb-12`}>
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Seat Covers</p>
            <h1 className="text-3xl sm:text-5xl font-black tracking-wide">
              Premium Seat Covers by{''}
              <span className="rounded-md px-2 py-1 text-yellow-300">
               Autoform
              </span>
            </h1>
          </div>
        </div>
        <div className={`${container} pb-12`}>
          <div className="relative overflow-hidden rounded-3xl border border-borderSubtle/60 bg-soft/70 shadow-card">
            <img
              src="/assets/gallery/gallery14.jpeg"
              alt="Seat cover interior"
              className="h-[320px] sm:h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
          </div>
        </div>
      </section>

      <SectionTitle
        eyebrow="Why Autoform"
        title="Trusted by us for consistent fit and finish"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]} bg-[#000000]`}>
        <div className={`${container} space-y-6`}>
          <div className="w-full bg-[#000000] py-6">
            <div className={`${container} grid gap-6 md:grid-cols-[0.6fr,1fr] items-center`}>
              <div className="w-full max-w-xs sm:max-w-sm">
                <img
                  src="/assets/autoform2.png"
                  alt="Autoform"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="space-y-3 text-text-muted">
                {[
                  'OEM-grade fit that follows factory seat geometry.',
                  'Airbag-safe seams engineered for modern safety systems.',
                  'Long-term durability with consistent stitch quality.',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {[
              {
                title: 'E1 Artificial Leather Seat Covers',
                detail: 'Premium artificial leather with 3D bucket-fit design and model-specific fit.',
                benefit: 'Stylish look, durable material, easy to clean.',
                img: '/assets/seat cover/E1 Artificial Leather Seat Covers.png',
                crop: 'object-center',
              },
              {
                title: 'E2 Artificial Leather Seat Covers',
                detail: 'Soft artificial leather set with perfect bucket fitting for front + rear.',
                benefit: 'Soft texture, easy maintenance, excellent protection.',
                img: '/assets/seat cover/E2 Artificial Leather Seat Covers.png',
                crop: 'object-[50%_35%]',
              },
              {
                title: 'E4 Artificial Leather Seat Covers',
                detail: 'Precision-cut artificial leather with full coverage for exact model fit.',
                benefit: 'Enhanced comfort, robust material.',
                img: '/assets/seat cover/E4 Artificial Leather Seat Covers.png',
                crop: 'object-[50%_60%]',
              },
              {
                title: 'U Focus Artificial Leather Seat Covers',
                detail: 'PU leather with protective coating and high-density padding.',
                benefit: 'Comfortable cushioning, durable finish.',
                img: '/assets/seat cover/U Focus Artificial Leather Seat Covers.png',
                crop: 'object-center',
              },
              {
                title: 'Mahindra Thar Seat Covers',
                detail: 'Model-specific covers styled for Mahindra Thar seats.',
                benefit: 'Perfect OEM style fit, rugged and durable.',
                img: '/assets/seat cover/Mahindra Thar Seat Covers.png',
                crop: 'object-[50%_30%]',
              },
              {
                title: 'Designer Full Set Seat Covers',
                detail: 'Premium styled full sets that protect upholstery and add cushioning.',
                benefit: 'Stylish and practical.',
                img: '/assets/seat cover/Designer Full Set Seat Covers (General).png',
                crop: 'object-[50%_45%]',
              },
              {
                title: 'Universal Fit Seat Covers',
                detail: 'Fits multiple models with easier installation.',
                benefit: 'Economical, easy to install.',
                img: '/assets/seat cover/universel seat cover.png',
                crop: 'object-center',
              },
              {
                title: 'Water-Resistant Seat Covers',
                detail: 'Water-repellent surface to protect from spills and stains.',
                benefit: 'Protects interior, simple cleaning.',
                img: '/assets/seat cover/Water-Resistant Seat Covers.png',
                crop: 'object-[50%_70%]',
              },
              {
                title: 'Full Passenger Seat Cover Sets',
                detail: 'Complete front + rear sets for full interior coverage.',
                benefit: 'All-seat protection, cohesive look.',
                img: '/assets/seat cover/Full Passenger Seat Cover Sets.png',
                crop: 'object-[50%_40%]',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-borderSubtle/50 bg-soft/60 overflow-hidden shadow-card transition-transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-contain bg-black/30 transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition" />
                </div>
                <div className="p-5 space-y-3 flex flex-col flex-1">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold tracking-wide text-text">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.detail}</p>
                    <p className="text-xs text-text-muted">{item.benefit}</p>
                  </div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=919404984040&text=${encodeURIComponent(
                      `Hi Mayur Auto World, I want an Autoform seat cover quote for ${item.title}. My car: [model].`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 pl-5 pr-0 py-2.5 text-sm font-semibold text-yellow-300 transition opacity-80 hover:opacity-100 hover:text-yellow-300 mt-auto"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-borderSubtle/60 bg-soft/60 px-5 py-4 text-sm text-text-muted flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-borderSubtle/70 bg-primary/80 text-accent">
              ✓
            </span>
            <span>
              Installed in-house by our trained team. Fitment matters more than the cover.
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
