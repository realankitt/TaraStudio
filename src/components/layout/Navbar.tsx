
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary font-heading font-bold text-xl sm:text-2xl lg:text-3xl">
              DEV ELECTRICALS
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="text-foreground font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/projects" className="text-foreground font-medium hover:text-primary transition-colors">
              Featured
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 shadow-lg' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/projects"
            className="block text-foreground font-medium py-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Featured
          </Link>
          <Link
            to="/contact"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
