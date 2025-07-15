// src/components/SectionTitle/SectionTitle.jsx
import React from "react";
import PropTypes from "prop-types";
import "./SectionTitle.css";

const SectionTitle = ({ title, subtitle, align = "left", variant = "default" }) => {
  return (
    <div className={`section-title ${align} ${variant}`}>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  variant: PropTypes.oneOf(["default", "accent", "muted"]),
};

export default SectionTitle;
