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

export type FilmVideo = {
  // YouTube video ID (the 11-char id from youtu.be/<id> or watch?v=<id>).
  youtubeId: string;
  // Defaults to landscape (16:9) if omitted. Set to "portrait" for
  // vertical/9:16 source video (Shorts, Reels-style content).
  aspect?: "portrait";
};

export type FilmProject = {
  slug: string;
  title: string;
  year: number;
  role: string;
  // Format / category shown to the right of the title on cards, e.g.
  // "Short Film", "Documentary", "Music Video", "Feature".
  projectType?: string;
  // Full synopsis shown on the detail page.
  synopsis: string;
  // Short version shown on the Film index card. Falls back to `synopsis`
  // if not set.
  shortSynopsis?: string;
  // Runtime as MM:SS for short films, or "Xm" for features. Optional.
  runtime?: string;
  // External links shown as a row beneath the synopsis, e.g. "Watch" (a
  // YouTube/Vimeo link) or "IMDb".
  links?: { label: string; href: string }[];
  // Videos embedded inline below the header. One video renders full-width
  // landscape by default; two or more render side-by-side in a grid, each
  // at its own aspect ratio. Each gets a "Watch on YouTube ↗" fallback link.
  videos?: FilmVideo[];
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
    slug: "the-mad-cactus",
    title: "The Mad Cactus",
    year: 2026,
    role: "Producer",
    projectType: "Commercial",
    synopsis: "Details forthcoming.",
    shortSynopsis: "",
    cover: "/images/placeholders/film-the-mad-cactus.svg",
    stills: [],
  },
  {
    slug: "night-shift",
    title: "Night Shift",
    year: 2025,
    role: "Producer, Editor, Assistant Director",
    projectType: "Short Film",
    synopsis:
      "On his first night cleaning a corporate office building, Miller Johnson, a reclusive janitor struggling to make rent, discovers a dead coworker in a basement bathroom. As he searches for help, Miller is met with an impenetrable bureaucracy that treats death as just another administrative inconvenience. Trapped inside a surreal system where labor and identity are inseparable, Miller is slowly absorbed into a night shift that never truly ends.",
    shortSynopsis:
      "On his first night cleaning a corporate office building, Miller Johnson, a reclusive janitor struggling to make rent, discovers a dead coworker in a basement bathroom.",
    runtime: "9:52",
    links: [
      { label: "Watch", href: "https://youtu.be/5_v9ct5CiAI" },
      {
        label: "IMDb",
        href: "https://www.imdb.com/title/tt39109391/?ref_=nv_sr_srsg_6_tt_8_nm_0_in_0_q_night%20shift%202025%20",
      },
    ],
    cover: "/images/film/night-shift/01.jpg",
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
    slug: "grater-things-collection",
    title: "Grater Things Collection",
    year: 2025,
    role: "Director",
    projectType: "Commercial",
    synopsis: "Details forthcoming.",
    shortSynopsis: "",
    cover: "/images/placeholders/film-grater-things-collection.svg",
    stills: [],
  },
  {
    slug: "juice-jam",
    title: "Juice Jam",
    year: 2024,
    role: "Editor, Videographer",
    projectType: "Promotional Video",
    synopsis: "Juice Jam 2024 — JMA Wireless Dome — Syracuse University.",
    cover: "/images/film/juice-jam/cover.jpg",
    stills: [],
    videos: [{ youtubeId: "HXOdEhyBRlY" }],
  },
  {
    slug: "text-less-live-more",
    title: "Text Less. Live More.",
    year: 2023,
    role: "Writer, Director, Editor",
    projectType: "PSA",
    synopsis: "Details forthcoming.",
    shortSynopsis: "",
    cover: "/images/placeholders/film-text-less-live-more.svg",
    stills: [],
  },
  {
    slug: "untitled",
    title: "mother****er",
    year: 2023,
    role: "Director, Editor",
    projectType: "Short Film",
    synopsis: "Details forthcoming.",
    shortSynopsis: "",
    cover: "/images/placeholders/film-untitled.svg",
    stills: [],
  },
  {
    slug: "anniversary",
    title: "Anniversary",
    year: 2022,
    role: "Director, Editor",
    projectType: "Short Film",
    synopsis: "Details forthcoming.",
    shortSynopsis: "",
    cover: "/images/placeholders/film-anniversary.svg",
    stills: [],
  },
];

export function getFilm(slug: string): FilmProject | undefined {
  return films.find((f) => f.slug === slug);
}
