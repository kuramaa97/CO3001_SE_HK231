import React, { useState } from 'react';
import PrinterComponent from '../components/Printer';

const Select: React.FC = () => {
  const printers = [
    { name: 'Printer 1', isAvailable: true },
    { name: 'Printer 2', isAvailable: false },
    { name: 'Printer 3', isAvailable: true },
    { name: 'Printer 4', isAvailable: false },
    { name: 'Printer 5', isAvailable: true },
    { name: 'Printer 6', isAvailable: false },
    { name: 'Printer 7', isAvailable: true },
    { name: 'Printer 8', isAvailable: false },
  ];

  const [selectedPrinter, setSelectedPrinter] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-start bg-[#F2F0F0] h-screen">
      <h1 className="text-blue-500 font-bold text-5xl mt-10 mb-10">Chọn máy in</h1>
      <div className="grid grid-cols-4 gap-20">
        {printers.map((printer, index) => (
          <PrinterComponent 
            key={index} 
            name={printer.name} 
            isAvailable={printer.isAvailable} 
            isSelected={selectedPrinter === printer.name && printer.isAvailable === true}
            onSelect={() => {
              if (selectedPrinter === printer.name) {
                setSelectedPrinter(null); 
              } else {
                setSelectedPrinter(printer.name);
              }
            }}
          />
        ))}
      </div>
      <button className="mt-10 px-10 py-2 bg-blue-500 text-white rounded">Chọn</button>
    </div>
  );
};

export default Select;