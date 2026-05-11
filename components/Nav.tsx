import Link from "next/link";

const links = [
  { href: "/film/", label: "Film" },
  { href: "/photography/", label: "Photography" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-[var(--color-fg)]"
        >
          Nehru Madan
        </Link>
        <ul className="flex gap-6 text-sm tracking-wide uppercase text-[var(--color-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
