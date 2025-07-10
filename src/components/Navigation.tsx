
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'HSE', path: '/hse' },
    { name: 'Clients', path: '/clients' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/abb59179-451b-4bc1-82de-a3f2a58b974a.png" 
              alt="Safe Freight Logistics Logo" 
              className="h-10 w-10 mr-3"
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold text-primary">
                Safe Freight Logistics Ltd
              </div>
              <div className="text-xs text-accent font-semibold">
                Know Safety, No Pain
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-primary transition-colors duration-300 font-medium ${
                    isActive ? 'text-primary border-b-2 border-primary' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium ${
                      isActive ? 'text-primary bg-gray-50' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
