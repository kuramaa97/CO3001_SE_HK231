import React, { useEffect, useState } from 'react';
import PrinterComponent from '../components/Printer';
import AddIcon from '@mui/icons-material/Add';
import { Modal, Typography, Button } from '@mui/material';
import AddPrinterForm from '../components/AddPrinterForm';
import PrinterData from '../PrinterData';
import PrinterInfo from '../components/PrinterInfo';
import { useMediaQuery } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Printer {
  id: number;
  name: string;
  isAvailable: boolean;
  brand: string;
  location: string;
}

const Manage: React.FC = () => {
  const [printers, setPrinters] = useState<Printer[]>(() => {
    const localData = localStorage.getItem('printers');
    return localData ? JSON.parse(localData) : PrinterData;
  });

  const handleAddPrinter = (printer: Printer) => {
    setPrinters((prevPrinters: Printer[]) => {
      const updatedPrinters = [
        ...prevPrinters,
        { ...printer, id: Math.floor(Math.random() * Date.now()) },
      ];
      localStorage.setItem('printers', JSON.stringify(updatedPrinters));
      return updatedPrinters;
    });
  };

  const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);
  const [open, setOpen] = useState(false);
  const [openPrinterInfo, setOpenPrinterInfo] = useState(false);
  const matches = useMediaQuery('(max-width:600px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);


  const handleSelectPrinter = (printer: Printer) => {
    if (selectedPrinter && selectedPrinter.id === printer.id) {
      setSelectedPrinter(null);
    } else {
      setSelectedPrinter(printer);
    }
  };

  const handleOpenPrinterInfo = () => {
    if (selectedPrinter) {
      setOpenPrinterInfo(true);
    }
  };

  const handleToggleAvailability = () => {
    if (selectedPrinter) {
      const updatedPrinters = printers.map(printer =>
        printer.id === selectedPrinter.id ? { ...printer, isAvailable: !printer.isAvailable } : printer
      );
      setPrinters(updatedPrinters);
      localStorage.setItem('printers', JSON.stringify(updatedPrinters));
      setOpenPrinterInfo(false); 
      setSelectedPrinter(null);
    }
  };

  const handleDeletePrinter = () => {
    if (selectedPrinter) {
      const updatedPrinters = printers.filter(printer => printer.id !== selectedPrinter.id);
      setPrinters(updatedPrinters);
      localStorage.setItem('printers', JSON.stringify(updatedPrinters));
      setOpenPrinterInfo(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-start bg-[#F2F0F0] w-full h-full">
      <h1 className="text-blue-500 font-bold text-center text-3xl md:text-5xl mt-10 mb-10">Danh sách máy in đã kết nối</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {printers.map((printer: Printer, index: number) => (
          <PrinterComponent 
            key={index} 
            name={printer.name} 
            isAvailable={printer.isAvailable} 
            isSelected={selectedPrinter?.id === printer.id}
            onSelect={() => handleSelectPrinter(printer)}
          />
        ))}
        <AddIcon onClick={handleOpen} style={{ cursor: 'pointer', fontSize: '100px', color: 'black', marginLeft: '30px' }} />
      </div>
      <button className="mt-10 mb-10 px-10 py-2 bg-blue-500 text-white rounded" onClick={handleOpenPrinterInfo}>Chọn</button>

      <Modal open={open} onClose={handleClose}>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 400, 
          background: '#F2F0F0', 
          border: '2px solid #000', 
          boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.3)',
          padding: 30 
        }}>
          <Typography variant="h6" className="text-black" sx={{ mb: 3 }}>Thêm máy in</Typography>
          <AddPrinterForm onAddPrinter={(printer: { name: string; brand: string; location: string; }) => handleAddPrinter({ ...printer, isAvailable: false, id: Math.floor(Math.random() * Date.now()) })} onClose={handleClose}/>
        </div>
      </Modal>

      {selectedPrinter && (
        <Modal open={openPrinterInfo} onClose={() => setOpenPrinterInfo(false)}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: matches ? 400 : 800, 
            height: matches? 400 :350, 
            padding: 30, 
            backgroundColor: 'white', 
            margin: 'auto',
            background: '#F2F0F0', 
            border: '2px solid #000', 
            boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.3)',
            }}>
            <Typography variant="h6" className="text-black" sx={{ mb: 5}}>Cài đặt máy in</Typography>
            <PrinterInfo {...selectedPrinter} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 20 }}>
              <Button variant="contained" color="primary" onClick={handleToggleAvailability}>
                {selectedPrinter.isAvailable ? 'Không khả dụng' : 'Khả dụng'}
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDeletePrinter}>
                Xóa
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Manage;