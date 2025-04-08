import PageTransition from "@/lib/pageTransition";
import { teamMembers } from "@/data/team";
import TeamMember from "@/components/about/TeamMember";
import CTASection from "@/components/common/CTASection";
import ContactFormSection from "@/components/common/ContactFormSection";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

const AboutPage = () => {
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
            About Us
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the team behind Cingle and learn our story
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Cingle is a premier AI and data analytics consulting firm dedicated to helping businesses harness the power of artificial intelligence and data-driven insights to transform their operations and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to democratize AI and advanced analytics, making these powerful technologies accessible and valuable to organizations of all sizes across industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We envision a future where data-driven decision making and AI-powered automation help businesses operate more efficiently, sustainably, and profitably while delivering exceptional value to their customers.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg shadow">
                  <div className="text-primary font-bold text-2xl mb-1">10+</div>
                  <p className="text-gray-700">Years Experience</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg shadow">
                  <div className="text-primary font-bold text-2xl mb-1">50+</div>
                  <p className="text-gray-700">Industry Experts</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg shadow">
                  <div className="text-primary font-bold text-2xl mb-1">200+</div>
                  <p className="text-gray-700">Clients Worldwide</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg shadow">
                  <div className="text-primary font-bold text-2xl mb-1">15+</div>
                  <p className="text-gray-700">Industries Served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Story</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              From humble beginnings to industry leadership
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                year: "2013",
                title: "The Beginning",
                description: "Cingle was founded by Dr. Michael Chen and Dr. Sarah Johnson after successful careers at Google and MIT, with a vision to make AI accessible to businesses of all sizes.",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              },
              {
                year: "2016",
                title: "Expansion & Growth",
                description: "After several successful projects in retail and finance sectors, we expanded our team and opened offices in New York and San Francisco to serve a growing client base.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              },
              {
                year: "2019",
                title: "Innovation & Recognition",
                description: "Our innovative approach to AI implementation earned industry recognition, including the prestigious AI Innovation Award and features in leading business publications.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              },
              {
                year: "2023",
                title: "Global Impact & Rebranding",
                description: "We rebranded to Cingle to reflect our commitment to making AI simple and accessible. Today, we serve clients around the world with a team of 50+ AI and data specialists, continuing our mission to transform businesses through data-driven solutions.",
                image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="bg-primary text-white inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                    <div>
                      <img 
                        src={milestone.image} 
                        alt={milestone.title} 
                        className="rounded-lg shadow-lg h-64 w-full object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:order-2">
                      <div className="bg-primary text-white inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                    <div className="md:order-1">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title} 
                        className="rounded-lg shadow-lg h-64 w-full object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Meet the experts behind our innovative AI and data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from technical implementation to client communication.",
                points: ["Rigorous quality standards", "Continuous learning", "Best-in-class solutions"]
              },
              {
                title: "Innovation",
                description: "We embrace innovation and creative thinking to solve complex problems and drive transformative results.",
                points: ["Research-driven approach", "Cutting-edge technologies", "Creative problem-solving"]
              },
              {
                title: "Integrity",
                description: "We operate with complete integrity, transparency, and ethical responsibility in all our client relationships.",
                points: ["Honest communication", "Ethical AI practices", "Transparency in all dealings"]
              },
              {
                title: "Client Success",
                description: "Our clients' success is our success. We're committed to delivering solutions that drive real business value.",
                points: ["Results-focused approach", "Long-term partnerships", "Measurable outcomes"]
              },
              {
                title: "Collaboration",
                description: "We believe in the power of collaboration, both within our team and with our clients.",
                points: ["Knowledge sharing", "Inclusive culture", "Diverse perspectives"]
              },
              {
                title: "Adaptability",
                description: "In a rapidly evolving field, we stay adaptable, embracing change and continuous improvement.",
                points: ["Agile methodologies", "Flexible solutions", "Continuous improvement"]
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 mb-4">{value.description}</p>
                <Separator className="my-4" />
                <ul className="space-y-2">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{point}</span>
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
        title="Join Our Team"
        description="Interested in working with us? Check out our open positions or send us your resume."
        primaryButtonText="View Careers"
        primaryButtonLink="#"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      {/* Contact Form Section */}
      <ContactFormSection />
    </PageTransition>
  );
};

export default AboutPage;
