import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { films, getFilm } from "@/lib/films";

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) return { title: "Film — Nehru Madan" };
  return {
    title: `${film.title} — Nehru Madan`,
    description: film.synopsis,
  };
}

export default async function FilmDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/film/"
        className="text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)]"
      >
        ← Film
      </Link>
      <header className="mt-6 mb-12 border-b border-[var(--color-border)] pb-10">
        <h1 className="font-serif text-5xl tracking-tight">{film.title}</h1>
        <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-muted)]">
          {film.role} · {film.year}
        </p>
        <p className="mt-6 max-w-prose text-lg leading-relaxed">
          {film.synopsis}
        </p>
      </header>

      <Gallery images={film.stills} alt={film.title} variant="grid" />

      {film.credits && film.credits.length > 0 && (
        <section className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="font-serif text-2xl">Credits</h2>
          <dl className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {film.credits.map((c) => (
              <div key={c.role} className="flex justify-between gap-6 border-b border-[var(--color-border)]/60 pb-2">
                <dt className="text-[var(--color-muted)] uppercase tracking-widest text-xs">
                  {c.role}
                </dt>
                <dd>{c.name}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}
