import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { films } from "@/lib/films";

export const metadata: Metadata = {
  title: "Film — Nehru Madan",
};

export default function FilmIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Section
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">Film</h1>
      </header>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {films.map((film) => (
          <ProjectCard
            key={film.slug}
            href={`/film/${film.slug}/`}
            title={film.title}
            meta={`${film.role} · ${film.year}`}
            cover={film.cover}
            description={film.synopsis}
          />
        ))}
      </div>
    </div>
  );
}
