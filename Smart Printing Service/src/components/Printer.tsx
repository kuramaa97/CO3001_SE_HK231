import Printer from '/Printer.svg';
import NoAvailablePrinter from '/NoAvailablePrinter.svg';

interface PrinterProps {
  name: string;
  isAvailable: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

interface PrinterProps {
  name: string;
  isAvailable: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const PrinterComponent: React.FC<PrinterProps> = ({ name, isAvailable, isSelected, onSelect }) => {
  return (
    <div className='flex items-center cursor-pointer  flex-col  space-x-2 '>
    <div 
      className={`w-40 flex flex-col items-center justify-center ${isSelected ? 'bg-[#9DC4FF]' : ''}`}
      onClick={onSelect}
    >
      <img src={isAvailable ? Printer : NoAvailablePrinter} alt="Printer icon" className="w-24 h-24" />
      <p className="text-lg text-center">{name}</p>
    </div>
    <p className="text-sm text-gray-500">{isAvailable ? 'Khả dụng' : 'Không khả dụng'}</p>
    </div>
  );
};

export default PrinterComponent;
