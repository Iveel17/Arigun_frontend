import React from 'react';
import './LinkA.css';
import { Link } from 'react-router-dom';

const LinkA = ({ to, text = "Link", showArrow = true, className = "" }) => {
  return (
    <div>
      <div className={`feature-link ${className}`}>
        <Link to={to} className="explore-link">{text}</Link>
        {showArrow && <span className="arrow">→</span>}
      </div>
    </div>
  );
};

export default LinkA;