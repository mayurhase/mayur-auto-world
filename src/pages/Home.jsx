import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
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
import { homeServices, trustBar, social } from "../data/content";
import { container, sectionRhythm } from "../shared/layout";
import { fadeIn, inputClass } from "../shared/constants";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null);
  const progressRef = useRef(null);
  const rafRef = useRef(null);
  const [openFaqs, setOpenFaqs] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [state, handleSubmit] = useForm("xqekkpbj");

  const safetySlides = useMemo(
    () => [
      { image: "/assets/gallery/gallery12.jpeg" },
      { image: "/assets/gallery/gallery13.jpeg" },
      { image: "/assets/gallery/gallery14.jpeg" },
      { image: "/assets/gallery/gallery2.jpeg" },
      { image: "/assets/gallery/gallery4.jpeg" },
      { image: "/assets/gallery/gallery7.jpeg" },
      { image: "/assets/gallery/gallery19.jpeg" },
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

  const heroStats = useMemo(
    () => [
      {
        label: "Car Body Covers & PPF",
        icon: <RiStarSmileFill className="text-text" />,
      },
      {
        label: "Premium Seat Covers",
        icon: <RiStarSmileFill className="text-text" />,
      },
      {
        label: "Car Accessories & Fitment",
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

      <section className="home-hero relative min-h-[100svh] flex items-center pt-14 pb-12 sm:py-20 overflow-hidden">
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
                Protection Studio
              </p>
              <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-wide">
                Where your car feels brand new{" "}
                <span className="text-accent">every day</span>
              </h1>
              <div className="h-0.5 w-16 bg-accent" />
              <p className="text-text-muted text-base sm:text-lg">
                Everything Your Car Needs - From car
                body cover and seat covers to PPF and accessories, we help you
                protect, upgrade, and personalize your car the right way.
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

      <section
        className={`${sectionRhythm[0]} border-b border-borderSubtle/60 bg-[#000000]`}
      >
          <div className={`${container} space-y-4`}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              Trusted partner
            </p>
            <p className="text-lg font-semibold text-text">
              Autoform seat covers, selected for precise fit and finish
            </p>
          </div>
          <div className="w-full bg-[#000000] py-6">
            <div
              className={`${container} grid gap-14 md:grid-cols-[0.6fr,1fr] items-center`}
            >
              <div className="w-full max-w-xs sm:max-w-sm md:pr-6">
                <img
                  src="/assets/autoform2.png"
                  alt="Autoform"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="space-y-3 text-text-muted">
                {[
                  "OEM-grade fit that aligns to factory seat geometry.",
                  "Airbag-safe seams built for modern safety systems.",
                  "Long-term durability with consistent stitch quality.",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <p>{line}</p>
                  </div>
                ))}
                <div className="pt-6">
                  <NavLink
                    to="/seat-cover"
                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400/90 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
                  >
                    Explore seat covers <RiArrowRightUpLine />
                  </NavLink>
                </div>
              </div>
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
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl sm:text-[22px] font-black flex items-center gap-2 tracking-wide">
                  {service.title}{" "}
                  <span className="h-0.5 w-6 bg-accent inline-block" />
                </h3>
                <p className="text-text-muted sm:text-base text-[15px]">
                  {service.desc}
                </p>
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
        eyebrow="Car Body Cover"
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
              src="/assets/car-cover-service.jpeg"
              alt="Premium car body cover"
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
                Car body cover studio
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
                Explore car body cover <RiArrowRightUpLine />
              </NavLink>
              <a
                href="https://api.whatsapp.com/send?phone=919404984040&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20a%20car%20body%20cover%20for%20my%20car.%20Please%20share%20sizes%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-borderSubtle bg-soft/70 px-5 py-3 text-sm font-semibold text-text transition hover:border-accent/70 hover:text-accent"
              >
                Get Quote <RiWhatsappFill />
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
                Store visit
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
              autoplay={{ delay: 1200, disableOnInteraction: false }}
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

      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} space-y-4`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                Videos
              </p>
              <p className="text-lg font-semibold text-text">
                Quick looks from the studio
              </p>
            </div>
          </div>
          <div className="videos-scroll flex gap-4 overflow-x-auto pb-2 sm:grid sm:overflow-visible sm:grid-cols-2 lg:grid-cols-3">
            {[
              "https://www.youtube.com/embed/F4ZKi55_A2M",
              "https://www.youtube.com/embed/voCLD598GJM",
              "https://www.youtube.com/embed/XDlMrVwobrk",
            ].map((src) => (
              <div
                key={src}
                className="relative w-[70vw] max-w-[320px] flex-shrink-0 overflow-hidden rounded-2xl border border-borderSubtle bg-black shadow-card aspect-[9/16] sm:w-full sm:max-w-none"
              >
                <iframe
                  src={src}
                  title="YouTube Shorts"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
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
          <div className="rounded-3xl border border-borderSubtle bg-soft/70 p-6 shadow-card lg:ml-auto">
            {state.succeeded ? (
              <div className="text-center py-10">
                <p className="text-lg font-semibold text-text">
                  Thanks for reaching out.
                </p>
                <p className="text-text-muted mt-2">
                  We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className={inputClass}
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className={inputClass}
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <input
                  className={inputClass}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  className={`${inputClass} min-h-[120px]`}
                  id="message"
                  name="message"
                  placeholder="What do you need? (detailing, PPF, interior...)"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <MagneticButton
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-full bg-accent text-primary py-3 font-semibold hover:bg-accentHover transition-colors disabled:opacity-60"
                >
                  Submit enquiry
                </MagneticButton>
              </form>
            )}
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
