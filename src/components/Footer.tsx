import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-beige text-darkTeal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/src/assets/ion-logo.png" 
                alt="Ion Semiconductors" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-darkTeal">
              Equipping the Future of Semiconductor Professionals with Industry-Driven and Practical Experience
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-darkTeal hover:text-maroon transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-darkTeal hover:text-maroon transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-darkTeal hover:text-maroon transition-colors cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-darkTeal hover:text-maroon transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-maroon mr-2 mt-1" />
                <span className="text-darkTeal">+91 93461 52382</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-maroon mr-2 mt-1" />
                <span className="text-darkTeal">anilm@ionsemiconductor.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-darkTeal mt-8 pt-6 text-center text-darkTeal">
          <p>&copy; {new Date().getFullYear()} Ion Semiconductors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;