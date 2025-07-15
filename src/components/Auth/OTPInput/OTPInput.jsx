import React, { useRef } from "react";
import "./OTPInput.css";

export const OTPInput = ({ length = 6, onChange }) => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!/^[0-9]?$/.test(val)) return;

    const values = Array.from(inputsRef.current).map((input) => input.value);
    values[index] = val;
    onChange?.(values.join(""));

    if (val && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, length).split("");
    pasted.forEach((char, i) => {
      if (/^[0-9]$/.test(char) && inputsRef.current[i]) {
        inputsRef.current[i].value = char;
      }
    });
    onChange?.(pasted.join(""));
    e.preventDefault();
  };

  return (
    <div className="otp-input-wrapper" onPaste={handlePaste}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="otp-box"
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};
