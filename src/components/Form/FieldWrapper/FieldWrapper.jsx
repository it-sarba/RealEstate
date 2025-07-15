// src/components/FieldWrapper/FieldWrapper.jsx
import React from "react";
import PropTypes from "prop-types";
import FormLabel from "../FormLabel/FormLabel";
import FormError from "../FormError/FormError";
import "./FieldWrapper.css";

const FieldWrapper = ({ label, children, error, required, className = "" }) => {
  return (
    <div className={`field-wrapper ${className}`}>
      {label && <FormLabel required={required}>{label}</FormLabel>}
      <div className={`field-input-wrapper ${error ? "field-error" : ""}`}>
        {children}
      </div>
      {error && <FormError message={error} />}
    </div>
  );
};

FieldWrapper.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FieldWrapper;
