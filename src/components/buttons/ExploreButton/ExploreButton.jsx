import React from 'react';
import './ExploreButton.css';
import { Link } from 'react-router-dom'; // Import Link

const ExploreButton = () => {   
  return (
    <div>
        <button className="explore-btn">
            <Link to="/courses" className="explore-link">
                Explore
            </Link>
        </button>
    </div>
  );
}
export default ExploreButton;