
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const CTA = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand/5 blur-[100px] absolute -top-[300px] -right-[300px]"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-brand/5 blur-[100px] absolute -bottom-[300px] -left-[300px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={100}>
            <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">Ready to get started?</p>
          </ScrollReveal>
          
          <AnimatedText 
            text="Let's create something extraordinary together."
            className="mb-8 mx-auto"
            as="h2"
            wordClass="heading-lg leading-tight"
          />
          
          <ScrollReveal delay={300} className="max-w-2xl mx-auto mb-10">
            <p className="text-lg text-neutral-600 leading-relaxed text-balance">
              Whether you're looking to build a new digital product, elevate your brand, 
              or solve a complex challenge, we're here to help you achieve your goals.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <a 
              href="#contact" 
              href="https://form.typeform.com/to/hkCisRic" // Updated with the Typeform link
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Improves security when using target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white 
              bg-brand hover:bg-brand/90 transition-colors duration-300 rounded-md group"
            >
              Start a conversation
              <ArrowRight className="ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2" size={20} />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
