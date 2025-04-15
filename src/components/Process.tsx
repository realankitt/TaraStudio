
import { useRef, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ number, title, description, delay }: ProcessStepProps) => {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!numberRef.current) return;
      
      // Get the bounding rectangle of the element
      const rect = numberRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the element
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      // Apply a subtle transform based on mouse position
      numberRef.current.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
    };

    const handleMouseLeave = () => {
      if (!numberRef.current) return;
      
      // Reset transform when mouse leaves
      numberRef.current.style.transition = "transform 0.5s ease-out";
      numberRef.current.style.transform = "translate3d(0, 0, 0)";
      
      // Remove transition after animation completes to make movement smooth again
      setTimeout(() => {
        if (numberRef.current) {
          numberRef.current.style.transition = "";
        }
      }, 500);
    };

    const element = numberRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <ScrollReveal 
      className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-20 md:mb-32 last:mb-0" 
      delay={delay}
    >
      <div className="md:col-span-2 flex flex-col items-start">
        <div 
          ref={numberRef}
          className="text-[120px] md:text-[180px] leading-none font-bold text-brand/10 select-none will-change-transform"
          style={{ willChange: "transform" }}
        >
          {number}
        </div>
      </div>
      
      <div className="md:col-span-3">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h3>
        <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin by understanding your business, audience, and objectives. This foundational phase sets the direction for our work together, establishing clear goals and success metrics.",
      delay: 100
    },
    {
      number: "02",
      title: "Concept & Design",
      description: "We develop creative concepts that align with your strategy, then refine them into detailed designs. Our iterative process ensures we craft experiences that are both beautiful and effective.",
      delay: 200
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Our development team brings designs to life with clean, efficient code. We rigorously test each element to ensure performance, accessibility, and compatibility across all devices.",
      delay: 300
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "After successful deployment, we continually monitor and optimize your digital product based on real user data and feedback, ensuring it evolves with your business and user needs.",
      delay: 400
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-6">
        <ScrollReveal delay={100}>
          <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">Our Process</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-20 md:mb-32">
          <AnimatedText 
            text="A thoughtful approach to creating exceptional digital experiences."
            className="md:col-span-2"
            as="h2"
            wordClass="heading-lg leading-tight"
          />
          
          <ScrollReveal delay={300} className="max-w-xl">
            <p className="text-lg text-neutral-600 leading-relaxed">
              We've refined our process to balance creativity with systematic execution, 
              ensuring we deliver results that are both innovative and reliable.
            </p>
          </ScrollReveal>
        </div>
        
        <div>
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
