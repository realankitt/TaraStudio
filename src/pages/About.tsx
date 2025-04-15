
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { Award, CheckCircle, Target, Users, Clock, Shield } from 'lucide-react';
import CallToAction from '@/components/home/CallToAction';

interface ValueCardProps {
  icon: any;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-7 w-7 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Skyway Enterprise</h1>
              <p className="text-xl text-muted-foreground">
                We're a dedicated team of professionals committed to delivering exceptional electrical, renovation, and manpower services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <SectionHeading title="Our Story" />
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Founded in 2013, Skyway Enterprise began as a small electrical services company and has since grown into a full-service provider of electrical work, renovations, and manpower supply.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Over the years, we've built a reputation for reliability, quality workmanship, and exceptional customer service. Our team of experienced professionals is dedicated to delivering projects on time and within budget.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Today, we serve both residential and commercial clients throughout the Philippines, providing comprehensive solutions for all their electrical, renovation, and manpower needs.
                  </p>
                </div>
              </div>
              <div className="relative lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Skyway Enterprise History" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionHeading 
                title="Our Mission & Vision" 
                centered
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
                  <h3 className="text-2xl font-heading font-semibold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide high-quality electrical, renovation, and manpower services that meet and exceed our clients' expectations through professional excellence, innovative solutions, and outstanding customer service.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-2xl font-heading font-semibold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading provider of electrical, renovation, and manpower services in the Philippines, recognized for our quality, reliability, and commitment to customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <SectionHeading 
              title="Our Core Values" 
              subtitle="These principles guide everything we do at Skyway Enterprise."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ValueCard 
                icon={CheckCircle}
                title="Quality"
                description="We are committed to delivering the highest quality workmanship in every project we undertake."
              />
              <ValueCard 
                icon={Shield}
                title="Safety"
                description="Safety is our top priority in all operations, protecting our team and clients."
              />
              <ValueCard 
                icon={Clock}
                title="Timeliness"
                description="We respect our clients' time and strive to complete all projects on schedule."
              />
              <ValueCard 
                icon={Target}
                title="Integrity"
                description="We conduct our business with honesty, transparency, and ethical practices."
              />
              <ValueCard 
                icon={Users}
                title="Teamwork"
                description="We believe in collaboration, both internally and with our clients."
              />
              <ValueCard 
                icon={Award}
                title="Excellence"
                description="We continually strive for excellence in everything we do."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Expert Team" 
              subtitle="Meet the professionals behind Skyway Enterprise dedicated to delivering excellence."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  name: "John Reyes",
                  role: "CEO & Founder",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Maria Santos",
                  role: "Operations Manager",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "David Tan",
                  role: "Lead Electrician",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Anna Cruz",
                  role: "Project Manager",
                  image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
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

export default About;
