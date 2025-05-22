import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
  fullHeight?: boolean;
  overlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
  fullHeight = true,
  overlay = true,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [imageUrl]);

  const heightClass = fullHeight ? 'h-screen' : 'h-screen-75';

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center ${heightClass} overflow-hidden`}
    >
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-30" />
      )}
      
      <div className="container-custom relative z-10 text-white">
        <motion.h1 
          className="mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="mb-8 max-w-2xl text-lg md:text-xl text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {buttonText && buttonLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to={buttonLink}
              className="inline-flex items-center text-white bg-accent-700 hover:bg-accent-800 border-0 py-3 px-6 focus:outline-none transition-colors text-base"
            >
              {buttonText}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;