import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Upload from './Printing/Upload';
import Select from './Printing/Select';
import Setting from './Printing/Setting';
import Process from './Printing/Process';
import { useAuth } from '../context/AuthContext';

const Printing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.slice(1); // Remove the '#' from the hash
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div>
      <div id="upload" style={{ display: hash === 'upload' || hash === '' ? 'block' : 'none' }}>
        <Upload />
      </div>
      <div id="select" style={{ display: hash === 'select' ? 'block' : 'none' }}>
        <Select />
      </div>
      <div id="setting" style={{ display: hash === 'setting' ? 'block' : 'none' }}>
        <Setting />
      </div>
      <div id="process" style={{ display: hash === 'process' ? 'block' : 'none' }}>
        <Process />
      </div>


      {/* Other content... */}
    </div>
  );
};

export default Printing;
