const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-container">
          <h1>Contact Us!</h1>
        </div>
      </section>
      <section className="contact-page-content">
        <div className="contact-page-container">
          <div className="contact-layout">
            <div className="contact-left">
              <h2>Get in Touch</h2>
              <div className="contact-card">
                <h3>Email</h3>
                <a href="mailto:dianetcafe00@gmail.com" className="contact-link">dianetcafe00@gmail.com</a>
              </div>
              <div className="contact-card">
                <h3>Business Hours</h3>
                <p>8:00 AM - 8:00 PM</p>
              </div>
              
              <h2>Find us here!</h2>
              <div className="contact-card map-placeholder">
                <p>GOOGLE MAPS EMBED LINK HERE</p>
              </div>
              
              <h2>Follow Us</h2>
              <div className="contact-card social-card">
                <div className="social-item">
                  <span className="social-icon">📘</span>
                  <span>Facebook: Dianetcafe</span>
                </div>
                <div className="social-item">
                  <span className="social-icon">📺</span>
                  <span>YouTube: Dianetcafe</span>
                </div>
                <div className="social-item">
                  <span className="social-icon">📷</span>
                  <span>Instagram: @dianetcafe</span>
                </div>
              </div>
            </div>
            
            <div className="contact-right">
              <div className="contact-form-card">
                <div className="form-header-bar"></div>
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="submit-button-yellow">Send Message</button>
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
