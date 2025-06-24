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
      </div>

      <div className="course-info">
        <div className="course-header">
          <span className="course-id">{course.id}</span>
          <h3 className="course-title">{course.title}</h3>
        </div>
        <div className="course-lower">
          <div className="course-details">
            <div className="course-price-line">
              <span className="price-icon">💰</span>
              <span className="course-price">${course.price}</span>
            </div>
            
            <div className="course-student-line">
              <span className="level-icon">📊</span>
              <span className="course-duration">{course.duration}</span>
            </div>
          </div>
          <button className="enroll-btn">Enroll</button>          
        </div>
      </div>
    </div>
  );
};

export default CourseCard;