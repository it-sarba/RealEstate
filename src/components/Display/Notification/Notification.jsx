import React from "react";
import "./Notification.css";

export const Notification = ({
  title,
  message,
  type = "info", // success | error | warning | info
  icon,
  onClose,
  actions,
}) => {
  return (
    <div className={`notification notification-${type}`} role="alert">
      {icon && <div className="notification-icon">{icon}</div>}
      <div className="notification-content">
        {title && <strong className="notification-title">{title}</strong>}
        <p className="notification-message">{message}</p>
        {actions && <div className="notification-actions">{actions}</div>}
      </div>
      {onClose && (
        <button
          className="notification-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </div>
  );
};
export default Notification;