import React from 'react';
import './ButtonA.css';
import { Link } from 'react-router-dom';

const ButtonA = ({ text = "Click me", onClick, disabled = false, className = "", to }) => {
  if (to) {
    return (
      <Link to={to} className={`button-a ${className}`} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {text}
      </Link>
    );
  }

  return (
    <button 
      className={`button-a ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonA;