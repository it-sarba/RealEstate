import React, { useState } from "react";
import "./FilterPanel.css";

export const FilterPanel = ({ filters = [], onChange }) => {
  const [selected, setSelected] = useState({});

  const handleCheckboxChange = (category, value) => {
    const prev = selected[category] || [];
    const next = prev.includes(value)
      ? prev.filter((v) => v !== value)
      : [...prev, value];

    const updated = { ...selected, [category]: next };
    setSelected(updated);
    onChange?.(updated);
  };

  return (
    <div className="filter-panel">
      {filters.map((filter) => (
        <div className="filter-section" key={filter.name}>
          <h4 className="filter-title">{filter.label}</h4>
          <div className="filter-options">
            {filter.options.map((option) => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={selected[filter.name]?.includes(option.value) || false}
                  onChange={() => handleCheckboxChange(filter.name, option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
