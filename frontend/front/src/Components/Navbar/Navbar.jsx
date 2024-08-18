import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard">
          <img src='/AuditCamp.png' alt='Audit Camp Logo' style={{ width: '70px', height: '60px' }} />
        </Link>
     
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/dashboard" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" onClick={toggleDropdown}>
              Audit
            </button>
            {dropdownVisible && (
              <div className="dropdown">
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/auditl" className="dropdown-link">Audit List</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/audit" className="dropdown-link">New Audit</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        
          <li className="navbar-item icon-item">
            <button className="profile-btn" onClick={toggleDropdown2}>
              <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} /> 
            </button>
            {dropdownVisible2 && (
              <div className="dropdown">
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/profil" className="dropdown-link">My profile</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/logout" className="dropdown-link">Log out</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="navbar-item icon-item">
            <button className='profile-btn'>
              <FontAwesomeIcon icon={faBell} style={{ color: "#ffffff" }} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
