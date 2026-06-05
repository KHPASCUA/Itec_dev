import heroBg from '../assets/hero-bg.jpg'
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
              <div className="service-card-image-placeholder printing-bg"></div>
              <div className="service-card-content">
                <h3>Printing Services</h3>
                <p>Document Printing, Scanning, Photo Printing, Photocopying, Rush ID, Tarpaulins and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-image-placeholder rental-bg"></div>
              <div className="service-card-content">
                <h3>Computer Rental</h3>
                <p>Mid-performance PCs, web browsing, computer gaming and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-image-placeholder gifts-bg"></div>
              <div className="service-card-content">
                <h3>Personalized Gifts</h3>
                <p>Mugs, Keychains, T-Shirts, Personalized Pens, Notebooks, Engraved Souvenirs, Tumblers and more!</p>
                <a href="#" className="service-link">SEE MORE →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-image-placeholder online-bg"></div>
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

      <section className="printing-services">
        <div className="printing-services-container">
          <h2>PRINTING SERVICES</h2>
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

      <section className="printer-image-section">
        <div className="printer-image-container">
          <div className="printer-image-wrapper">
            <img src={printerLarge} alt="Large Printer" className="printer-large-image" />
            <div className="printer-image-overlay"></div>
          </div>
        </div>
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
