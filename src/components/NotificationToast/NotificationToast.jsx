// NotificationToast.jsx
import React, { useState, useEffect } from 'react';
import './NotificationToast.css';

const NotificationToast = ({ message, isVisible, onClose, type = 'success' }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        // Wait for fade-out animation to complete before actually closing
        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 400); // Match the transition duration
      }, 3000); // Auto-close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div className={`notification-toast ${type} ${isVisible ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
      <div className="notification-content">
        <div className="notification-icon">
          {type === 'success' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m3.5 8.5 3 3 6-6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4l8 8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="notification-message">{message}</span>
        <button className="notification-close" onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;