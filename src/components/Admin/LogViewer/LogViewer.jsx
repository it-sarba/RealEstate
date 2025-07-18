import React from "react";
import "./LogViewer.css";

export const LogViewer = ({ logs = [] }) => {
  return (
    <div className="log-viewer">
      {logs.map((log, index) => (
        <div key={index} className={`log-entry ${log.level || "info"}`}>
          <span className="log-timestamp">{log.timestamp}</span>
          <span className="log-level">[{log.level.toUpperCase()}]</span>
          <span className="log-message">{log.message}</span>
        </div>
      ))}
    </div>
  );
};
export default LogViewer;