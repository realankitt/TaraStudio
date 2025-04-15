
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeading } from '@/components/ui/section-heading';
import CallToAction from '@/components/home/CallToAction';
import { Zap, Home, Users, Wrench, Settings, CheckCircle, Activity, Shield } from 'lucide-react';

interface ServiceDetailsProps {
  icon: any;
  title: string;
  description: string;
  features: string[];
  image: string;
  id: string;
  reverse?: boolean;
}

const ServiceDetails = ({ icon: Icon, title, description, features, image, id, reverse = false }: ServiceDetailsProps) => (
  <div id={id} className="py-16 scroll-mt-20">
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`space-y-6 animate-fade-in ${reverse ? 'lg:order-2' : ''}`}>
        <div className="inline-flex items-center space-x-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-heading font-bold">{title}</h2>
        </div>
        <p className="text-lg text-muted-foreground">{description}</p>
        <div className="space-y-3">
          <h3 className="font-semibold">What we offer:</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`relative lg:flex ${reverse ? 'justify-start lg:order-1' : 'justify-end'} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        <img 
          src={image} 
          alt={title} 
          className="rounded-lg shadow-lg w-full h-auto lg:max-w-lg xl:max-w-xl"
        />
        <div className="absolute -bottom-5 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <p className="font-semibold">Professional Service</p>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Licensed professionals with years of experience
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle anchor link scroll with offset for fixed header
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const services = [
    {
      id: "electrical",
      icon: Zap,
      title: "Electrical Work",
      description: "Our electrical services cover all aspects of electrical installations, repairs, and maintenance for residential and commercial properties. We ensure safe and efficient electrical systems that meet all code requirements.",
      features: [
        "Electrical installation for new construction",
        "Rewiring for older buildings",
        "Circuit breaker and panel upgrades",
        "Troubleshooting and repairs",
        "Lighting installation and upgrades",
        "Emergency electrical services"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "renovations",
      icon: Home,
      title: "Renovations",
      description: "Transform your space with our comprehensive renovation services. From minor updates to complete overhauls, we handle all aspects of the renovation process with attention to detail and quality craftsmanship.",
      features: [
        "Kitchen and bathroom renovations",
        "Office space remodeling",
        "Room additions and expansions",
        "Flooring installation and replacement",
        "Interior and exterior painting",
        "Custom carpentry and built-ins"
      ],
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true
    },
    {
      id: "manpower",
      icon: Users,
      title: "Manpower Supply",
      description: "We provide skilled workers for various construction and maintenance projects. Our team members are experienced, reliable, and committed to delivering quality work that meets your project requirements.",
      features: [
        "Skilled electricians and technicians",
        "Construction workers and laborers",
        "Project managers and supervisors",
        "Maintenance staff",
        "Temporary and long-term placements",
        "Fully vetted and experienced personnel"
      ],
      image: "https://images.unsplash.com/photo-1574359411659-13c31a355846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance Services",
      description: "Keep your systems and property in optimal condition with our preventive maintenance services. Regular maintenance helps prevent costly repairs and ensures the longevity of your installations.",
      features: [
        "Electrical system inspections",
        "Preventive maintenance programs",
        "Equipment servicing and repairs",
        "Property maintenance",
        "Emergency repair services",
        "Maintenance contracts for businesses"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive solutions for all your electrical, renovation, and manpower needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-8 bg-white shadow-md sticky top-[64px] z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {services.map((service, index) => (
                <a 
                  key={index} 
                  href={`#${service.id}`}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <service.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{service.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((service, index) => (
              <ServiceDetails key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Why Choose Our Services" 
              subtitle="We're committed to delivering the highest quality service for all your needs."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description: "We stand behind our work with guarantees and use only the highest quality materials and equipment."
                },
                {
                  icon: Settings,
                  title: "Experienced Team",
                  description: "Our team consists of licensed professionals with years of experience in their respective fields."
                },
                {
                  icon: Activity,
                  title: "Timely Completion",
                  description: "We understand the importance of deadlines and strive to complete all projects on schedule."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
