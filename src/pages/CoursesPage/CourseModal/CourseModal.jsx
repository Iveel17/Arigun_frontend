import React from 'react';
import './CourseModal.css';

const CourseModal = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  // Calculate discount percentage
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="course-modal-overlay" onClick={handleOverlayClick}>
      <div className="course-modal">
        <button className="course-modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="course-modal-content">
          <div className="course-modal-header">
            <h2 className="course-modal-title">{course.title}</h2>
            <p className="course-modal-description">
              {course.description || `${course.category} course designed to help you master the fundamentals and advance your skills.`}
            </p>
          </div>

          <div className="course-modal-details">
            <div className="course-detail-item">
              <span className="detail-label">Course ID:</span>
              <span className="detail-value">{course.id}</span>
            </div>

            <div className="course-detail-item">
              <span className="detail-label">Level:</span>
              <span className="detail-value">{course.level}</span>
            </div>

            <div className="course-detail-item">
              <span className="detail-label">Type:</span>
              <span className="detail-value">{course.category}</span>
            </div>

            <div className="course-detail-item">
              <span className="detail-label">Duration:</span>
              <span className="detail-value">{course.duration}</span>
            </div>

            <div className="course-detail-item">
              <span className="detail-label">Author:</span>
              <span className="detail-value">{course.instructor}</span>
            </div>

            {course.bestseller && (
              <div className="course-detail-item">
                <span className="bestseller-badge">Bestseller</span>
              </div>
            )}
          </div>

          <div className="course-modal-pricing">
            <div className="price-container">
              <span className="current-price">${course.price}</span>
              {course.originalPrice && (
                <>
                  <span className="original-price">${course.originalPrice}</span>
                  <span className="discount-badge">{discountPercentage}% OFF</span>
                </>
              )}
            </div>
          </div>

          <div className="course-modal-actions">
            <button className="start-button">Start</button>
            <button className="view-details-button">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;