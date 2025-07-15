import React from "react";
import "./Spinner.css";

export const Spinner = ({ size = "medium", color = "primary", label }) => {
  return (
    <div className="spinner-wrapper" role="status" aria-live="polite">
      <div className={`spinner spinner-${size} spinner-${color}`} />
      {label && <span className="spinner-label">{label}</span>}
    </div>
  );
};
