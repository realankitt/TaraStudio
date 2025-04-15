
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/project-card';
import { SectionHeading } from '@/components/ui/section-heading';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Commercial Office Renovation",
      category: "Renovation",
      description: "Complete renovation of a 3-floor office space including electrical installations and modern interior design.",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/commercial-office"
    },
    {
      title: "Residential Electrical Upgrade",
      category: "Electrical",
      description: "Full electrical system upgrade for a luxury residential property with smart home integration.",
      imageUrl: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/residential-electrical"
    },
    {
      title: "Hotel Construction Support",
      category: "Manpower",
      description: "Provided skilled manpower for the construction of a 5-star hotel project in the metro area.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/hotel-construction"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading 
            title="Our Featured Projects" 
            subtitle="Take a look at some of our recent work that showcases our expertise and quality."
            className="md:mb-0"
          />
          <Link to="/projects" className="inline-flex">
            <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-transparent p-0 h-auto">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
