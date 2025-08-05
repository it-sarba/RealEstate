import React from "react";
import PropTypes from "prop-types";
import "./LogViewer.css";


export const LogViewer = ({ 
  logs = [], 
  maxHeight = "400px",
  showTimestamp = true,
  showLevel = true,
  className = "",
  emptyMessage = "No logs available"
}) => {
  if (logs.length === 0) {
    return (
      <div className={`log-viewer log-viewer--empty ${className}`}>
        <div className="log-empty-message">{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div 
      className={`log-viewer ${className}`} 
      style={{ maxHeight }}
      role="log"
      aria-label="Application logs"
    >
      {logs.map((log, index) => (
        <div 
          key={index} 
          className={`log-entry log-entry--${log.level || "info"}`}
          role="listitem"
        >
          {showTimestamp && (
            <span className="log-timestamp" title="Timestamp">
              {log.timestamp}
            </span>
          )}
          {showLevel && (
            <span className="log-level" title={`Log level: ${log.level}`}>
              [{(log.level || "info").toUpperCase()}]
            </span>
          )}
          <span className="log-message" title={log.message}>
            {log.message}
          </span>
        </div>
      ))}
    </div>
  );
};

LogViewer.propTypes = {
  /** Array of log objects containing timestamp, level, and message */
  logs: PropTypes.arrayOf(
    PropTypes.shape({
      /** ISO timestamp or formatted date string */
      timestamp: PropTypes.string,
      /** Log severity level: 'info', 'warning', 'error', or 'debug' */
      level: PropTypes.oneOf(['info', 'warning', 'error', 'debug']),
      /** The log message content */
      message: PropTypes.string.isRequired,
    })
  ),
  /** Maximum height of the log container before scrolling */
  maxHeight: PropTypes.string,
  /** Whether to display timestamps */
  showTimestamp: PropTypes.bool,
  /** Whether to display log levels */
  showLevel: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Message to show when no logs are available */
  emptyMessage: PropTypes.string,
};

export default LogViewer;