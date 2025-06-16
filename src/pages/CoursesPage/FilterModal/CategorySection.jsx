import React from 'react';

const CategorySection = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <div className="filter-section">
      <h3 className="filter-title">CATEGORY</h3>
      <div className="filter-options">
        {categories.map(category => (
          <label key={category.name} className="filter-option">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() => onCategoryChange(category.name)}
            />
            <span className="checkmark"></span>
            {category.name} ({category.count})
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;