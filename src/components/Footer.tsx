import React from 'react';
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo and Info */}
          <div className="md:col-span-1">
            <a href="/" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/76f4a780-3e6c-4778-b6f1-1ebdd7d32af5.png" 
                alt="TARA Logo" 
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 text-neutral-600 max-w-xs">
              Creating exceptional digital experiences that elevate human potential.
            </p>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-600 hover:text-brand transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-neutral-600 hover:text-brand transition-colors">Services</a>
              </li>
              <li>
                <a href="#work" className="text-neutral-600 hover:text-brand transition-colors">Work</a>
              </li>
              <li>
                <a href="#process" className="text-neutral-600 hover:text-brand transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-600 hover:text-brand transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Links */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-neutral-600 hover:text-brand transition-colors inline-flex items-center group"
                >
                  LinkedIn
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-neutral-600 hover:text-brand transition-colors inline-flex items-center group"
                >
                  Twitter
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-neutral-600 hover:text-brand transition-colors inline-flex items-center group"
                >
                  Instagram
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-neutral-600 hover:text-brand transition-colors inline-flex items-center group"
                >
                  Dribbble
                  <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <a href="mailto:howdy@tarastudio.in" className="text-link text-neutral-600 hover:text-brand">
            howdy@tarastudio.in
            </a>
            <p className="mt-6 text-neutral-600">
            New Indrapuri, Krishna nagar<br />
            Lucknow 226023
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            © {year} Company. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-neutral-500 hover:text-brand transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-brand transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
