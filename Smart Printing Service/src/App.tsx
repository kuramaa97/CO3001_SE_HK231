import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Printing from './pages/Printing'
import Manage from './pages/Manage'
import LoginPage from "./pages/Login"
import About from "./pages/About"
import Page404 from './pages/404';


const Flag: React.FC = () => {
  const Fixed_Text = "M3_M4y_B30"; 
  return (
    <h1 className="text-black text-2xl md:text-5xl" >{`BKISC{${Fixed_Text}}`}</h1>
  );
}

const App: React.FC = () => {
  const location = useLocation();

  return (
      <div className="flex flex-col min-h-screen min-w-screen bg-[#F2F0F0]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/printing" element={<Printing key={location.key} />} /> 
          <Route path="/services/management" element={<Manage/>} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/flag" element={<Flag />} /> 
          <Route path="*" element={<Page404 />} />        
          </Routes>
      </div>
  )
}

export default App;
