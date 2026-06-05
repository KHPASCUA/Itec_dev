import heroBg from '../assets/hero-bg.jpg'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

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

      <section className="about-story-section">
        <div className="about-story-content">
          <h2 className="about-story-title">Dianetcafe</h2>
          <div className="about-story-line"></div>

          <p className="about-story-text">
            Established in the year <strong>2000</strong>, Dianetcafe has proudly served the Bacoor City community for over two decades as a trusted, multi-service local business. What started as a humble internet shop has continuously evolved into a comprehensive hub specializing in high-performance computer rentals, professional printing, and essential online appointment assistance. Throughout its long history, the shop has remained a reliable staple for local residents, senior citizens, and students who depend on its accessible digital services.
          </p>

          <p className="about-story-text">
            Beyond its core technical offerings, the shop has built a strong reputation for crafting a wide variety of high-quality personalized gifts and custom giveaways tailored for any occasion.
          </p>

          <p className="about-story-highlight">
            Dianetcafe continues to prove that its enduring success is rooted in a deep, long-standing commitment to customer satisfaction.
          </p>
        </div>

        <div className="about-story-logo-wrap">
          <img src={logo} alt="Dianetcafe Logo" className="about-story-logo" />
        </div>
      </section>

      <section className="trusted-section">
        <div className="trusted-container">
          <h2>Trusted by many.</h2>
          <div className="client-grid">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="client-logo-card">
                <div className="client-logo-placeholder">
                  <span className="client-logo-text">LOGO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-container">
          <h2>BE OUR NEXT PARTNER!</h2>
          <Link to="/contact" className="cta-button-white">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
