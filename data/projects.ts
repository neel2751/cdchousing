export interface Project {
  mapEmbed?: string;
  id: string;
  name: string;
  location: string;
  category: "residential" | "commercial" | "luxury" | "affordable";
  description: string;
  fullDescription: string;
  images: string[];
  thumbnail: string;
  features: string[];
  area: string;
  units: string;
  status: "completed" | "ongoing" | "upcoming";
  year: string;
}

export const projects: Project[] = [
  {
    id: "dilu-road",
    name: "Dilu Road, Dhaka",
    location: "Dhaka, Bangladesh",
    category: "residential",
    description: "A thoughtfully designed single-family residence on a prime corner plot, where contemporary architecture meets everyday comfort.",
    fullDescription: "Project Dilu Road is a thoughtfully designed single-family residence located on a prime plot in Dilu Road, where contemporary architecture meets everyday comfort. The multi-storied home incorporates a mezzanine level dedicated to community-oriented activities, enriching the social dimension of the residence. A defining feature is its terrace overlooking the road intersection, complemented by an alternating double-height spatial experience achieved through the strategic placement of verandas, allowing light, air, and visual connectivity to flow seamlessly throughout the home. Organized into three bays, the central bay functions as a vibrant public zone, while the surrounding bays ensure privacy with well-positioned bedrooms. This project was brought to life through the design expertise of our partner, CUBEINSIDE.",
    images: [
      "/images/dilu-road/cover.jpg",
      "/images/dilu-road/1.jpg",
      "/images/dilu-road/2.jpg",
      "/images/dilu-road/3.jpg",
      "/images/dilu-road/4.jpg",
      "/images/dilu-road/5.jpg",
      "/images/dilu-road/6.jpg",
    ],
    thumbnail: "/images/dilu-road/cover.jpg",
    features: ["Corner Plot", "Mezzanine Level", "Double-Height Verandas", "Three-Bay Layout", "Terrace"],
    area: "Single-Family Residence",
    units: "Single-Family Residence",
    status: "ongoing",
    year: "2024–2025",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.9581690170214!2d90.3983770642671!3d23.74972742010243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b890ba0d3f17%3A0xa423f5443febb86!2sDilu%20Rd%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2suk!4v1782465945465!5m2!1sen!2suk",
  },
  {
    id: "basundhara-ra",
    name: "Basundhara R/A, Dhaka",
    location: "Basundhara R/A, Dhaka, Bangladesh",
    category: "luxury",
    description: "A refined nine-storied residential development by a lakeshore, with picturesque views.",
    fullDescription: "Project Basundhara R/A is a refined nine-storied residential development set in the serene landscape of Basundhara R/A, thoughtfully positioned near a lakeshore with picturesque views extending. Designed to offer an elevated living experience, the building accommodates six exclusive single-family dwelling units, ensuring privacy and a sense of exclusivity. Crowned by a luxurious duplex on the top floor, the project features a shallow pool overlooking the lake, creating a tranquil retreat that seamlessly blends architecture with nature. The design emphasizes openness, natural light, and panoramic vistas, fostering a calm yet contemporary lifestyle. This project was brought to life through the design expertise of our partner, CUBEINSIDE.",
    images: [
      "/images/basundhara/cover.jpg",
      "/images/basundhara/1.jpg",
      "/images/basundhara/2.jpg",
      "/images/basundhara/3.jpg",
      "/images/basundhara/4.jpg",
      "/images/basundhara/5.jpg",
    ],
    thumbnail: "/images/basundhara/cover.jpg",
    features: ["Lakeshore Views", "Rooftop Duplex", "Shallow Pool", "Six Exclusive Units", "Park Frontage"],
    area: "6 Dwelling Units",
    units: "6 Dwelling Units",
    status: "ongoing",
    year: "2025–2026",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54095.12593037716!2d90.44268444600438!3d23.825306305739236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2suk!4v1782467520645!5m2!1sen!2suk",
  },
  {
    id: "4",
    name: "CDC Housing Corporate Office",
    location: "Bashundhara R/A, Dhaka",
    category: "commercial",
    description: "The corporate headquarters of CDC Housing — a modern workspace reflecting the brand's commitment to quality and design.",
    fullDescription: "CDC Housing Office is the corporate headquarters of CDC Housing, designed as a modern, functional workspace that embodies the company's design philosophy. The building combines contemporary architecture with practical, people-focused interiors — creating an environment built for collaboration, client engagement, and the day-to-day work of bringing residential and commercial visions to life across Bangladesh.",
    images: [
      "/images/CDC-project/cover.png",
      "/images/CDC-project/CDC_H1.png",
      "/images/CDC-project/CDC_H2.png",
      "/images/CDC-project/CDC_H3.png",
      "/images/CDC-project/CDC_H4.png",
      "/images/CDC-project/CDC_H5.png",
      "/images/CDC-project/CDC_H6.png",
      "/images/CDC-project/CDC_H7.png",
      "/images/CDC-project/CDC_H8.png",
      "/images/CDC-project/CDC_H9.png",
      "/images/CDC-project/CDC_H10.png",
      "/images/CDC-project/CDC_H11.png",
    ],
    thumbnail: "/images/CDC-project/cover.png",
    features: ["Corporate Headquarters", "Modern Workspace", "Client Lounge", "Design Studio", "Central Location"],
    area: "—",
    units: "Office Building",
    status: "ongoing",
    year: "2024",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54095.12593037716!2d90.44268444600438!3d23.825306305739236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2suk!4v1782467520645!5m2!1sen!2suk",
  },
];