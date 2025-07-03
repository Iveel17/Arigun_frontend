import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SignupPage.css';
import Header from '../../components/partials/Header/Header'; // Import Header component

const SignupPage = () => {
  return (
    <div className="signup-page">
        <Header />
        <div className="signup-container">
        <div className="signup-card">
            <div className="signup-header">
            <h1 className="signup-title">Join Our Community </h1>
            <p className="signup-subtitle">Create your account</p>
            </div>
            
            <div className="signup-form">
            <div className="name-row">
                <div className="form-group">
                <div className="form-label">
                    First Name
                </div>
                <input
                    type="text"
                    className="form-input"
                    placeholder="John"
                />
                </div>
                <div className="form-group">
                <div className="form-label">
                    Last Name
                </div>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Doe"
                />
                </div>
            </div>
            
            <div className="form-group">
                <div className="form-label">
                Email Address
                </div>
                <input
                type="email"
                className="form-input"
                placeholder="john@example.com"
                />
            </div>
            
            <div className="form-group">
                <div className="form-label">
                Password
                </div>
                <input
                type="password"
                className="form-input"
                placeholder="Create a strong password"
                />
            </div>
            
            <div className="form-group">
                <div className="form-label">
                Confirm Password
                </div>
                <input
                type="password"
                className="form-input"
                placeholder="Confirm your password"
                />
            </div>
            
            <div className="terms-group">
                <input type="checkbox" className="form-checkbox" />
                <span className="terms-text">
                I agree to the{' '}
                <button className="terms-link">
                    Terms of Service
                </button>{' '}
                and{' '}
                <button className="terms-link">
                    Privacy Policy
                </button>
                </span>
            </div>
            
            <button className="submit-btn">
                Create Account
            </button>
            </div>
            
            <div className="signup-footer">
            <p className="footer-text">
                Already have an account?{' '}
                <Link to='/login' className="link-btn">Log In</Link>
            </p>
            </div>
        </div>
        </div>
        </div>
  );
};

export default SignupPage;