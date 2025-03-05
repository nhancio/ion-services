import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Remove Cpu import

const navItems = [
  { name: 'Home', to: 'home', type: 'scroll' },
  { name: 'About Us', to: 'about', type: 'scroll' },
  { name: 'Services', to: 'services', type: 'scroll' },
  { name: 'Success Stories', to: 'clients', type: 'scroll' }, // Changed 'to' value from 'success' to 'clients'
  { name: 'Contact Us', to: 'contact', type: 'scroll' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    if (location.pathname !== '/') {
      return (
        <RouterLink
          to={`/${item.to === 'home' ? '' : item.to}`}
          className="px-3 py-2 text-base font-medium text-black hover:text-maroon transition-colors"
        >
          {item.name}
        </RouterLink>
      );
    }

    if (item.type === 'route') {
      return (
        <RouterLink
          to={item.to}
          className="px-3 py-2 text-base font-medium text-black hover:text-maroon transition-colors"
        >
          {item.name}
        </RouterLink>
      );
    }

    return (
      <ScrollLink
        to={item.to}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="px-3 py-2 text-base font-medium text-black hover:text-maroon cursor-pointer transition-colors"
      >
        {item.name}
      </ScrollLink>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-beige backdrop-blur-sm shadow-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src="/images/ion-logo.png"  // Updated path
              alt="Ion Semiconductors" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-maroon focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-lightBeige/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name} className="block" onClick={() => setIsOpen(false)}>
                <NavLink item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;