import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="DianetCafe Logo" className="footer-logo-image" />
            <span className="footer-logo-text">DIANETCAFE</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 Dianetcafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
