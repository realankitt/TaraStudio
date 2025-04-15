
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedText from "./AnimatedText";
import ParallaxSection from "./ParallaxSection";

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceItem = ({ number, title, description, delay }: ServiceItemProps) => {
  return (
    <ScrollReveal 
      className="border-t border-neutral-200 py-10 group cursor-pointer" 
      delay={delay}
      direction="right"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <div className="text-3xl font-light text-brand/60">{number}</div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-brand transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-600 mb-4 max-w-xl">
            {description}
          </p>
          <div className="inline-flex items-center text-brand font-medium overflow-hidden">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand after:origin-right after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
              Learn more
            </span>
            <ArrowRight size={16} className="ml-2 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Strategic Brand Development",
      description: "We build cohesive, compelling brand identities that resonate with your audience, capture your essence, and drive business results.",
      delay: 100
    },
    {
      number: "02",
      title: "Digital Product Design",
      description: "We design intuitive, beautiful digital products that solve real problems and deliver exceptional user experiences.",
      delay: 200
    },
    {
      number: "03",
      title: "Content & Storytelling",
      description: "We craft narratives that connect, inspire, and move people to action, bringing your brand's unique story to life.",
      delay: 300
    },
    {
      number: "04",
      title: "Web Development",
      description: "We build high-performance websites and applications that combine cutting-edge technology with thoughtful user experience.",
      delay: 400
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <ParallaxSection speed={0.05}>
          <ScrollReveal delay={100}>
            <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">Our Services</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16">
            <AnimatedText 
              text="We transform ideas into exceptional digital experiences."
              className="md:col-span-2"
              as="h2"
              wordClass="heading-lg leading-tight"
            />
            
            <ScrollReveal delay={300} className="max-w-xl">
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our approach combines strategic thinking, beautiful design, and advanced technology to 
                create digital products that elevate your brand and drive meaningful results.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="border-b border-neutral-200">
            {services.map((service, index) => (
              <ServiceItem 
                key={index}
                number={service.number}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default Services;
