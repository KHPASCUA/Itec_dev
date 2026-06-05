import heroBg from '../assets/hero-bg.jpg'
import logo from '../assets/logo.png'
import journeyImage from '../assets/hero-bg.jpg'
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

      <section className="journey-section">
        <h2 className="journey-title">OUR JOURNEY</h2>

        <div className="journey-content">
          <div className="journey-image-wrap">
            <img src={journeyImage} alt="Dianetcafe Journey" className="journey-image" />

            <button className="journey-arrow journey-arrow-left">‹</button>
            <button className="journey-arrow journey-arrow-right">›</button>
          </div>

          <div className="journey-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-year-wrap">
                <span className="timeline-dot"></span>
                <h3>2000</h3>
              </div>
              <p>Dianetcafe was established by the family at Queen's Row West, initially operating as a humble internet and print shop equipped with 12 computers and basic printing services.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-year-wrap">
                <span className="timeline-dot"></span>
                <h3>2004</h3>
              </div>
              <p>The business relocated to its current home at Queen's Row Central. While optimizing the setup to 11 computers, the shop expanded its offerings to include in-demand extra services of the era, such as payphones, CD burning, and MP3/MP4 media downloads.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-year-wrap">
                <span className="timeline-dot"></span>
                <h3>2010</h3>
              </div>
              <p>The shop underwent a significant expansion. The cafe upgraded its hardware to 15 computers and introduced its very first line of personalized souvenirs to the community.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-year-wrap">
                <span className="timeline-dot"></span>
                <h3>2016</h3>
              </div>
              <p>An upgrade on customized items was launched. The acquisition of a professional cutting machine allowed the business to offer a wider variety of creative, custom-made products for any occasion.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-year-wrap">
                <span className="timeline-dot"></span>
                <h3>2021</h3>
              </div>
              <p>Embracing the digital shift, the shop expanded its reach through online marketing and upgraded its equipment, officially evolving into the full-service hub it is today.</p>
            </div>
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
