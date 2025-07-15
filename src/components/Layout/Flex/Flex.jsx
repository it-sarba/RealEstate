import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Flex.css";

// Flex Container
const Flex = ({
  children,
  direction = "row",
  wrap = "nowrap",
  justify = "flex-start",
  align = "stretch",
  gap = "0",
  className,
  style,
}) => {
  return (
    <div
      className={classNames("flex", className)}
      style={{
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Flex.Item
const Item = ({ children, grow = 0, shrink = 1, basis = "auto", className, style }) => (
  <div
    className={classNames("flex-item", className)}
    style={{
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      ...style,
    }}
  >
    {children}
  </div>
);

Flex.Item = Item;

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["row", "column", "row-reverse", "column-reverse"]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justify: PropTypes.string,
  align: PropTypes.string,
  gap: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Item.propTypes = {
  children: PropTypes.node,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Flex;
