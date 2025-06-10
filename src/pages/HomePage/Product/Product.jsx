import React from 'react';
import './Product.css';

const Product = () => {
  const categories = [
    {
      id: 1,
      title: 'BOOKS',
      image: 'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=BOOKS'
    },
    {
      id: 2,
      title: 'CARDS',
      image: 'https://via.placeholder.com/400x300/6C7B7F/FFFFFF?text=CARDS'
    },
    {
      id: 3,
      title: 'GAMES',
      image: 'https://via.placeholder.com/400x300/2C3E50/FFFFFF?text=GAMES'
    }
  ];

  return (
    <div className="products-container">
      <h1 className="products-title">PRODUCTS</h1>
      <div className="products-grid">
        {categories.map((category) => (
          <div key={category.id} className="product-category">
            <div className="product-image-container">
              <img 
                src={category.image} 
                alt={category.title}
                className="product-image"
              />
              <div className="product-overlay">
                <h3 className="product-category-title">{category.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;