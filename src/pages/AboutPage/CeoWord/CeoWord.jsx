import React from 'react';
import { User, Briefcase, TrendingUp, Award } from 'lucide-react';
import './CeoWord.css';

const CeoWord = () => {
  return (
    <div className="ceo-container">
      <div className="ceo-content">
        {/* Left Side */}
        <div className="left-section">
          <div className="quote-section">
            <h2 className="ceo-title">CEO</h2>
            <div className="motivational-quote">
              "Leadership is not about being in charge. It's about taking care of those in your charge and empowering them to achieve greatness together."
            </div>
          </div>
          
          <div className="wavy-lines">
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-section">
          <div className="info-boxes">
            <div className="info-box">
              <span>Instagram</span>
            </div>
            <div className="info-box">
              <span>Facebook</span>
            </div>
            <div className="info-box">
              <span>LinkedIn</span>
            </div>
            <div className="info-box">
              <span>Email</span>
            </div>
          </div>

          <div className="icon-links">
            <div className="icon-link">
              <User className="icon" />
              <span>Team</span>
            </div>
            <div className="icon-link">
              <Briefcase className="icon" />
              <span>Projects</span>
            </div>
            <div className="icon-link">
              <TrendingUp className="icon" />
              <span>Growth</span>
            </div>
            <div className="icon-link">
              <Award className="icon" />
              <span>Awards</span>
            </div>
          </div>

          <div className="ceo-name">
            <h3>Ariuntuul</h3>
            <p>Chief Executive Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoWord;