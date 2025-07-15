import React from "react";
import PropTypes from "prop-types";
import "./Select.css";

const Select = ({ label, options, value, onChange, disabled, id }) => {
  return (
    <div className="select-wrapper">
      {label && (
        <label htmlFor={id || label} className="select-label">
          {label}
        </label>
      )}
      <div className="select-container">
        <select
          id={id || label}
          className="select-dropdown"
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="select-icon">
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#666"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
</div>

      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

export default Select;
