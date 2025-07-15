import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import "./SearchInput.css";

export const SearchInput = ({
  value,
  onChange,
  onClear,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`search-input ${className}`}>
      <FiSearch className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button className="clear-button" onClick={onClear} aria-label="Clear search">
          <FiX />
        </button>
      )}
    </div>
  );
};
