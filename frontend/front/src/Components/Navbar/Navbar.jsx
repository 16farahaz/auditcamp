import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">Audit Camp</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/dashboard" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/audit" className="navbar-link">Audit</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
