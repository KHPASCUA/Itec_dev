import heroBg from '../assets/hero-bg.jpg'

const TestimonialsPage = () => {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="page-hero-container">
          <h1>Customers</h1>
          <p className="page-hero-description">
            Real feedback and success stories from our satisfied customers.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="page-content-container">
          <div className="blank-content"></div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
