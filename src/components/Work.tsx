
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedText from "./AnimatedText";
import ParallaxSection from "./ParallaxSection";

const Work = () => {
  const caseStudies = [
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
    }
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-6">
        <ScrollReveal delay={100}>
          <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">Our Work</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16">
          <AnimatedText 
            text="Selected projects that showcase our expertise."
            className="md:col-span-2"
            as="h2"
            wordClass="heading-lg leading-tight"
          />
          
          <ScrollReveal delay={300} className="max-w-xl">
            <p className="text-lg text-neutral-600 leading-relaxed">
              We partner with ambitious organizations to create digital products that 
              deliver tangible business results and exceptional user experiences.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Featured Case Study */}
        <ParallaxSection speed={0.04}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-32">
            <div className="md:col-span-3 order-2 md:order-1">
              <ScrollReveal delay={200} className="h-full">
                <div className="relative h-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                    alt="Featured work" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <p className="text-white/80 mb-2">Featured Project</p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      Corporate Identity & Website Redesign
                    </h3>
                    <p className="text-white/90">Global Technology Corp.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-2 order-1 md:order-2 flex flex-col">
              <ScrollReveal delay={300}>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Global Technology Corp.
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  We partnered with Global Technology Corp. to reimagine their brand 
                  identity and digital presence, resulting in a 72% increase in website engagement 
                  and a 40% improvement in lead generation.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our comprehensive approach included brand strategy, visual identity design, 
                  UX/UI design, and development of a custom website with advanced marketing automation.
                </p>
                
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-brand font-medium group"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand after:origin-right after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                      View case study
                    </span>
                    <ArrowRight size={16} className="ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ParallaxSection>
        
        {/* Case Studies Grid */}
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
