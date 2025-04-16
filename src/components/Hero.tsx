
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-7 text-left">
            <ScrollReveal delay={200} className="mb-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand mr-2"></span>
                Web Design & Branding Studio
              </div>
            </ScrollReveal>
            
            <AnimatedText 
              text="Crafting exceptional digital experiences through design and branding."
              className="mb-6"
              as="h1"
              wordClass="heading-xl leading-[1.1]"
            />
            
            <ScrollReveal delay={500} className="max-w-2xl mb-10">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-balance">
                Founded in 2023, we are a team of 8 specialists focused exclusively on 
                web design and branding, creating meaningful digital identities that 
                elevate your brand's potential.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={700}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Start a project
                </a>
                <a href="#work" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium 
                  text-brand border border-neutral-200 hover:border-brand/50 transition-colors 
                  duration-300 rounded-md">
                  View our work
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Image Content */}
          <div className="md:col-span-5">
            <ScrollReveal delay={400}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/044f2d6d-9718-442c-afd8-40d269a5072d.png" 
                  alt="TARA Studio" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
