import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Printing from './pages/Printing';

const App: React.FC = () => {
  const location = useLocation();
  return (
      <div className="flex flex-col min-h-screen">
        {location.pathname === '/' && <Navbar/>}
        {/* <div className="flex-grow"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/printing" element={<Printing key={location.key} />} /> 
        </Routes>
      {/* </div> */}
      </div>
  )
}

export default App;
