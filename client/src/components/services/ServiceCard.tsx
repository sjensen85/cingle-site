import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { title, description, icon: IconComponent, features } = service;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="h-full"
    >
      <Card className="bg-white h-full shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <ul className="space-y-2 mb-6 flex-grow">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Link href="/contact">
            <a className="text-primary hover:text-primary/80 font-medium inline-flex items-center mt-auto">
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
