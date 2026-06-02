import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-logo-link">
            <div className="circular-logo-small"></div>
            <span className="logo-text">DIANETCAFE</span>
          </NavLink>
        </div>
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Products</NavLink></li>
          <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Testimonials</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
