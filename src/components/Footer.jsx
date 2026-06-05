import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column footer-left">
            <div className="footer-logo">
              <img src={logo} alt="DianetCafe Logo" className="footer-logo-image" />
              <span className="footer-logo-text">
                <span className="footer-logo-yellow">DIANET</span>
                <span className="footer-logo-white">CAFE</span>
              </span>
            </div>
            <div className="footer-print">
              <span className="footer-print-word">Print</span>
              <span className="footer-print-sub">without limits.</span>
            </div>
            <p className="footer-copyright">
              Copyright © 2026 Dianetcafe. All rights reserved.
            </p>
          </div>

          <div className="footer-column footer-middle">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-right">
            <h3>CONTACT US</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">@</div>
                <span>dianetcafe00@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">📍</div>
                <span>
                  Queen's Avenue, Queen's Row Central, Area 'A' Road, Bacoor,
                  Philippines, 4102
                </span>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">📞</div>
                <span>+63 927 180 9532</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
