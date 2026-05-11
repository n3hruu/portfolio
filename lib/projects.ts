export type MiscProject = {
  slug: string;
  title: string;
  year: number;
  kind: string;
  description: string;
  cover: string;
  images?: string[];
  body?: string;
  links?: { label: string; href: string }[];
};

export const projects: MiscProject[] = [
  {
    slug: "field-notes",
    title: "Field Notes",
    year: 2025,
    kind: "Writing",
    description:
      "Placeholder. An occasional log of small observations from travel and walking.",
    cover: "/images/placeholders/project-1-cover.svg",
    body:
      "This is placeholder body text. Replace with the full writeup, embedded media, or whatever the project calls for.",
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
