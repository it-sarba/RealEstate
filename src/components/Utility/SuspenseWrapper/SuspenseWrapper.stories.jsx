import React, { lazy } from "react";
import { SuspenseWrapper } from "./SuspenseWrapper";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/SuspenseWrapper",
  component: SuspenseWrapper,
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

const LazyComponent = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ default: () => <div>Loaded Lazy Component!</div> }), 1500)
  )
);

export const Default = () => (
  <SuspenseWrapper>
    <LazyComponent />
  </SuspenseWrapper>
);

export const WithCustomFallback = () => (
  <SuspenseWrapper fallback={<div style={{ color: "#3b82f6" }}>Custom Loading UI...</div>}>
    <LazyComponent />
  </SuspenseWrapper>
);
