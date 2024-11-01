import React, { useState } from 'react';

export const Dialog = ({ trigger, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span onClick={() => setIsOpen(true)}>{trigger}</span>
      {isOpen && (
        <div className="fixed  inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{title}</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500">&times;</button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};
