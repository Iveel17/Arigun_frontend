import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Add error handling for undefined product
  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      {product.bestseller && (
        <div className="bestseller-badge">BESTSELLER</div>
      )}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-instructor">{product.instructor}</p>
        <div className="product-rating">
          <span className="rating-number">{product.rating}</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                ★
              </span>
            ))}
          </div>
          <span className="students-count">({product.students?.toLocaleString() || '0'})</span>
        </div>
        <div className="product-meta">
          <span className="duration">{product.duration}</span>
          <span className="level">{product.level}</span>
        </div>
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