const PrintingServices = () => {
  const categories = [
    'ID Picture',
    'Documents',
    'Tarpaulin',
    'Photo Print',
    'Invitations',
    'Stickers'
  ];

  return (
    <section className="printing-services">
      <div className="printing-services-container">
        <h2>PRINTING SERVICES</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-box">
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;
