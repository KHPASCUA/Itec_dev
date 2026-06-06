import { useEffect } from 'react'
import printerBg from '../assets/printer-large.png'
import contactMap from '../assets/contact-map.png'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="contact-page">
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${printerBg})` }}
      >
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Contact Us!</h1>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="contact-content-container">
          <h2 className="contact-section-title">GET IN TOUCH</h2>

          <div className="contact-main-layout">
            <div className="contact-info-card">
              <h3>Have a question or need a quote?</h3>
              <p className="contact-info-highlight">
                Send us a message or visit our shop, and our team will be happy
                to help!
              </p>

              <div className="contact-info-rows">
                <div className="contact-info-row">
                  <div className="contact-info-icon-bg">f</div>
                  <span className="contact-info-detail">
                    Facebook: Dianetcafe
                  </span>
                </div>
                <div className="contact-info-row">
                  <div className="contact-info-icon-bg">@</div>
                  <a
                    href="mailto:dianetcafe00@gmail.com"
                    className="contact-info-link"
                  >
                    dianetcafe00@gmail.com
                  </a>
                </div>
                <div className="contact-info-row">
                  <div className="contact-info-icon-bg">📞</div>
                  <span className="contact-info-detail">
                    +639 27 180 9532
                  </span>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-hours">
                <h4>Business Hours</h4>
                <div className="contact-hours-entry">
                  <p className="contact-hours-time">7:00 AM - 8:00 PM</p>
                  <p className="contact-hours-days">MONDAY TO FRIDAY</p>
                </div>
                <div className="contact-hours-entry">
                  <p className="contact-hours-time">3:00 PM - 8:00 PM</p>
                  <p className="contact-hours-days">EVERY SUNDAY</p>
                </div>
              </div>

              <div className="contact-divider" />

              <div className="contact-address-block">
                <h4>Address</h4>
                <p>Queen's Avenue, Area "A" Road</p>
                <p>Queen's Row Central Bacoor City,</p>
                <p>Cavite</p>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-form-top-bar" />
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-body">
                  <div className="contact-form-left">
                    <h4>PERSONAL DETAILS</h4>
                    <div className="contact-form-group">
                      <label>First Name</label>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label>Middle Name</label>
                        <input type="text" placeholder="Middle name" />
                      </div>
                      <div className="contact-form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="contact-form-group">
                      <label>Address</label>
                      <input type="text" placeholder="Your address" />
                    </div>
                    <div className="contact-form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label>Contact Number</label>
                      <input
                        type="tel"
                        placeholder="+63 XXX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div className="contact-form-right">
                    <h4>MESSAGE</h4>
                    <div className="contact-form-group contact-message-group">
                      <textarea
                        placeholder="Tell us about your message."
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="contact-submit-btn">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-container">
          <h2 className="contact-section-title">FIND US HERE!</h2>
          <div className="contact-map-image-wrap">
            <img
              src={contactMap}
              alt="DianetCafe location map"
              className="contact-map-image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
