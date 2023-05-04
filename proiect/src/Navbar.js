import './styles/Navbar.css';
import React, { useState } from 'react';

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return (
    <div className="navbar">
      <div className="left-side">
        <a href="Home.js">Logo</a>
      </div>
      <div className="center-side">
        <a href="#news">Week</a>
        <a href="#news">Month</a>
      </div>
      <div className="right-side">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Account <i className="fa fa-caret-down"></i>
          </button>
          <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`} id="dropdown-content">
            <a href="#">Account</a>
            <a href="#">Settings</a>
            <a href="#">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;