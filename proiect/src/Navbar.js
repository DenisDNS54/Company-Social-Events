import './styles/Navbar.css';
import React from 'react';

function Navbar() {
  return (
    <div class="navbar">
      <div class="left-side">
        <a href="Home.js">Logo</a>
      </div>
      <div className="center-side">
        <a href="#news">Week</a>
        <a href="#news">Month</a>
      </div>
      <div className="right-side">
        <div class="dropdown">
          <button class="dropbtn">Account
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
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