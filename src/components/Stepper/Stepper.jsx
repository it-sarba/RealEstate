import React from "react";
import "./Stepper.css";

const Stepper = ({ steps = [], currentStep = 0 }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div className="stepper-step" key={index}>
            <div
              className={`stepper-circle ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
            >
              {isCompleted ? "✓" : index + 1}
            </div>
            <div className="stepper-label">{step}</div>
            {index < steps.length - 1 && (
              <div
                className={`stepper-line ${
                  isCompleted ? "stepper-line-completed" : ""
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
