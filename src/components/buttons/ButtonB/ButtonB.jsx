import React from 'react';
import './ButtonB.css';

const ButtonB = ({ text = "Click me", onClick, disabled = false, className = "" }) => {
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