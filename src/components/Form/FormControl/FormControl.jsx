// src/components/FormControl/FormControl.jsx
import React from "react";
import PropTypes from "prop-types";
import "./FormControl.css";

const FormControl = ({ label, hint, error, children, required }) => {
  return (
    <div className={`form-control ${error ? "has-error" : ""}`}>
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className="form-hint">{hint}</p>}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

FormControl.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FormControl;
