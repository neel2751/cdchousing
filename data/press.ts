export interface PressRelease {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export const pressReleases: PressRelease[] = [
  {
    id: "universities-mou",
    date: "22 May 2026",
    month: "May",
    year: "2026",
    title: "CDC Housing joins hands with 10 universities to power next-generation talent",
    excerpt:
      "Dhaka, 22 May 2026: CDC Housing has entered strategic Memorandums of Understanding with 10 leading global and regional universities, reinforcing its long-term commitment to talent.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    featured: true,
  },
  {
    id: "keeta-drone-mou",
    date: "18 May 2026",
    month: "May",
    year: "2026",
    title: "CDC Housing and Keeta Drone Sign Strategic MoU, launching air delivery",
    excerpt:
      "Dhaka, 18th May 2026: CDC Housing, a leading luxury real estate developer renowned for bespoke design, announced a strategic partnership to pilot drone-based delivery.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
  },
  {
    id: "nbd-financing",
    date: "17 Apr 2026",
    month: "Apr",
    year: "2026",
    title: "Banking partner and CDC Housing partner to offer integrated home financing",
    excerpt:
      "Dhaka, 6 April 2026: A leading banking group in the region and CDC Housing partner to offer integrated home financing solutions for off-plan projects.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800",
  },
  {
    id: "waterfront-community",
    date: "11 Apr 2026",
    month: "Apr",
    year: "2026",
    title: "'CDC City': A New Nature-Led Waterfront Living Community",
    excerpt:
      "11 April 2026: Leading luxury property developer CDC Housing has announced its entry into nature-led waterfront living with a new flagship community.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
  },
  {
    id: "completion-certificate",
    date: "25 Mar 2026",
    month: "Mar",
    year: "2026",
    title: "CDC Housing's flagship tower receives Building Completion Certificate",
    excerpt:
      "Dhaka, 25 March 2026: CDC Housing, a leading global luxury real estate developer, has received its building completion certificate ahead of handover.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    id: "adib-financing",
    date: "29 Jan 2026",
    month: "Jan",
    year: "2026",
    title: "CDC Housing partners to offer fast-track home financing solutions",
    excerpt:
      "Dhaka, 29 Jan 2026: In a strategic move reflecting a shared commitment to supporting homebuyers, CDC Housing announced a fast-track financing programme.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800",
  },
  {
    id: "fy-2025-results",
    date: "22 Jan 2026",
    month: "Jan",
    year: "2026",
    title: "CDC Housing concludes FY 2025 with record sales, marking 30% growth",
    excerpt:
      "Dhaka, 22 January 2026: CDC Housing, a leading global luxury real estate developer, concluded its financial year with significant growth over the prior year.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
];