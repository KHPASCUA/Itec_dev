const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Santos',
      text: 'Excellent printing quality and fast service! Highly recommended for all printing needs.',
      rating: 5
    },
    {
      id: 2,
      name: 'John Reyes',
      text: 'Best printing shop in town. Their personalized gifts are amazing and affordable.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Garcia',
      text: 'Professional service with great attention to detail. Will definitely come back!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Customer Reviews</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
