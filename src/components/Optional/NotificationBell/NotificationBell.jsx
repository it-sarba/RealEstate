import React from "react";
import { FaBell } from "react-icons/fa";
import "./NotificationBell.css";

export const NotificationBell = ({ count = 0, onClick }) => {
  return (
    <div className="notification-bell" onClick={onClick}>
      <FaBell className="bell-icon" />
      {count > 0 && <span className="notification-count">{count}</span>}
    </div>
  );
};
