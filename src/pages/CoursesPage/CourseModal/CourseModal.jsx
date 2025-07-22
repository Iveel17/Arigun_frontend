import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './CourseModal.css';
import ButtonA from '../../../components/buttons/ButtonA/ButtonA';
import NotificationToast from '../../../components/NotificationToast/NotificationToast';

const CourseModal = ({ course, isOpen, onClose }) => {
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  if (!isOpen || !course) return null;

  const { addToCart } = useContext(CartContext);

  // Calculate discount percentage
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBuyClick = () => {
    try {
      addToCart(course, 'course');
      setNotification({
        isVisible: true,
        message: `"${course.title}" has been added to your cart!`,
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
      <div className="course-modal-overlay" onClick={handleOverlayClick}>
        <div className="course-modal">
          <button className="course-modal-close" onClick={onClose}>
            ×
          </button>
          
          <div className="course-modal-image-container">
          <img 
            src={course.image} 
            alt={course.title}
            className="course-modal-image"
          />
        </div>

        <div className="course-modal-content">
          <div className="course-modal-header">
            <h3 className="course-modal-title">#{course.id} {course.title}</h3>
            <h1 className="course-modal-description">{course.description}</h1>
          </div>
          <div className="course-modal-lower">
            <div className="course-modal-details">
              <div className="course-modal-detail-item">
                <span className="detail-icon">📊</span>
                <span className="detail-value">{course.level}</span>
              </div>

              <div className="course-modal-detail-item">
                <span className="detail-icon">💰</span>
                <span className="detail-value">${course.price}</span>
              </div>

              <div className="course-modal-detail-item">
                <span className="detail-icon">⏲️</span>
                <span className="detail-value">{course.duration}</span>
              </div>
              
              <div className="course-modal-detail-item">
                <span className="detail-icon">👩‍🏫</span>
                <span className="detail-value">{course.instructor}</span>
              </div>
            </div>
            <ButtonA 
              text="Buy" 
              className="course-modal-btn" 
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

export default CourseModal;