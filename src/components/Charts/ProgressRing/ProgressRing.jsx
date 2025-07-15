import React from "react";
import "./ProgressRing.css";

export const ProgressRing = ({ radius = 50, stroke = 8, progress = 70, color = "#3b82f6", label }) => {
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-ring-wrapper" style={{ width: radius * 2, height: radius * 2 }}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-ring-circle"
        />
      </svg>
      <div className="progress-ring-label">
        {label || `${progress}%`}
      </div>
    </div>
  );
};
