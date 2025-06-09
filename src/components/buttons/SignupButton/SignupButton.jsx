import React from 'react';
import './SignupButton.css';
import { Link } from 'react-router-dom'; // Import Link

const SignupButton = () => {   
  return (
    <div>
        <button className="join-btn">
            <Link to="/signup" className="join-link">
                Join Us
            </Link>
        </button>
    </div>
  );
}
export default SignupButton;