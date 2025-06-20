import React from 'react';
import './FilterModal.css';

const FilterModal = ({
  isOpen,
  onClose,
  sortBy,
  setSortBy,
  selectedCategories,
  selectedLevels,
  filteredProductsCount,
  categories,
  sortOptions,
  onCategoryChange,
  onLevelChange,
  getSortLabel
}) => {
  if (!isOpen) return null;

  return (
    <div className="filter-overlay">
      <div className="filter-modal">
        <div className="filter-header">
          <h2>FILTERS</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="filter-content">
          {/* Sort Section */}
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

          {/* Category Section */}
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
        </div>

        <div className="filter-footer">
          <button className="apply-filters-button" onClick={onClose}>
            VIEW {filteredProductsCount} PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;