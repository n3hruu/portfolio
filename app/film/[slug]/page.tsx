import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { films, getFilm, type Credit } from "@/lib/films";
import { asset } from "@/lib/asset";

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

// Collapse consecutive same-role credits so we render the role label once
// with multiple names beneath it (e.g. 4 Producers).
function groupCredits(credits: Credit[]) {
  const groups: { role: string; entries: Credit[] }[] = [];
  for (const c of credits) {
    const last = groups[groups.length - 1];
    if (last && last.role === c.role) {
      last.entries.push(c);
    } else {
      groups.push({ role: c.role, entries: [c] });
    }
  }
  return groups;
}

export default async function FilmDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) notFound();

  const creditGroups = film.credits ? groupCredits(film.credits) : [];

  return (
    <article className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/film/"
        className="text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)]"
      >
        ← Film
      </Link>

      <header className="mt-6 mb-12 border-b border-[var(--color-border)] pb-10">
        {film.poster ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
            <div className="bg-[var(--color-surface)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(film.poster)}
                alt={`${film.title} poster`}
                className="block w-full"
              />
            </div>
            <div>
              <h1 className="font-serif text-5xl tracking-tight">{film.title}</h1>
              <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-muted)]">
                {[film.role, film.year].filter(Boolean).join(" · ")}
              </p>
              {film.links && film.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {film.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[var(--color-muted)]/40 px-3 py-1 text-sm tracking-wider text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                      <span aria-hidden className="text-xs">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              )}
              <p className="mt-6 text-lg leading-relaxed">{film.synopsis}</p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="font-serif text-5xl tracking-tight">{film.title}</h1>
            <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-muted)]">
              {[film.role, film.year].filter(Boolean).join(" · ")}
            </p>
            {film.links && film.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {film.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-[var(--color-muted)]/40 px-3 py-1 text-sm tracking-wider text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                    <span aria-hidden className="text-xs">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            )}
            <p className="mt-6 max-w-prose text-lg leading-relaxed">
              {film.synopsis}
            </p>
          </>
        )}
      </header>

      {film.stills.length > 0 && (
        <Gallery images={film.stills} alt={film.title} variant="grid" />
      )}

      {film.awards && film.awards.length > 0 && (
        <section className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="font-serif text-2xl">Awards & Festivals</h2>
          <ul className="mt-6 space-y-3">
            {film.awards.map((a, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 border-b border-[var(--color-border)]/60 pb-3 sm:flex-row sm:items-baseline sm:gap-6"
              >
                {a.type && (
                  <span className="text-xs uppercase tracking-widest text-[var(--color-accent)] sm:w-44 sm:shrink-0">
                    {a.type}
                  </span>
                )}
                <span className="text-base">{a.name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {creditGroups.length > 0 && (
        <section className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="font-serif text-2xl">Credits</h2>
          <dl className="mt-6 space-y-3 text-sm">
            {creditGroups.map((group, gi) => (
              <div
                key={gi}
                className="grid grid-cols-1 gap-1 border-b border-[var(--color-border)]/60 pb-3 sm:grid-cols-[12rem_1fr] sm:gap-6"
              >
                <dt className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {group.role}
                </dt>
                <dd>
                  <ul className="space-y-1">
                    {group.entries.map((e, ei) => (
                      <li key={ei}>
                        {e.name}
                        {e.as && (
                          <span className="italic text-[var(--color-muted)]">
                            {" "}as {e.as}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}
