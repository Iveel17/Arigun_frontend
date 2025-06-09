import React from 'react';
import './Hero.css';
import youngBoyStudying from './young-boy-studying.jpg';
import SignupButton from '../../buttons/SignupButton/SignupButton';
import ExploreButton from '../../buttons/ExploreButton/ExploreButton';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${youngBoyStudying})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Unlock Your Potential with Our Courses
            </h1>
            <p className="hero-description">
              Welcome to your learning journey! Dive into our diverse range of 
              courses designed to elevate your skills and knowledge.
            </p>
            <div className="hero-buttons">
              <ExploreButton />
              <SignupButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;