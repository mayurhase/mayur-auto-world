import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import ReactCompareImage from "react-compare-image";
import {
  RiStarSmileFill,
  RiWhatsappFill,
  RiPhoneFill,
  RiCheckFill,
  RiArrowDownSLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import SectionTitle from "../components/SectionTitle";
import MagneticButton from "../components/MagneticButton";
import ServiceDrawer from "../components/ServiceDrawer";
import {
  homeServices,
  trustBar,
  galleryItems,
  transformations,
  brands,
  faqs,
  social,
} from "../data/content";
import { container, sectionRhythm } from "../shared/layout";
import { fadeIn, inputClass } from "../shared/constants";

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const progressRef = useRef(null);
  const rafRef = useRef(null);
  const [openFaqs, setOpenFaqs] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const filteredGallery = useMemo(
    () =>
      galleryItems.filter(
        (item) => galleryFilter === "All" || item.category === galleryFilter
      ),
    [galleryFilter]
  );

  const movingBrands = useMemo(
    () => [
      { name: "AUTO FORM", src: "/assets/autoform.jpeg" },
      { name: "AUTO CRUZE", src: "/assets/autocruze.jpeg" },
      { name: "TURTLE WAX", src: "/assets/turtlewax.jpeg" },
    ],
    []
  );

  const safetySlides = useMemo(
    () => [
      { label: "Studio exterior", image: "/assets/hero-bg.jpeg" },
      { label: "Body cover", image: "/assets/car-cover.jpeg" },
      { label: "Graphic coating", image: "/assets/graphic%20coating.jpeg" },
      {
        label: "Denting & painting",
        image: "/assets/denting-and-painting.png",
      },
    ],
    []
  );

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const next =
        scrollable > 0 ? Math.min(100, (scrolled / scrollable) * 100) : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${next}%`;
      }
      rafRef.current = null;
    };
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(updateProgress);
    };
    const onResize = () => {
      setIsMobile(window.innerWidth < 640);
      updateProgress();
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (prev) => (prev + filteredGallery.length - 1) % filteredGallery.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen, filteredGallery.length]);

  const heroStats = useMemo(
    () => [
      {
        label: "Premium Detailing",
        icon: <RiStarSmileFill className="text-text" />,
      },
      {
        label: "Certified PPF Installers",
        icon: <RiStarSmileFill className="text-text" />,
      },
      {
        label: "Same-day Slots",
        icon: <RiStarSmileFill className="text-text" />,
      },
    ],
    []
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-borderSubtle z-30">
        <div ref={progressRef} className="h-full bg-accent" />
      </div>

      <section
        className="relative min-h-[100svh] flex items-center pt-14 pb-12 sm:py-20 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.68) 40%, rgba(0,0,0,0.4) 100%), url('/assets/hero-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
        <div className="relative w-full">
          <div className={`${container} space-y-3 sm:space-y-6`}>
            <motion.div
              initial={isMobile ? "show" : "hidden"}
              animate={isMobile ? "show" : undefined}
              whileInView={isMobile ? undefined : "show"}
              viewport={isMobile ? undefined : { once: true }}
              transition={
                isMobile ? undefined : { duration: 0.5, ease: "easeOut" }
              }
              variants={fadeIn}
              className="max-w-2xl space-y-3 text-[16px] sm:text-base font-semibold"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-text-muted">
                Precision studio
              </p>
              <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-wide">
                Where your car feels brand new{" "}
                <span className="text-accent">every day</span>
              </h1>
              <div className="h-0.5 w-16 bg-accent" />
              <p className="text-text-muted text-base sm:text-lg">
                Ceramic, self-healing PPF, and deep interior revival built for
                performance and luxury owners who demand no-compromise work.
              </p>
            </motion.div>
            <motion.div
              initial={isMobile ? "show" : "hidden"}
              animate={isMobile ? "show" : undefined}
              whileInView={isMobile ? undefined : "show"}
              viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
              transition={
                isMobile ? undefined : { duration: 0.5, ease: "easeOut" }
              }
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl text-[16px] sm:text-base font-semibold"
            >
              {heroStats.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl bg-soft/80 border border-borderSubtle/80 px-4 py-3 flex items-center gap-3 backdrop-blur transition-colors duration-300 hover:bg-accent hover:border-accent/70"
                >
                  <div className="text-text transition-colors duration-300 group-hover:text-primary">
                    {item.icon}
                  </div>
                  <p className="text-sm text-text-muted transition-colors duration-300 group-hover:text-primary">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`${sectionRhythm[1]}`}>
        <div className={`${container} space-y-6`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                Trusted brands
              </p>
              <p className="text-lg font-semibold text-text">
                Products we install every day
              </p>
            </div>
            <div className="rounded-full bg-soft/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-text-muted">
              OEM-grade materials only
            </div>
          </div>
          <div className="relative py-6">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {movingBrands.map((brand, idx) => (
                <div
                  key={brand.name}
                  className="brand-float flex items-center gap-4 rounded-full bg-primary/65 px-7 py-4 shadow-card"
                  style={{ animationDelay: `${idx * 0.35}s` }}
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="brand-marquee-logo"
                    loading="lazy"
                  />
                  <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${sectionRhythm[1]} border-b border-borderSubtle/60`}
      >
        <div className={`${container} grid md:grid-cols-4 gap-4`}>
          {trustBar.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-soft/80 border border-borderSubtle/80 p-4"
            >
              <p className="text-sm font-semibold text-accent">{item.label}</p>
              <p className="text-text-muted mt-1 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Body Cover"
        title="Protection when your car is parked"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]}`}>
        <div
          className={`${container} grid lg:grid-cols-[1.05fr,0.95fr] gap-6 items-center`}
        >
          <motion.div
            initial={isMobile ? "show" : "hidden"}
            animate={isMobile ? "show" : undefined}
            whileInView={isMobile ? undefined : "show"}
            viewport={isMobile ? undefined : { once: true, amount: 0.3 }}
            variants={fadeIn}
            className="relative overflow-hidden rounded-3xl border border-borderSubtle bg-soft/70 shadow-card"
          >
            <img
              src="/assets/car-cover.jpeg"
              alt="Premium body cover"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/80 px-3 py-1 text-xs uppercase tracking-[0.22em] text-text">
                Outdoor-ready
              </span>
              <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Custom sizing
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={isMobile ? "show" : "hidden"}
            animate={isMobile ? "show" : undefined}
            whileInView={isMobile ? undefined : "show"}
            viewport={isMobile ? undefined : { once: true, amount: 0.3 }}
            variants={fadeIn}
            className="space-y-5"
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.26em] text-accent">
                Body cover studio
              </p>
              <h3 className="text-2xl sm:text-3xl font-black">
                Secure protection with a clean, tailored fit.
              </h3>
              <p className="text-text-muted text-base">
                A premium cover that shields paint, resists dust, and stays in
                place. Sized to your car with a soft inner lining.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-text-muted">
              {[
                "Paint-safe inner lining",
                "Breathable fabric build",
                "UV + dust resistance",
                "Elastic hem with buckle",
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
            <div className="flex flex-wrap items-center gap-3">
              <NavLink
                to="/body-cover"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accentHover"
              >
                Explore body cover <RiArrowRightUpLine />
              </NavLink>
              <a
                href="https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20a%20body%20cover%20for%20my%20car.%20Please%20share%20sizes%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-borderSubtle bg-soft/70 px-5 py-3 text-sm font-semibold text-text transition hover:border-accent/70 hover:text-accent"
              >
                WhatsApp body cover <RiWhatsappFill />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className={`${sectionRhythm[1]} border-b border-borderSubtle/60`}
      >
        <div className={`${container} relative`}>
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                Safety & care
              </p>
              <p className="text-lg font-semibold text-text">
                Essentials we stand by
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                className="safety-prev h-9 w-9 rounded-full border border-borderSubtle bg-soft text-text hover:border-accent transition"
              >
                ‹
              </button>
              <button
                type="button"
                className="safety-next h-9 w-9 rounded-full border border-borderSubtle bg-soft text-text hover:border-accent transition"
              >
                ›
              </button>
            </div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{ prevEl: ".safety-prev", nextEl: ".safety-next" }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              spaceBetween={16}
              slidesPerView={1.05}
              breakpoints={{
                640: { slidesPerView: 2 },
                960: { slidesPerView: 2.5 },
              }}
              loop
              className="rounded-2xl"
            >
              {safetySlides.map((slide) => (
                <SwiperSlide key={slide.label}>
                  <div className="overflow-hidden rounded-2xl border border-borderSubtle/80 bg-soft/70 shadow-card">
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.label}
                        className="w-full h-auto object-contain block bg-black"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-text">
                        {slide.label}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex sm:hidden justify-end gap-2 mt-3">
              <button
                type="button"
                className="safety-prev h-9 w-9 rounded-full border border-borderSubtle bg-soft text-text hover:border-accent transition"
              >
                ‹
              </button>
              <button
                type="button"
                className="safety-next h-9 w-9 rounded-full border border-borderSubtle bg-soft text-text hover:border-accent transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <SectionTitle eyebrow="Services" title="What we do" tone="wide" />
      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} grid md:grid-cols-2 gap-6`}>
          {homeServices.map((service, idx) => (
            <motion.button
              key={service.title}
              type="button"
              initial={isMobile ? "show" : "hidden"}
              animate={isMobile ? "show" : undefined}
              whileInView={isMobile ? undefined : "show"}
              viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={isMobile ? undefined : { delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-borderSubtle bg-soft/70 shadow-card text-left transition-transform duration-300 hover:-translate-y-1 hover:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/60 active:scale-[0.99]"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-text">
                  {service.icon}
                  Focused
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl sm:text-[22px] font-black flex items-center gap-2 tracking-wide">
                  {service.title}{" "}
                  <span className="h-0.5 w-6 bg-accent inline-block" />
                </h3>
                <p className="text-text-muted sm:text-base text-[15px]">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm sm:text-[15px] text-text-muted">
                  <RiCheckFill className="text-accent" /> Tap to view inclusions
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none flex items-end justify-end p-3">
                <div className="flex items-center gap-2 rounded-full bg-primary/80 border border-accent/70 px-3 py-1 text-[12px] font-semibold text-accent shadow-card opacity-70 group-hover:opacity-100 group-focus:opacity-100 animate-pulse-slow">
                  <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                  <span className="relative">Open details</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Transformations"
        title="Case studies: finish and function"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} grid md:grid-cols-2 gap-6`}>
          {transformations.map((item, idx) => (
            <motion.div
              key={item.car}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ delay: idx * 0.05 }}
              className="rounded-3xl border border-borderSubtle bg-soft/70 shadow-card overflow-hidden"
            >
              <div className="p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  Case file
                </p>
                <h3 className="text-2xl font-semibold">{item.car}</h3>
                <p className="text-text-muted">{item.work}</p>
              </div>
              <div className="p-5 pt-0">
                <div className="relative rounded-2xl overflow-hidden border border-borderSubtle compare-pan-x">
                  <ReactCompareImage
                    leftImage={item.before}
                    rightImage={item.after}
                    sliderLineColor="#F3C041"
                    handleSize={40}
                    leftImageLabel="Before"
                    rightImageLabel="After"
                    hover={true}
                  />
                  <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-primary/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-text">
                    Swipe to compare
                  </div>
                </div>
                <p className="text-sm text-text-muted mt-3">{item.notes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Gallery"
        title="Recent bays & finishes"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} flex flex-wrap gap-2 mb-4`}>
          {["All", "PPF", "Detailing", "Interior", "Alloys"].map((cat) => (
            <button
              key={cat}
              onClick={() => setGalleryFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm border transition ${
                galleryFilter === cat
                  ? "border-accent text-text"
                  : "border-borderSubtle text-text-muted hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={`${container}`}>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filteredGallery.map((item, idx) => (
              <div key={item.src} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(idx);
                    setIsLightboxOpen(true);
                  }}
                  className="group relative block overflow-hidden rounded-2xl border border-borderSubtle"
                >
                  <img
                    src={item.src}
                    alt={item.category}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.18em] text-text">
                    {item.category}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        {isLightboxOpen && filteredGallery.length > 0 && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-text flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex + filteredGallery.length - 1) %
                    filteredGallery.length
                )
              }
              className="absolute left-4 sm:left-10 h-10 w-10 rounded-full bg-white/10 text-text text-xl flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="max-w-5xl w-full max-h-[80vh] rounded-2xl overflow-hidden border border-borderSubtle bg-primary/80 shadow-card">
              <img
                src={filteredGallery[lightboxIndex].src}
                alt="Gallery large"
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
              }
              className="absolute right-4 sm:right-10 h-10 w-10 rounded-full bg-white/10 text-text text-xl flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
      </section>

      <SectionTitle
        eyebrow="Contact"
        title="Book a slot or say hello"
        tone="wide"
      />
      <section className="bg-[#000000] pb-20 pt-16">
        <div className={`${container} grid lg:grid-cols-2 gap-6`}>
          <video
            className="h-full w-full rounded-3xl object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/car-headlight.mp4" type="video/mp4" />
          </video>
          <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-6 space-y-4 shadow-card lg:ml-auto">
            <div className="grid grid-cols-2 gap-3">
              <input className={inputClass} placeholder="Name" />
              <input className={inputClass} placeholder="Phone" />
            </div>
            <input className={inputClass} placeholder="Email" />
            <textarea
              className={`${inputClass} min-h-[120px]`}
              placeholder="What do you need? (detailing, PPF, interior...)"
            />
            <MagneticButton className="w-full rounded-full bg-accent text-primary py-3 font-semibold hover:bg-accentHover transition-colors">
              Submit enquiry
            </MagneticButton>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <ServiceDrawer
            service={selectedService}
            onClose={() => setSelectedService(null)}
            key={selectedService.title}
          />
        )}
      </AnimatePresence>
    </>
  );
}
