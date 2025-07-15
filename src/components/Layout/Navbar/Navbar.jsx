import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({
  logo = "MyApp",
  links = [],
  showSearch = false,
  showActions = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">{logo}</div>
        </div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            {links.map((link, idx) => (
              <li key={idx} className="navbar-link">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="navbar-search"
            />
          )}

          {showActions && (
            <div className="navbar-actions">
              <button className="btn btn-outline">Login</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
