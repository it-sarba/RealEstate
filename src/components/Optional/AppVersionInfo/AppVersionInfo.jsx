import React from "react";
import "./AppVersionInfo.css";

export const AppVersionInfo = ({
  version = "1.0.0",
  environment = "production",
  buildDate = new Date().toLocaleDateString(),
}) => {
  return (
    <div className="app-version-info">
      <span>Version: <strong>{version}</strong></span>
      <span>Environment: <strong>{environment}</strong></span>
      <span>Build: <strong>{buildDate}</strong></span>
    </div>
  );
};
export default AppVersionInfo;