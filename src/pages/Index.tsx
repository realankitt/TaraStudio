import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import CursorEffect from "../components/CursorEffect";
import BackToTop from "../components/BackToTop";
import { initSmoothScrolling } from "../utils/smoothScroll";

const Index = () => {
  // Initialize smooth scroll polyfill
  useEffect(() => {
    // Initialize any necessary JS here
    document.body.classList.add('js-loaded');
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Cleanup function
    return () => {
      document.body.classList.remove('js-loaded');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Loader />
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
