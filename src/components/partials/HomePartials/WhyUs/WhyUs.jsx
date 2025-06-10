import React from 'react';
import './WhyUs.css';
import { Link } from 'react-router-dom'; 

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-us-container">
        <h1 className="why-us-title">
          Unlock Your Potential with Our High-Quality Video Courses
        </h1>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon-circle">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <h3 className="feature-title">
              Learn from the Best: Expert Tutors at Your Service
            </h3>
            <p className="feature-description">
              Our platform offers engaging video courses designed to elevate your learning experience.
            </p>
            <div className="feature-link">
                    <Link to="/courses" className="explore-link">Explore</Link>
               <span className="arrow">→</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon-circle">
                <span className="clock-icon">🕐</span>
              </div>
            </div>
            <h3 className="feature-title">
              Study at Your Own Pace with Flexible Learning Schedules
            </h3>
            <p className="feature-description">
              Customize your learning journey with schedules that fit your lifestyle.
            </p>
            <div className="feature-link">
                    <Link to="/courses" className="explore-link">Explore</Link> 
                <span className="arrow">→</span>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon-circle">
                <span className="monitor-icon">🖥</span>
              </div>
            </div>
            <h3 className="feature-title">
              Interactive Learning Experience with Engaging Content and Resources
            </h3>
            <p className="feature-description">
              Access a wealth of resources that enhance your understanding and retention.
            </p>
            <div className="feature-link">
                <Link to="/courses" className="explore-link">Explore</Link> 
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;