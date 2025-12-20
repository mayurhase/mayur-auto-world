import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ReactCompareImage from "react-compare-image";
import Lightbox from "react-image-lightbox";
import {
  RiStarSmileFill,
  RiWhatsappFill,
  RiPhoneFill,
  RiCheckFill,
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
  const [scrollProgress, setScrollProgress] = useState(0);

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
      { label: "All services", image: "/assets/all-services.jpeg" },
      { label: "Don’t drink and drive", image: "/assets/dont-drink-drive.jpeg" },
      { label: "Use seatbelt", image: "/assets/use-seatbelt.jpeg" },
      { label: "Car cover", image: "/assets/car-cover.jpeg" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress(Math.min(100, (scrolled / scrollable) * 100));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div
          className="h-full bg-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <section
        className="relative min-h-screen flex items-center py-20 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.68) 40%, rgba(0,0,0,0.4) 100%), url('/assets/hero-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0b0b0b",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
        <div className="relative w-full">
          <div className={`${container} space-y-6`}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-text-muted">
                Precision studio
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl"
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

      <section className={`${sectionRhythm[1]} border-b border-borderSubtle/60`}>
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
              autoplay={{ delay: 2800, disableOnInteraction: false }}
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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-borderSubtle bg-soft/70 shadow-card text-left"
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
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {service.title}{" "}
                  <span className="h-0.5 w-6 bg-accent inline-block" />
                </h3>
                <p className="text-text-muted">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <RiCheckFill className="text-accent" /> Tap for inclusions
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
                <div className="relative rounded-2xl overflow-hidden border border-borderSubtle">
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
          <Lightbox
            mainSrc={filteredGallery[lightboxIndex].src}
            nextSrc={
              filteredGallery[(lightboxIndex + 1) % filteredGallery.length].src
            }
            prevSrc={
              filteredGallery[
                (lightboxIndex + filteredGallery.length - 1) %
                  filteredGallery.length
              ].src
            }
            onCloseRequest={() => setIsLightboxOpen(false)}
            onMovePrevRequest={() =>
              setLightboxIndex(
                (lightboxIndex + filteredGallery.length - 1) %
                  filteredGallery.length
              )
            }
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
            }
          />
        )}
      </section>

      <SectionTitle
        eyebrow="Brands & credibility"
        title="Trusted tools and materials"
        tone="tight"
      />
      <section
        className={`${sectionRhythm[1]} border-y border-borderSubtle/60`}
      >
        <div className={`${container} grid sm:grid-cols-5 gap-3`}>
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-2xl border border-borderSubtle bg-soft/70 px-3 py-4 text-center text-sm text-text-muted hover:border-accent transition"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="FAQs"
        title="Answers before you visit"
        tone="wide"
      />
      <section className={`${sectionRhythm[0]}`}>
        <div className={`${container} grid md:grid-cols-3 gap-4`}>
          {faqs.map((item, idx) => (
            <motion.div
              key={item.q}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: idx * 0.04 }}
              className="rounded-2xl border border-borderSubtle bg-soft/70 p-5"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">
                {item.q}
              </p>
              <p className="text-text-muted">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Social"
        title="See builds in motion"
        tone="tight"
      />
      <section
        className={`${sectionRhythm[1]} border-y border-borderSubtle/60`}
      >
        <div className={`${container} flex flex-wrap gap-3`}>
          {social.map((item) => (
            <a
              key={item.platform}
              href={item.link}
              className="flex items-center gap-3 rounded-2xl border border-borderSubtle bg-soft/70 px-4 py-3 hover:border-accent transition"
            >
              <span className="text-accent text-lg">{item.icon}</span>
              <div>
                <p className="font-semibold">{item.platform}</p>
                <p className="text-text-muted text-sm">{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SectionTitle
        eyebrow="Contact"
        title="Book a slot or say hello"
        tone="wide"
      />
      <section className="pb-20 pt-16">
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

      {selectedService && (
        <ServiceDrawer
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
