import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { series, getSeries } from "@/lib/photos";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) return { title: "Photography — Nehru Madan" };
  return {
    title: `${s.title} — Nehru Madan`,
    description: s.description,
  };
}

export default async function SeriesDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) notFound();

  return (
    <article className="mx-auto max-w-6xl px-6 py-20">
      <Link
        href="/photography/"
        className="text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)]"
      >
        ← Photography
      </Link>
      <header className="mt-6 mb-10 border-b border-[var(--color-border)] pb-8">
        <h1 className="font-serif text-5xl tracking-tight">{s.title}</h1>
        <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-muted)]">
          {s.year} · {s.images.length} images
        </p>
        <p className="mt-6 font-serif text-xl italic text-[var(--color-muted)]">
          Click any image to enlarge.
        </p>
      </header>

      <Gallery
        images={s.images}
        alt={s.title}
        variant="masonry"
        columns={s.galleryColumns ?? 3}
      />
    </article>
  );
}
