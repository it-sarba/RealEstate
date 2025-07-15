import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { HiChevronDown } from "react-icons/hi";
import "./MultiSelect.css";

const MultiSelect = ({ label, options, selected, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleOptionToggle = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="multi-select-wrapper" ref={wrapperRef}>
      {label && <label className="multi-select-label">{label}</label>}
      <div
        className={`multi-select-box ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="multi-select-placeholder">
          {selected.length > 0
            ? options
                .filter((opt) => selected.includes(opt.value))
                .map((opt) => opt.label)
                .join(", ")
            : placeholder || "Select options"}
        </span>
        <HiChevronDown className="multi-select-icon" />
      </div>
      {isOpen && (
        <div className="multi-select-options">
          {options.map((option) => (
            <label key={option.value} className="multi-select-option">
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => handleOptionToggle(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  selected: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default MultiSelect;
