const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich and bold espresso shot',
      price: '$3.50',
      category: 'Coffee'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: '$4.50',
      category: 'Coffee'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth espresso with creamy milk',
      price: '$5.00',
      category: 'Coffee'
    },
    {
      id: 4,
      name: 'Cold Brew',
      description: 'Slow-steeped for 24 hours',
      price: '$4.00',
      category: 'Coffee'
    },
    {
      id: 5,
      name: 'Croissant',
      description: 'Buttery and flaky pastry',
      price: '$3.00',
      category: 'Pastry'
    },
    {
      id: 6,
      name: 'Chocolate Muffin',
      description: 'Rich chocolate muffin',
      price: '$3.50',
      category: 'Pastry'
    },
    {
      id: 7,
      name: 'Avocado Toast',
      description: 'Fresh avocado on sourdough',
      price: '$8.00',
      category: 'Food'
    },
    {
      id: 8,
      name: 'Green Tea',
      description: 'Premium Japanese green tea',
      price: '$3.00',
      category: 'Tea'
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2>Our Products</h2>
        <p className="products-subtitle">Discover our delicious menu</p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <span className="product-category">{product.category}</span>
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

export default Products;
