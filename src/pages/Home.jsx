import heroBg from '../assets/hero-bg.jpg'
import printingImg from '../assets/printing-services.png'
import computerImg from '../assets/computer-rental.png'
import giftsImg from '../assets/personalized-gifts.png'
import onlineImg from '../assets/online-services.png'
import printerLarge from '../assets/printer-large.png'
import rushIdMan from '../assets/rush-id-man.png'
import rushIdWoman from '../assets/rush-id-woman.png'
import otherTarpaulin from '../assets/other-tarpaulin.png'
import otherDocuments from '../assets/other-documents.png'
import otherPhotoPrint from '../assets/other-photo-print.png'
import otherInvitations from '../assets/other-invitations.png'
import otherStickers from '../assets/other-stickers.png'
import personalizeBg from '../assets/personalize-section.png'
import computerRentalsBg from '../assets/computer-rentals-section.png'


const Home = () => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <h1>
            {/* Split into individual spans for per-letter vertical gradients */}
            <span className="print-word">
              <span className="print-letter letter-p">P</span>
              <span className="print-letter letter-r">r</span>
              <span className="print-letter letter-i">i</span>
              <span className="print-letter letter-n">n</span>
              <span className="print-letter letter-t">t</span>
            </span>
            <br />
            <span className="hero-title-white">without limits.</span>
          </h1>
          <p className="hero-subtitle">Printing services, computer rentals, online appointments,<br/>and personalized gifts — all in one place.</p>
          <div className="hero-buttons">
            <button className="cta-button-yellow">GET STARTED</button>
            <button className="cta-button-transparent" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>OUR SERVICES</button>
          </div>
        </div>
        
        {/* Optional: Kept your original bottom arrow, you can remove if not needed in new design */}
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

      <section className="rush-id-section">
        <div className="rush-id-container">
          <div className="rush-id-images">
            <img src={rushIdWoman} alt="Rush ID Woman" className="id-card id-card-back" />
            <img src={rushIdMan} alt="Rush ID Man" className="id-card id-card-front" />
          </div>
          <div className="rush-id-content">
            <h1>RUSH ID</h1>
            <h3>Printing Services</h3>
            <p>
              Whether it's for school, work, or events, our Rush ID service ensures professional-looking identification produced quickly and accurately. Dianetcafe combines efficient processing with reliable printing so you can meet deadlines with confidence.
            </p>
            <p>
              Forgotten deadlines? Last-minute requirements? We are built for urgent needs. From single IDs to small batches, we deliver fast turnaround with a polished, official appearance.
            </p>
            <button className="rush-id-button">Get Rush ID Now</button>
          </div>
        </div>
      </section>

      <section className="other-printing-services">
        <div className="other-printing-container">
          <h2>OTHER PRINTING SERVICES</h2>
          <div className="other-services-grid">
            <div className="other-service-card">
              <img src={otherTarpaulin} alt="Tarpaulin" className="other-service-image" />
            </div>
            <div className="other-service-card">
              <img src={otherDocuments} alt="Documents" className="other-service-image" />
            </div>
            <div className="other-service-card">
              <img src={otherPhotoPrint} alt="Photo Print" className="other-service-image" />
            </div>
            <div className="other-service-card">
              <img src={otherInvitations} alt="Invitations" className="other-service-image" />
            </div>
            <div className="other-service-card">
              <img src={otherStickers} alt="Stickers" className="other-service-image" />
            </div>
          </div>
          <div className="view-all-container">
            <button className="view-all-button">VIEW ALL PRINTING SERVICES</button>
          </div>
        </div>
      </section>

      <section className="personalized-section">
        <img src={personalizeBg} alt="Personalized Section" className="personalized-image" />
      </section>

      <section className="computer-rentals-section">
        <div className="computer-rentals-container">
          <div className="computer-rentals-image">
            <img src={computerRentalsBg} alt="Computer Rentals" className="computer-rentals-bg" />
          </div>
          <div className="pricing-card">
            <h2>COMPUTER RENTALS</h2>
            <p>
              Need a place to play or take a break for a few hours? Our gaming computers are ready when you are. With responsive performance and convenient rental options, you can focus on playing while we handle the rest.
            </p>
            <div className="pricing-divider"></div>
            <h3>HOURLY RATE</h3>
            <div className="price-bar">₱20 PER HOUR</div>
            <div className="price-bar">₱10 PER HALF HOUR</div>
            <p className="price-note">Same rate for member and non-member.</p>
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

      <section className="final-cta">
        <div className="final-cta-container">
          <h2>READY TO GET THINGS DONE?</h2>
          <p>
            From document and photo printing to rush IDs, tarpaulins, invitations, stickers, and computer rental services. Whatever your printing or digital service needs, our team is ready to help bring your ideas to life with quality results and excellent service.
          </p>
          <div className="final-cta-buttons">
            <button className="cta-button-black">Visit Our Shop</button>
            <button className="cta-button-outline">Create Your Order</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
