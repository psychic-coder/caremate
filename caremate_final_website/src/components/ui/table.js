import React from 'react';

export const Table = ({ children }) => (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden ">
      {children}
    </table>
  );
  
  export const TableHead = ({ children }) => (
    <thead className="bg-[#FAD069]  font-bold">
      {children}
    </thead>
  );
  
  export const TableRow = ({ children }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100 ">
      {children}
    </tr>
  );
  
  export const TableCell = ({ children }) => (
    <td className="p-4 whitespace-nowrap text-gray-700">
      {children}
    </td>
  );
  
  export const TableHeader = ({ children }) => (
    <th className="p-4 text-left text-[#252b61] font-bold">
      {children}
    </th>
  );
  
  export const TableBody = ({ children }) => (
    <tbody>
      {children}
    </tbody>
  );
  