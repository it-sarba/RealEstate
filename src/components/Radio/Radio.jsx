import React from "react";
import PropTypes from "prop-types";
import "./Radio.css";

const Radio = ({ label, name, value, checked, onChange, error }) => {
  return (
    <label className={`custom-radio ${error ? "error" : ""}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="radio-mark"></span>
      {label}
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

export default Radio;
