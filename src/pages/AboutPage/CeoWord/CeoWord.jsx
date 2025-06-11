import React from 'react';
import './CeoWord.css';

const CeoWord = () => {
  return (
    <div className="ceo-card">
      <div className="quote-section">
        <div className="quote-text">
          The core of a country's development grows from education. To improve and grow as a country, we have to educate ourselves at first.
        </div>
        <div className="quote-author">
          - CEO Ariuntuul
        </div>
      </div>
      
      <div className="profile-section">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23f8fafc' rx='12'/%3E%3Ctext x='75' y='80' text-anchor='middle' fill='%2364748b' font-size='14' font-family='Inter, sans-serif'%3EProfile Image%3C/text%3E%3C/svg%3E"
          alt="CEO Ariuntuul" 
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default CeoWord;