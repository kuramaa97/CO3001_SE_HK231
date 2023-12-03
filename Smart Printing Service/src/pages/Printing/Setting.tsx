import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@mui/material';
import LabeledBorder from '../../components/LabeledBorder';
import PrinterInfo from '../../components/PrinterInfo';
import Pages  from '/Pages.svg';
import { useNavigate } from 'react-router-dom'

interface FormState {
  name: string;
  status: string;
  brand: string;
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
  const [formState, setFormState] = useState<FormState>(() => {
    const selectedPrinter = localStorage.getItem('selectedPrinter');
    return selectedPrinter ? JSON.parse(selectedPrinter) : {
      name: 'OISP Canon LBP 3300',
      status: 'Khá dụng',
      brand: 'Canon LBP 3300',
      location: 'Lầu 4 - Tòa A4 - Văn phòng đào tạo OISP',
      collate: false
    };
  });
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // TODO: Add form submission or other logic here
  const isFormValid = formState.name && formState.brand && formState.location && (formState.numberOfCopies !== undefined) && (formState.customPageRange || formState.pageRange);

  return (
    <div className="flex flex-col items-center justify-start  bg-[#F2F0F0] w-full h-full">
    <Container maxWidth="md" sx={{ my: 4 }}>
    <div className="flex justify-center">
        <h1 className="mb-10 text-blue-500 font-bold text-5xl ">Tùy chỉnh</h1>
      </div>
   <PrinterInfo
    className="w-100 mb-10 md:w-[964px]"
   name={formState.name}
   brand={formState.brand}
   isAvailable={true}
   location={formState.location}/>
   <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4">
        <LabeledBorder className='mt-0 mb-0'  label="Bản in">
        <div className='flex items-center whitespace-nowrap'>
        <Typography variant="body1" className="text-black whitespace-nowrap "><span className="mr-[60px]">Số bản in:</span></Typography>
        <TextField
        required
        type="number"
          variant="outlined"
          margin="normal"
          name="numberOfCopies"
          value={formState.numberOfCopies}
          onChange={handleChange}
          sx={{ width: '15ch' }}
          InputProps={{
            style: {
              height: '30px',
              padding: '0px'
            }
          }}
          inputProps={{
            min: 1
          }}                />
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
            aria-required
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
                required
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
        <span className="mr-[77px] text-black whitespace-nowrap text-lg">Số trang trên mặt:</span>
          <select id="page" className="bg-inherit border border-gray-400 hover:border-black text-gray-900 text-sm rounded-md block w-32 p-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 16].map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>

        <div className='flex items-center whitespace-nowrap mt-3'>
        <span className="mr-[45px] text-black whitespace-nowrap text-lg">Tỷ lệ kích thước trang:</span>
          <select id="ratio" className="bg-inherit border border-gray-400 hover:border-black hover:rounded-md text-gray-900 text-sm rounded-md block w-32 p-1.5">
            <option value="Không">Không</option>
            <option value="15%">15%</option>
            <option value="25%">25%</option>
            <option value="50%">50%</option>
            <option value="50%">50%</option>
            <option value="75%">50%</option>
            <option value="100%">100%</option>
            <option value="200%">200%</option>
          </select>
        </div>


        </LabeledBorder>
      </div>
      <div className='flex justify-center'>
      <button
      className="mt-10 px-10 py-2 bg-blue-500 text-white rounded"
      onClick={() => {
        if (!isFormValid) {
          alert('Xin hãy nhập đầy đủ thông tin');
        }
        else {
          navigate('#process')
        }
      }}>
      Áp dụng
      </button>
      </div>
 </Container>
    </div>
  );
};

export default Setting;
