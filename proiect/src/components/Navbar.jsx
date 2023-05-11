import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className ="navbar">
        <div className ="left-side">
          <a href="/">Logo</a>
        </div>
        <div className ="right-side">
          <a href="/settings">Settings</a>
          <a href="/login">Log Out</a>
        </div>
    </div>
  );
}

export default Navbar;