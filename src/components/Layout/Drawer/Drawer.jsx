import React from "react";
import "./Drawer.css";

const Drawer = ({ isOpen, onClose, position = "left", children }) => {
  return (
    <>
      {isOpen && <div className="drawer-backdrop" onClick={onClose} />}
      <div className={`drawer drawer-${position} ${isOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={onClose}>
          &times;
        </button>
        <div className="drawer-content">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
