// src/components/ui/alert.js

import React from 'react';

const Alert = ({ variant = 'info', children, className }) => {
  const variantClasses = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    destructive: 'bg-red-100 text-red-800 border-red-300',
    success: 'bg-green-100 text-green-800 border-green-300',
  };

  return (
    <div className={`p-4 border rounded-lg ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

const AlertTitle = ({ children }) => (
  <div className="font-bold text-lg">{children}</div>
);

const AlertDescription = ({ children }) => (
  <div className="text-sm mt-1">{children}</div>
);

export { Alert, AlertTitle, AlertDescription };
