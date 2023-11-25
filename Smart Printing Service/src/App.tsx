import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Printing from './pages/Printing'
import Manage from './pages/Manage'
import LoginPage from "./pages/Login"
import About from "./pages/About"
import Page404 from './pages/404';


const App: React.FC = () => {
  const location = useLocation();

  return (
      <div className="flex flex-col min-h-screen bg-[#F2F0F0]">
        {location.pathname === '/' && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/printing" element={<Printing key={location.key} />} /> 
          <Route path="/services/management" element={<Manage/>} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="*" element={<Page404 />} />        
          </Routes>
      </div>
  )
}

export default App;