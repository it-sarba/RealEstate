import React from "react";
import PropTypes from "prop-types";
import "./Spacer.css";

const Spacer = ({ size = "md", axis = "vertical" }) => {
  return <div className={`spacer spacer-${axis} spacer-${size}`} />;
};

Spacer.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  axis: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default Spacer;
