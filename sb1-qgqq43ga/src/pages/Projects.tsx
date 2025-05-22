import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import { allProjects } from '../data/projects';

const Projects: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ['all', ...Array.from(new Set(allProjects.map(project => project.category)))];
  
  const filteredProjects = currentFilter === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === currentFilter);

  return (
    <>
      <HeroSection
        title="Nuestros Proyectos"
        subtitle="Explora nuestro portafolio con los diferentes proyectos realizados en diferentes ambitos, residencial, comercial, regularizaciones, etc."
        imageUrl="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
        fullHeight={false}
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Filter Controls */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentFilter(category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                  currentFilter === category
                    ? 'bg-primary-900 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                location={project.location}
                year={project.year}
                imageUrl={project.imageUrl}
                delay={index % 6} // Reset delay every 6 items for better performance
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;