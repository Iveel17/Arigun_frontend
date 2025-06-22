import React from 'react';
import './LiveLessonCard.css';

const LiveLessonCard = ({ live_lesson }) => {
  // Calculate discount percentage
  const discountPercentage = live_lesson.originalPrice 
    ? Math.round(((live_lesson.originalPrice - live_lesson.price) / live_lesson.originalPrice) * 100)
    : 0;

  return (
    <div className="live_lesson-card">
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
              <span className="live_lesson-student">{live_lesson.students}/{live_lesson.totalStudents}</span>
            </div>
          </div>
          <button className="enroll-btn">Enroll</button>          
        </div>
      </div>
    </div>
  );
};

export default LiveLessonCard;