import React from 'react';

const SortSection = ({ sortBy, setSortBy, sortOptions, getSortLabel }) => {
  return (
    <div className="filter-section">
      <h3 className="filter-title">SORT BY: {getSortLabel(sortBy).toUpperCase()}</h3>
      <div className="filter-options">
        {sortOptions.map(option => (
          <label key={option.value} className="filter-option">
            <input
              type="radio"
              name="sort"
              value={option.value}
              checked={sortBy === option.value}
              onChange={(e) => setSortBy(e.target.value)}
            />
            <span className="checkmark"></span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortSection;