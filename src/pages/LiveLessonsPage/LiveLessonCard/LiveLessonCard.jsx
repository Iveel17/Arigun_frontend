import React from 'react';
import './LiveLessonCard.css';
import ButtonA from '../../../components/buttons/ButtonA/ButtonA';

const LiveLessonCard = ({ live_lesson, onLiveLessonClick }) => {
  // Calculate discount percentage
  const discountPercentage = live_lesson.originalPrice 
    ? Math.round(((live_lesson.originalPrice - live_lesson.price) / live_lesson.originalPrice) * 100)
    : 0;

  const handleClick = () => {
    if (onLiveLessonClick) {
      onLiveLessonClick(live_lesson);
    }
  };

  return (
    <div className="live_lesson-card" onClick={handleClick}>
      <div className="live_lesson-image-container">
        <img 
          src={live_lesson.image} 
          alt={live_lesson.title}
          className="live_lesson-image"
        />
      </div>

      <div className="live_lesson-info">
        <div className="live_lesson-header">
          <span className="live_lesson-id">{live_lesson.id}</span>
          <h3 className="live_lesson-title">{live_lesson.title}</h3>
        </div>
        <div className="live_lesson-lower">
          <div className="live_lesson-details">
            <div className="live_lesson-price-line">
              <span className="price-icon">💰</span>
              <span className="live_lesson-price">${live_lesson.price}</span>
            </div>
            
            <div className="live_lesson-student-line">
              <span className="level-icon">🧑‍🎓</span>
              <span className="live_lesson-duration">{live_lesson.students}/{live_lesson.totalStudents}</span>
            </div>
          </div>
          <ButtonA text="Enroll" className="live_lesson-btn" />        
        </div>
      </div>
    </div>
  );
};

export default LiveLessonCard;