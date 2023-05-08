import './styles/Navbar.css';
import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div class ="navbar">
      <div class ="left-side">
        <a href="Home.js">Logo</a>
      </div>
      <div class ="center-side">
        <a href="#news">Week</a>
        <a href="#news">Month</a>
      </div>
      <div class ="right-side">
        <div class ="dropdown" ref={dropdownRef}>
          <button type="button" class ="dropbtn" onClick={handleButtonClick}>
            Account <i class ="fa fa-caret-down"></i>
          </button>
          {open && (
            <div class ="dropdown-content">
              <li><a href="#">Account</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Log Out</a></li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;