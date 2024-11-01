// src/components/ui/select.js
import React from 'react';

const Select = ({ children, onValueChange, value, className }) => (
  <select
    value={value}
    onChange={e => onValueChange(e.target.value)}
    className={`p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
  >
    {children}
  </select>
);

const SelectTrigger = ({ children, className }) => (
  <div className={`relative cursor-pointer ${className}`}>
    {children}
  </div>
);

const SelectContent = ({ children, className }) => (
  <div className={`absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const SelectItem = ({ children, value, className }) => (
  <option value={value} className={`p-2 hover:bg-blue-100 ${className}`}>
    {children}
  </option>
);

const SelectValue = ({ placeholder }) => (
  <div className="text-gray-500">{placeholder}</div>
);

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };
