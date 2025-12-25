import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { container } from "../shared/layout";
import MagneticButton from "../components/MagneticButton";

export default function AboutPage() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  useEffect(() => {
    if (!isNoteOpen) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isNoteOpen]);

  return (
    <main className="pb-16 about-snap">
      <section className="about-hero relative overflow-hidden border-b border-borderSubtle/60 bg-gradient-to-b from-primary via-primary to-soft about-snap-section pt-2 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,192,65,0.08),transparent_30%)]" />
        <div
          className={`${container} grid lg:grid-cols-2 gap-6 py-6 sm:py-10 items-center relative`}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">
              About us
            </p>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-wide">
              We Build Protection That Lasts
            </h1>
            <p className="text-text-muted text-[16px] sm:text-base">
              We provide professional car detailing, ceramic coating, and PPF
              installation using OEM-safe methods and proven processes. Every
              vehicle is handled in a clean, controlled workshop, with proper
              preparation, masking, and curing — because results depend on
              process, not shortcuts.
            </p>
            <p className="text-text-muted text-[15px] sm:text-base">
              No guesswork. No rushed jobs. Just consistent, high-quality
              finishes.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-borderSubtle shadow-card about-hero-media">
            <img
              src="/assets/hero-bg.jpeg"
              alt="Workshop exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 about-hero-overlay" />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 border-y border-borderSubtle/60 bg-soft/60 about-snap-section">
        <div className={`${container} grid lg:grid-cols-2 gap-6 items-center`}>
          <div className="relative rounded-3xl overflow-hidden border border-borderSubtle shadow-card max-w-xs w-full mx-auto">
            <img
              src="/assets/about-us-owner.jpeg"
              alt="Founder portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-text">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">
                Founder
              </p>
              <p className="text-2xl font-black tracking-wide">Mayur Pawar</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-wide">
              About the Founder
            </h3>
            <p className="text-text-muted leading-relaxed">
              I founded Mayur Auto World with a clear standard: no shortcuts, no
              compromises. With over 6 years of hands-on experience in
              professional car detailing, ceramic coating, and paint protection
              film (PPF), I follow certified methods, OEM-safe products, and
              controlled processes to protect every vehicle properly. Each car
              is inspected twice—first by the technician, and finally by me. If
              it’s not good enough for my own car, it doesn’t leave our studio.
            </p>
            <div className="flex gap-3">
              <MagneticButton
                className="rounded-full border border-accent text-text px-5 py-2 font-semibold hover:bg-accent/10 transition-colors"
                onClick={() => setIsNoteOpen(true)}
              >
                View signed note
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 about-snap-section">
        <div className={`${container} space-y-6`}>
          <SectionTitle
            eyebrow="Studio"
            title="Interior craft, live"
            tone="wide"
          />
          <div className="relative overflow-hidden rounded-3xl border border-borderSubtle shadow-card">
            <img
              src="/assets/gallery/about-studio.jpeg"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 border-t border-borderSubtle/60">
        <div
          className={`${container} flex flex-col md:flex-row items-center gap-4 md:gap-6`}
        >
          <div className="flex-1 space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">
              Ready to talk
            </p>
            <h3 className="text-2xl font-black tracking-wide">
              Let’s plan your car’s next chapter
            </h3>
            <p className="text-text-muted">
              Direct line to the studio. Quick answers on services, timelines,
              and aftercare.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <MagneticButton
              className="rounded-full border border-accent text-text px-5 py-3 font-semibold hover:bg-accent/10 transition-colors"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=919404984040&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20to%20discuss%20my%20car%20and%20book%20a%20slot.",
                  "_blank"
                )
              }
            >
              WhatsApp
            </MagneticButton>
            <MagneticButton
              className="rounded-full border border-borderSubtle text-text px-5 py-3 font-semibold hover:border-accent transition-colors"
              onClick={() => window.open("tel:+919404984040")}
            >
              Call
            </MagneticButton>
          </div>
        </div>
      </section>

      {isNoteOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setIsNoteOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[96vh] rounded-2xl overflow-hidden border border-borderSubtle shadow-card bg-black p-3">
            <button
              type="button"
              onClick={() => setIsNoteOpen(false)}
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/10 text-text hover:bg-white/20 transition"
            >
              ✕
            </button>
            <div className="flex items-center justify-center h-full w-full">
              <img
                src="/assets/founder-note.jpeg"
                alt="Founder note"
                className="max-h-[90vh] max-w-full w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
