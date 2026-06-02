const About = () => {
  return (
    <>
      <section className="about-hero">
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
              <h2>Our Story</h2>
              <p>
                Founded in 2020, DianetCafe has been providing professional printing and computer services 
                with passion and dedication. We believe in quality, efficiency, and creating excellent 
                experiences for every customer.
              </p>
              <p>
                Our services include high-quality printing, computer rentals, personalized gifts, and online 
                solutions. Every project tells a story of craftsmanship and commitment to excellence.
              </p>
            </div>
            <div className="about-logo-right">
              <div className="circular-logo-placeholder">
                <span className="logo-placeholder-text">DIANETCAFE</span>
              </div>
            </div>
          </div>

          <div className="about-row">
            <div className="about-collage-left">
              <div className="collage-placeholder">
                <span className="collage-icon">🖨️</span>
                <p>Photo Collage</p>
              </div>
            </div>
            <div className="about-text-right">
              <h2>Our Mission</h2>
              <p>
                Whether you need printing services, computer access, or personalized items, DianetCafe is 
                your trusted partner for all your needs.
              </p>
              <p>
                We strive to exceed expectations with every project, delivering exceptional quality and 
                service that keeps our customers coming back.
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
