import PageTransition from "@/lib/pageTransition";
import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ContactPage = () => {
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to transform your business with AI and data solutions? Get in touch with our team.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Office Location</h4>
                      <p className="mt-1 text-gray-600">
                        123 Innovation Drive, Suite 400<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Email</h4>
                      <p className="mt-1 text-gray-600">
                        <a href="mailto:info@dataai-consulting.com" className="hover:text-primary">info@dataai-consulting.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                      <p className="mt-1 text-gray-600">
                        <a href="tel:+14155552671" className="hover:text-primary">+1 (415) 555-2671</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-600">Monday - Friday:</span>
                    </div>
                    <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-600">Saturday:</span>
                    </div>
                    <span className="text-gray-900 font-medium">10:00 AM - 2:00 PM PST</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="text-gray-600">Sunday:</span>
                    </div>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    className="object-cover w-full h-full" 
                    src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Office location map" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Find answers to common questions about our services and approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What industries do you serve?",
                answer: "We work with clients across various industries including retail, healthcare, finance, manufacturing, and technology. Our AI and data solutions are tailored to address industry-specific challenges and opportunities."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A typical AI implementation project ranges from 2-6 months, while data analytics projects may take 1-3 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you offer ongoing support after implementation?",
                answer: "Yes, we offer various support packages to ensure your AI and data solutions continue to perform optimally. These include maintenance, monitoring, upgrades, and training for your team."
              },
              {
                question: "What is your approach to data privacy and security?",
                answer: "We take data privacy and security very seriously. All our solutions comply with relevant regulations (GDPR, CCPA, etc.), and we implement robust security measures to protect sensitive data throughout the engagement."
              },
              {
                question: "Can you work with our existing data infrastructure?",
                answer: "Yes, our solutions are designed to integrate with your existing data infrastructure. We can work with various data sources, databases, and systems to ensure seamless implementation."
              },
              {
                question: "How do you measure the success of a project?",
                answer: "We establish clear KPIs and success metrics at the start of each project. These typically include ROI, efficiency gains, cost reduction, and other business-specific indicators that align with your objectives."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
