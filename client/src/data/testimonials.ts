export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "DataAI Consulting transformed our retail operations with their AI inventory management system. The results exceeded our expectations, and the ROI was impressive.",
    author: "Jennifer Lee",
    position: "CTO",
    company: "Global Retail Inc.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    quote: "The predictive analytics solution developed by DataAI for our hospital improved patient outcomes significantly while reducing operational costs. Their team's expertise is exceptional.",
    author: "Dr. Robert Thompson",
    position: "Medical Director",
    company: "Healthtech Solutions",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    quote: "Working with DataAI on our fraud detection system was a game-changer. Their approach to AI model development is both innovative and practical, delivering real business results.",
    author: "Marcus Williams",
    position: "VP of Technology",
    company: "FinSecure Corp",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  }
];
