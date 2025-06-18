import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <h1 className="signup-title">Ready to start your success story?</h1>
          <p className="signup-subtitle">
            Signup to our website and start leafing through your favorite literature today!
          </p>
          
          <form className="signup-form">
            <div className="form-group">
              <label className="form-label">Full name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Username</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="janedoe123"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="janedoe@mail.com"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Enter your password"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Re-enter Password</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="terms" 
                className="checkbox-input"
              />
              <label htmlFor="terms" className="checkbox-label">
                I agree to the <a href="#terms">Terms & Conditions</a>
              </label>
            </div>
            
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </form>
          
          <div className="login-link">
            Already have an account? <Link to='/login'>Log in</Link>
          </div>
        </div>
        
        <div className="signup-right">
          <div className="background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
            alt="Reading illustration" 
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;