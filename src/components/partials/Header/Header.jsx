import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AuthSection from './AuthSection/AuthSection';
import Logo from '../../buttons/Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Logo />
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/courses' className="nav-link">Courses</Link>
          <Link to='/products' className="nav-link">Products</Link>
          <Link to='/live-lessons' className="nav-link">Live-lessons</Link>
          <Link to='/about' className="nav-link">About</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-section">
          <AuthSection />
        </div>
      </div>
    </header>
  );
};

export default Header;