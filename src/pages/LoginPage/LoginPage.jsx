import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your tutor account</p>
        </div>
        
        <div className="login-form">
          <div className="form-group">
            <div className="form-label">
              Email Address
            </div>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <div className="form-label">
              Password
            </div>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="form-options">
            <div className="checkbox-group">
              <input type="checkbox" className="form-checkbox" />
              <span className="checkbox-label">Remember me</span>
            </div>
            <button className="forgot-password">
              Forgot password?
            </button>
          </div>
          
          <button className="submit-btn">
            Sign In
          </button>
        </div>
        
        <div className="login-footer">
          <p className="footer-text">
            Don't have an account?{' '}
            <Link to='/signup' className="link-btn">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;