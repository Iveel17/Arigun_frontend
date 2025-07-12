import React, { useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import './ProductCard.css';
import ButtonA from '../../../components/buttons/ButtonA/ButtonA';

const ProductCard = ({ product }) => {
  // Add error handling for undefined product
  if (!product) {
    return null;
  }
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-details">
          <div className="product-price">
            <span className="price-icon">💰</span>
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>
          <ButtonA text="Buy" className="product-btn" onClick={() => addToCart(product)}/>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;