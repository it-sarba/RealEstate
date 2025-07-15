import React from "react";
import PropTypes from "prop-types";
import "./Paper.css";

const Paper = ({ children, elevation, className, ...props }) => {
  return (
    <div
      className={`paper paper-elevation-${elevation} ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  className: PropTypes.string,
};

Paper.defaultProps = {
  elevation: 1,
};

export default Paper;
