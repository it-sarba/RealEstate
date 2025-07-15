import React, { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/ErrorBoundary",
  component: ErrorBoundary,
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

const BuggyComponent = () => {
  const [trigger, setTrigger] = useState(false);
  if (trigger) {
    throw new Error("Test error triggered!");
  }
  return <button onClick={() => setTrigger(true)}>Trigger Error</button>;
};

export const Default = () => (
  <ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>
);

export const WithCustomFallback = () => (
  <ErrorBoundary
    fallback={({ error, reset }) => (
      <div style={{ color: "#dc2626", textAlign: "center" }}>
        <h2>Custom Error UI</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Reset</button>
      </div>
    )}
  >
    <BuggyComponent />
  </ErrorBoundary>
);
