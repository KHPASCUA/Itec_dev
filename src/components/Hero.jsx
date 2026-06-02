const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span className="print-letter" style={{ color: '#FFD700' }}>P</span>
            <span className="print-letter" style={{ color: '#FFA500' }}>r</span>
            <span className="print-letter" style={{ color: '#FF8C00' }}>i</span>
            <span className="print-letter" style={{ color: '#FF6347' }}>n</span>
            <span className="print-letter" style={{ color: '#FF4500' }}>t</span>
            <span className="print-letter" style={{ color: '#FFD700' }}> </span>
            <span className="print-letter" style={{ color: '#ffffff' }}>without limits.</span>
          </h1>
          <p>Professional printing services for all your needs</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </button>
        </div>
        <div className="hero-image-placeholder">
          <div className="placeholder-content">
            <span className="placeholder-icon">🖨️</span>
            <p>Printing Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
