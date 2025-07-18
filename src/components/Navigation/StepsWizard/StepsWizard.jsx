import React from "react";
import "./StepsWizard.css";

export const StepsWizard = ({
  steps = [],
  currentStep = 1,
  onStepClick = () => {},
}) => {
  return (
    <div className="steps-wizard">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div
            key={index}
            className={`step-item ${isActive ? "active" : ""} ${
              isCompleted ? "completed" : ""
            }`}
            onClick={() => onStepClick(stepNumber)}
          >
            <div className="step-circle">
              {isCompleted ? "✓" : stepNumber}
            </div>
            <div className="step-label">{step}</div>
            {index !== steps.length - 1 && <div className="step-line" />}
          </div>
        );
      })}
    </div>
  );
};
export default StepsWizard;