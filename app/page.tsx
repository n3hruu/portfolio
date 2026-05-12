import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { films } from "@/lib/films";
import { series } from "@/lib/photos";

export default function Home() {
  const featuredFilm = films.find((f) => f.featured) ?? films[0];
  const featuredSeries = series.find((s) => s.featured) ?? series[0];

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          Film, photography,
          <br />
          <span className="italic text-[var(--color-accent)]">
            and quieter projects
          </span>
          .
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
          Selected work and ongoing experiments. Stills only for now —
          moving images coming soon.
        </p>
        <div className="mt-10 flex gap-6 text-sm uppercase tracking-widest">
          <Link
            href="/film/"
            className="border-b border-[var(--color-accent)] pb-1 text-[var(--color-fg)]"
          >
            See films →
          </Link>
          <Link
            href="/photography/"
            className="border-b border-transparent pb-1 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
          >
            Photography →
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-3xl">Featured</h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              Recent work
            </span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {featuredFilm && (
              <ProjectCard
                href={`/film/${featuredFilm.slug}/`}
                title={featuredFilm.title}
                meta={`Film · ${featuredFilm.year}`}
                cover={featuredFilm.cover}
                coverScale={featuredFilm.coverScale}
                description={featuredFilm.synopsis}
              />
            )}
            {featuredSeries && (
              <ProjectCard
                href={`/photography/${featuredSeries.slug}/`}
                title={featuredSeries.title}
                meta={`Photography · ${featuredSeries.year}`}
                cover={featuredSeries.cover}
                description={featuredSeries.description}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
