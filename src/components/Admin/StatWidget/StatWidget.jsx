import React from "react";
import "./StatWidget.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

 export const StatWidget = ({
  title,
  value,
  icon,
  trend = null, // { direction: "up" | "down", amount: "12%" }
  color = "primary", // can be: primary, success, warning, danger
}) => {
  const trendIcon =
    trend?.direction === "up" ? <FaArrowUp /> : <FaArrowDown />;
  const trendClass = trend?.direction === "up" ? "trend-up" : "trend-down";

  return (
    <div className={`stat-widget stat-${color}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {trend && (
          <div className={`stat-trend ${trendClass}`}>
            {trendIcon}
            <span>{trend.amount}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default StatWidget;