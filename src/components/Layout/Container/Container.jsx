import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Container.css";

const Container = ({ children, className, maxWidth = "1200px", padding = "1rem", ...props }) => {
  return (
    <div
      className={classNames("container", className)}
      style={{ maxWidth, paddingLeft: padding, paddingRight: padding }}
      {...props}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
};

export default Container;
