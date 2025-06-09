import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link
import AuthSection from './../AuthSection/AuthSection';
import Logo from '../../buttons/Logo/Logo';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
    console.log('Signed out');
  };

  const handleManageAccount = () => {
    setShowDropdown(false);
    console.log('Manage account clicked');
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo positioned at far left */}
        <div className="logo-section">
          <Logo />
        </div>

        {/* Right section containing navigation and auth */}
        <div className="right-section">
          {/* Navigation Menu */}
          <nav className="nav-menu">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/courses' className="nav-link">Courses</Link>
            <Link to='/products' className="nav-link">Products</Link>
            <Link to='/classes' className="nav-link">Classes</Link>
            <Link to='/about' className="nav-link">About</Link>
          </nav>

          {/* Auth Section at far right */}
          <div className="auth-section">
            {!isLoggedIn ? (
              <AuthSection />
            ) : (
              <div className="profile-section">
                <div className="profile-wrapper" onClick={handleProfileClick}>
                  <div className="profile-picture">
                    <span className="profile-icon">👤</span>
                  </div>
                  <span className="dropdown-arrow">▼</span>
                </div>
                             
                {showDropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">
                      <div className="dropdown-profile-pic">👤</div>
                      <div className="dropdown-info">
                        <p className="username">Username</p>
                        <p className="email">user@email.com</p>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <div className="dropdown-section">
                      <h4>Account</h4>
                      <p>Manage your account info</p>
                      <div className="dropdown-item" onClick={handleManageAccount}>
                        <span className="dropdown-icon">👤</span>
                        <span>Username & Email</span>
                      </div>
                      <div className="dropdown-item">
                        <span className="dropdown-icon">🔒</span>
                        <span>Username Security</span>
                      </div>
                      <div className="dropdown-item">
                        <span className="dropdown-icon">🔑</span>
                        <span>Password</span>
                      </div>
                      <div className="dropdown-item">
                        <span className="dropdown-icon">📱</span>
                        <span>Active devices</span>
                      </div>
                      <div className="dropdown-item">
                        <span className="dropdown-icon">⚠️</span>
                        <span>Danger</span>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <div className="dropdown-item sign-out" onClick={handleSignOut}>
                      <span className="dropdown-icon">🚪</span>
                      <span>Sign out</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;