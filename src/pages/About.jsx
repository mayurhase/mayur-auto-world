import React, { useEffect, useState } from "react";
import { container } from "../shared/layout";
import MagneticButton from "../components/MagneticButton";

const studioCallouts = [
  { label: "Calibrated lighting", style: { top: "18%", left: "16%" } },
  { label: "Dust-free bays", style: { top: "48%", left: "64%" } },
  { label: "Curing zone", style: { top: "72%", left: "28%" } },
];

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
    <main className="about-page">
      <section className="about-hero">
        <div className={`${container}`}>
          <div
            className="about-hero-frame"
            style={{ backgroundImage: "url('/assets/hero-bg.jpeg')" }}
          >
            <div className="about-hero-overlay" />
            <div className="about-hero-content">
              <p className="about-eyebrow">About us</p>
              <h1 className="about-hero-title">
                <span>Precision</span>
                <span>over noise.</span>
              </h1>
              <p className="about-hero-copy">
                OEM-safe detailing, coatings, and PPF installs built to feel right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-act about-story">
        <div className={`${container} about-story-grid`}>
          <figure className="about-portrait">
            <img
              src="/assets/about-us-owner.jpeg"
              alt="Founder portrait"
              className="about-image"
            />
            <figcaption>
              <p className="about-eyebrow">Founder</p>
              <p className="about-portrait-name">Mayur Pawar</p>
              <p className="about-caption">Studio lead</p>
            </figcaption>
          </figure>
          <div className="about-story-note">
            <p className="about-eyebrow">A note written at the beginning</p>
            <p className="about-story-quote">
              We built this studio for people who care about the details - panel
              prep, tape lines, heat control, and chemistries that keep cars safe.
              Every car is inspected twice: once by the technician who worked on it,
              and once by me. If it is not good enough for my own car, it is not
              leaving the bay.
            </p>
            <button
              type="button"
              className="about-note-action"
              onClick={() => setIsNoteOpen(true)}
            >
              View signed note
            </button>
          </div>
        </div>
      </section>

      <section className="about-act about-studio">
        <div className={`${container} about-studio-grid`}>
          <div className="about-studio-frame">
            <img
              src="/assets/full-body-painting.jpeg"
              alt="Workshop"
              className="about-image"
            />
            <div className="about-studio-overlay" />
            {studioCallouts.map((callout) => (
              <div key={callout.label} className="about-callout" style={callout.style}>
                <span className="about-callout-dot" />
                <span className="about-callout-label">{callout.label}</span>
              </div>
            ))}
          </div>
          <div className="about-studio-copyblock">
            <p className="about-eyebrow">Studio</p>
            <h2 className="about-studio-title">Where the work speaks</h2>
            <p className="about-studio-copy">
              Process-led bays, OEM-safe materials, and a finish inspected twice.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className={`${container} about-cta-inner` }>
          <div>
            <p className="about-eyebrow">Ready to talk</p>
            <h3 className="about-cta-title">Let us plan your car's next chapter</h3>
            <p className="about-cta-copy">Direct line to the studio.</p>
          </div>
          <div className="about-cta-actions">
            <MagneticButton
              className="rounded-full border border-accent text-text px-5 py-3 font-semibold hover:bg-accent/10 transition-colors"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=918055464465&text=Hi%20Mayur%20Auto%20World%2C%20I%20want%20to%20discuss%20my%20car%20and%20book%20a%20slot.",
                  "_blank",
                )
              }
            >
              WhatsApp
            </MagneticButton>
            <MagneticButton
              className="rounded-full border border-borderSubtle text-text px-5 py-3 font-semibold hover:border-accent transition-colors"
              onClick={() => window.open("tel:+918055464465")}
            >
              Call
            </MagneticButton>
          </div>
        </div>
      </section>

      {isNoteOpen && (
        <div
          className="fixed inset-0 z-50 about-note-modal flex items-center justify-center px-4"
          onClick={() => setIsNoteOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[96vh] rounded-2xl overflow-hidden border border-borderSubtle shadow-card bg-black p-3">
            <button
              type="button"
              onClick={() => setIsNoteOpen(false)}
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/10 text-text hover:bg-white/20 transition"
            >
              Close
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
