import React, { useState, useEffect } from 'react';
import PrintIcon from '@mui/icons-material/Print';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prevStage) => {
        if (prevStage <= 1) {
          return prevStage + 1;
        } else {
          clearInterval(timer);
          return prevStage;
        }
      });
    }, 2000); // 5 seconds
    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="flex flex-col cursor-progress items-center justify-start bg-[#F2F0F0] h-screen w-screen">
      {stage === 0 ? (
        <>
        <h1 className="text-blue-500 cursor-progress font-bold text-4xl md:text-5xl mt-10 mb-24">Đang gửi đến máy in</h1>
          <PrintIcon style={{ fontSize: 200, color: 'black' }} className='mb-10'/>
        <LinearProgress
          // value={progress}
          className="mt-24 w-full md:w-96"
          style={{ height: '30px', borderRadius: '50px' }}
        />
      </>
      ) : stage === 1 ? (
        <>
          <h1 className="text-blue-500 font-bold cursor-progress text-5xl mt-10 mb-24">Đang in tài liệu</h1>
          <CircularProgress className="mb-24 mt-24 w-96 h-96" size={100} />
          <Typography variant="body1" sx={{ fontSize: '1.5rem', mt: 10, color: 'black' }}>Tài liệu của bạn đang được in</Typography>
          </>
      ) : (
        <Link to={"/"}>
          <div className='flex flex-col align-middle items-center cursor-default bg-[#F2F0F0] h-screen w-screen'>
            <h1 className="text-blue-500 font-bold text-5xl mt-10 mb-24">Thành công</h1>
            <CheckCircleIcon style={{ fontSize: 200, color: 'black' }} className='mb-10s'/>
            <span className='text-xl mt-10'>Nhấn vào màn hình để quay về trang chủ</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Process;


