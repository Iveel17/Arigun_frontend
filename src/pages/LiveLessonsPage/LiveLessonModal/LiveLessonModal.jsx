import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import './LiveLessonModal.css';
import ButtonA from '../../../components/buttons/ButtonA/ButtonA';

const LiveLessonModal = ({ live_lesson, isOpen, onClose }) => {
  if (!isOpen || !live_lesson) return null;

  const { addToCart } = useContext(CartContext);

  // Calculate discount percentage
  const discountPercentage = live_lesson.originalPrice 
    ? Math.round(((live_lesson.originalPrice - live_lesson.price) / live_lesson.originalPrice) * 100)
    : 0;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
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
              <span className="detail-icon">👩‍🏫</span>
              <span className="detail-value">{live_lesson.instructor}</span>
            </div>

            <div className="live_lesson-modal-detail-item">
              <span className="detail-icon">💰</span>
              <span className="detail-value">${live_lesson.price}</span>
            </div>

            <div className="live_lesson-modal-detail-item">
              <span className="detail-icon">📅</span>
              <span className="detail-value">{live_lesson.days}</span>
            </div>
            
            <div className="live_lesson-modal-detail-item">
              <span className="detail-icon">🧑‍🎓</span>
              <span className="detail-value">{live_lesson.students}/{live_lesson.totalStudents}</span>
            </div>
          </div>
          <ButtonA text="Buy" className="live_lesson-modal-btn"  onClick={() => addToCart(live_lesson, 'live-lesson')}/>        
        </div>
      </div>
      </div>
    </div>
  );
};

export default LiveLessonModal;