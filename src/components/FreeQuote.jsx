const FreeQuote = () => {
  return (
    <section id="contact" className="free-quote">
      <div className="free-quote-container">
        <h2>GET A FREE QUOTE TODAY!</h2>
        <button 
          className="cta-button"
          onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default FreeQuote;
