import React from "react";
import "./StatCard.css";

export const StatCard = ({
  title,
  value,
  icon,
  delta,
  description,
  trend = "neutral", // 'up' | 'down' | 'neutral'
  color = "default", // 'default' | 'success' | 'danger' | 'warning'
}) => {
  return (
    <div className={`stat-card stat-${color}`}>
      <div className="stat-header">
        <div className="stat-title">{title}</div>
        {icon && <div className="stat-icon">{icon}</div>}
      </div>
      <div className="stat-value">{value}</div>
      {delta && (
        <div className={`stat-delta stat-trend-${trend}`}>
          {trend === "up" && "▲"}
          {trend === "down" && "▼"}
          {trend === "neutral" && "—"} {delta}
        </div>
      )}
      {description && <div className="stat-description">{description}</div>}
    </div>
  );
};
