
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProjectCard } from '@/components/ui/project-card';
import CallToAction from '@/components/home/CallToAction';
import { Button } from '@/components/ui/button';

type Category = 'All' | 'Electrical' | 'Renovation' | 'Manpower';

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

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
    },
    {
      title: "Restaurant Renovation",
      category: "Renovation",
      description: "Complete interior renovation of a high-end restaurant, including electrical work and custom fixtures.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/restaurant-renovation"
    },
    {
      title: "Industrial Electrical Installation",
      category: "Electrical",
      description: "Installation of high-capacity electrical systems for a manufacturing facility with strict safety requirements.",
      imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/industrial-electrical"
    },
    {
      title: "Residential Complex Staffing",
      category: "Manpower",
      description: "Ongoing manpower supply for maintenance and security of a large residential complex.",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/residential-staffing"
    },
    {
      title: "Retail Store Renovation",
      category: "Renovation",
      description: "Renovation of a flagship retail store with custom displays, lighting, and modern design elements.",
      imageUrl: "https://images.unsplash.com/photo-1582417728413-b2347161b864?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/retail-renovation"
    },
    {
      title: "Office Building Electrical Maintenance",
      category: "Electrical",
      description: "Ongoing electrical maintenance for a 20-story office building, ensuring safe and reliable power systems.",
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/office-electrical"
    },
    {
      title: "Construction Crew Supply",
      category: "Manpower",
      description: "Provision of skilled construction crew for a large-scale residential development project.",
      imageUrl: "https://images.unsplash.com/photo-1511377107391-116a9db2835f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      projectUrl: "/projects/construction-crew"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-muted-foreground">
                Showcasing our expertise through successful projects and satisfied clients.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap justify-center gap-2 bg-secondary/50 rounded-full p-2">
                {(['All', 'Electrical', 'Renovation', 'Manpower'] as Category[]).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'ghost'}
                    className={`rounded-full ${selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-secondary'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Project Process */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Our Project Process" 
              subtitle="How we ensure successful project execution from start to finish."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We begin with a thorough consultation to understand your needs and requirements."
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Our team develops a detailed plan including timeline, budget, and resource allocation."
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "We implement the plan with skilled professionals and quality materials."
                },
                {
                  step: "04",
                  title: "Completion",
                  description: "We finish with rigorous quality checks and client approval before handover."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md animate-fade-in relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-primary rotate-45"></div>
                    </div>
                  )}
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

export default Projects;
