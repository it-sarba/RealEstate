import React, { useState } from "react";
import { StepsWizard } from "./StepsWizard";
import { fn } from 'storybook/test';

export default {
  title: "Components/StepsWizard",
  component: StepsWizard,
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

const Template = (args) => {
  const [step, setStep] = useState(args.currentStep || 1);
  return (
    <StepsWizard
      {...args}
      currentStep={step}
      onStepClick={(num) => setStep(num)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  steps: ["Account", "Details", "Confirm", "Finish"],
  currentStep: 1,
};
