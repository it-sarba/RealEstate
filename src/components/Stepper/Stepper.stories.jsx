import React, { useState } from "react";
import Stepper from "./Stepper";
import { fn } from 'storybook/test';

export default {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

export const Default = () => {
  const steps = ["Login", "Shipping", "Payment", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div style={{ padding: "40px" }}>
      <Stepper steps={steps} currentStep={currentStep} />
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};
