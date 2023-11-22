import Button from '@mui/material/Button';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-10 bg-white item-center overflow-hidden md:overflow-auto shadow-md rounded-md">
        <img className="h-60 mx-auto" src="https://quanlycongnghiep.com/wp-content/uploads/2019/06/logo-hcmut.png" alt="Logo" />
        <h1 className="text-center border-b border-black border-solid text-2xl font-semibold my-4">
          Đăng nhập dành cho
        </h1>
        <div className="space-y-3">
          <Button 
            variant="contained" 
            onClick={() => {
              login('user');
              navigate('/');
            }}            
            sx={{ 
              width: {xs:300, sm:500}, 
              display: 'block', 
              textAlign: 'center', 
              color: 'black', 
              backgroundColor: 'white', 
              px: 3, 
              py: 2, 
              borderRadius: 'default', 
              boxShadow: 'default' 
            }}
          >
            Cán bộ/ Sinh viên trường ĐH Bách Khoa TP.HCM
          </Button>
          <Button 
            variant="contained" 
            onClick={() => {
              login('admin');
              navigate('/');
            }}
              sx={{ 
              width: {xs:300, sm:500}, 
              display: 'block', 
              textAlign: 'center', 
              color: 'black', 
              backgroundColor: 'white', 
              px: 3, 
              py: 2, 
              borderRadius: 'default', 
              boxShadow: 'default' 
            }}
          >
            Cán bộ / Quản trị viên hệ thống
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
