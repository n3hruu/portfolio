export type MiscProject = {
  slug: string;
  title: string;
  year: number;
  kind: string;
  description: string;
  cover: string;
  images?: string[];
  body?: string;
  // Bullet list of highlights / achievements rendered as a section
  // beneath the body on the detail page.
  highlights?: string[];
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
    slug: "m-and-h-inc",
    title: "M&H Inc.",
    year: 2026,
    kind: "Talent Representation",
    description:
      "Co-founded student-run talent agency through Syracuse University's TRF 430 course; signed and managed indie-pop artist Isabella Allon, who won Song of the Year at The Ottos.",
    cover: "/images/projects/m-and-h-inc/logo.png",
    logo: true,
    body:
      "Co-founded with Jack Hicks through TRF 430, M&H Inc. is a student-run talent agency built around one idea: give artists what they need to move, and then get out of the way.\n\nOur client, Isabella Allon, won Song of the Year at the Otto Awards, shot a music video for her upcoming release, and on April 25th opened for West 22nd, a band with nearly one million monthly listeners on Spotify. Since we started working with her, she has grown by over 1,500 monthly listeners. We help develop her creative vision, connect her to real opportunities, and make sure she stays in full control of who she is.\n\nWe also completed a full A&R pitch for potential client honestav to UTA representatives. The pitch was named the top in the class.",
    highlights: [
      "Co-founded with Jack Hicks through Syracuse University's TRF 430 Artist Representation course",
      "Signed and managed indie-pop artist Isabella Allon as co-manager and talent agent",
      "Coordinated her placement as opening act for West 22nd at The Song & Dance — sold out, 400 attendees (April 25, 2026)",
      "Managed rollout for two singles (\"Took the Lead,\" \"Lover\") with a third releasing shortly",
      "Grew her audience to 2,000+ monthly listeners across platforms",
      "Supported press campaign resulting in a Daily Orange feature and Song of the Year win at The Ottos, SU's student music awards",
      "Facilitated music video shoot for her upcoming release",
      "Completed A&R pitch for potential client honestav to UTA representatives — named top pitch in the class",
    ],
  },
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
];

export function getProject(slug: string): MiscProject | undefined {
  return projects.find((p) => p.slug === slug);
}
