import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <span className="text-primary font-bold text-xl">DataAI</span>
                <span className="text-purple-700 font-bold text-xl">Consulting</span>
              </a>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className={`relative inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-gray-900 border-b-2 border-primary"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}>
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div 
                        layoutId="navbar-active"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                      />
                    )}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive(link.href)
                  ? "bg-primary-50 border-primary text-primary"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}>
                {link.label}
              </a>
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link href="/contact">
              <a className="block text-center w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-base font-medium mx-3">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
