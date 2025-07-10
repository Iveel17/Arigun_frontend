import React from 'react';
import './ButtonA.css';

const ButtonA = ({ text = "Click me", onClick, disabled = false, className = "" }) => {
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