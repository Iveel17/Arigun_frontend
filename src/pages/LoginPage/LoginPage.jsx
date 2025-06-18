import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <h1 className="login-title">Welcome back!</h1>
          <p className="login-subtitle">
            Sign in to continue your literary journey and discover new stories waiting for you.
          </p>
          
          <form className="login-form">
            <div className="form-group">
              <label className="form-label">Username</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your username"
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
            
            <div className="forgot-password">
              <a href="#forgot">Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          
          <div className="divider">or continue with</div>
          
          <div className="social-login">
            <button className="social-button">
              <span>📧</span>
              Google
            </button>
            <button className="social-button">
              <span>📘</span>
              Facebook
            </button>
          </div>
          
          <div className="signup-link">
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </div>
        </div>
        
        <div className="login-right">
          <div className="background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop"
            alt="Books and reading illustration" 
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;