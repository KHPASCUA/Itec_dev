const PersonalizedCTA = () => {
  return (
    <section className="personalized-cta">
      <div className="personalized-cta-container">
        <h2>NEED SOMETHING PERSONALIZED?</h2>
        <button 
          className="cta-button"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default PersonalizedCTA;
