import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { projects, getProject } from "@/lib/projects";
import { asset } from "@/lib/asset";
import { inlineMarkup } from "@/lib/markup";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Projects — Nehru Madan" };
  return {
    title: `${p.title} — Nehru Madan`,
    description: p.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/projects/"
        className="text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)]"
      >
        ← Projects
      </Link>

      {p.logo && (
        <div className="mt-6 flex items-center justify-center bg-[#dcd2c2] px-8 py-16 sm:py-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(p.cover)}
            alt={`${p.title} logo`}
            className="logo-enter block max-h-64 w-auto object-contain"
          />
        </div>
      )}

      <header
        className={`${p.logo ? "mt-10" : "mt-6"} mb-12 border-b border-[var(--color-border)] pb-10`}
      >
        <h1 className="font-serif text-5xl tracking-tight">{p.title}</h1>
        <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-muted)]">
          {p.kind} · {p.year}
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          {inlineMarkup(p.description)}
        </p>
      </header>

      {p.pdf && (
        <section className="mt-4 mb-12">
          <iframe
            src={asset(p.pdf)}
            title={p.title}
            className="block w-full h-[85vh] border border-[var(--color-border)] bg-[var(--color-surface)]"
          />
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Trouble viewing inline?{" "}
            <a
              href={asset(p.pdf)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[var(--color-border)] text-[var(--color-fg)] hover:border-[var(--color-accent)]"
            >
              Open PDF in a new tab ↗
            </a>
          </p>
        </section>
      )}

      {p.body && (
        <div className="prose-cinematic max-w-prose leading-relaxed text-[var(--color-fg)]">
          {p.body.split("\n\n").map((para, i) => (
            <p key={i} className="mb-6">
              {inlineMarkup(para)}
            </p>
          ))}
        </div>
      )}

      {p.highlights && p.highlights.length > 0 && (
        <section className="mt-12 border-t border-[var(--color-border)] pt-10">
          <h2 className="font-serif text-2xl">Highlights</h2>
          <ul className="mt-6 space-y-3">
            {p.highlights.map((h, i) => (
              <li
                key={i}
                className="flex gap-4 leading-relaxed text-[var(--color-fg)]"
              >
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-1 w-3 shrink-0 bg-[var(--color-accent)]"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {p.images && p.images.length > 0 && (
        <div className="mt-16">
          <Gallery
            images={p.images}
            alt={p.title}
            variant="masonry"
            columns={p.galleryColumns ?? 3}
            captions={p.captions}
          />
        </div>
      )}

      {p.links && p.links.length > 0 && (
        <section className="mt-16 border-t border-[var(--color-border)] pt-10">
          <h2 className="font-serif text-2xl">Links</h2>
          <ul className="mt-4 space-y-2">
            {p.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[var(--color-border)] pb-1 text-[var(--color-fg)] hover:border-[var(--color-accent)]"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
