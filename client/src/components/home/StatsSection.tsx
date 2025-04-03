import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "120+", label: "Projects Completed" },
  { value: "45%", label: "Average ROI Increase" }
];

const StatsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="shadow-xl">
          <CardContent className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default StatsSection;
