import React, { useState, useRef, useEffect } from "react";
import "./MobileNav.css";

export const MobileNav = ({ items = [], logo = "Logo" }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen(!open);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="mobile-nav">
      <div className="mobile-nav-header">
        <span className="mobile-nav-logo">{logo}</span>
        <button className="mobile-nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {open && (
        <nav ref={menuRef} className="mobile-nav-menu">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="mobile-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
