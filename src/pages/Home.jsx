import heroBg from '../assets/hero-bg.jpg'
import printingImg from '../assets/printing-services.png'
import computerImg from '../assets/computer-rental.png'
import giftsImg from '../assets/personalized-gifts.png'
import onlineImg from '../assets/online-services.png'
import printerLarge from '../assets/printer-large.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <h1>
            <span className="print-letter" style={{ color: '#FF4500' }}>P</span>
            <span className="print-letter" style={{ color: '#FF6347' }}>r</span>
            <span className="print-letter" style={{ color: '#FFD700' }}>i</span>
            <span className="print-letter" style={{ color: '#32CD32' }}>n</span>
            <span className="print-letter" style={{ color: '#1E90FF' }}>t</span>
            <br />
            <span className="print-letter hero-title-white" style={{ color: '#ffffff' }}>without limits.</span>
          </h1>
          <p>Printing services, computer rentals, online appointments, and personalized gifts — all in one place.</p>
          <div className="hero-buttons">
            <button className="cta-button-yellow">GET STARTED</button>
            <button className="cta-button-transparent" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>OUR SERVICES</button>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-line"></div>
          <div className="hero-arrow">↓</div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="services-container">
          <div className="services-arrow">↓</div>
          <h2>WHAT WE OFFER</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={printingImg} alt="Printing Services" className="service-card-image" />
              <div className="service-card-content">
                <h3>Printing Services</h3>
                <p>Document Printing, Scanning, Photo Printing, Photocopying, Rush ID, Tarpaulins and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
            <div className="service-card">
              <img src={computerImg} alt="Computer Rental" className="service-card-image" />
              <div className="service-card-content">
                <h3>Computer Rental</h3>
                <p>Mid-performance PCs, web browsing, computer gaming and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
            <div className="service-card">
              <img src={giftsImg} alt="Personalized Gifts" className="service-card-image" />
              <div className="service-card-content">
                <h3>Personalized Gifts</h3>
                <p>Mugs, Keychains, T-Shirts, Personalized Pens, Notebooks, Engraved Souvenirs, Tumblers and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
            <div className="service-card">
              <img src={onlineImg} alt="Online Services" className="service-card-image" />
              <div className="service-card-content">
                <h3>Online Services</h3>
                <p>NBI Clearance, DFA Passport Appointment, PhilHealth, SSS and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="personalized-cta">
        <div className="personalized-cta-container">
          <div className="personalized-cta-banner">
            <div className="cta-banner-content">
              <h2>NEED SOMETHING PERSONALIZED?</h2>
              <p>We create custom designs for your gifts, souvenirs and giveaways!</p>
            </div>
            <div className="cta-banner-right">
              <button className="cta-button-yellow">CREATE ME A CUSTOMIZED!</button>
              <p className="cta-samples-link">Don't know where to start? <span className="yellow-text">View our Samples!</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="rush-id-section">
        <div className="rush-id-container">
          <div className="rush-id-images">
            <div className="id-card id-card-back">
              <div className="id-card-placeholder woman-id"></div>
            </div>
            <div className="id-card id-card-front">
              <div className="id-card-placeholder man-id"></div>
            </div>
          </div>
          <div className="rush-id-content">
            <h1>RUSH ID</h1>
            <h3>Printing Services</h3>
            <p>
              Need your ID picture urgently? We offer rush ID printing services with professional quality and fast turnaround. Perfect for students, professionals, and anyone who needs their ID picture done quickly without compromising on quality.
            </p>
            <p>
              Our rush ID service includes high-resolution printing, proper sizing for various ID requirements, and professional finishing. Get your ID ready in minutes, not hours!
            </p>
            <button className="rush-id-button">Get Rush ID Now</button>
          </div>
        </div>
      </section>

      <section className="other-printing-services">
        <div className="other-printing-container">
          <h2>OTHER PRINTING SERVICES</h2>
          <div className="categories-grid">
            <div className="category-box"><h3>ID PICTURE</h3></div>
            <div className="category-box"><h3>DOCUMENTS</h3></div>
            <div className="category-box"><h3>TARPAULIN</h3></div>
            <div className="category-box"><h3>PHOTO PRINT</h3></div>
            <div className="category-box"><h3>INVITATIONS</h3></div>
            <div className="category-box"><h3>STICKERS</h3></div>
          </div>
          <div className="view-all-container">
            <button className="cta-button-yellow">VIEW ALL SERVICES</button>
          </div>
        </div>
      </section>

      <section
        className="tarpaulin-section"
        style={{ backgroundImage: `url(${printerLarge})` }}
      >
        <div className="tarpaulin-content">
          <h1>TARPAULIN</h1>
          <h3>Printing Services</h3>

          <p>
            Need a tarpaulin that truly reflects your idea? We handle everything
            from layout assistance to final printing, ensuring your tarpaulin
            matches your vision. Perfect for entrepreneurs, students,
            organizations, and families who want quality without the stress.
          </p>

          <p>
            From store signage to large-scale event backdrops, Dianetcafe delivers
            bold colors, crisp text, and professional finishing that attracts
            attention and drives engagement.
          </p>

          <button>View Price</button>
        </div>

        <h2 className="tarpaulin-bg-text">Tarpaulin</h2>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Quality Products</h3>
              <p>Premium quality materials and output</p>
            </div>
            <div className="feature-card">
              <h3>Satisfied Customers</h3>
              <p>Thousands of happy clients served</p>
            </div>
            <div className="feature-card">
              <h3>Premium Materials</h3>
              <p>Only the best materials used</p>
            </div>
            <div className="feature-card">
              <h3>Quick Service</h3>
              <p>Fast turnaround for all orders</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-container">
          <h2>AVAIL OUR PRODUCTS!</h2>
          <div className="products-grid">
            <div className="product-card">
              <h3>Custom T-Shirt Printing</h3>
              <p>Personalized t-shirts for events and promotions</p>
              <span className="product-price">Starting at ₱250</span>
            </div>
            <div className="product-card">
              <h3>Business Card Printing</h3>
              <p>Professional business cards for your brand</p>
              <span className="product-price">Starting at ₱500</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-container">
          <h2>Customer Reviews</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">Excellent printing quality and fast service! Highly recommended for all printing needs.</p>
              <p className="testimonial-name">Maria Santos</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">Best printing shop in town. Their personalized gifts are amazing and affordable.</p>
              <p className="testimonial-name">John Reyes</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">Professional service with great attention to detail. Will definitely come back!</p>
              <p className="testimonial-name">Ana Garcia</p>
            </div>
          </div>
        </div>
      </section>

      <section className="free-quote">
        <div className="free-quote-container">
          <h2>GET A FREE QUOTE TODAY!</h2>
          <Link to="/contact" className="cta-button-large">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
