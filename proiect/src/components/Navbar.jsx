import '../styles/Navbar.css';
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
    <div className ="navbar">
      <div className ="left-side">
        <a href="Home.js">Logo</a>
      </div>
      <div className ="right-side">
        <a href="#">Account</a>
        <a href="#">Settings</a>
        <a href="#">Log Out</a>
      </div>
    </div>
  );
}

export default Navbar;