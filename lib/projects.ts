export type MiscProject = {
  slug: string;
  title: string;
  year: number;
  kind: string;
  description: string;
  cover: string;
  images?: string[];
  body?: string;
  pdf?: string;
  links?: { label: string; href: string }[];
};

export const projects: MiscProject[] = [
  {
    slug: "through-the-lens-of-fire",
    title: "Through the Lens of Fire: Photography and Resistance",
    year: 2026,
    kind: "Journal Article",
    description:
      "Originally written for a writing class and later published in Intertext, Syracuse University's undergraduate academic journal, \"Through the Lens of Fire: Photography and Resistance\" explores how cultural histories can be preserved and understood through intentional photography.",
    cover: "/images/projects/through-the-lens-of-fire/cover.jpg",
    pdf: "/projects/through-the-lens-of-fire/article.pdf",
    links: [
      { label: "Read Online", href: "https://surface.syr.edu/intertext/" },
    ],
  },
  {
    slug: "sketchbook",
    title: "Sketchbook",
    year: 2024,
    kind: "Drawings",
    description:
      "Placeholder. Scans from an ongoing sketchbook — quick figure studies and ink work.",
    cover: "/images/placeholders/project-2-cover.svg",
    images: [
      "/images/placeholders/project-2-cover.svg",
      "/images/placeholders/project-2-2.svg",
    ],
  },
];

export function getProject(slug: string): MiscProject | undefined {
  return projects.find((p) => p.slug === slug);
}
