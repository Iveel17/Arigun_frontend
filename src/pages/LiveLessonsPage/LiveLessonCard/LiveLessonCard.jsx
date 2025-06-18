import React from 'react';
import './LiveLessonCard.css';

const LiveLessonCard = ({ live_lesson }) => {
  // Add error handling for undefined live_lesson
  if (!live_lesson) {
    return null;
  }

  return (
    <div className="live_lesson-card">
      {live_lesson.bestseller && (
        <div className="bestseller-badge">BESTSELLER</div>
      )}
      <div className="live_lesson-image">
        <img src={live_lesson.image} alt={live_lesson.title} />
      </div>
      <div className="live_lesson-info">
        <h3 className="live_lesson-title">{live_lesson.title}</h3>
        <p className="live_lesson-instructor">{live_lesson.instructor}</p>
        <div className="live_lesson-rating">
          <span className="rating-number">{live_lesson.rating}</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(live_lesson.rating) ? 'filled' : ''}`}>
                ★
              </span>
            ))}
          </div>
          <span className="students-count">({live_lesson.students?.toLocaleString() || '0'})</span>
        </div>
        <div className="live_lesson-meta">
          <span className="duration">{live_lesson.duration}</span>
          <span className="level">{live_lesson.level}</span>
        </div>
        <div className="live_lesson-price">
          <span className="current-price">${live_lesson.price}</span>
          {live_lesson.originalPrice && (
            <span className="original-price">${live_lesson.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveLessonCard;