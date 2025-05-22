import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Logo fill="#ffffff" className="h-8 mb-4" />
            <p className="text-gray-300 mb-6 text-sm">
              Un estudio de arquitectura chileno comprometido con diseñar espacios que armonizan con su entorno y responden a las necesidades de quienes los habitan.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-accent-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Inicio</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">Proyectos</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">Nosotros</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Diseño Arquitectónico</li>
              <li className="text-gray-300 text-sm">Planificación Urbana</li>
              <li className="text-gray-300 text-sm">Diseño de Interiores</li>
              <li className="text-gray-300 text-sm">Restauración Patrimonial</li>
              <li className="text-gray-300 text-sm">Consultoría</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-accent-400" />
                <p className="text-gray-300 text-sm">Av. Los Sargazos 1855, Viña Del Mar, Valparaíso, Chile</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-accent-400" />
                <p className="text-gray-300 text-sm">+56 9 8830 1489</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-accent-400" />
                <p className="text-gray-300 text-sm">proyectos@unmedioarq.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} UnMedioARQ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;