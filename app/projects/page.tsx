import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Nehru Madan",
};

export default function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Section
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">Projects</h1>
        <p className="mt-4 max-w-prose text-[var(--color-muted)]">
          Miscellaneous personal work — writing, drawings, code, experiments.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            href={`/projects/${p.slug}/`}
            title={p.title}
            meta={`${p.kind} · ${p.year}`}
            cover={p.cover}
            description={p.description}
          />
        ))}
      </div>
    </div>
  );
}
