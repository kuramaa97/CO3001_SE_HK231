import React from 'react';
import { Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Page404: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <SentimentVeryDissatisfiedIcon style={{ fontSize: 100 }} />
        <Typography variant="h4" className="mt-4">
          404 - Page Not Found
        </Typography>
    </div>
  );
};

export default Page404;
