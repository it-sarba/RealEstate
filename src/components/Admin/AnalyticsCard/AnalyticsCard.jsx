import React from "react";
import "./AnalyticsCard.css";

export const AnalyticsCard = ({
  title,
  value,
  icon,
  growth,
  growthType = "up",
  bgColor = "#ffffff",
  iconBg = "#e0f2fe",
  trendIconSize = "1.5rem",
}) => {
  return (
    <div className="analytics-card" style={{ backgroundColor: bgColor }}>
      <div className="analytics-icon" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>
      <div className="analytics-content">
        <h4 className="analytics-title">{title}</h4>
        <div className="analytics-value-row">
          <span className="analytics-value">{value}</span>
          {growth !== undefined && (
            <span
              className={`analytics-growth ${
                growthType === "up" ? "up" : "down"
              }`}
            >
              <span className="growth-icon">
                {growthType === "up" ? "↑" : "↓"}
              </span>
              {growth}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;