// src/components/FormError/FormError.jsx
import React from "react";
import PropTypes from "prop-types";
import "./FormError.css";

const FormError = ({ message }) => {
  if (!message) return null;

  return <div className="form-error">{message}</div>;
};

FormError.propTypes = {
  message: PropTypes.string,
};

export default FormError;
