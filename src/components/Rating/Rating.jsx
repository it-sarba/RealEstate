import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ max = 5, value = 0, onChange, size = 32 }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="rating" style={{ fontSize: `${size}px` }}>
      {Array.from({ length: max }, (_, i) => {
        const isFilled = hover !== null ? i < hover : i < value;

        return (
          <span
            key={i}
            className={`star ${isFilled ? "filled" : ""}`}
            onClick={() => onChange(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
            title={`Rate ${i + 1} star${i === 0 ? "" : "s"}`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
