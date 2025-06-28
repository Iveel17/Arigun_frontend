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
              <span className="detail-icon">🧑‍🎓</span>
              <span className="detail-value">{course.students}/{course.totalStudents}</span>
            </div>
          </div>
          <button className="modal-enroll-btn">Enroll</button>          
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseModal;