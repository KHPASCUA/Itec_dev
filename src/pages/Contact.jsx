import heroBg from '../assets/hero-bg.jpg'

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="page-hero-container">
          <h1>Contact Us!</h1>
        </div>
      </section>
      <section className="contact-page-content">
        <div className="contact-page-container">
          <div className="contact-layout">
            <div className="contact-left">
              <h2>Get in Touch</h2>
              <div className="contact-card-single">
                <div className="contact-info-item">
                  <span className="contact-icon-yellow">✉️</span>
                  <a href="mailto:dianetcafe00@gmail.com" className="contact-link-underlined">dianetcafe00@gmail.com</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon-yellow">🕐</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              <h2>Find us here!</h2>
              <div className="contact-card map-placeholder-white">
                <p>GOOGLE MAPS EMBED LINK HERE</p>
              </div>
              
              <h2>Follow Us</h2>
              <div className="contact-card social-card-white">
                <div className="social-row">
                  <div className="social-item">
                    <span className="social-icon-yellow">📘</span>
                    <span>Facebook: Dianetcafe</span>
                  </div>
                  <div className="social-item">
                    <span className="social-icon-yellow">📺</span>
                    <span>YouTube: Dianetcafe</span>
                  </div>
                </div>
                <div className="social-row">
                  <div className="social-item">
                    <span className="social-icon-yellow">📷</span>
                    <span>Instagram: @dianetcafe</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-right">
              <div className="contact-form-card-white">
                <div className="form-header-bar"></div>
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+63 XXX XXX XXX" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="6" placeholder="Tell us about your message..."></textarea>
                  </div>
                  <button type="submit" className="submit-button-yellow-full">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
