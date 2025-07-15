import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

const Accordion = ({ title, children, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <div className="accordion">
      <button
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  defaultOpen: false,
};

export default Accordion;
