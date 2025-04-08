import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeInOut" 
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="flex flex-col min-h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
