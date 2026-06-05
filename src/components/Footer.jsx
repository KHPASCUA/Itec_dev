import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column footer-left">
            <div className="footer-logo">
              <img src={logo} alt="DianetCafe Logo" className="footer-logo-image" />
              <span className="footer-logo-text">DIANETCAFE</span>
            </div>
            <p className="footer-tagline">Print without limits.</p>
            <p className="footer-copyright">Copyright © 2026 Dianetcafe. All rights reserved.</p>
          </div>
          <div className="footer-column footer-middle">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Services</a></li>
              <li><a href="/testimonials">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column footer-right">
            <h3>CONTACT US</h3>
            <p className="footer-contact">dianetcafe00@gmail.com</p>
            <p className="footer-contact">Queen's Avenue, Queen's Row Central, Area 'A' Road, Bacoor, Philippines, 4102</p>
            <p className="footer-contact">+63 927 180 9532</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
