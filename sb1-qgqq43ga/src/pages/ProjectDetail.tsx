import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const project = allProjects.find(p => p.id === id);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects');
      return;
    }
    
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [project, navigate]);
  
  if (!project) return null;
  
  // Get previous and next projects for navigation
  const currentIndex = allProjects.findIndex(p => p.id === id);
  const prevProject = allProjects[currentIndex - 1] || allProjects[allProjects.length - 1];
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];

  return (
    <div className="pt-20">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-900 animate-spin"></div>
            <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-accent-500 animate-spin opacity-30"></div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Image */}
          <div className="relative h-screen-75">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-black opacity-10" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black to-transparent text-white">
              <div className="container-custom">
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-gray-200">
                  <div>{project.category}</div>
                  <div>{project.location}</div>
                  <div>{project.year}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="container-custom py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Project Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-2xl mb-6">Información del Proyecto</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Cliente</h4>
                      <p className="text-lg">{project.client || 'Cliente Privado'}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Ubicación</h4>
                      <p className="text-lg">{project.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Año</h4>
                      <p className="text-lg">{project.year}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Superficie</h4>
                      <p className="text-lg">{project.area || '320 m²'}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Servicios</h4>
                      <p className="text-lg">{project.services || 'Diseño Arquitectónico, Construcción'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Description and Images */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none mb-12">
                  <p>
                    {project.description || `
                      Este proyecto explora la relación entre el espacio construido y su entorno natural,
                      buscando un diálogo armonioso entre ambos. La configuración volumétrica responde
                      a las condiciones particulares del sitio, aprovechando las vistas y la orientación
                      óptima para cada espacio.
                    `}
                  </p>
                  <p>
                    Los materiales utilizados —hormigón, madera y vidrio— se seleccionaron por su
                    capacidad de expresar honestidad constructiva y envejecer con dignidad. La
                    iluminación natural juega un papel fundamental, ingresando de manera controlada
                    para definir y cualificar los diferentes ambientes.
                  </p>
                  <p>
                    El programa se organiza en tres niveles que se adaptan a la topografía,
                    minimizando la intervención en el terreno y generando una secuencia espacial
                    que va desde los espacios más públicos hasta los más privados.
                  </p>
                </div>
                
                {/* Project Gallery */}
                <div className="space-y-8">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: item * 0.2 }}
                      className="overflow-hidden"
                    >
                      <img
                        src={`https://images.pexels.com/photos/${2800000 + item * 451}/pexels-photo-${2800000 + item * 451}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                        alt={`${project.title} - Imagen ${item}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Navigation */}
          <div className="bg-gray-100 py-8">
            <div className="container-custom">
              <div className="flex justify-between">
                <Link
                  to={`/projects/${prevProject.id}`}
                  className="group flex items-center"
                >
                  <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-2" />
                  <div>
                    <div className="text-sm text-gray-500">Proyecto Anterior</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </Link>
                
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="group flex items-center text-right"
                >
                  <div>
                    <div className="text-sm text-gray-500">Proyecto Siguiente</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;