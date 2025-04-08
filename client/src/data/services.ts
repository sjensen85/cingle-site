import { Cpu, BarChart2, Layers, Database, Code, LineChart } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Cpu;
  features: string[];
}

export const services: Service[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Implementation",
    description: "Strategic planning and implementation of AI solutions tailored to your business goals and objectives.",
    icon: Cpu,
    features: [
      "AI Readiness Assessment",
      "Custom AI Solution Design",
      "AI Implementation & Integration"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable insights to drive informed business decisions and strategic initiatives.",
    icon: BarChart2,
    features: [
      "Advanced Data Visualization",
      "Predictive Analytics",
      "Business Intelligence Reporting"
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning Solutions",
    description: "Develop and deploy custom machine learning models that automate processes and provide predictive capabilities.",
    icon: Layers,
    features: [
      "Custom ML Model Development",
      "ML Optimization & Maintenance",
      "Computer Vision & NLP Solutions"
    ]
  },
  {
    id: "data-infrastructure",
    title: "Data Infrastructure",
    description: "Build robust, scalable data infrastructure that supports your AI and analytics initiatives.",
    icon: Database,
    features: [
      "Cloud Data Architecture",
      "Data Pipeline Engineering",
      "Real-time Processing Systems"
    ]
  },
  {
    id: "custom-ai",
    title: "Custom AI Development",
    description: "Create tailored AI solutions that address specific business challenges and unlock new opportunities.",
    icon: Code,
    features: [
      "Conversational AI & Chatbots",
      "Recommendation Systems",
      "Automated Decision Systems"
    ]
  },
  {
    id: "optimization",
    title: "Process Optimization",
    description: "Enhance business operations using data-driven insights and AI-powered automation.",
    icon: LineChart,
    features: [
      "Workflow Automation",
      "Resource Allocation Optimization",
      "Efficiency Analysis & Improvement"
    ]
  }
];
