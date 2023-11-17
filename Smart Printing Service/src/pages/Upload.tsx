import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WordIcon from '/word.svg';
import ExelIcon from '/exel.svg';
import PdfIcon from '/pdf.svg';
import TxtIcon from '/txt.svg';
import ImageIcon from '/image.svg';
import FileIcon from '/file.svg';

const uploadIcon = (
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256" fill="none">
  <path d="M73.1429 195.765H182.857V105.412H256L128 0L0 105.412H73.1429V195.765ZM0 225.882H256V256H0V225.882Z" fill="black"/>
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

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files ? event.dataTransfer.files[0] : null;
    handleFileChange(file);
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
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





