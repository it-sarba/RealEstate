import React, { useEffect, useState } from "react";
import "./TourGuide.css";

export const TourGuide = ({ steps = [], onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const step = steps[currentStep];

  useEffect(() => {
    if (!step) return;

    const target = document.querySelector(step.target);
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const tooltipX = rect.left + window.scrollX;
    const tooltipY = rect.top + window.scrollY - 10;

    setPosition({ top: tooltipY, left: tooltipX });
  }, [currentStep, steps]);

  const next = () => {
    if (currentStep + 1 < steps.length) {
      setCurrentStep((s) => s + 1);
    } else {
      onFinish?.();
    }
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const skip = () => {
    onFinish?.();
  };

  if (!step) return null;

  return (
    <>
      <div className="tour-backdrop" />
      <div className="tour-tooltip" style={{ top: position.top, left: position.left }}>
        <div className="tour-content">
          <p>{step.content}</p>
          <div className="tour-controls">
            {currentStep > 0 && <button onClick={prev}>Back</button>}
            <button onClick={next}>{currentStep + 1 === steps.length ? "Finish" : "Next"}</button>
            <button onClick={skip}>Skip</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TourGuide;