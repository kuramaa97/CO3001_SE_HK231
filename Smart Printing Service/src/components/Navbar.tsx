import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
<div className="navbar bg-[#F2F0F0]  text-neutral-content">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F2F0F0] rounded-box w-52">
        <li><Link to="/">Trang chủ</Link></li>
        <li>
          <Link to="/services">Dịch vụ</Link>
          <ul className="p-2">
            <li><Link to="/services/printing">Submenu 1</Link></li>
            <li><Link to="/services/management">Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link to="/about">Giới thiệu</Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl"><img src="https://quanlycongnghiep.com/wp-content/uploads/2019/06/logo-hcmut.png" alt="logo" className="h-10 w-10"></img></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Trang chủ</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Dịch vụ</summary>
          <ul className="p-1 bg-[#F2F0F0] w-35">
            <li><Link to="/services/printing#upload">In tài liệu</Link></li>
            <li><Link to="/services/management">Quản lý máy in</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to="/about">Giới thiệu</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="btn bg-[#1E90FF] text-white">Đăng nhập</Link>
  </div>
</div>
  );
};

export default Navbar;
