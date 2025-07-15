import React from "react";
import "./EmptyState.css";

export const EmptyState = ({
  icon,
  title = "Nothing to show",
  description = "There’s currently no data to display.",
  action,
}) => {
  return (
    <div className="empty-state">
      {icon && <div className="empty-icon">{icon}</div>}
      <h3 className="empty-title">{title}</h3>
      <p className="empty-description">{description}</p>
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
};
