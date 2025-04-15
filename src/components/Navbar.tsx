import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/76f4a780-3e6c-4778-b6f1-1ebdd7d32af5.png" 
              alt="TARA Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-link text-sm font-medium">
              About
            </a>
            <a href="#services" className="text-link text-sm font-medium">
              Services
            </a>
            <a href="#work" className="text-link text-sm font-medium">
              Work
            </a>
            <a href="#process" className="text-link text-sm font-medium">
              Process
            </a>
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#work" 
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#process" 
            className="text-lg font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#contact" 
            className="btn-primary w-full justify-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
