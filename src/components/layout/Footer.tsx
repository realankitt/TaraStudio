
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary">DEV ELECTRICALS</h3>
            <p className="text-sm leading-relaxed">
              Established in 2007, Dev Electricals is a trusted electrical supplier offering a diverse range of quality products—from Havells hair styling appliances to premium speaker cables—ensuring a seamless experience through customer-centric service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground hover:text-primary transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground hover:text-primary transition-colors inline-block">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground hover:text-primary transition-colors inline-block">
                  Featured Items
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#styling" className="text-foreground hover:text-primary transition-colors inline-block">
                  Hair Styling Appliances
                </Link>
              </li>
              <li>
                <Link to="/services#cables" className="text-foreground hover:text-primary transition-colors inline-block">
                  Speaker Cables
                </Link>
              </li>
              <li>
                <Link to="/services#electrical" className="text-foreground hover:text-primary transition-colors inline-block">
                  Electrical Supplies
                </Link>
              </li>
              <li>
                <Link to="/services#havells" className="text-foreground hover:text-primary transition-colors inline-block">
                  Havells Products
                </Link>
              </li>
              <li>
                <Link to="/services#accessories" className="text-foreground hover:text-primary transition-colors inline-block">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Shop No. C-96, Sector 4, Harola Village (Opp Harola Markets), Noida, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91 7947127255</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>info@develectricals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Dev Electricals. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
