import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-gradient-to-br from-primary/5 to-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 animate-float"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Premium <span className="text-primary">Electrical</span> Products & <span className="text-primary">Appliances</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Dev Electricals, established in 2007, is a trusted electrical supplier offering a diverse range of quality products from Havells and other premium brands.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/services">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative lg:flex justify-end hidden animate-slide-in-right">
            <div className="relative">
              <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Electrical products showcase" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="font-semibold">JD Verified & JD Pay Credibility</p>
                </div>
                <p className="text-sm text-muted-foreground">Providing quality electrical products and reliable service since 2007</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
