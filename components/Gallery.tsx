"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

type Variant = "grid" | "masonry";

export default function Gallery({
  images,
  variant = "grid",
  alt,
}: {
  images: string[];
  variant?: Variant;
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (variant === "masonry") {
    return (
      <>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="mb-4 block w-full overflow-hidden break-inside-avoid bg-[var(--color-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
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
              src={src}
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
