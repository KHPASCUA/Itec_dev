import heroBg from '../assets/hero-bg.jpg'
import logo from '../assets/logo.png'
import journey1 from '../assets/journey-1.png'
import journey2 from '../assets/journey-2.png'
import journey3 from '../assets/journey-3.png'
import journey4 from '../assets/journey-4.png'
import journey5 from '../assets/journey-5.png'
import journey6 from '../assets/journey-6.png'
import journey7 from '../assets/journey-7.png'
import journey8 from '../assets/journey-8.png'
import journey9 from '../assets/journey-9.png'
import journey10 from '../assets/journey-10.png'
import missionVisionImage from '../assets/about-mission-vision.png'
import foundersImage from '../assets/about-founders.png'
import { useState, useEffect } from 'react'
import { FaRegHeart, FaRegUser, FaAward, FaFastForward } from 'react-icons/fa'

const journeyImages = [
  journey1,
  journey2,
  journey3,
  journey4,
  journey5,
  journey6,
  journey7,
  journey8,
  journey9,
  journey10,
]

const About = () => {
  const [journeyIndex, setJourneyIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setJourneyIndex((prev) =>
        prev === journeyImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setJourneyIndex((prev) => (prev === 0 ? journeyImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setJourneyIndex((prev) => (prev === journeyImages.length - 1 ? 0 : prev + 1))
  }

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
            <img src={journeyImages[journeyIndex]} alt="Dianetcafe journey" className="journey-image" />

            <button className="journey-arrow journey-arrow-left" onClick={handlePrevImage}>‹</button>
            <button className="journey-arrow journey-arrow-right" onClick={handleNextImage}>›</button>
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

      <section className="mission-vision-section">
        <div className="mission-vision-text">
          <div className="mv-block">
            <h2>OUR MISSION</h2>
            <p>
              To introduce our diverse range of products and actively promote our
              personalized gifts to the public market. We are dedicated to providing
              hands-on assistance, ensuring every customer can easily browse and
              acquire the services they need.
            </p>
          </div>

          <div className="mv-block">
            <h2>OUR VISION</h2>
            <p>
              To remain the most trusted one-stop hub for computer rental, printing,
              and customized services in Cavite. We aim to continuously adapt to
              modern trends, serving as a reliable and accessible partner for our
              community's everyday digital needs.
            </p>
          </div>
        </div>

        <div className="mission-vision-image-wrap">
          <img
            src={missionVisionImage}
            alt="Dianetcafe mission and vision"
            className="mission-vision-image"
          />
        </div>
      </section>

      <section className="founder-quote-section">
        <div className="founder-image-wrap">
          <img
            src={foundersImage}
            alt="Dianetcafe founders"
            className="founder-image"
          />
        </div>

        <div className="founder-quote-content">
          <div className="quote-mark">"</div>
          <h2>Study Hard, Play Harder</h2>
          <p>-luntiangpp</p>
        </div>
      </section>

      <section className="why-choose-section">
        <h2>WHY CHOOSE US?</h2>

        <div className="why-choose-grid">
          <div className="why-card">
            <FaRegHeart className="why-icon" />
            <p>Quality Products</p>
          </div>

          <div className="why-card">
            <FaRegUser className="why-icon" />
            <p>Satisfied Customers</p>
          </div>

          <div className="why-card">
            <FaAward className="why-icon" />
            <p>Premium Materials</p>
          </div>

          <div className="why-card">
            <FaFastForward className="why-icon" />
            <p>Quick Service</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
