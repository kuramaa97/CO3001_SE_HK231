// src/components/AddPrinterForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import LabeledBorder from './LabeledBorder';

interface AddPrinterFormProps {
  onAddPrinter: (printer: { name: string, brand: string, location: string }) => void;
  onClose: () => void;
}

const AddPrinterForm: React.FC<AddPrinterFormProps> = ({ onAddPrinter, onClose }) => {
  const [newPrinter, setNewPrinter] = useState({ name: '', brand: '', location: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPrinter({ ...newPrinter, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newPrinter.name && newPrinter.brand && newPrinter.location) {
      onAddPrinter(newPrinter);
      setNewPrinter({ name: '', brand: '', location: '' });
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <LabeledBorder  label="Thông tin máy">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="body1" className="text-black" sx={{ mr: '95px' }}>
          Tên máy:
        </Typography>
        <TextField
          required
          variant="outlined"
          margin="normal"
          name="name"
          onChange={handleChange}
          sx={{ width: '15ch' }}
          InputProps={{
            style: { 
              height: '30px', 
              padding: '0px'
            }
          }}                  
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="body1" className="text-black" sx={{ mr: '124px' }}>
          Loại:
        </Typography>
        <TextField
          required
          variant="outlined"
          margin="normal"
          name="brand"
          onChange={handleChange}
          sx={{ width: '15ch' }}
          InputProps={{
            style: { 
              height: '30px', 
              padding: '0px'
            }
          }}                  
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="body1" className="text-black" sx={{ mr: '92px' }}>
          Địa điểm:
        </Typography>
        <TextField
          required
          variant="outlined"
          margin="normal"
          name="location"
          onChange={handleChange}
          sx={{ width: '15ch' }}
          InputProps={{
            style: { 
              height: '30px', 
              padding: '0px'
            }
          }}                  
        />
      </div>
    </LabeledBorder>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
      <Button type="submit" variant="contained" color="primary">Thêm</Button>
    </div>    
  </form>
  );
};

export default AddPrinterForm;