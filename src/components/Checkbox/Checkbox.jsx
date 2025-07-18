import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export const Checkbox = ({ label, checked, onChange, error, className, ...props }) => {
  return (
    <label className={`checkbox-wrapper ${className || ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
        {...props}
      />
      <span className={`checkbox-custom ${error ? 'checkbox-error' : ''}`} />
      {label && <span className="checkbox-label">{label}</span>}
      {error && <div className="checkbox-error-message">{error}</div>}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox;
