import heroBg from '../assets/hero-bg.jpg'

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
            <span className="print-letter" style={{ color: '#ffffff' }}>without limits.</span>
          </h1>
          <p>Printing services, computer rentals, online appointments, and personalized gifts — all in one place.</p>
          <div className="hero-buttons">
            <button className="cta-button-yellow">GET A QUOTE</button>
            <button className="cta-button-transparent" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>OUR SERVICES</button>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="services-container">
          <h2>WHAT WE OFFER</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖨️</div>
              <h3>Printing Services</h3>
              <p>High-quality printing for documents, photos, and more</p>
              <a href="#" className="service-link">LEARN MORE</a>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Computer Rental</h3>
              <p>Affordable computer rental for your computing needs</p>
              <a href="#" className="service-link">LEARN MORE</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🎁</div>
              <h3>Personalized Gifts</h3>
              <p>Custom gifts for special occasions and events</p>
              <a href="#" className="service-link">LEARN MORE</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Online Services</h3>
              <p>Digital solutions for your online requirements</p>
              <a href="#" className="service-link">LEARN MORE</a>
            </div>
          </div>
        </div>
      </section>

      <section className="personalized-cta">
        <div className="personalized-cta-container">
          <h2>NEED SOMETHING PERSONALIZED?</h2>
          <p>We create custom designs for your gifts, souvenirs and giveaways!</p>
          <button className="cta-button">ORDER NOW</button>
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
            <button className="cta-button">VIEW ALL SERVICES</button>
          </div>
        </div>
      </section>

      <section className="printer-image-section">
        <div className="printer-image-container">
          <div className="printer-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">🖨️</span>
              <p>Large Printer Image</p>
            </div>
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
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>Contact Us!</button>
        </div>
      </section>
    </>
  );
};

export default Home;
