import React, { useState, useRef, useEffect } from "react";
import "./Popover.css";

export const Popover = ({ trigger, content, position = "bottom" }) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => setOpen(!open);

  const handleClickOutside = (e) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="popover-wrapper" ref={popoverRef}>
      <div className="popover-trigger" onClick={togglePopover}>
        {trigger}
      </div>
      {open && (
        <div className={`popover-box popover-${position}`}>
          <div className="popover-content">{content}</div>
          <div className="popover-arrow" />
        </div>
      )}
    </div>
  );
};
