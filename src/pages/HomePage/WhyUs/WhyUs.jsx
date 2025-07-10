import React from 'react';
import './WhyUs.css';
import { Link } from 'react-router-dom'; 
import LinkA from '../../../components/buttons/LinkA/LinkA'; // Assuming LinkA is a custom component for links

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
                <span className="check-icon">✓</span>
              </div>
            </div>
            <h3 className="feature-title">
              Study at Your Own Pace with Flexible Learning Schedules
            </h3>
            <p className="feature-description">
              Customize your learning journey with schedules that fit your lifestyle.
            </p>
            <LinkA text="Explore"/>
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
            <LinkA text="Explore"/>
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
            <LinkA text="Explore"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;