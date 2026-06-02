const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>123 Coffee Street</p>
              <p>Downtown, City 12345</p>
            </div>
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>hello@dianetcafe.com</p>
            </div>
            <div className="contact-item">
              <h3>⏰ Hours</h3>
              <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
