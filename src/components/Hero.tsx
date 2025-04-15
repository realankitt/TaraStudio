
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Hero Background - Large TARA logo as background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/76f4a780-3e6c-4778-b6f1-1ebdd7d32af5.png" 
          alt="" 
          className="w-[120%] max-w-none"
          aria-hidden="true"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-7">
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
            
            <ScrollReveal delay={500} className="max-w-2xl mb-10">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-balance">
                Founded in 2023, we are a team of 8 digital specialists who combine striking design 
                with thoughtful storytelling to create meaningful connections between your brand 
                and your audience.
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
          
          {/* Hero Image */}
          <div className="md:col-span-5">
            <ScrollReveal delay={400}>
              <img 
                src="/lovable-uploads/461c1995-40ab-46db-acfb-81e3e6890ad7.png"
                alt="TARA Logo" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
