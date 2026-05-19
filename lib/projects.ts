export type MiscProject = {
  slug: string;
  title: string;
  year: number;
  kind: string;
  description: string;
  cover: string;
  images?: string[];
  // Optional caption per image, indexed parallel to `images`. Use an
  // empty string to omit a caption for a particular image.
  captions?: string[];
  body?: string;
  // Bullet list of highlights / achievements rendered as a section
  // beneath the body on the detail page.
  highlights?: string[];
  // Masonry column count on large screens for the project's gallery.
  // 2 = larger photos. Defaults to 3 if omitted.
  galleryColumns?: 2 | 3;
  pdf?: string;
  links?: { label: string; href: string }[];
  // When true, the cover image is treated as a brand logo rather than a
  // photo: rendered with object-contain + padding on a cream background
  // (both in the index card and a tall hero block at the top of the
  // detail page) to preserve the logo's negative space and contrast
  // against the dark site theme.
  logo?: boolean;
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
    slug: "m-and-h-inc",
    title: "M&H Inc.",
    year: 2026,
    kind: "Talent Representation",
    description:
      "Co-founded with Jack Hicks through Syracuse University's TRF 430 Course, M&H Inc. is a student-run talent agency built on a simple belief: give artists world-class support, then trust them with the rest.",
    cover: "/images/projects/m-and-h-inc/logo.png",
    logo: true,
    images: [
      "/images/projects/m-and-h-inc/01.jpg",
      "/images/projects/m-and-h-inc/02.jpg",
      "/images/projects/m-and-h-inc/03.jpg",
    ],
    captions: [
      "Opening for West 22nd at The Song & Dance (April 25, 2026)",
      "Jack Hicks, Isabella Allon, and me.",
      "Filming Isabella's live music video performance.",
    ],
    body:
      "Throughout the semester, we signed and managed indie-pop artist Isabella Allon. During our tenure as her manager, we spearheaded a social media marketing strategy to promote the release of her two newest singles, facilitated video and photo shoots, and organized the production of a live music video performance in collaboration with a local filmmaker. On April 25th, 2026, Isabella performed as the opening act for the band West 22nd, which sold out with over 400 attendees. During our time representing Isabella, she grew from only 35 to over 1,500 monthly listeners on Spotify. We help develop her creative vision, connect her to real opportunities, all while making sure she stays in full control of who she is.",
  },
];

export function getProject(slug: string): MiscProject | undefined {
  return projects.find((p) => p.slug === slug);
}
