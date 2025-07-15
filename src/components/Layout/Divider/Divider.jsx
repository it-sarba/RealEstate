import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Divider.css";

const Divider = ({ orientation = "horizontal", label, variant = "solid", className }) => {
  return (
    <div
      className={classNames(
        "divider",
        `divider-${orientation}`,
        `divider-${variant}`,
        { "divider-with-label": label },
        className
      )}
    >
      {label && <span className="divider-label">{label}</span>}
    </div>
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  label: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "dashed"]),
  className: PropTypes.string,
};

export default Divider;
