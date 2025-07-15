import React from "react";
import { ProgressRing } from "./ProgressRing";
import { fn } from 'storybook/test';

export default {
  title: "Components/Indicators/ProgressRing",
  component: ProgressRing,
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

export const Default = () => <ProgressRing progress={70} />;

export const CustomSize = () => <ProgressRing radius={40} progress={45} color="#10b981" />;

export const WithLabel = () => <ProgressRing progress={85} label="85% done" />;
