import React from "react";
import "./ListItem.css";

export const ListItem = ({ icon, title, description, action }) => {
  return (
    <div className="list-item-wrapper">
      {icon && <div className="list-item-icon">{icon}</div>}
      <div className="list-item-content">
        <div className="list-item-title">{title}</div>
        {description && <div className="list-item-description">{description}</div>}
      </div>
      {action && <div className="list-item-action">{action}</div>}
    </div>
  );
};
