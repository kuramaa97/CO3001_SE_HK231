import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface LabeledBorderProps {
  label: string;
  children?: ReactNode; 
  className?: string;
}

type SimplifiedSxProps = {
  border?: number;
  borderColor?: string;
  borderRadius?: number;
  padding?: number;
  position?: 'relative' | 'absolute';
  mt?: number;
  mb?: number;
};

const styles: SimplifiedSxProps = {
  border: 1,
  borderColor: 'black',
  borderRadius: 1,
  padding: 2,
  position: 'relative',
  mt: 0, // Adjust as needed
  mb: 0 // Adjust as needed
} as const;


const LabeledBorder: React.FC<LabeledBorderProps> = ({ label, children, className = '' }) => {
  return (
    <Box className={className}
      sx={styles}
    >
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
    </Box>
  );
};

export default LabeledBorder;


