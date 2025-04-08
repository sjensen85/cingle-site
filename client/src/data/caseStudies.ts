export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  industry: string;
  solution: string;
  roi: string;
  imageUrl: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Global Retail Chain Inventory Optimization",
    description: "Implemented an AI-driven inventory management system that reduced stockouts by 35% and inventory costs by 28%.",
    industry: "Retail",
    solution: "AI",
    roi: "240% in 6 months",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    tags: ["Retail", "AI", "Inventory Management"]
  },
  {
    id: 2,
    title: "Predictive Analytics for Patient Care",
    description: "Developed a machine learning system that improved early diagnosis accuracy by 42% and reduced treatment costs by 18%.",
    industry: "Healthcare",
    solution: "ML",
    roi: "320% in 12 months",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    tags: ["Healthcare", "ML", "Predictive Analytics"]
  },
  {
    id: 3,
    title: "Risk Assessment AI for Financial Services",
    description: "Created a predictive risk model that improved fraud detection by 63% while reducing false positives by 38%.",
    industry: "Finance",
    solution: "Data Analytics",
    roi: "410% in 9 months",
    imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    tags: ["Finance", "Data Analytics", "Risk Assessment"]
  },
  {
    id: 4,
    title: "Smart Manufacturing Process Optimization",
    description: "Implemented an IoT and AI-driven system that increased production efficiency by 28% and reduced waste by 22%.",
    industry: "Manufacturing",
    solution: "IoT & AI",
    roi: "290% in 12 months",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    tags: ["Manufacturing", "IoT & AI", "Process Optimization"]
  }
];
