// src/components/ui/tabs.js

import React, { useState } from 'react';

const Tabs = ({ defaultValue, children }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          selectedValue,
          onSelect: value => setSelectedValue(value),
        })
      )}
    </div>
  );
};

const TabsList = ({ children }) => (
  <div className="flex border-b">{children}</div>
);

const TabsTrigger = ({ value, selectedValue, onSelect, children }) => (
  <button
    className={`p-2 ${value === selectedValue ? 'border-b-2 border-blue-500' : ''}`}
    onClick={() => onSelect(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, selectedValue, children }) => (
  <div className={`mt-4 ${value === selectedValue ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
