import React, { useState } from "react";
import "./TimePicker.css";

const TimePicker = ({ value, onChange }) => {
  const [time, setTime] = useState(value || "");

  const handleChange = (e) => {
    setTime(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="timepicker-wrapper">
      <label className="timepicker-label">Select Time</label>
      <input
        type="time"
        className="timepicker-input"
        value={time}
        onChange={handleChange}
      />
    </div>
  );
};

export default TimePicker;
