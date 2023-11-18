import React, { useState, useEffect } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

const Process: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prevStage) => {
        if (prevStage < 2) {
          return prevStage + 1;
        } else {
          clearInterval(timer);
          return prevStage;
        }
      });
    }, 5000); // 5 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-start bg-[#F2F0F0] h-screen">
      {stage === 0 ? (
        <>
        <h1 className="text-blue-500 font-bold text-5xl mt-10 mb-24">Đang gửi đến máy in</h1>
          <PrintIcon style={{ fontSize: 200, color: 'black' }} className='mb-10'/>
        <LinearProgress 
          // value={progress} 
          className="mt-24 w-96" 
          style={{ height: '30px', borderRadius: '50px' }} 
        />
      </>      
      ) : stage === 1 ? (
        <>
          <h1 className="text-blue-500 font-bold text-5xl mt-10 mb-24">Đang in tài liệu</h1>
          <CircularProgress className="mb-24 mt-24 sw-96 h-96" size={100} />
          <Typography variant="body1" sx={{ fontSize: '2rem', mt: 10, color: 'black' }}>Tài liệu của bạn đang được in</Typography>        </>
      ) : (
        <>
          <h1 className="text-blue-500 font-bold text-5xl mt-10 mb-24">Thành công</h1>
          <CheckCircleIcon style={{ fontSize: 200, color: 'black' }} className='mb-10s'/>
          <Typography variant="body1" sx={{ fontSize: '2rem', mt: 10, color: 'black' }}>Đã in thành công</Typography>        </>
      )}
    </div>
  );
};

export default Process;



