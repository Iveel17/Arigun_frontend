import React, { useContext, useState } from 'react'; // Added useState import
import { CartContext } from '../../../context/CartContext';
import './ProductCard.css';
import ButtonA from '../../../components/buttons/ButtonA/ButtonA';
import NotificationToast from '../../../components/NotificationToast/NotificationToast';

const ProductCard = ({ product }) => {
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  // Add error handling for undefined product
  if (!product) {
    return null;
  }

  const { addToCart } = useContext(CartContext);

  const handleBuyClick = () => {
    try {
      addToCart(product, 'product'); // Fixed: was 'course', should be 'product'
      setNotification({
        isVisible: true,
        message: `"${product.title}" has been added to your cart!`,
        type: 'success'
      });
    } catch (error) {
      setNotification({
        isVisible: true,
        message: 'Failed to add item to cart. Please try again.',
        type: 'error'
      });
    }
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <>
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
            <ButtonA
              text="Buy"
              className="product-modal-btn"
              onClick={handleBuyClick}
            />
          </div>
        </div>
      </div>
      
      <NotificationToast
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={closeNotification}
        type={notification.type}
      />
    </>
  );
};

export default ProductCard;