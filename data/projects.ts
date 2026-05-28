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
    name: "Skyline Residences",
    location: "Ahmedabad, Gujarat",
    category: "luxury",
    description: "Ultra-luxury apartments with panoramic city views and world-class amenities.",
    fullDescription: "Skyline Residences redefines luxury living in the heart of Ahmedabad. Each apartment is meticulously crafted with premium Italian marble, floor-to-ceiling windows, and state-of-the-art smart home systems. The project features a rooftop infinity pool, private cinema, and concierge services.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    ],
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
    features: ["Infinity Pool", "Smart Home", "24/7 Security", "Gym & Spa", "Concierge"],
    area: "2,400 - 4,800 sq ft",
    units: "120 Units",
    status: "completed",
    year: "2023",
  },
  {
    id: "2",
    name: "Green Valley Villas",
    location: "Gandhinagar, Gujarat",
    category: "residential",
    description: "Eco-friendly villas surrounded by lush greenery and sustainable design.",
    fullDescription: "Green Valley Villas merges sustainable architecture with contemporary design. Each villa features solar panels, rainwater harvesting, and a private garden. The community offers cycling tracks, organic farming plots, and a natural amphitheater.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200",
    ],
    thumbnail: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
    features: ["Solar Powered", "Private Garden", "Rainwater Harvest", "EV Charging", "Clubhouse"],
    area: "3,200 - 5,500 sq ft",
    units: "80 Villas",
    status: "ongoing",
    year: "2024",
  },
  {
    id: "3",
    name: "The Commerce Hub",
    location: "GIFT City, Gujarat",
    category: "commercial",
    description: "Grade-A office spaces designed for the modern enterprise.",
    fullDescription: "The Commerce Hub is a landmark commercial development at GIFT City offering LEED-certified, Grade-A office spaces. The building features flexible floor plates, advanced BMS systems, and a podium-level retail zone connecting to the metro.",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
    ],
    thumbnail: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
    features: ["LEED Certified", "Flexible Floors", "BMS System", "Retail Podium", "Metro Access"],
    area: "50,000 - 2,00,000 sq ft",
    units: "Commercial",
    status: "upcoming",
    year: "2025",
  },
  {
    id: "4",
    name: "Heritage Heights",
    location: "Surat, Gujarat",
    category: "residential",
    description: "Premium 3 & 4 BHK apartments with traditional Gujarati architectural elements.",
    fullDescription: "Heritage Heights blends the richness of traditional Gujarati architecture with modern living standards. Intricately carved stone facades, jaali work, and step-well inspired water features create a unique cultural identity while offering all contemporary comforts.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
    ],
    thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
    features: ["Heritage Design", "Temple Complex", "Stepwell Pool", "Vastu Compliant", "Clubhouse"],
    area: "1,800 - 3,200 sq ft",
    units: "200 Units",
    status: "completed",
    year: "2022",
  },
  {
    id: "5",
    name: "Urban Nest",
    location: "Vadodara, Gujarat",
    category: "affordable",
    description: "Smart affordable housing with premium facilities for the modern family.",
    fullDescription: "Urban Nest makes quality living accessible with thoughtfully designed compact apartments featuring modular kitchens, optimized storage, and community amenities including a children's play area, jogging track, and co-working space.",
    images: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    ],
    thumbnail: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600",
    features: ["Modular Kitchen", "Co-Working Space", "Kids Play Area", "CCTV Security", "Parking"],
    area: "650 - 1,200 sq ft",
    units: "450 Units",
    status: "completed",
    year: "2023",
  },
  {
    id: "6",
    name: "Marina Towers",
    location: "Rajkot, Gujarat",
    category: "luxury",
    description: "Twin tower luxury development with resort-style amenities.",
    fullDescription: "Marina Towers is an iconic twin-tower development that brings resort living to Rajkot. The project features a 12,000 sq ft clubhouse, three temperature-controlled pools, a sky lounge on the 30th floor, and a business center.",
    images: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
    ],
    thumbnail: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600",
    features: ["Sky Lounge", "3 Pools", "Business Center", "Spa", "Valet Parking"],
    area: "2,800 - 6,000 sq ft",
    units: "160 Units",
    status: "ongoing",
    year: "2025",
  },
];