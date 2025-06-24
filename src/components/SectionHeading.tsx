import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = '' }) => (
  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center ${className}`}>
    {children}
  </h2>
);

export default SectionHeading; 