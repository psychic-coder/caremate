import React from 'react';

export const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
  />
);
