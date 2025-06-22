import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onCourseClick }) => {
  // Calculate discount percentage
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  const handleClick = () => {
    if (onCourseClick) {
      onCourseClick(course);
    }
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-image-container">
        <img 
          src={course.image} 
          alt={course.title}
          className="course-image"
        />
        {course.bestseller && (
          <span className="bestseller-badge">Bestseller</span>
        )}
        {discountPercentage > 0 && (
          <span className="discount-badge">{discountPercentage}% OFF</span>
        )}
      </div>

      <div className="course-info">
        <div className="course-header">
          <span className="course-id">#{course.id}</span>
          <h3 className="course-title">{course.title}</h3>
          <p className="course-instructor">by {course.instructor}</p>
        </div>
        
        <div className="course-details">
          <div className="course-price-line">
            <span className="price-icon">💰</span>
            <div className="price-container">
              <span className="course-price">${course.price}</span>
              {course.originalPrice && (
                <span className="original-price">${course.originalPrice}</span>
              )}
            </div>
          </div>
          
          <div className="course-level-line">
            <span className="level-icon">📊</span>
            <span className="course-level">{course.level}</span>
          </div>

          <div className="course-duration-line">
            <span className="duration-icon">⏱️</span>
            <span className="course-duration">{course.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;