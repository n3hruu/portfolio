export type PhotoSeries = {
  slug: string;
  title: string;
  year: string;
  description: string;
  cover: string;
  images: string[];
  featured?: boolean;
};

export const series: PhotoSeries[] = [
  {
    slug: "concert-photography",
    title: "Concert Photography",
    year: "2024–2026",
    description:
      "Live music captured from the pit and beyond — performances and atmosphere across venues and acts.",
    cover: "/images/photography/concert-photography/01RossLynch-3.jpg",
    images: [
      "/images/photography/concert-photography/01RossLynch-3.jpg",
      "/images/photography/concert-photography/02RoleModel-4.jpg",
      "/images/photography/concert-photography/03RossLynch-1.jpg",
      "/images/photography/concert-photography/04RoleModel-3.jpg",
      "/images/photography/concert-photography/05Smino1.jpg",
      "/images/photography/concert-photography/06RossLynch-4.jpg",
      "/images/photography/concert-photography/07Smino3.jpg",
      "/images/photography/concert-photography/08RoleModel-6.jpg",
      "/images/photography/concert-photography/09RoleModel-5.jpg",
      "/images/photography/concert-photography/10Smino2.jpg",
      "/images/photography/concert-photography/11RossLynch-2.jpg",
      "/images/photography/concert-photography/12DSC02489.jpg",
    ],
    featured: true,
  },
  {
    slug: "environments",
    title: "Environments",
    year: "2019–2023",
    description:
      "Studies of place — natural and built, observed across four years.",
    cover: "/images/photography/environments/01IMG_5764.JPG",
    images: [
      "/images/photography/environments/01IMG_5764.JPG",
      "/images/photography/environments/02IMG_5285.JPG",
      "/images/photography/environments/03IMG_5085.JPG",
      "/images/photography/environments/04IMG_5060.jpeg",
      "/images/photography/environments/05DSC_0324.JPG",
      "/images/photography/environments/06IMG_5080.JPG",
      "/images/photography/environments/07IMG_5081.JPG",
      "/images/photography/environments/08IMG_5083.JPG",
      "/images/photography/environments/09IMG_5242.JPG",
      "/images/photography/environments/10IMG_5233.JPG",
      "/images/photography/environments/DSC_0397.JPG",
      "/images/photography/environments/IMG_5078.JPG",
      "/images/photography/environments/IMG_5079.JPG",
      "/images/photography/environments/IMG_5082.JPG",
      "/images/photography/environments/IMG_5086.JPG",
    ],
  },
];

export function getSeries(slug: string): PhotoSeries | undefined {
  return series.find((s) => s.slug === slug);
}
