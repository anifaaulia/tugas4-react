import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg style={{ backgroundColor: '#D3D3D3}}">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <i className="bi bi-person-circle text-black fs-4 me-2"></i>
            <li className="nav-item">
                <a className="navbar-brand text-black " href="#">Admin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
