"use client";

import { useEffect, useCallback } from "react";
import { asset } from "@/lib/asset";

export default function Lightbox({
  images,
  index,
  alt,
  onClose,
  onIndexChange,
}: {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const prev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} image viewer`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-2xl text-[var(--color-fg)] hover:text-[var(--color-accent)]"
        aria-label="Close"
      >
        ✕
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 text-3xl text-[var(--color-fg)] hover:text-[var(--color-accent)]"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 text-3xl text-[var(--color-fg)] hover:text-[var(--color-accent)]"
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(images[index])}
        alt={`${alt} ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] object-contain"
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-[var(--color-muted)] uppercase">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
