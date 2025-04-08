import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = "bg-primary-50"
}: CTASectionProps) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href={primaryButtonLink}>
            <Button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-8 h-auto">
              {primaryButtonText}
            </Button>
          </Link>
          
          {secondaryButtonText && secondaryButtonLink && (
            <Link href={secondaryButtonLink}>
              <Button variant="outline" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-8 h-auto">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
