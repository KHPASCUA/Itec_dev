const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Quality Products',
      description: 'Premium quality materials and output'
    },
    {
      id: 2,
      title: 'Satisfied Customers',
      description: 'Thousands of happy clients served'
    },
    {
      id: 3,
      title: 'Premium Materials',
      description: 'Only the best materials used'
    },
    {
      id: 4,
      title: 'Quick Service',
      description: 'Fast turnaround for all orders'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
