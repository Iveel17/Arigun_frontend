import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Add error handling for undefined product
  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;