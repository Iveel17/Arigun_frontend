import React from 'react';
import LogoIcon from './LogoIcon.jpg';
import './Logo.css';
import { Link } from 'react-router-dom'; // Import Link

const Logo = () => {
  return (
    <div className="logo">
        <Link to="/" className="logo-link">
            <img src={LogoIcon} alt="Logo" className="logo-image" />
        </Link>
    </div>
  );
};

export default Logo;