export type Credit = {
  role: string;
  name: string;
  // For cast credits — the character they play (rendered as "Name as Character").
  as?: string;
};

export type Award = {
  // Festival or award name, e.g. "Sundance Film Festival 2026".
  name: string;
  // Free-form qualifier, e.g. "Winner", "Official Selection", "Nominee".
  type?: string;
};

export type FilmProject = {
  slug: string;
  title: string;
  year: number;
  role: string;
  synopsis: string;
  cover: string;
  stills: string[];
  poster?: string;
  credits?: Credit[];
  awards?: Award[];
  featured?: boolean;
  // Optional CSS zoom applied only to the index-card cover (not the gallery
  // stills). Useful when a still has letterboxed black bars baked in.
  coverScale?: number;
};

export const films: FilmProject[] = [
  {
    slug: "night-shift",
    title: "Night Shift",
    year: 2025,
    role: "Editor, Producer, Assistant Director",
    synopsis:
      "On his first night cleaning a corporate office building, Miller Johnson, a reclusive janitor struggling to make rent, discovers a dead coworker in a basement bathroom. As he searches for help, Miller is met with an impenetrable bureaucracy that treats death as just another administrative inconvenience. Trapped inside a surreal system where labor and identity are inseparable, Miller is slowly absorbed into a night shift that never truly ends.",
    cover: "/images/film/night-shift/02.jpg",
    coverScale: 1.15,
    stills: [
      "/images/film/night-shift/01.jpg",
      "/images/film/night-shift/02.jpg",
      "/images/film/night-shift/03.jpg",
      "/images/film/night-shift/04.jpg",
      "/images/film/night-shift/05.jpg",
      "/images/film/night-shift/06.jpg",
    ],
    poster: "/images/film/night-shift/poster-main.jpg",
    awards: [
      { type: "Grand Prize", name: "Salt City Film Festival 2026" },
      { type: "Audience Award", name: "Salt City Film Festival 2026" },
      { type: "Official Selection", name: "Queens City Culture Film Festival 2026" },
      { type: "Best Actor", name: "Queens City Culture Film Festival 2026" },
      { type: "Bronze Award", name: "Independent Shorts Awards Film Festival" },
      { type: "Honorable Mention", name: "Independent Shorts Awards Film Festival 2026" },
    ],
    credits: [
      { role: "Director", name: "Frederic Robb" },
      { role: "Director of Photography", name: "Alex McCollum" },
      { role: "Editor", name: "Nehru Madan" },
      { role: "Production Designer", name: "Alejandro Rangel" },
      { role: "Producer", name: "Alex McCollum" },
      { role: "Producer", name: "Frederic Robb" },
      { role: "Producer", name: "Nehru Madan" },
      { role: "Producer", name: "Alejandro Rangel" },
      { role: "Key Cast", name: "Luckas Urtubey", as: "Miller Johnson" },
      { role: "Key Cast", name: "Roman Izhboldin", as: "Larry" },
      { role: "Key Cast", name: "André Vital Pardue", as: "Coffee Runner" },
      { role: "Key Cast", name: "Marcela Rojickova", as: "Stamper" },
      { role: "Key Cast", name: "Igor Prieložný", as: "Typer" },
      { role: "Key Cast", name: "Max Griffith", as: "10" },
      { role: "Assistant Director", name: "Nehru Madan" },
      { role: "Camera Supervisor", name: "Zaher Jureidini" },
      { role: "1st Assistant Camera", name: "Ella Miller" },
      { role: "2nd Assistant Camera", name: "Dariyah Woodward" },
      { role: "Gaffer", name: "George Traylor" },
      { role: "Key Grip", name: "Jai Narayan" },
      { role: "Sound Recordist", name: "Gabrielė Dikčiūtė" },
      { role: "Sound Designer", name: "Gabrielė Dikčiūtė" },
      { role: "Sound Designer", name: "Camryn Banks" },
      { role: "Wardrobe", name: "Alejandro Rangel" },
      { role: "Art Assistant", name: "Cate Laverty" },
      { role: "Script Supervisor", name: "Camryn Banks" },
      { role: "Production Assistant", name: "Emalena Preveza" },
      { role: "Colorist", name: "Marek Jicha" },
      { role: "Project Mentor", name: "Leila Basma" },
      { role: "Production Manager", name: "Sophie Hurt" },
      { role: "Composer", name: "Alejandro Rangel" },
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
