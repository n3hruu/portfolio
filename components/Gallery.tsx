"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import { asset } from "@/lib/asset";

type Variant = "grid" | "masonry";

export default function Gallery({
  images,
  variant = "grid",
  alt,
  columns = 3,
}: {
  images: string[];
  variant?: Variant;
  alt: string;
  // Masonry column count on large screens. Use 2 for landscape-heavy
  // collections where you want each photo to read larger.
  columns?: 2 | 3;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (variant === "masonry") {
    // Tailwind needs literal class strings to detect them, so branch instead
    // of interpolating.
    const masonryClass =
      columns === 2
        ? "columns-1 gap-4 sm:columns-2 [column-fill:_balance]"
        : "columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]";
    return (
      <>
        <div className={masonryClass}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="mb-4 block w-full overflow-hidden break-inside-avoid bg-[var(--color-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(src)}
                alt={`${alt} ${i + 1}`}
                loading="lazy"
                className="block h-auto w-full transition-opacity hover:opacity-90"
              />
            </button>
          ))}
        </div>
        {openIndex !== null && (
          <Lightbox
            images={images}
            index={openIndex}
            alt={alt}
            onClose={() => setOpenIndex(null)}
            onIndexChange={setOpenIndex}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative block aspect-[3/2] overflow-hidden bg-[var(--color-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(src)}
              alt={`${alt} ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          alt={alt}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
