import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WordIcon from '/word.svg';
import ExelIcon from '/exel.svg';
import PdfIcon from '/pdf.svg';
import TxtIcon from '/txt.svg';
import ImageIcon from '/image.svg';
import FileIcon from '/file.svg';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const uploadIcon = (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="128" height="148" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path id="animatedArrow" d="M2492 5103 c-22 -10 -230 -241 -585 -647 -304 -347 -568 -650 -587 -674 -30 -38 -35 -51 -35 -101 0 -69 28 -114 89 -142 37 -17 71 -19 373 -19 l333 0 2 -1069 c3 -1063 3 -1070 24 -1097 11 -15 33 -37 48 -48 27 -20 39 -21 406 -21 367 0 379 1 406 21 15 11 37 33 48 48 21 27 21 34 24 1097 l2 1069 333 1 c369 1 382 3 431 63 26 32 31 46 31 96 0 52 -4 63 -35 102 -19 24 -283 327 -587 674 -379 434 -563 636 -586 648 -44 20 -93 20 -135 -1z" fill="black" stroke="black">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0; 0 -400; 0 0" keyTimes="0;0.5;1" dur="1.8s" repeatCount="indefinite"/>
        </path>
        <path d="M162 923 l3 -678 26 -56 c33 -71 87 -125 158 -158 l56 -26 2155 0 2155 0 56 26 c71 33 125 87 158 158 l26 56 3 678 3 677 -321 0 -320 0 0 -480 0 -480 -1760 0 -1760 0 0 480 0 480 -320 0 -321 0 3 -677z"/>
    </g>
</svg>
);

const fileIcons: { [key: string]: JSX.Element } = {
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': <img src={WordIcon} alt="Word Icon" />,
  'application/vnd.ms-excel': <img src={ExelIcon} alt="Exel Icon" />,
  'application/pdf': <img src={PdfIcon} alt="PDF Icon" />,
  'text/plain': <img src={TxtIcon} alt="Text Icon" />,
  'image/png': <img src={ImageIcon} alt="Image Icon" />,
  'image/jpeg': <img src={ImageIcon} alt="Image Icon" />,
  'image/webp': <img src={ImageIcon} alt="Image Icon" />,
};

const Upload: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<{file: File | null, icon: JSX.Element}>({file: null, icon: uploadIcon});
  const [showAlert, setShowAlert] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files ? event.dataTransfer.files[0] : null;
    handleFileChange(file);
  };

  const [opacity, setOpacity] = useState(0);

  const handleFileChange = (file: File | null) => {
    if (file) {
      if (!fileIcons[file.type]) {
        setShowAlert(true);
        setOpacity(100);
        setTimeout(() => {
          setOpacity(0);
          setTimeout(() => setShowAlert(false), 500);
        }, 2000);
        return;
      }
      const icon = fileIcons[file.type] ||  <img className='w-[285px] h-[350px]' src={FileIcon} alt="File Icon" />;
      setUploadedFile({file, icon});
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 p-10 h-screen"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
    {showAlert &&
      <Alert
        severity="error"
        onClose={() => setShowAlert(false)}
        className={`fixed top-10 left-1/2 transform -translate-x-1/2 w-96 transition duration-500 ease-in-out ${opacity === 100 ? 'opacity-100' : 'opacity-0'}`}
      >
        <AlertTitle>Error</AlertTitle>
        Invalid file type
      </Alert>
    }
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-blue-500 font-bold text-5xl ">Tải tài liệu lên</h1>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={event => handleFileChange(event.target.files ? event.target.files[0] : null)}
        />
      <div className="flex flex-col items-center">
          {uploadedFile.file ? uploadedFile.icon : uploadIcon}
          <label htmlFor="fileInput" className="mt-10 text-blue-500 text-xl cursor-pointer">
            {uploadedFile.file ? uploadedFile.file.name : 'Chọn tệp hoặc kéo vào đây'}
          </label>
        </div>
        {uploadedFile.file ?
          <Link to="/services/printing#select">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10"
            >
              Áp dụng
            </button>
          </Link>
        :
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            Chọn tệp
          </button>
        }
      </div>
    </div>
  );
};

export default Upload;
