import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Tech<span className="highlight">EnsureX</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <button className="nav-btn">Let's Talk</button>
      </div>
    </nav>
  );
}
