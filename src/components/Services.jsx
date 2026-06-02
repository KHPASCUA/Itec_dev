const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Printing Services',
      description: 'High-quality printing for documents, photos, and more',
      icon: '🖨️'
    },
    {
      id: 2,
      title: 'Computer Rental',
      description: 'Affordable computer rental for your computing needs',
      icon: '💻'
    },
    {
      id: 3,
      title: 'Personalized Gifts',
      description: 'Custom gifts for special occasions and events',
      icon: '🎁'
    },
    {
      id: 4,
      title: 'Online Services',
      description: 'Digital solutions for your online requirements',
      icon: '🌐'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>WHAT WE OFFER</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
