import React from 'react';
import { useLocation } from 'react-router-dom';
import Upload from './Upload';
import Select from './Select';

const Printing: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.slice(1); // Remove the '#' from the hash

  return (
    <div>
      <div id="upload" style={{ display: hash === 'upload' || hash === '' ? 'block' : 'none' }}>
        <Upload />
      </div>
      <div id="select" style={{ display: hash === 'select' ? 'block' : 'none' }}>
        <Select />
      </div>

      {/* Other content... */}
    </div>
  );
};

export default Printing;