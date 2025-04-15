
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Remove background logo overlay */}
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content - Now full width */}
          <div className="md:col-span-12 text-center">
            <ScrollReveal delay={200} className="mb-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-brand mr-2"></span>
                Web Design & Branding
              </div>
            </ScrollReveal>
            
            <AnimatedText 
              text="We craft digital experiences that elevate human potential."
              className="mb-6"
              as="h1"
              wordClass="heading-xl leading-[1.1]"
            />
            
            <ScrollReveal delay={500} className="max-w-2xl mx-auto mb-10">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-balance">
                Founded in 2023, we are a team of 8 digital specialists who combine striking design 
                with thoughtful storytelling to create meaningful connections between your brand 
                and your audience.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
