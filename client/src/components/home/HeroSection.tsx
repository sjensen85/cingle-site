import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-purple-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform Your Business With AI & Data Solutions
          </motion.h1>
          <motion.p 
            className="text-white text-xl max-w-3xl mx-auto mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Leverage the power of artificial intelligence and data analytics to drive growth, optimize operations, and make data-driven decisions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/services">
              <Button className="bg-white text-primary-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg shadow-lg transition transform hover:-translate-y-0.5 h-auto">
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-800 px-6 py-3 rounded-lg font-medium text-lg transition transform hover:-translate-y-0.5 h-auto">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
