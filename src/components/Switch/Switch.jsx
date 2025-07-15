import React from "react";
import PropTypes from "prop-types";
import "./Switch.css";

const Switch = ({ checked, onChange, disabled, label, id }) => {
  return (
    <div className={`modern-switch-wrapper ${disabled ? "disabled" : ""}`}>
      <label htmlFor={id || label} className="modern-switch-label">
        <input
          type="checkbox"
          id={id || label}
          className="modern-switch-input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="modern-slider" />
        {label && <span className="modern-switch-text">{label}</span>}
      </label>
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default Switch;
