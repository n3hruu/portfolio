import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nehru Madan",
};

const contact = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Letterboxd", href: "https://letterboxd.com/" },
  { label: "GitHub", href: "https://github.com/" },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
        About
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">
        Nehru Madan
      </h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed">
        <p>
          Placeholder bio. Write a paragraph or two here about who you are,
          what you make, and what you&apos;re curious about lately.
        </p>
        <p className="text-[var(--color-muted)]">
          Based somewhere · Working on something
        </p>
      </div>

      <section className="mt-16 border-t border-[var(--color-border)] pt-10">
        <h2 className="font-serif text-2xl">Contact</h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contact.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-2 text-sm hover:border-[var(--color-accent)]"
              >
                <span className="uppercase tracking-widest text-[var(--color-muted)]">
                  {c.label}
                </span>
                <span>↗</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-[var(--color-muted)]">
          Update these placeholder links in <code>app/about/page.tsx</code>.
        </p>
      </section>
    </div>
  );
}
