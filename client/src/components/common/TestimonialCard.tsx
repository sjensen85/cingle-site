import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { quote, author, position, company, rating, imageUrl } = testimonial;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transition transform hover:-translate-y-1 h-full">
        <CardContent className="p-0">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="mb-6 text-white">
            "{quote}"
          </p>
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full object-cover" src={imageUrl} alt={author} />
            <div className="ml-3">
              <h4 className="font-semibold text-white">{author}</h4>
              <p className="text-sm text-white opacity-80">{position}, {company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
