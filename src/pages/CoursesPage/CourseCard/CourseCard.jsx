import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  // Calculate discount percentage
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="course-card">
      <div className="course-image-container">
        <img 
          src={course.image} 
          alt={course.title}
          className="course-image"
        />
        
        {/* Bestseller badge */}
        {course.bestseller && (
          <div className="course-badge bestseller-badge">
            BESTSELLER
          </div>
        )}
        
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <div className="course-badge discount-badge">
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">{course.instructor}</p>
        
        <div className="course-meta">
          <span className="course-duration">{course.duration}</span>
          <span className="course-level">{course.level}</span>
        </div>

        <div className="course-pricing">
          <span className="course-price">${course.price}</span>
          {course.originalPrice && course.originalPrice > course.price && (
            <span className="course-original-price">${course.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;