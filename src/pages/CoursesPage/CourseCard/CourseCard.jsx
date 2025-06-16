import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  // Add error handling for undefined course
  if (!course) {
    return null;
  }

  return (
    <div className="course-card">
      {course.bestseller && (
        <div className="bestseller-badge">BESTSELLER</div>
      )}
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        <div className="course-rating">
          <span className="rating-number">{course.rating}</span>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(course.rating) ? 'filled' : ''}`}>
                ★
              </span>
            ))}
          </div>
          <span className="students-count">({course.students?.toLocaleString() || '0'})</span>
        </div>
        <div className="course-meta">
          <span className="duration">{course.duration}</span>
          <span className="level">{course.level}</span>
        </div>
        <div className="course-price">
          <span className="current-price">${course.price}</span>
          {course.originalPrice && (
            <span className="original-price">${course.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;