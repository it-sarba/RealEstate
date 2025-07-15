import React, { useState, useEffect } from "react";
import { Progressbar } from "./Progressbar";
import { fn } from 'storybook/test';

export default {
  title: "Components/Progressbar",
  component: Progressbar,
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

export const Basic = () => <Progressbar value={30} label="Loading..." />;

export const Colors = () => (
  <>
    <Progressbar value={20} label="Primary" color="primary" />
    <Progressbar value={40} label="Success" color="success" />
    <Progressbar value={60} label="Warning" color="warning" />
    <Progressbar value={80} label="Error" color="error" />
  </>
);

export const WithoutPercentage = () => (
  <Progressbar value={45} label="Processing..." showPercentage={false} />
);

export const Animated = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <Progressbar value={progress} label="Uploading..." />;
};
