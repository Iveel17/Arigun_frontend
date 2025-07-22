import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './LiveLessonModal.css';
import ButtonA from '../../../components/buttons/ButtonA/ButtonA';
import NotificationToast from '../../../components/NotificationToast/NotificationToast';

const LiveLessonModal = ({ live_lesson, isOpen, onClose }) => {
  // All hooks must be called unconditionally at the top level
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const { addToCart } = useContext(CartContext);

  // Now you can have your early return
  if (!isOpen || !live_lesson) return null;

  // Calculate discount percentage
  const discountPercentage = live_lesson.originalPrice
    ? Math.round(((live_lesson.originalPrice - live_lesson.price) / live_lesson.originalPrice) * 100)
    : 0;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBuyClick = () => {
    try {
      addToCart(live_lesson, 'live_lesson');
      setNotification({
        isVisible: true,
        message: `"${live_lesson.title}" has been added to your cart!`,
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
      <div className="live_lesson-modal-overlay" onClick={handleOverlayClick}>
        <div className="live_lesson-modal">
          <button className="live_lesson-modal-close" onClick={onClose}>
            ×
          </button>

          <div className="live_lesson-modal-image-container">
          <img
            src={live_lesson.image}
            alt={live_lesson.title}
            className="live_lesson-modal-image"
          />
        </div>

        <div className="live_lesson-modal-content">
          <div className="live_lesson-modal-header">
            <h3 className="live_lesson-modal-title">#{live_lesson.id} {live_lesson.title}</h3>
            <h1 className="live_lesson-modal-description">{live_lesson.description}</h1>
          </div>
          <div className="live_lesson-modal-lower">
            <div className="live_lesson-modal-details">
              <div className="live_lesson-modal-detail-item">
                <span className="detail-icon">📊</span>
                <span className="detail-value">{live_lesson.level}</span>
              </div>

              <div className="live_lesson-modal-detail-item">
                <span className="detail-icon">💰</span>
                <span className="detail-value">${live_lesson.price}</span>
              </div>

              <div className="live_lesson-modal-detail-item">
                <span className="detail-icon">⏲️</span>
                <span className="detail-value">{live_lesson.duration}</span>
              </div>

              <div className="live_lesson-modal-detail-item">
                <span className="detail-icon">👩‍🏫</span>
                <span className="detail-value">{live_lesson.instructor}</span>
              </div>
            </div>
            <ButtonA
              text="Buy"
              className="live_lesson-modal-btn"
              onClick={handleBuyClick}
            />
          </div>
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

export default LiveLessonModal;