import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nehru Madan",
};

const contact = [
  { label: "Email", href: "mailto:nehru.madan@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/nehrumadan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nehrumadan" },
  { label: "GitHub", href: "https://github.com/n3hruu" },
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
          I am a third-year Renée Crown Honors student at Syracuse University
          pursuing a B.S. in Television, Radio, and Film through the S.I.
          Newhouse School of Public Communications, with a minor in Finance
          through the Whitman School of Management.
        </p>
        <p>
          I&apos;m passionate about exploring the intersection between the
          creative and business spheres of the film industry. I&apos;m
          currently pursuing opportunities in talent representation, film
          development, and film distribution. I have previous experience with
          video editing, script coverage, commercial production, and digital
          brand management.
        </p>
        <p className="text-[var(--color-muted)]">
          New York City — Syracuse
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
      </section>
    </div>
  );
}
