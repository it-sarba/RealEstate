import React from "react";
import "./SortDropdown.css";

export const SortDropdown = ({
  options = [],
  value = "",
  onChange,
  label = "Sort by",
}) => {
  return (
    <div className="sort-dropdown">
      <label className="sort-label">{label}</label>
      <select
        className="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
