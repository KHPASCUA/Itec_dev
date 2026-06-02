const Gallery = () => {
  const products = [
    {
      id: 1,
      name: 'Custom T-Shirt Printing',
      description: 'Personalized t-shirts for events and promotions',
      price: 'Starting at ₱250'
    },
    {
      id: 2,
      name: 'Business Card Printing',
      description: 'Professional business cards for your brand',
      price: 'Starting at ₱500'
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2>AVAIL OUR PRODUCTS!</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-price">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
