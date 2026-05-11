export type PhotoSeries = {
  slug: string;
  title: string;
  year: number;
  description: string;
  cover: string;
  images: string[];
  featured?: boolean;
};

export const series: PhotoSeries[] = [
  {
    slug: "city-at-night",
    title: "City at Night",
    year: 2025,
    description:
      "Placeholder series. A walk through neon-lit streets after closing time.",
    cover: "/images/placeholders/photo-1-cover.svg",
    images: [
      "/images/placeholders/photo-1-cover.svg",
      "/images/placeholders/photo-1-2.svg",
      "/images/placeholders/photo-1-3.svg",
      "/images/placeholders/photo-1-4.svg",
    ],
    featured: true,
  },
  {
    slug: "still-lifes",
    title: "Still Lifes",
    year: 2024,
    description:
      "Placeholder. Studies of light falling on ordinary objects, shot at home.",
    cover: "/images/placeholders/photo-2-cover.svg",
    images: [
      "/images/placeholders/photo-2-cover.svg",
      "/images/placeholders/photo-2-2.svg",
      "/images/placeholders/photo-2-3.svg",
    ],
  },
];

export function getSeries(slug: string): PhotoSeries | undefined {
  return series.find((s) => s.slug === slug);
}
