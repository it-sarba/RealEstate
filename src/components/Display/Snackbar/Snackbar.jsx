import React, { useEffect } from "react";
import "./Snackbar.css";

export const Snackbar = ({
  open,
  message,
  type = "info", // 'success', 'error', 'warning', 'info'
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className={`snackbar snackbar-${type}`} role="status" aria-live="polite">
      {message}
      <button className="snackbar-close" onClick={onClose} aria-label="Close">&times;</button>
    </div>
  );
};
