import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm";
  const variants = {
    primary: "border-transparent text-white bg-red-500 hover:bg-red-600",
    secondary: "border-red-500 text-red-500 bg-white hover:bg-red-50"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}