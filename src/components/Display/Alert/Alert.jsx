import React from "react";
import "./Alert.css";

export const Alert = ({
  type = "info",
  message = "",
  description = "",
  onClose,
}) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="alert-content">
        <strong>{message}</strong>
        {description && <p className="alert-description">{description}</p>}
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
      )}
    </div>
  );
};
export default Alert;