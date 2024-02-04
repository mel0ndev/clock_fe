import React from 'react';

interface GridProps {
	columns: number;
	rows: number;
}

const Grid = ({ columns, rows }: GridProps) => {
  // Generate an array with the number of items based on columns and rows
  const items = Array.from({ length: columns * rows }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item} className="bg-blue-500 p-4 text-white">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Grid;

