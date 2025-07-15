import React, { useEffect } from "react";
import "./Dialog.css";

export const Dialog = ({
  isOpen,
  onClose,
  title = "Dialog Title",
  description = "",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div
        className="dialog-box"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="dialog-title">{title}</h3>
        {description && (
          <p id="dialog-description" className="dialog-description">{description}</p>
        )}
        <div className="dialog-actions">
          <button className="dialog-btn cancel" onClick={onClose}>{cancelText}</button>
          <button className="dialog-btn confirm" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
};
