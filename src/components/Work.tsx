import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedText from "./AnimatedText";
import ParallaxSection from "./ParallaxSection";

const Work = () => {
  const caseStudies = [
    /**
    {
      title: "Reimagining Digital Banking",
      client: "FinTech Co.",
      description: "We transformed a traditional banking platform into a modern, user-friendly digital experience that increased customer engagement by 45%.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
      delay: 100
    },
    {
      title: "E-commerce Transformation",
      client: "Retail Brand",
      description: "A complete redesign and development of an e-commerce platform that resulted in a 60% increase in conversion rates and improved customer satisfaction.",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
      delay: 200
    },
    {
      title: "Digital Campaign Strategy",
      client: "Global Non-profit",
      description: "We developed a cross-platform digital campaign that reached over 2 million people and drove a 300% increase in donations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
      delay: 300
    } */
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-6">
        <ScrollReveal delay={100}>
          <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">Our Work</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} delay={study.delay} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-brand font-medium mb-2">{study.client}</p>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {study.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-brand font-medium group"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand after:origin-right after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                      Read case study
                    </span>
                    <ArrowRight size={16} className="ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
