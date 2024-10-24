import React from 'react';
import './ProductSection.css'; // Create a CSS file if needed

const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="text-content">
        <h1>Your Feet Deserve the Best</h1>
        <p>Your feet deserve the best, and we’re here to help you with our shoes. Your feet deserve the best, and we’re here to help you with our shoes.</p>
        <div className="buttons">
          <button className="shop-now">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <p className="available-on">Also Available On</p>
        <div className="platform-icons">
          {/* Add logos/icons */}
          <img src="amazon-logo.png" alt="Amazon" />
        </div>
      </div>
      <div className="image-content">
        <img src="shoe-image.png" alt="Nike Shoe" />
      </div>
    </section>
  );
};

export default ProductSection;
