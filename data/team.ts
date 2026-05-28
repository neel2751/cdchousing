export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  linkedin?: string;
  experience: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rajesh Mehta",
    title: "Chairman & Managing Director",
    bio: "With over 30 years in real estate development, Rajesh founded CDC Housing with a vision to transform Gujarat's skyline through innovative and sustainable developments.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    linkedin: "https://linkedin.com",
    experience: "30+ Years",
  },
  {
    id: "2",
    name: "Priya Sharma",
    title: "Chief Executive Officer",
    bio: "Priya brings 18 years of expertise in project management and strategic planning, having led over 50 successful residential and commercial developments across India.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
    linkedin: "https://linkedin.com",
    experience: "18+ Years",
  },
  {
    id: "3",
    name: "Amit Patel",
    title: "Head of Architecture & Design",
    bio: "An award-winning architect with a passion for blending contemporary design with local heritage, Amit has designed landmark buildings across Gujarat and Maharashtra.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    linkedin: "https://linkedin.com",
    experience: "22+ Years",
  },
  {
    id: "4",
    name: "Neha Joshi",
    title: "Chief Financial Officer",
    bio: "Neha oversees all financial operations, investor relations, and compliance. Her strategic financial management has enabled CDC to maintain zero project delays.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
    linkedin: "https://linkedin.com",
    experience: "15+ Years",
  },
  {
    id: "5",
    name: "Vikram Singh",
    title: "Director of Sales & Marketing",
    bio: "Vikram leads the sales strategy with deep market knowledge and customer-first approach, having facilitated over 5,000 property transactions in his career.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    linkedin: "https://linkedin.com",
    experience: "14+ Years",
  },
  {
    id: "6",
    name: "Sonal Desai",
    title: "Head of Customer Relations",
    bio: "Sonal ensures every CDC homeowner experiences unparalleled service from site visit to possession and beyond, maintaining a 98% customer satisfaction score.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    linkedin: "https://linkedin.com",
    experience: "10+ Years",
  },
];