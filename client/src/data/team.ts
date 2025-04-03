export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Michael Chen",
    title: "CEO & Co-Founder",
    bio: "Former AI Research Director at Google with 15+ years experience in machine learning and business transformation.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    title: "CTO & Co-Founder",
    bio: "PhD in Computer Science from MIT, specialized in predictive analytics and enterprise AI implementation.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "David Rodriguez",
    title: "Chief Data Scientist",
    bio: "Former lead at Amazon's ML division with expertise in building scalable data pipelines and ML systems.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  }
];
