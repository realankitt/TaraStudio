
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Award, Clock, Users } from 'lucide-react';

const StatsCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-primary/10 p-3 rounded-full mb-3">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-2xl font-bold">{value}</h3>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Skyway Enterprise Team" 
              className="rounded-lg shadow-lg w-full h-auto md:max-w-md lg:max-w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-5 shadow-xl max-w-xs hidden md:block">
              <h4 className="text-lg font-bold mb-2">Trusted by Business & Homeowners</h4>
              <p className="text-sm text-muted-foreground">With over 10 years of experience, we've become a trusted name in the industry.</p>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Skyway Enterprise</h2>
            <p className="text-lg text-muted-foreground">
              Skyway Enterprise is a dedicated provider of electrical work, renovations, and manpower supply for residential and commercial projects. We prioritize quality, safety, and efficiency in every job, from installations to full-scale remodeling.
            </p>
            
            <div className="space-y-3">
              {[
                "Licensed and experienced professionals",
                "Quality workmanship and materials",
                "Timely project completion",
                "Competitive and transparent pricing"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 py-6">
              <StatsCard 
                icon={Award} 
                value="10+" 
                label="Years Experience" 
              />
              <StatsCard 
                icon={Clock} 
                value="500+" 
                label="Projects Completed" 
              />
              <StatsCard 
                icon={Users} 
                value="100%" 
                label="Client Satisfaction" 
              />
            </div>
            
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
