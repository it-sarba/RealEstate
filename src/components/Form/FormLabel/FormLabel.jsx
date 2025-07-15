import React from "react";
import PropTypes from "prop-types";
import "./FormLabel.css";

const FormLabel = ({ children, htmlFor, required }) => {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
      {required && <span className="form-label-required">*</span>}
    </label>
  );
};

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
};

export default FormLabel;
