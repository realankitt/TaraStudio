
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-[1440px] mx-auto"> {/* Added container with max width for better alignment */}
          <ServicesShowcase />
          <AboutSection />
          <FeaturedProjects />
          <Testimonials />
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
