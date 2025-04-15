import { useEffect } from "react";
import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import CursorEffect from "../components/CursorEffect";
import BackToTop from "../components/BackToTop";
import { initSmoothScrolling } from "../utils/smoothScroll";

const About = React.lazy(() => import("../components/About"));
const Services = React.lazy(() => import("../components/Services"));
const Work = React.lazy(() => import("../components/Work"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Services />
          <Work />
        </Suspense>
        <Process />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
