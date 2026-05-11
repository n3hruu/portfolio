export type FilmProject = {
  slug: string;
  title: string;
  year: number;
  role: string;
  synopsis: string;
  cover: string;
  stills: string[];
  credits?: { role: string; name: string }[];
  featured?: boolean;
};

export const films: FilmProject[] = [
  {
    slug: "untitled-short-one",
    title: "Untitled Short One",
    year: 2025,
    role: "Director, Writer",
    synopsis:
      "A placeholder synopsis. Two strangers share a long bus ride through a city that won't stop raining.",
    cover: "/images/placeholders/film-1-cover.svg",
    stills: [
      "/images/placeholders/film-1-cover.svg",
      "/images/placeholders/film-1-still-2.svg",
      "/images/placeholders/film-1-still-3.svg",
    ],
    credits: [
      { role: "Director of Photography", name: "—" },
      { role: "Editor", name: "—" },
      { role: "Sound", name: "—" },
    ],
    featured: true,
  },
  {
    slug: "untitled-short-two",
    title: "Untitled Short Two",
    year: 2024,
    role: "Director of Photography",
    synopsis:
      "Placeholder. A documentary fragment following a night-shift baker on the last day before the shop closes for good.",
    cover: "/images/placeholders/film-2-cover.svg",
    stills: [
      "/images/placeholders/film-2-cover.svg",
      "/images/placeholders/film-2-still-2.svg",
    ],
  },
];

export function getFilm(slug: string): FilmProject | undefined {
  return films.find((f) => f.slug === slug);
}
