import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { series } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photography — Nehru Madan",
};

export default function PhotographyIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Section
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">Photography</h1>
      </header>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {series.map((s) => (
          <ProjectCard
            key={s.slug}
            href={`/photography/${s.slug}/`}
            title={s.title}
            meta={`${s.images.length} images · ${s.year}`}
            cover={s.cover}
            description={s.description}
          />
        ))}
      </div>
    </div>
  );
}
