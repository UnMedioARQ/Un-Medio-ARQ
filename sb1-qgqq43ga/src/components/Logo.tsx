import React from 'react';

interface LogoProps {
  fill?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ fill = '#1a1a1a', className = 'h-8' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-serif text-xl tracking-tighter" style={{ color: fill }}>
        UnMedio<span className="font-bold">ARQ</span>
      </span>
    </div>
  );
};

export default Logo;