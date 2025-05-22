import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' }
  ];

  const navBarClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClass = `text-sm uppercase tracking-wider font-medium transition-colors
    ${isScrolled ? 'text-gray-900 hover:text-accent-700' : 'text-white hover:text-accent-200'}`;

  const mobileMenuClass = `
    fixed inset-0 bg-white z-50 flex flex-col justify-center items-center p-5 space-y-8
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  return (
    <>
      <header className={navBarClass}>
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo fill={isScrolled ? '#1a1a1a' : '#ffffff'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClass} ${
                  location.pathname === link.path ? 'font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={mobileMenuClass}>
        <Link to="/" className="mb-8" onClick={toggleMenu}>
          <Logo fill="#1a1a1a" className="h-10" />
        </Link>
        <nav className="flex flex-col items-center space-y-6 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-900 text-lg uppercase tracking-wider font-medium w-full text-center py-2 ${
                location.pathname === link.path ? 'font-semibold border-b-2 border-accent-500' : ''
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;