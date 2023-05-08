import '../styles/Navbar.css';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {

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