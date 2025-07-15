import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Box.css";

const Box = ({
  children,
  padding,
  margin,
  background,
  border,
  borderRadius,
  width,
  height,
  className,
  style,
  ...rest
}) => {
  const styles = {
    padding,
    margin,
    background,
    border,
    borderRadius,
    width,
    height,
    ...style,
  };

  return (
    <div className={classNames("box", className)} style={styles} {...rest}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Box;
