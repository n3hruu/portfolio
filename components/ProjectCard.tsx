import Link from "next/link";
import { asset } from "@/lib/asset";

export default function ProjectCard({
  href,
  title,
  meta,
  cover,
  description,
  coverScale,
  logo,
}: {
  href: string;
  title: string;
  meta?: string;
  cover: string;
  description?: string;
  // Optional zoom-in on the cover image only (e.g. to crop letterboxed
  // black bars baked into a film still). 1 = no zoom. Overrides the
  // default subtle hover scale.
  coverScale?: number;
  // When true, treat the cover as a brand logo: contain (don't crop) on a
  // cream background instead of edge-to-edge object-cover.
  logo?: boolean;
}) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative aspect-[4/3] overflow-hidden ${
          logo ? "bg-[#dcd2c2]" : "bg-[var(--color-surface)]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(cover)}
          alt={title}
          loading="lazy"
          style={coverScale ? { transform: `scale(${coverScale})` } : undefined}
          className={
            logo
              ? "h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-[1.03]"
              : coverScale
                ? "h-full w-full object-cover"
                : "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          }
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl leading-tight text-[var(--color-fg)] group-hover:text-[var(--color-accent)]">
          {title}
        </h3>
        {meta && (
          <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
            {meta}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </Link>
  );
}
