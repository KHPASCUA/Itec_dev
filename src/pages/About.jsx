import heroBg from '../assets/hero-bg.jpg'
import logo from '../assets/logo.png'

const About = () => {
  return (
    <>
      <section className="about-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="about-hero-container">
          <h1>
            <span className="about-white">About</span>
            <span className="about-yellow"> Us</span>
          </h1>
          <p className="about-hero-description">
            More than just ink on paper. We are your creative partners, dedicated to delivering premium, 
            precision-crafted prints with lightning-fast turnaround times.
          </p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="about-content-container">
          <div className="about-row">
            <div className="about-text-left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
            <div className="about-logo-right">
              <img src={logo} alt="DianetCafe Logo" className="about-logo-image" />
            </div>
          </div>

          <div className="about-row">
            <div className="about-collage-left">
              <div className="collage-placeholder-white">
                <span className="collage-icon">🖨️</span>
                <p>Photo Collage</p>
              </div>
            </div>
            <div className="about-text-right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="trusted-container">
          <h2>Trusted by many.</h2>
          <div className="client-grid">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="client-logo-placeholder">
                <span>Client {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-container">
          <h2>BE OUR NEXT PARTNER!</h2>
          <button 
            className="cta-button-white"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
