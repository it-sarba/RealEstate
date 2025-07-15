import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Tabs.css";

const Tabs = ({ tabs, defaultIndex }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabs[activeIndex].content}</div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultIndex: PropTypes.number,
};

Tabs.defaultProps = {
  defaultIndex: 0,
};

export default Tabs;
