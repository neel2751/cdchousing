export interface Project {
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
    id: "1",
    name: "FDL Greenfield",
    location: "Jolshiri Abashon, Rupganj, Narayanganj",
    category: "residential",
    description: "A thoughtfully designed single-family residence on a prime corner plot, where contemporary architecture meets everyday comfort.",
    fullDescription: "FDL Greenfield is a thoughtfully designed single-family residence located on a prime corner plot in Jolshiri Abashon, where contemporary architecture meets everyday comfort. The multi-storied home incorporates a mezzanine level dedicated to community-oriented activities, enriching the social dimension of the residence. A defining feature is its terrace overlooking the road intersection, complemented by an alternating double-height spatial experience achieved through the strategic placement of verandas, allowing light, air, and visual connectivity to flow seamlessly throughout the home. Organized into three bays, the central bay functions as a vibrant public zone, while the surrounding bays ensure privacy with well-positioned bedrooms.",
    images: [
      "https://cubeinsidebd.com/media/images/04_ySvAz9b.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/04-1.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/021.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/2_yASENJ2.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/GFI02.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/GFI03.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/GFI01.width-1200.jpg",
    ],
    thumbnail: "https://cubeinsidebd.com/media/images/04_ySvAz9b.width-1200.jpg",
    features: ["Corner Plot", "Mezzanine Level", "Double-Height Verandas", "Three-Bay Layout", "Terrace"],
    area: "5 Katha / 3,600 sft plot · 24,530 sft built",
    units: "Single-Family Residence",
    status: "ongoing",
    year: "2024–2025",
  },
  {
    id: "2",
    name: "JCX Blue Ridge",
    location: "Jolshiri Abashon, Rupganj, Narayanganj",
    category: "luxury",
    description: "A refined nine-storied residential development by a lakeshore, with picturesque views into a lush park.",
    fullDescription: "JCX Blue Ridge is a refined nine-storied residential development set in the serene landscape of Jolshiri, thoughtfully positioned near a lakeshore with picturesque views extending into a lush park. Designed to offer an elevated living experience, the building accommodates six exclusive single-family dwelling units, ensuring privacy and a sense of exclusivity. Crowned by a luxurious duplex on the top floor, the project features a shallow pool overlooking the lake, creating a tranquil retreat that seamlessly blends architecture with nature. The design emphasizes openness, natural light, and panoramic vistas, fostering a calm yet contemporary lifestyle.",
    images: [
      "https://cubeinsidebd.com/media/images/Corona_Camera007_0000_copy.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Corona_Camera008_0000_copy.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Corona_Camera012_0000_copy.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Corona_Camera005_0000_copy.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Corona_Camera010_0000_copy.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Corona_Camera011_0000_copy.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Corona_Camera001_0000_copy.width-1200.jpg",
    ],
    thumbnail: "https://cubeinsidebd.com/media/images/Corona_Camera007_0000_copy.width-1200.jpg",
    features: ["Lakeshore Views", "Rooftop Duplex", "Shallow Pool", "Six Exclusive Units", "Park Frontage"],
    area: "5 Katha / 3,600 sft plot · 24,160 sft built",
    units: "6 Dwelling Units",
    status: "ongoing",
    year: "2025–2026",
  },
  {
    id: "3",
    name: "FDL Kolpotoru",
    location: "Jolshiri Abashon, Rupganj, Narayanganj",
    category: "residential",
    description: "A nine-story modern family residence at the end of a serene road, with views over a nearby golf course.",
    fullDescription: "FDL Kolpotoru is a thoughtfully designed nine-story modern family residence located at the end of a serene road in Jolshiri Abashon, offering beautiful views of a nearby golf course and a calm, nature-oriented living environment. Architecturally, the building features a contemporary design with durable and visually appealing materials, including a spacious mezzanine level intended for community gatherings. A key highlight is the expansive veranda facing the golf course, which extends the indoor living space outdoors and strengthens the connection with nature. The floor plan is efficiently organized using a series of bays to optimize space, natural light, and ventilation.",
    images: [
      "https://cubeinsidebd.com/media/images/View_010.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/View_03.width-1200_dWhxIxo.jpg",
      "https://cubeinsidebd.com/media/images/View_04.width-1200_1sLJv1o.jpg",
      "https://cubeinsidebd.com/media/images/View_01_XNQqVm1.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Night.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/View_09.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Rception.width-1200.jpg",
      "https://cubeinsidebd.com/media/images/Roof.width-1200.jpg",
    ],
    thumbnail: "https://cubeinsidebd.com/media/images/View_010.width-1200.jpg",
    features: ["Golf Course Views", "Mezzanine Level", "Golf-Facing Veranda", "Bay-Based Plan", "Community Spaces"],
    area: "5 Katha / 3,600 sft plot · 23,088 sft built",
    units: "Apartment Building",
    status: "ongoing",
    year: "2024–2025",
  },
];