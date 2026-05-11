export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Nehru Madan</span>
        <span className="font-serif italic">Made with care.</span>
      </div>
    </footer>
  );
}
