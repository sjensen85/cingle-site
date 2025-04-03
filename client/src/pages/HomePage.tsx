import { motion } from "framer-motion";
import PageTransition from "@/lib/pageTransition";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { Link } from "wouter";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServiceCard from "@/components/services/ServiceCard";
import TestimonialCard from "@/components/common/TestimonialCard";
import CTASection from "@/components/common/CTASection";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Comprehensive AI and data solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">About DataAI Consulting</h2>
              <p className="text-lg text-gray-600 mb-6">
                DataAI Consulting is a premier AI and data analytics consulting firm dedicated to helping businesses harness the power of artificial intelligence and data-driven insights to transform their operations and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of expert consultants combines deep technical knowledge with business acumen to deliver tailored solutions that address your unique challenges and opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">10+</div>
                  <p className="text-gray-700">Years Experience</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary font-bold text-xl mb-1">50+</div>
                  <p className="text-gray-700">Industry Experts</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/about">
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/5 inline-flex items-center">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  className="rounded-xl shadow-lg object-cover" 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="DataAI team meeting" 
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-purple-600 hidden lg:block"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-xl opacity-90">
              Trusted by leading companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Choose DataAI Consulting</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              We deliver exceptional value through our expertise, innovation, and commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Proven Expertise",
                description: "Our team of Ph.D. data scientists and AI engineers bring decades of combined experience from top tech companies and research institutions.",
                highlights: ["Industry-leading experts", "Specialized knowledge", "Practical experience"]
              },
              {
                title: "Tailored Approach",
                description: "We don't believe in one-size-fits-all solutions. Each engagement is customized to address your specific business challenges and objectives.",
                highlights: ["Custom solutions", "Industry-specific strategies", "Flexible engagement models"]
              },
              {
                title: "Measurable Results",
                description: "Our focus is on delivering tangible business outcomes and ROI through practical, implementable AI and data solutions.",
                highlights: ["ROI-focused approach", "Clear success metrics", "Continuous improvement"]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Separator className="my-4" />
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Harness the Power of AI?"
        description="Take the first step toward transforming your business with cutting-edge AI and data solutions."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        bgColor="bg-primary-50"
      />
    </PageTransition>
  );
};

export default HomePage;
