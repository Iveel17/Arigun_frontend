import React from 'react';

const LevelSection = ({ levels, selectedLevels, onLevelChange }) => {
  return (
    <div className="filter-section">
      <h3 className="filter-title">LEVEL</h3>
      <div className="filter-options">
        {levels.map(level => (
          <label key={level.name} className="filter-option">
            <input
              type="checkbox"
              checked={selectedLevels.includes(level.name)}
              onChange={() => onLevelChange(level.name)}
            />
            <span className="checkmark"></span>
            {level.name} ({level.count})
          </label>
        ))}
      </div>
    </div>
  );
};

export default LevelSection;