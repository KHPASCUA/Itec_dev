import heroBg from '../assets/hero-bg.jpg'

const Products = () => {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="page-hero-container">
          <h1>Products</h1>
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

export default Products;
