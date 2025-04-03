import PageTransition from "@/lib/pageTransition";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import CTASection from "@/components/common/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ServicesPage = () => {
  return (
    <PageTransition>
      {/* Page Header */}
      <section className="pt-32 pb-10 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive AI and data solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              A proven methodology to deliver successful AI and data projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Our approach to data and AI solutions" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <div>
              {[
                {
                  step: "1",
                  title: "Discovery & Assessment",
                  description: "We start by thoroughly understanding your business challenges, goals, and current data ecosystem."
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description: "Our experts create a tailored roadmap that aligns AI and data initiatives with your business objectives."
                },
                {
                  step: "3",
                  title: "Solution Design & Implementation",
                  description: "We design and deploy customized solutions using cutting-edge AI and data technologies."
                },
                {
                  step: "4",
                  title: "Measurement & Optimization",
                  description: "We continuously monitor performance and refine solutions to maximize ROI and business impact."
                },
              ].map((phase, index) => (
                <motion.div 
                  key={index}
                  className="mb-8 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="ml-5 my-4 h-8 border-l-2 border-dashed border-gray-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Technologies We Use</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Cutting-edge tools and frameworks to build powerful AI and data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
            {[
              {
                category: "AI & Machine Learning",
                techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "MLflow"]
              },
              {
                category: "Big Data & Analytics",
                techs: ["Apache Spark", "Hadoop", "Snowflake", "Databricks", "Airflow", "Tableau"]
              },
              {
                category: "Cloud Platforms",
                techs: ["AWS", "Google Cloud", "Microsoft Azure", "IBM Cloud", "Oracle Cloud", "Digital Ocean"]
              }
            ].map((category, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gray-50 rounded-lg p-6 shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <Separator className="mb-4" />
                <ul className="space-y-2">
                  {category.techs.map((tech, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-700">{tech}</span>
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
        title="Ready to Transform Your Business?"
        description="Let's discuss how our services can help you achieve your goals"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </PageTransition>
  );
};

export default ServicesPage;
