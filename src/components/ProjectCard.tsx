import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  location,
  year,
  imageUrl,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
    >
      <Link to={`/projects/${id}`} className="block group">
        <div className="relative overflow-hidden">
          <div className="aspect-w-4 aspect-h-3 w-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-normal">{title}</h3>
          <div className="flex text-sm text-gray-600 mt-1 space-x-2">
            <span>{category}</span>
            <span>•</span>
            <span>{location}</span>
            <span>•</span>
            <span>{year}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;