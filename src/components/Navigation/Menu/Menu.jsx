import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";

export const Menu = ({ label = "Menu", items = [] }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
    <div className="menu" ref={menuRef}>
      <button className="menu-button" onClick={toggleMenu}>
        {label}
      </button>
      {open && (
        <ul className="menu-dropdown" role="menu">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="menu-item" role="menuitem">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
