import React from "react";
import "./Progressbar.css";

export const Progressbar = ({
  value = 0,
  max = 100,
  label,
  showPercentage = true,
  color = "primary", // 'primary', 'success', 'warning', 'error'
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="progress-container">
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-track">
        <div
          className={`progress-fill progress-${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <span className="progress-percentage">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};
export default Progressbar;