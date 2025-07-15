import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ menuItems = [], collapsed: defaultCollapsed = false }) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <span className="sidebar-logo">{collapsed ? "🔰" : "Demo"}</span>
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, idx) => (
          <li className="sidebar-item" key={idx}>
            <span className="sidebar-icon">{item.icon}</span>
            {!collapsed && <span className="sidebar-label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
