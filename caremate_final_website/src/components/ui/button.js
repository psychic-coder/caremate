// src/components/ui/button.js

import React from 'react';

const Button = ({ children, variant = 'default', className, ...props }) => {
  const variantClasses = {
    default: 'bg-[#A3DAC2] text-[#252b61] hover:bg-[#A3DAC8]',
    destructive: 'bg-red-500 text-[#252b61] hover:bg-[#A3DAC8]',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
  };

  return (
    <button
      className={`py-2 px-4 rounded-lg ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
