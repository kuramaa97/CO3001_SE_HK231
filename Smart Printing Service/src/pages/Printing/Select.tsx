import React, { useState, useEffect } from 'react';
import PrinterComponent from '../../components/Printer';
import { useNavigate } from 'react-router-dom';
import PrinterData from '../../PrinterData';

interface Printer {
  id: number;
  name: string;
  isAvailable: boolean;
  brand: string;
  location: string;
}

const Select: React.FC = () => {
  const [printers, setPrinters] = useState<Printer[]>(() => {
    const localData = localStorage.getItem('printers');
    return localData ? JSON.parse(localData) : PrinterData;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const localData = localStorage.getItem('printers');
      if (localData) {
        setPrinters(JSON.parse(localData));
      }
    };
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);
  const navigate = useNavigate();

  const handleSelectPrinter = (printer: Printer) => {
    if (selectedPrinter && selectedPrinter.id === printer.id) {
      setSelectedPrinter(null);
      localStorage.removeItem('selectedPrinter');
    } else {
      setSelectedPrinter(printer);
      localStorage.setItem('selectedPrinter', JSON.stringify(printer));
    }
  };

  return (
    <div className="flex flex-col items-center justify-start bg-[#F2F0F0] w-full h-full">
      <h1 className="text-blue-500 font-bold text-5xl mt-10 mb-10">Chọn máy in</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-20">
        {printers.map((printer: Printer, index: number) => (
          <PrinterComponent
            key={index}
            name={printer.name}
            isAvailable={printer.isAvailable}
            isSelected={selectedPrinter?.id === printer.id && printer.isAvailable === true}
            onSelect={() => handleSelectPrinter(printer)}
          />
        ))}
      </div>
      <button
      className="mt-10 mb-10 px-10 py-2 bg-blue-500 text-white rounded"
      onClick={() => {
        if (!selectedPrinter) {
          alert('Hãy chọn 1 máy in');
        }
        else {
          navigate('#setting')
        }
      }}>
      Áp dụng
      </button>
    </div>
  );
};

export default Select;
