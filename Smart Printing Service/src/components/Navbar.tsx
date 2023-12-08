import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();


  return (
    <div className="navbar bg-gradient-to-r from-fuchsia-100 to-blue-200 text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-[#F2F0F0] rounded-box w-52">
            <li><Link to="/">Trang chủ</Link></li>
            <li>
             <summary>Dịch vụ</summary>
              <ul className="p-2 z-50 text-black">
                <li><Link to="/services/printing">In tài liêụ</Link></li>
                {(user?.role === 'admin' || !user) && (
                  <li><Link to="/services/management">Quản lý máy in</Link></li>
                )}
                </ul>
            </li>
            <li><Link to="/about">Giới thiệu</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl"><img src="https://quanlycongnghiep.com/wp-content/uploads/2019/06/logo-hcmut.png" alt="logo" className="h-10 w-10"></img></Link>
      </div>
      <div className="navbar-center hidden lg:flex text-black text-lg">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Trang chủ</Link></li>
          <li tabIndex={0}>
            <details>
              <summary>Dịch vụ</summary>
              <ul className="p-1 bg-[#F2F0F0] z-50 w-36">
                {(user) ? (
                  <li><Link to="/services/printing">In tài liệu</Link></li>) : (
                  <li><Link to="/login">In tài liệu</Link></li>
                )}
                {(user?.role === 'admin' || !user) ? (
                  <li><Link to="/services/management">Quản lý máy in</Link></li>
                ) : (!user) ? (
                  <li><Link to="/login">Quản lý máy in</Link></li>
                ) : null }
              </ul>
            </details>
          </li>
          <li><Link to="/about">Giới thiệu</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      {user ? (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Avatar" src="https://i1.sndcdn.com/artworks-G0XZmnzGNxLfoZx2-s2zyrw-t500x500.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
          <li><a href="/" onClick={logout}>Logout</a></li>
        </ul>
        </div>
        ) : (
          <Link to="/login" className="btn bg-[#1E90FF] text-white">Đăng nhập</Link>
        )}
      </div>
      </div>
  );
};

export default Navbar;