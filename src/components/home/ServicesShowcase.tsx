
import { Zap, Home, Users, Wrench, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ui/service-card';
import { SectionHeading } from '@/components/ui/section-heading';

const ServicesShowcase = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Work",
      description: "Professional electrical installations, repairs, and maintenance for residential and commercial properties."
    },
    {
      icon: Home,
      title: "Renovations",
      description: "Quality renovation services to transform your space with attention to detail and craftsmanship."
    },
    {
      icon: Users,
      title: "Manpower Supply",
      description: "Reliable skilled workers for various construction and maintenance projects."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Regular maintenance services to keep your systems operating efficiently and safely."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="We provide a wide range of services to meet your residential and commercial needs."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Why Choose Skyway Enterprise?</h3>
              <p className="text-muted-foreground mb-6">
                We prioritize quality, safety, and efficiency in every job we undertake. Our experienced team is committed to delivering reliable solutions and exceptional service.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Licensed and experienced professionals",
                  "Quality materials and workmanship",
                  "Timely project completion",
                  "Excellent customer service",
                  "Competitive pricing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 text-primary flex-shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/services">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                  Explore All Services
                </Button>
              </Link>
            </div>
            
            <div className="bg-primary/10 p-8 lg:p-0 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional team" 
                className="rounded-lg shadow-lg max-w-full h-auto lg:h-full lg:w-full lg:object-cover lg:rounded-none lg:shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
