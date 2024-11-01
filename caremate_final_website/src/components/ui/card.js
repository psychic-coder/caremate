// src/components/ui/card.js

import React from 'react';

const Card = ({ children, className }) => (
  <div className={`p-4 border rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`font-bold text-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`mt-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold">{children}</h2>
);

export { Card, CardHeader, CardContent, CardTitle };
