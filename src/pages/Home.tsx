import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Home: React.FC = () => {
  const [featuredRef, featuredInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <HeroSection
        title="Arquitectura que transforma espacios, orientada a la experiencia del usuario"
        subtitle="Servicios de diseño, expedientes municipales, coordinación de proyectos y especialidades."
        buttonText="Explorar Proyectos"
        buttonLink="/projects"
        imageUrl="https://i.postimg.cc/mD2T6S8T/Escena-1.png"
      />

      {/* Featured Projects */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Proyectos Destacados"
            subtitle="Una selección de nuestros trabajos más emblemáticos en diferentes escalas y contextos"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                location={project.location}
                year={project.year}
                imageUrl={project.imageUrl}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-primary-900 border border-primary-900 px-6 py-3 hover:bg-primary-900 hover:text-white transition-colors"
            >
              Ver Todos los Proyectos
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-20 md:py-28 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://i.postimg.cc/fb3bwCY5/Logo-Proyecto-2-01.png"
                alt="UnMedioARQ Team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Sobre UnMedioARQ</h2>
              <p className="text-gray-700 mb-6">
              UnMedioARQ es una oficina de arquitectura ubicada en la región de Valparaíso, Chile. Enfocada en diseños de espacios habitables acogedores e innovadores que conectan el entorno y las personas. Especializada en Servicios de diseño, expedientes municipales, coordinación de proyectos y especialidades.
              </p>
              <p className="text-gray-700 mb-8">
                Nuestro enfoque integra innovación, sostenibilidad y sensibilidad contextual para desarrollar proyectos que trascienden lo puramente funcional, generando experiencias significativas para quienes los habitan.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary-900 border border-primary-900 px-6 py-3 hover:bg-primary-900 hover:text-white transition-colors"
              >
                Conocer Más
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={featuredRef} className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Nuestros Servicios"
            subtitle="Ofrecemos soluciones integrales en arquitectura y diseño para diversos contextos y necesidades"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Diseño Arquitectónico',
                description: 'Creamos proyectos a medida que reflejan la identidad del cliente y responden al contexto.',
                image: 'https://i.postimg.cc/Wb0v2KD5/Vista-01-Frontis.jpg',
                delay: 0,
              },
              {
                title: 'Elaboración Expedientes Municipales',
                description: 'Desarrollamos y gestionamos toda la documentación necesaria para la obtención de permisos ante la dirección de obras local.',
                image: 'https://i.postimg.cc/4dRy3tfc/PL-Habilitaci-n-Oficinas-Mobimo-page-0002.jpg',
                delay: 1,
              },
              {
                title: 'Diseño de Interiores',
                description: 'Creamos ambientes funcionales y estéticos que mejoran la experiencia del espacio habitable.',
                image: 'https://i.postimg.cc/bw8RZ6gy/Enscape-2024-07-24-23-28-07-Living-depto.png',
                delay: 2,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: service.delay * 0.2 }}
              >
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Contacta con nosotros para discutir tus ideas y convertirlas en espacios excepcionales.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent-600 hover:bg-accent-700 text-white transition-colors"
          >
            Contáctanos
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;