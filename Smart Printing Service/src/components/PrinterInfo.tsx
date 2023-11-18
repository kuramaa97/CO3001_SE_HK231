import React from 'react';
import { Typography } from '@mui/material';
import LabeledBorder from './LabeledBorder';

interface PrinterInfoProps {
  name: string;
  isAvailable: boolean;
  brand: string;
  location: string;
  className?: string;
  style?: React.CSSProperties;
}

const PrinterInfo: React.FC<PrinterInfoProps> = ({ name, isAvailable, brand, location, className }) => {
  return (
    <div className={className}>
    <LabeledBorder className={className} label="Thông tin máy">
      <Typography variant="body1" className="text-black"><span className="mr-[95px]">Tên máy:</span> {name}</Typography>
      <Typography variant="body1" className="text-black"><span className="mr-[83px]">Trạng thái:</span> {isAvailable ? 'Khả dụng' : 'Không khả dụng'}</Typography>
      <Typography variant="body1" className="text-black"><span className="mr-[124px]">Loại:</span> {brand}</Typography>
      <Typography variant="body1" className="text-black"><span className="mr-[92px]">Địa điểm:</span> {location}</Typography>
    </LabeledBorder>
    </div>
  );
};

export default PrinterInfo;