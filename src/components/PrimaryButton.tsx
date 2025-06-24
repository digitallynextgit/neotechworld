import Link from 'next/link';
import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, href, className = '' }) => (
  <Link
    href={href}
    className={`rounded-full bg-transparent px-4 sm:px-6 py-2 sm:py-3 text-[1vw] font-medium text-white border-white border ease-in-out hover:bg-white hover:text-red-500 transition-transform duration-300 hover:scale-105 ${className}`}
  >
    {children}
  </Link>
);

export default PrimaryButton; 