import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Checkbox,
  Grid
} from '@mui/material';
import LabeledBorder from '../components/LabeledBorder';
import PrinterInfo from '../components/PrinterInfo';
import Pages  from '/Pages.svg';
import { Link } from 'react-router-dom'

interface FormState {
  name: string;
  status: string;
  type: string;
  location: string;
  numberOfCopies: number;
  currentPage: string;
  customPageRange: string;
  pageRange: string;
  pagesPerSide: string;
  pageScaling: string;
  collate: boolean;
}

const Setting: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: 'OISP Canon LBP 3300',
    status: 'Khá dụng',
    type: 'Canon LBP 3300',
    location: 'Lầu 4 - Tòa A4 - Văn phòng đào tạo OISP',
    numberOfCopies: 1,
    currentPage: '1',
    customPageRange: '',
    pageRange: 'all',
    pagesPerSide: '1',
    pageScaling: 'none',
    collate: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // TODO: Add form submission or other logic here

  return (
    <div className="flex flex-col items-center justify-start bg-[#F2F0F0] h-screen">
    <Container maxWidth="md" sx={{ my: 4 }}>
    <div className="flex justify-center">
        <h1 className="mb-10 text-blue-500 font-bold text-5xl ">Tùy chỉnh</h1>
      </div>
   <PrinterInfo
    className="w-[964px]"
   name={formState.name}  
   brand={formState.type}  
   isAvailable={true} 
   location={formState.location}/>
   <div className="flex space-x-4">
        <LabeledBorder label="Bản in">
        <div className='flex items-center whitespace-nowrap'>
        <Typography variant="body1" className="text-black whitespace-nowrap "><span className="mr-[60px]">Số bản in:</span></Typography>
        <TextField
        type="number"
          variant="outlined"
          margin="normal"
          name="numberOfCopies"
          onChange={handleChange}
          sx={{ width: '15ch' }}
          InputProps={{
            style: { 
              height: '30px', 
              padding: '0px'
            }
          }}                  />
        </div>
        <div className='flex items-center gap-5 whitespace-nowrap'>
        <img src={Pages} className='w-[150px] h-[150px]' alt="Pages" />
        <FormControlLabel
        control={<Checkbox checked={formState.collate} onChange={handleChange} name="collate" />}
        label={<span className="text-black">Đối chiếu</span>}/>
       </div>
        </LabeledBorder>

        <LabeledBorder label="Phạm vi trang">
        <FormControl component="fieldset" margin="normal">
        <RadioGroup
            row
            name="pageRange"
            value={formState.pageRange}
            onChange={handleChange}
            className='text-black'
            >
            <FormControlLabel value="all" control={<Radio />} label="Tất cả" />
            <FormControlLabel value="current" control={<Radio />} label="Trang hiện tại" />
            <div className="flex items-center">
                <FormControlLabel value="custom" control={<Radio />} label="Trang" />
                <TextField
                type="text"
                variant="outlined"
                margin="normal"
                name="customPageRange"
                value={formState.customPageRange}
                onChange={handleChange}
                disabled={formState.pageRange !== 'custom'}
                sx={{ width: '15ch' }}
                InputProps={{
                    style: { 
                      height: '30px', 
                      padding: '0px' 
                    }
                  }}                          
                  />
            </div>
            </RadioGroup>
        </FormControl>        
        </LabeledBorder>

        <LabeledBorder label="Zoom">
        <div className='flex items-center whitespace-nowrap'>
        <Typography variant="body1" className="text-black whitespace-nowrap "><span className="mr-[92px]">Số trang trên mặt:</span></Typography>
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            name="pagesPerSide"
            value={formState.pagesPerSide}
            onChange={handleChange}
            select
            sx={{ width: '15ch' }}
            InputProps={{
                style: { 
                  height: '30px', 
                  padding: '0px' 
                }
              }}          >
{[1, 2, 3, 4, 5, 6, 7, 8, 16].map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ))}          
  </TextField>
            </div>

            <div className='flex items-center whitespace-nowrap'>
        <Typography variant="body1" className="text-black whitespace-nowrap "><span className="mr-[60px]">Tỷ lệ kích thước trang:</span></Typography>

          <TextField
            variant="outlined"
            margin="normal"
            name="pageScaling"
            value={formState.pageScaling}
            onChange={handleChange}
            select
            sx={{ width: '15ch' }}
            InputProps={{
                style: { 
                  height: '30px', // Adjust the height value as needed
                  padding: '0px' // Adjust the padding value as needed
                }
              }}          
          >
  <MenuItem value="Không">Không</MenuItem>
  <MenuItem value="15%">15%</MenuItem>
  <MenuItem value="25%">25%</MenuItem>
  <MenuItem value="50%">50%</MenuItem>
  <MenuItem value="75%">75%</MenuItem>
  <MenuItem value="100%">100%</MenuItem>
  <MenuItem value="200%">200%</MenuItem>
          </TextField>
        </div>


        </LabeledBorder>
      </div>

      <Link className="flex justify-center" to="/services/printing#process">  <button className="mt-10 px-10 py-2 bg-blue-500 text-white rounded">Áp dụng</button></Link>

 </Container>
    </div>
  );
};

export default Setting;
