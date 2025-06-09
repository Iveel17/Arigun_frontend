import React from 'react';
import './LoginButton.css';
import { Link } from 'react-router-dom'; // Import Link
const LoginButton = () => {
  return(
    <div>
      <button className="login-btn">
        <Link to="/login" className="login-link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default LoginButton;