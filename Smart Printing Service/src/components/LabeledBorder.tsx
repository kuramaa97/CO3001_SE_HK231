import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface LabeledBorderProps {
  label: string;
  children?: ReactNode; 
  className?: string;
}




const LabeledBorder: React.FC<LabeledBorderProps> = ({ label, children, className = '' }) => {
  return (
    <div className={className}>
      <div style={{
          border: '1px solid black',      
          borderRadius: '4px',           
          padding: '16px',                
          position: 'relative',
          marginTop: '0px',               
          marginBottom: '0px'
      }}>
        <Typography
          sx={{
            bgcolor: '#F2F0F0',
            position: 'absolute',
            top: -12, // Adjust as needed
            left: 16, // Adjust as needed
            color: 'black'
          }}
          variant="subtitle2"
        >
          {label}
        </Typography>
        {children} {/* Render children here */}
      </div>
    </div>
  );
};

export default LabeledBorder;
