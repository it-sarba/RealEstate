import React, { useState, useEffect, useRef } from "react";
import "./RangeSlider.css";

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label = "Select Value",
}) => {
  const [range, setRange] = useState(value || min);
  const rangeRef = useRef(null);

  useEffect(() => {
    if (rangeRef.current) {
      const percentage = ((range - min) / (max - min)) * 100;
      rangeRef.current.style.background = `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
    }
  }, [range, min, max]);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setRange(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className="range-slider-wrapper">
      <label className="range-slider-label">{label}</label>
      <input
        type="range"
        className="range-slider-input"
        min={min}
        max={max}
        step={step}
        value={range}
        onChange={handleChange}
        ref={rangeRef}
      />
      <div className="range-slider-value">{range}</div>
    </div>
  );
};

export default RangeSlider;
