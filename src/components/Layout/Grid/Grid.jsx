import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Grid.css";

// Main Grid Container
const Grid = ({ children, gap = "1rem", align = "stretch", justify = "start", className }) => (
  <div
    className={classNames("grid", className)}
    style={{
      gap,
      alignItems: align,
      justifyContent: justify,
    }}
  >
    {children}
  </div>
);

// Grid.Row
const Row = ({ children, className, style }) => (
  <div className={classNames("grid-row", className)} style={style}>
    {children}
  </div>
);

// Grid.Col
const Col = ({ span = 1, offset = 0, children, className, style }) => (
  <div
    className={classNames("grid-col", className)}
    style={{
      gridColumn: `${offset ? `span ${offset} / span ${offset + span}` : `span ${span}`}`,
      ...style,
    }}
  >
    {children}
  </div>
);

// Assign subcomponents
Grid.Row = Row;
Grid.Col = Col;

Grid.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  className: PropTypes.string,
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

Col.propTypes = {
  span: PropTypes.number,
  offset: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Grid;
