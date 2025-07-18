import React from "react";
import "./SidebarNav.css";

export const SidebarNav = ({ items = [], title = "Navigation" }) => {
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            <a href={item.href} className="sidebar-link">
              {item.icon && <span className="sidebar-icon">{item.icon}</span>}
              <span className="sidebar-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SidebarNav;