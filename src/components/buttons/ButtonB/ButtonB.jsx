import React from 'react';
import './ButtonB.css';
import { Link } from 'react-router-dom';

const ButtonB = ({ text = "Click me", onClick, disabled = false, className = "", to }) => {
  if (to) {
    return (
      <Link to={to} className={`button-b ${className}`} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {text}
      </Link>
    );
  }

  return (
    <button 
      className={`button-b ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonB;