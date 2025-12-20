import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { galleryItems } from "../data/content";
import { container, sectionRhythm } from "../shared/layout";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredGallery = useMemo(() => {
    return galleryItems.filter(
      (item) => galleryFilter === "All" || item.category === galleryFilter
    );
  }, [galleryFilter]);

  return (
    <main>
      <SectionTitle
        eyebrow="Gallery"
        title="Finished bays & details"
        tone="wide"
      />

      <section className={sectionRhythm[0]}>
        {/* Filters */}
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

        {/* Grid */}
        <div className={container}>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filteredGallery.map((item, index) => (
              <div key={item.src} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  className="group relative block overflow-hidden rounded-2xl border border-borderSubtle"
                >
                  <img
                    src={item.src}
                    alt={item.category}
                    loading="lazy"
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

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={filteredGallery.map((item) => ({
            src: item.src,
          }))}
          on={{
            view: ({ index }) => setLightboxIndex(index),
          }}
        />
      </section>
    </main>
  );
}
