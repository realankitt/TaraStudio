
import ScrollReveal from "./ScrollReveal";
import AnimatedText from "./AnimatedText";
import ParallaxSection from "./ParallaxSection";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 lg:gap-x-20">
          <div className="md:col-span-5 lg:col-span-4">
            <ParallaxSection speed={0.07}>
              <ScrollReveal delay={100}>
                <p className="text-sm text-brand font-medium uppercase tracking-wider mb-3">
                  About Us
                </p>
              </ScrollReveal>
              
              <AnimatedText 
                text="A team dedicated to digital excellence."
                className="mb-8"
                as="h2"
                wordClass="text-3xl md:text-4xl font-bold leading-tight"
              />
            </ParallaxSection>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <ParallaxSection speed={0.05} direction="down">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal delay={200} className="text-lg leading-relaxed text-neutral-600">
                  <p className="mb-4">
                    Founded in 2023, we are a collective of strategists, designers, developers, and storytellers 
                    who share a passion for creating exceptional digital experiences that make an impact.
                  </p>
                  <p>
                    Our approach is rooted in the belief that the best digital solutions come from a deep 
                    understanding of both human behavior and business objectives.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="text-lg leading-relaxed text-neutral-600">
                  <p className="mb-4">
                    We specialize exclusively in web design and branding, focusing on creating cohesive digital 
                    identities that resonate with your audience and drive meaningful results.
                  </p>
                  <p>
                    Our work is characterized by thoughtful strategy, bold design, and meticulous execution, 
                    all delivered by a team that truly cares about your success.
                  </p>
                </ScrollReveal>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <ScrollReveal delay={400} className="px-6 py-10 bg-neutral-50 rounded-lg">
                  <div className="text-4xl font-bold text-brand mb-2">2023</div>
                  <p className="text-neutral-600">Year founded</p>
                </ScrollReveal>
                
                <ScrollReveal delay={500} className="px-6 py-10 bg-neutral-50 rounded-lg">
                  <div className="text-4xl font-bold text-brand mb-2">8</div>
                  <p className="text-neutral-600">Team members</p>
                </ScrollReveal>
                
                <ScrollReveal delay={600} className="px-6 py-10 bg-neutral-50 rounded-lg">
                  <div className="text-4xl font-bold text-brand mb-2">100%</div>
                  <p className="text-neutral-600">Client satisfaction</p>
                </ScrollReveal>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
