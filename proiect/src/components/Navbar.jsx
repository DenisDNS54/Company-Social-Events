import '../styles/Navbar.css';

function Navbar() {

  return (
    <div className ="navbar">
        <div className ="left-side">
          <a href="/home">Logo</a>
        </div>
        <div className ="right-side">
          <a href="/settings">Settings</a>
          <a href="/sign-in">Log Out</a>
        </div>
    </div>
  );
}

export default Navbar;