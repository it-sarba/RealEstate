import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.css";

 export const DropdownMenu = ({ label = "Dropdown", items = [] }) => {
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
    <div className="dropdown" ref={menuRef}>
      <button className="dropdown-button" onClick={toggleMenu}>
        {label}
        <span className="dropdown-icon">{open ? "▲" : "▼"}</span>
      </button>

      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        {items.map((item, index) => (
          <a key={index} href={item.href} className="dropdown-item">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
export default DropdownMenu;