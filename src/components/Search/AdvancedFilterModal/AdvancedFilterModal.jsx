import React, { useState } from "react";
import "./AdvancedFilterModal.css";

 export const AdvancedFilterModal = ({
  isOpen,
  onClose,
  onApply,
  filters = [],
}) => {
  const [values, setValues] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, value) => {
    const current = values[name] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    handleChange(name, updated);
  };

  const resetFilters = () => {
    setValues({});
  };

  if (!isOpen) return null;

  return (
    <div className="af-modal-backdrop">
      <div className="af-modal">
        <h2 className="af-title">Advanced Filters</h2>

        <div className="af-content">
          {filters.map((filter) => (
            <div key={filter.name} className="af-section">
              <h4 className="af-section-title">{filter.label}</h4>

              {filter.type === "checkbox" && (
                <div className="af-options">
                  {filter.options.map((opt) => (
                    <label key={opt.value} className="af-option">
                      <input
                        type="checkbox"
                        checked={
                          values[filter.name]?.includes(opt.value) || false
                        }
                        onChange={() =>
                          handleCheckboxChange(filter.name, opt.value)
                        }
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              )}

              {filter.type === "radio" && (
                <div className="af-options">
                  {filter.options.map((opt) => (
                    <label key={opt.value} className="af-option">
                      <input
                        type="radio"
                        name={filter.name}
                        value={opt.value}
                        checked={values[filter.name] === opt.value}
                        onChange={() => handleChange(filter.name, opt.value)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              )}

              {filter.type === "text" && (
                <input
                  type="text"
                  className="af-text-input"
                  placeholder={filter.placeholder || ""}
                  value={values[filter.name] || ""}
                  onChange={(e) =>
                    handleChange(filter.name, e.target.value)
                  }
                />
              )}
            </div>
          ))}
        </div>

        <div className="af-footer">
          <button className="af-btn af-reset" onClick={resetFilters}>
            Reset
          </button>
          <button className="af-btn af-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="af-btn af-apply"
            onClick={() => onApply(values)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdvancedFilterModal;