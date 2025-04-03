import PageTransition from "@/lib/pageTransition";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/casestudies/CaseStudyCard";
import CTASection from "@/components/common/CTASection";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const industries = ["All", "Retail", "Healthcare", "Finance", "Manufacturing"];
const solutions = ["All", "AI", "ML", "Data Analytics", "IoT & AI"];

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedSolution, setSelectedSolution] = useState("All");

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry;
    const solutionMatch = selectedSolution === "All" || study.solution === selectedSolution;
    return industryMatch && solutionMatch;
  });

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
            Case Studies
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real-world examples of how our AI and data solutions have driven business success
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-lg font-medium text-gray-700 mb-3">Filter by Industry:</h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Badge 
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    className={`cursor-pointer ${selectedIndustry === industry ? 'bg-primary' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedIndustry(industry)}
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-700 mb-3">Filter by Solution:</h2>
              <div className="flex flex-wrap gap-2">
                {solutions.map((solution) => (
                  <Badge 
                    key={solution}
                    variant={selectedSolution === solution ? "default" : "outline"}
                    className={`cursor-pointer ${selectedSolution === solution ? 'bg-secondary' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedSolution(solution)}
                  >
                    {solution}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {filteredCaseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">No case studies found</h3>
              <p className="text-gray-600">
                No case studies match your current filter criteria. Please try a different combination.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Client Success Metrics</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              The tangible business impact our solutions have delivered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "45%", title: "Average ROI", description: "Across all client projects" },
              { metric: "35%", title: "Cost Reduction", description: "Through AI-driven optimization" },
              { metric: "64%", title: "Efficiency Gain", description: "In core business processes" },
              { metric: "87%", title: "Client Satisfaction", description: "Based on post-project surveys" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Become Our Next Success Story?"
        description="Schedule a consultation to discuss how we can help you achieve similar results"
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
      />
    </PageTransition>
  );
};

export default CaseStudiesPage;
