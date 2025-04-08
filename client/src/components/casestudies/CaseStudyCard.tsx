import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard = ({ caseStudy, index }: CaseStudyCardProps) => {
  const { title, description, industry, solution, roi, imageUrl, tags } = caseStudy;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={imageUrl} alt={title} />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-primary-100 text-primary-800 border-none">
                {industry}
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 border-none">
                {solution}
              </Badge>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-medium text-primary">ROI:</span> {roi}
              </div>
              <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                Read Case Study
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
